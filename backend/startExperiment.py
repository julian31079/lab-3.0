import threading
import time

from Models.calculoCelulas import CalculoCelulas as cell
from Models.calculoLuz import CalculoLuz as light
from Models.calculoNivel import CalculoNivel as level
from Models.calculoTemp import CalculoTemp as temp
from Models.ljm import Ljm
class SingletonMeta(type):
    _instances = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            instance = super().__call__(*args, **kwargs)
            cls._instances[cls] = instance
        return cls._instances[cls]
class StartExp(threading.Thread, metaclass=SingletonMeta):
    def initValues(self,threadName,init,mongo):
        self.init=init
        self.ljm=Ljm()
        self.valueT1=0
        self.valueT2=0
        self.valueT3=0
        self.valueL1=0
        self.valueL2=0
        self.valueL3=0
        self.valueC1=0
        self.valueC2=0
        self.valueC3=0
        self.valuepH1=0
        self.valuepH2=0
        self.valuepH3=0
        self.valueoD1=0
        self.valueoD2=0
        self.valueoD3=0
        self.reg=mongo.db.reg
        self.exp=mongo.db.exp
        self.idExp=''
        self.res=ord('R')
        threading.Thread.__init__(self,name=threadName,target=StartExp.run)

        self.time=self.init['time']*3600
        self.idExp=str(self.reg.insert(self.init))
        
        if(self.init['numFBR']==1):
            self.c1=cell(self.init['cells1'])
            self.l1=light(self.init['light1'],self.init['h1'],self.init['m1'])
            self.le1=level(self.init['level1'])
            #self.oD1=oD()
            #self.pH1=pH(self.init['pH1'])
            self.t1=temp(self.init['temp1'])
        elif(self.init['numFBR']==2):
            self.c1=cell(self.init['cells1'])
            self.l1=light(self.init['light1'],self.init['h1'],self.init['m1'])
            self.le1=level(self.init['level1'])
            #self.oD1=oD()
            #self.pH1=pH(self.init['pH1'])
            self.t1=temp(self.init['temp1'])

            self.c2=cell(self.init['cells2'])
            self.l2=light(self.init['light2'],self.init['h2'],self.init['m2'])
            self.le2=level(self.init['level2'])
            #self.oD2=oD()
            #self.pH2=pH(self.init['pH2'])
            self.t2=temp(self.init['temp2'])
        elif(self.init['numFBR']==3):
            self.c1=cell(self.init['cells1'])
            self.l1=light(self.init['light1'],self.init['h1'],self.init['m1'])
            self.le1=level(self.init['level1'])
            #self.oD1=oD()
            #self.pH1=pH(self.init['pH1'])
            self.t1=temp(self.init['temp1'])

            self.c2=cell(self.init['cells2'])
            self.l2=light(self.init['light2'],self.init['h2'],self.init['m2'])
            self.le2=level(self.init['level2'])
            #self.oD2=oD()
            #self.pH2=pH(self.init['pH2'])
            self.t2=temp(self.init['temp2'])
            
            self.c3=cell(self.init['cells3'])
            self.l3=light(self.init['light3'],self.init['h3'],self.init['m3'])
            self.le3=level(self.init['level3'])
            #self.oD3=oD()
            #self.pH3=pH(self.init['pH3'])
            self.t3=temp(self.init['temp3'])
    def getActualValues(self):
        expNow={"idReg":self.idExp,
                "passingTime":self.momentTime,
                "totalTime":self.time,
                "t1":self.valueT1,
                "t2":self.valueT2,
                "t3":self.valueT3,
                "l1":self.valueL1,
                "l2":self.valueL2,
                "l3":self.valueL3,
                "c1":self.valueC1,
                "c2":self.valueC2,
                "c3":self.valueC3,
                "pH1":self.valuepH1,
                "pH2":self.valuepH2,
                "pH3":self.valuepH3,
                "oD1":self.valueoD1,
                "oD2":self.valueoD2,
                "oD3":self.valueoD3,
                }
        return expNow
    def temperatureControl(self,cont):
        valCard=['AIN0','AIN1','AIN2']
        temp=0
        if(cont==0):
            temp=self.t1.calculateTemp(self.ljm.readValue(valCard[cont]))
            #Controlling temp with fan.... etc below
        if(cont==1):
            temp=self.t2.calculateTemp(self.ljm.readValue(valCard[cont]))
            #Controlling temp with fan.... etc below
        if(cont==2):
            temp=self.t3.calculateTemp(self.ljm.readValue(valCard[cont]))
            #Controlling temp with fan.... etc below
        
        return temp
    def irradianceControl(self,cont):
        valCard=['AIN3','AIN4','AIN5']
        ir=0
        if(cont==0):
            ir=self.l1.calculateLight(self.ljm.readValue(valCard[cont]))
            #Controlling temp with fan.... etc below
        if(cont==1):
            ir=self.l2.calculateLight(self.ljm.readValue(valCard[cont]))
            #Controlling temp with fan.... etc below
        if(cont==2):
            ir=self.l3.calculateLight(self.ljm.readValue(valCard[cont]))
            #Controlling temp with fan.... etc below
        
        return ir
    def cellsControl(self,cont):
        valCard=['AIN9','AIN10','AIN11']
        c=0
        if(cont==0):
            c=self.c1.calculateCells(self.ljm.readValue(valCard[cont]))
            #Controlling temp with fan.... etc below
        if(cont==1):
            c=self.c2.calculateCells(self.ljm.readValue(valCard[cont]))
            #Controlling temp with fan.... etc below
        if(cont==2):
            c=self.c3.calculateCells(self.ljm.readValue(valCard[cont]))
            #Controlling temp with fan.... etc below       
        return c
    def pHControl(self,cont):
        pH=0
        if(cont==0):
            self.ljm.initI2C(9,8,1)
            self.ljm.sendValueI2C(self.res)
            time.sleep(0.9)
            self.ljm.readValueI2C()
            pH=self.ljm.readValueI2C()
        if(cont==1):
            self.ljm.initI2C(9,8,2)
            self.ljm.sendValueI2C(self.res)
            time.sleep(0.9)
            self.ljm.readValueI2C()
            pH=self.ljm.readValueI2C()
        if(cont==2):
            self.ljm.initI2C(9,8,3)
            self.ljm.sendValueI2C(self.res)
            time.sleep(0.9)
            self.ljm.readValueI2C()
            pH=self.ljm.readValueI2C()
        return pH
    def oDControl(self,cont):
        od=0
        if(cont==0):
            self.ljm.initI2C(11,10,1)
            self.ljm.sendValueI2C(self.res)
            time.sleep(0.9)
            self.ljm.readValueI2C()
            od=self.ljm.readValueI2C()
        if(cont==1):
            self.ljm.initI2C(11,10,2)
            self.ljm.sendValueI2C(self.res)
            time.sleep(0.9)
            self.ljm.readValueI2C()
            od=self.ljm.readValueI2C()
        if(cont==2):
            self.ljm.initI2C(11,10,3)
            self.ljm.sendValueI2C(self.res)
            time.sleep(0.9)
            self.ljm.readValueI2C()
            od=self.ljm.readValueI2C()
        return od
    
    def timeRemainig(self,timeS):
        state=False
        if(timeS<=self.time):
            #print('Time remaining: '+str(self.time-timeS))
            state=True
        return state


    def run(self):
        self.momentTime=0
        dbTime=0
        while(StartExp.timeRemainig(self,self.momentTime)):
            ts=time.time()
            if(self.init['numFBR']==1):
                self.valueT1=StartExp.temperatureControl(self,0)
                self.valueL1=StartExp.irradianceControl(self,0)
                self.valueL1=StartExp.irradianceControl(self,0)
                self.valueC1=StartExp.cellsControl(self,0)
                self.valuepH1=StartExp.pHControl(self,0)
                self.valueoD1=StartExp.oDControl(self,0)
            if(self.init['numFBR']==2):
                self.valueT1=StartExp.temperatureControl(self,0)
                self.valueT2=StartExp.temperatureControl(self,1)
                self.valueL1=StartExp.irradianceControl(self,0)
                self.valueL2=StartExp.irradianceControl(self,1)
                self.valueC1=StartExp.cellsControl(self,0)
                self.valueC2=StartExp.cellsControl(self,1)
                self.valuepH1=StartExp.pHControl(self,0)
                self.valuepH2=StartExp.pHControl(self,1)
                self.valueoD1=StartExp.oDControl(self,0)
                self.valueoD2=StartExp.oDControl(self,1)
            if(self.init['numFBR']==3):
                self.valueT1=StartExp.temperatureControl(self,0)
                self.valueT2=StartExp.temperatureControl(self,1)
                self.valueT3=StartExp.temperatureControl(self,2)
                self.valueL1=StartExp.irradianceControl(self,0)
                self.valueL2=StartExp.irradianceControl(self,1)
                self.valueL3=StartExp.irradianceControl(self,2)
                self.valueC1=StartExp.cellsControl(self,0)
                self.valueC2=StartExp.cellsControl(self,1)
                self.valueC3=StartExp.cellsControl(self,2)
                self.valuepH1=StartExp.pHControl(self,0)
                self.valuepH2=StartExp.pHControl(self,1)
                self.valuepH3=StartExp.pHControl(self,2)
                self.valueoD1=StartExp.oDControl(self,0)
                self.valueoD2=StartExp.oDControl(self,1)
                self.valueoD3=StartExp.oDControl(self,2)
            tf=time.time()
            self.momentTime=self.momentTime+(tf-ts)
            dbTime=dbTime+(tf-ts) 
            if(dbTime>=60):
                expNow={"idReg":self.idExp,
                "t1":self.valueT1,
                "t2":self.valueT2,
                "t3":self.valueT3,
                "l1":self.valueL1,
                "l2":self.valueL2,
                "l3":self.valueL3,
                "c1":self.valueC1,
                "c2":self.valueC2,
                "c3":self.valueC3,
                "pH1":self.valuepH1,
                "pH2":self.valuepH2,
                "pH3":self.valuepH3,
                "oD1":self.valueoD1,
                "oD2":self.valueoD2,
                "oD3":self.valueoD3,
                }
                self.exp.insert(expNow)
                dbTime=0
                #Write on db each minute


                

        

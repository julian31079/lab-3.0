import threading
import time

from Models.calculoCelulas import CalculoCelulas as cell
from Models.calculoLuz import CalculoLuz as light
from Models.calculoNivel import CalculoNivel as level
from Models.calculoTemp import CalculoTemp as temp
from Models.ljm import Ljm
class StartExp(threading.Thread):
    def __init__(self,threadName,init,mongo):
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
        self.reg=mongo.db.reg
        self.exp=mongo.db.exp
        self.idExp=''
        threading.Thread.__init__(self,name=threadName,target=StartExp.run)
    def initValues(self):
        
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
    def timeRemainig(self,timeS):
        state=False
        if(timeS<=self.time):
            print('Time remaining: '+str(self.time-timeS))
            state=True
        return state
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

    def run(self):
        StartExp.initValues(self)
        momentTime=0
        dbTime=0
        while(StartExp.timeRemainig(self,momentTime)):
            #Control the temperature of each FBR
            if(self.init['numFBR']==1):
                self.valueT1=StartExp.temperatureControl(self,0)
                self.valueL1=StartExp.irradianceControl(self,0)
                self.valueL1=StartExp.irradianceControl(self,0)
                self.valueC1=StartExp.cellsControl(self,0)
            if(self.init['numFBR']==2):
                self.valueT1=StartExp.temperatureControl(self,0)
                self.valueT2=StartExp.temperatureControl(self,1)
                self.valueL1=StartExp.irradianceControl(self,0)
                self.valueL2=StartExp.irradianceControl(self,1)
                self.valueC1=StartExp.cellsControl(self,0)
                self.valueC2=StartExp.cellsControl(self,1)
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
            time.sleep(1)
            momentTime=momentTime+1
            dbTime=dbTime+1
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
                }
                self.exp.insert(expNow)
                dbTime=0

                #Write on db each minute


                

        

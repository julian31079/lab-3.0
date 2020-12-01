import threading
import time

from Models.calculoCelulas import CalculoCelulas as cell
from Models.calculoLuz import CalculoLuz as light
from Models.calculoNivel import CalculoNivel as level
from Models.calculoOd import CalculoOd as oD
from Models.calculoPh import CalculoPh as pH
from Models.calculoTemp import CalculoTemp as temp
from Models.ljm import Ljm
class StartExp(threading.Thread):
    def __init__(self,threadName='',init=''):
        self.init=init
        self.ljm=Ljm()
        threading.Thread.__init__(self,name=threadName,target=StartExp.run)
    def initValues(self):
        
        self.time=self.init['time']*60
        if(self.init['numFBR']==1):
            self.c1=cell(self.init['cells1'])
            self.l1=light(self.init['light1'])
            self.le1=level(self.init['level1'])
            self.oD1=oD()
            self.pH1=pH(self.init['pH1'])
            self.t1=temp(self.init['temp1'])

        elif(self.init['numFBR']==2):
            self.c1=cell(self.init['cells1'])
            self.l1=light(self.init['light1'])
            self.le1=level(self.init['level1'])
            self.oD1=oD()
            self.pH1=pH(self.init['pH1'])
            self.t1=temp(self.init['temp1'])

            self.c2=cell(self.init['cells2'])
            self.l2=light(self.init['light2'])
            self.le2=level(self.init['level2'])
            self.oD2=oD()
            self.pH2=pH(self.init['pH2'])
            self.t2=temp(self.init['temp2'])
        elif(self.init['numFBR']==3):
            self.c1=cell(self.init['cells1'])
            self.l1=light(self.init['light1'])
            self.le1=level(self.init['level1'])
            self.oD1=oD()
            self.pH1=pH(self.init['pH1'])
            self.t1=temp(self.init['temp1'])

            self.c2=cell(self.init['cells2'])
            self.l2=light(self.init['light2'])
            self.le2=level(self.init['level2'])
            self.oD2=oD()
            self.pH2=pH(self.init['pH2'])
            self.t2=temp(self.init['temp2'])
            
            self.c3=cell(self.init['cells3'])
            self.l3=light(self.init['light3'])
            self.le3=level(self.init['level3'])
            self.oD3=oD()
            self.pH3=pH(self.init['pH3'])
            self.t3=temp(self.init['temp3'])
    def timeRemainig(self,timeS):
        state=False
        if(timeS<=self.time):
            state=True
        return state
    def temperatureControl1(self):
        return self.ljm.readValue('AIN0')
    def run(self):
        StartExp.initValues(self)
        #momentTime=0
        #while(StartExp.timeRemainig(self,momentTime)):
            #if(self.init['numFBR']==1):
        contador=0
        print('llegue a run')
        while(contador<=10):
            print(StartExp.temperatureControl1(self))
            time.sleep(1)
            contador=contador+1

                

        

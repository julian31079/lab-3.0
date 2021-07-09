class Runge:
    def __init__(self,y=0,ys=0,z1=0,z2=0,z3=0,
                h=1,it=10,
                l0=1,l1=1,l2=1,l3=1,
                ysList=[1],z1List=[],z2List=[],z3List=[]):
        self.y=y
        self.ys=ys
        self.z1=z1
        self.z2=z2
        self.z3=z3
        self.h=h
        self.it=it
        self.l0=l0
        self.l1=l1
        self.l2=l2
        self.l3=l3
        self.ysList=ysList
        self.z1List=z1List
        self.z2List=z2List
        self.z3List=z3List
    def fys(self,y,i):
        value=self.z1List[i]+self.l3*(y-self.ysList[i])
        self.ysList.append(value)
        return value
    def fz1(self,y,i):
        value=self.z2List[i]+self.l2*(y-self.ysList[i])
        self.z1List.append(value)
        return value
    def fz2(self,y,i):
        value=self.z3List[i]+self.l1*(y-self.ysList[i])
        self.z2List.append(value)
        return value
    def fz3(self,y,i):
        value=self.l0*(y-self.ysList[i])
        self.z3List.append(value)
        return value
    def pruebas(self):
        rand=[i for i in range(0,self.it)] 
        for i in range(0,self.it):
            self.fz3(rand[i],i)
            self.fz2(rand[i],i)
            self.fz1(rand[i],i)
            self.fys(rand[i],i)
        print(self.ysList)
        
rg=Runge()
rg.pruebas()


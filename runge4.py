class Runge:
    def __init__(self,y=0,ys=0,z1=0,z2=0,z3=0,
                h=1,it=10,
                l0=0,l1=0,l2=0,l3=0,
                ysList=[],z1List=[],z2List=[],z3List=[]):
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

    def pruebas(self):
        for i in range(0,self.it):
            pass
rg=Runge()


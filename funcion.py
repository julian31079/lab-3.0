import numpy as np
class Funcion:
    def __init__(self,k1=0,k2=0,k3=0,opc=0,initValue=None):
        if initValue is None:
            self.value=np.array([0])
        else:
            self.value=np.array([initValue])
        self.opc=opc
        self.k1=k1
        self.k2=k2
        self.k3=k3
    def f(self,ys,z1,z2,z3,y):
        if(self.opc==1):
            return  


ys=Funcion()

print(ys.value)
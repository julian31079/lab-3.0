import numpy as np
import matplotlib.pyplot as plt
x=np.array([])
y=np.array([])
#dy/dx=-2*x**3 + 12*x**2 - 20*x + 8.5
def f(x,y):
    return -2*x**3 + 12*x**2 - 20*x + 8.5

#Condiciones iniciales x=0 y=1
x=np.append(x,0)
y=np.append(y,1)
salto=0.1

for i in range(0,40):
    x=np.append(x,x[i]+salto)
    y=np.append(y,y[i]+f(x[i],y[i])*salto)
plt.plot(x,y)
plt.show()






import numpy as np
import matplotlib.pyplot as plt

salto=0.1
x=np.array([])
y=np.array([])
k1=0
k2=0

#dy/dx=
def f(x,y):
    return -2*x**3 + 12*x**2 - 20*x + 8.5

#Condiciones iniciales
x=np.append(x,0)
y=np.append(y,1)
for i in range(1,50):
    k1=f(x[i-1],y[i-1])
    k2=f(x[i-1]+salto,y[i-1]+k1*salto)
    y=np.append(y,y[i-1]+(0.5*k1+0.5*k2)*salto)
    x=np.append(x,x[i-1]+salto)

print(y)
plt.plot(x,y)
plt.show()
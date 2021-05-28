import numpy as np
import matplotlib.pyplot as plt
salto=0.1
x=np.array([0])
y=np.array([0])
k1=0
k2=0
k3=0
k4=0
def f(x,y):
    return -2*x**3 + 12*x**2 - 20*x + 8.5

for i in range(1,50):
    k1=salto*f(x[i-1],y[i-1])
    k2=salto*f(x[i-1]+0.5*salto,y[i-1]+0.5*k1)
    k3=salto*f(x[i-1]+0.5*salto,y[i-1]+0.5*k2)
    k4=salto*f(x[i-1]+salto,y[i-1]+k3)
    y=np.append(y,y[i-1]+(1/6)*(k1+2*k2+2*k3+k4))
    x=np.append(x,x[i-1]+salto)
print(y)
plt.plot(x,y)
plt.show()
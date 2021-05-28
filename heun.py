import numpy as np
import matplotlib.pyplot as plt
import math
salto=1
x=np.array([])
y=np.array([])
dy=np.array([])
deltay=np.array([])
xn=np.array([])
yn=np.array([])
dyn=np.array([])
dyp=np.array([])
yc=np.array([])
#dy/dx=
def f(x,y):
    return 4*math.e**(0.8*x) -0.5*y
#Condiciones iniciales
x=np.append(x,0)
y=np.append(y,2)
dy=np.append(dy,f(x[0],y[0]))
deltay=np.append(deltay,dy[0]*salto)
xn=np.append(xn,x[0]+salto)
yn=np.append(yn,y[0]+deltay[0])
dyn=np.append(dyn,f(xn[0],yn[0]))
dyp=np.append(dyp,(dy[0]+dyn[0])/2)
yc=np.append(yc,dyp[0]*salto)

for i in range(1,5):
    x=np.append(x,x[i-1]+salto)
    y=np.append(y,y[i-1]+yc[i-1])
    dy=np.append(dy,f(x[i],y[i]))
    deltay=np.append(deltay,dy[i]*salto)
    xn=np.append(xn,x[i]+salto)
    yn=np.append(yn,y[i]+deltay[i])
    dyn=np.append(dyn,f(xn[i],yn[i]))
    dyp=np.append(dyp,(dy[i]+dyn[i])/2)
    yc=np.append(yc,dyp[i]*salto)
print(y)
plt.plot(x,y)
plt.show()
from ljm import Ljm
import time
lj=Ljm()
lj.initUART(10,11)
lj.readValueUART()
values=[ord('R'),13]
lj.sendValueUART(values)
time.sleep(0.8)
res=lj.readValueUART()
print(res)
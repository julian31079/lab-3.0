from labjack import ljm
class Ljm:
    def __init__(self):
        self.handle=''
        try:
            self.handle=ljm.openS('ANY','ANY','ANY')
        except:
            print('Connection error')
    def readValue(self,name):
        res=ljm.eReadName(self.handle,name)
        return res
    def initI2C(self,sda,scl,addr):
        ljm.eWriteName(self.handle, "I2C_SDA_DIONUM", sda)
        ljm.eWriteName(self.handle, "I2C_SCL_DIONUM", scl)
        ljm.eWriteName(self.handle, "I2C_SPEED_THROTTLE", 65516)
        ljm.eWriteName(self.handle, "I2C_OPTIONS", 0)
        ljm.eWriteName(self.handle, "I2C_SLAVE_ADDRESS",addr)
        

    def sendValueI2C(self, data):
        aBytes = [data]
        numBytes=len(aBytes)
        ljm.eWriteName(self.handle, "I2C_NUM_BYTES_TX", numBytes)
        ljm.eWriteName(self.handle, "I2C_NUM_BYTES_RX", 0)


        ljm.eWriteNameByteArray(self.handle, "I2C_DATA_TX", numBytes, aBytes)
        ljm.eWriteName(self.handle, "I2C_GO", 1)
    def readValueI2C(self):
        numBytes= 6
        ljm.eWriteName(self.handle, "I2C_NUM_BYTES_TX", 0)
        ljm.eWriteName(self.handle, "I2C_NUM_BYTES_RX", numBytes)
        aBytes=ljm.eReadNameByteArray(self.handle, "I2C_DATA_RX", numBytes)
        ljm.eWriteName(self.handle, "I2C_GO", 1)
        resp=''
        for i in aBytes:
            if(i>1 and i<255):
                resp=resp+''.join(chr(i))
        if(resp==''):
            return 0
        return float(resp)
        

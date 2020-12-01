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
    

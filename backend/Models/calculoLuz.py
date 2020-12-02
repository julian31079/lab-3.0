class CalculoLuz:
    def __init__(self,light,h,m):
        self.objLight=light
        self.lightH=h
        self.lightM=m
    def calculateLight(self,value):
        #formula including self.objLight
        return value
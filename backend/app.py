from flask import Flask,jsonify
from flask_pymongo import ObjectId,PyMongo,request
from flask_cors import CORS
from startExperiment import StartExp
app = Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/laboratorio'
CORS(app)
mongo=PyMongo(app)
dbUsers=mongo.db.users
#exp=StartExp()
@app.route('/')
def index():
  return "Hello world!" 
@app.route('/createUser',methods=['POST'])
def createUser():
    id= dbUsers.insert(request.json)
    return jsonify({'msg':'user %s created'%{str(ObjectId(id))}})

@app.route('/startExperiment',methods=['POST'])
def startExperiment():

  exp=StartExp('threadExp',request.json,mongo)
  exp.start()
  return jsonify({"msg":"Experiment running"})
#@app.route('/getActualValues',methods=['GET'])
#def getActualValues():
  #return str(exp.temperatureControl1())

if __name__ == "__main__":
    app.run(debug=True)
    #app.debug=True
    #app.run(host="192.168.20.25")

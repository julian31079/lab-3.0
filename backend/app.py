from flask import Flask,jsonify
from flask_pymongo import ObjectId,PyMongo,request
from flask_cors import CORS
from startExperiment import StartExp
import threading
app = Flask(__name__)
app.config['MONGO_URI']='mongodb://localhost/laboratorio'
CORS(app)
mongo=PyMongo(app)
dbUsers=mongo.db.users
@app.route('/')
def index():
  return str(threading.active_count())
@app.route('/createUser',methods=['POST'])
def createUser():
    id= dbUsers.insert(request.json)
    return jsonify({'msg':'user %s created'%{str(ObjectId(id))}})
@app.route('/getUser',methods=['POST'])
def getUser():
  email=request.json['email']
  password=request.json['password']
  user=dbUsers.find_one({"email":email,"password":password})
  return str(user)

@app.route('/startExperiment',methods=['POST'])
def startExperiment():
  if(threading.active_count()<7):
    exp=StartExp()
    exp.initValues('threadExp',request.json,mongo)
    exp.start() 
    return jsonify({"msg":"Experiment running"})
  else:
    return jsonify({"msg":"Already an experiment running"})
@app.route('/getActualValues',methods=['GET'])
def getActualValues():
  exp=StartExp()
  return jsonify(exp.getActualValues())
if __name__ == "__main__":
    app.run(debug=True)
    #app.debug=True
    #app.run(host="192.168.20.25")
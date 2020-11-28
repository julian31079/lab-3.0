from flask import Flask,jsonify
from flask_pymongo import ObjectId,PyMongo,request
from flask_cors import CORS

app = Flask(__name__)

app.config['MONGO_URI']='mongodb://localhost/laboratorio'

CORS(app)

mongo=PyMongo(app)

db=mongo.db.users
@app.route('/')
def index():
  return "Hello world!" 
@app.route('/createUser',methods=['POST'])
def createUser():
    id= db.insert(request.json)
    return jsonify({'msg':'user %s created'%{str(ObjectId(id))}})


if __name__ == "__main__":
    app.run(debug=True)
    #app.debug=True
    #app.run(host="192.168.20.25")

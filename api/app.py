import time
from flask import Flask , request, jsonify, send_from_directory
from flask_cors import CORS
from sympy import *
import random
import math 


app = Flask(__name__)
CORS(app)

p = randprime(300, 500)
q = randprime(1, 299)
n = p*q
l = (p-1)*(q-1)

def isCoPrime(x):
    if math.gcd(l,x)==1:
        return True
    else:
        return False
    
def modInverse(e, l) :
    e = e % l;
    for x in range(1, l) :
        if ((e * x) % l == 1) :
            return x
    return 1

listOfCP = []
for i in range(1, l):
    if isCoPrime(i) == True:
        listOfCP.append(i)

@app.route('/listOfKeys')
def generatePublicKeys():
    return {'key' : random.choices(listOfCP , k=25), 'nKey' : n }


@app.route('/generateKey', methods = ['POST'])
def generatePrivateKey():
    e = int(request.json)
    d = modInverse(e, l)
    return {"dKey" : d}

#Encryption Algorithm
def encrypt(plainstream, pubKey, nKey):
    plainstream = list(plainstream)
    encodedStream = []
    cipherStream = []
    for i in plainstream:
        encodedStream.append(ord(i))
    for i in encodedStream:
        cipherStream.append(str((i**pubKey)%nKey))
    #return cipherStream
    return "x".join(cipherStream)

#Decryption Algorithm
def decrypt(cipherStream, pvtKey, nKey):
    cipherStream = cipherStream.split('x')
    encodedStream = []
    plainStream = []
    for i in cipherStream:
        encodedStream.append((int(i)**pvtKey)%nKey)
    for i in encodedStream:
        plainStream.append(chr(i))
    return "".join(plainStream)

@app.route('/encrypt', methods = ['POST'])
def encryptPT():
    plainstream = request.json['plaintext']
    pn = request.json['key']
    pn = pn.split('x')
    pubKey = int(pn[0])
    nKey = int(pn[1])
    ciphertext = encrypt(plainstream, pubKey, nKey)
    return {"ciphertext" : ciphertext}

@app.route('/decrypt', methods = ['POST'])
def decryptCT():
    cipherStream = request.json['ciphertext']
    pn = request.json['key']
    pn = pn.split('x')
    pvtKey = int(pn[0])
    nKey = int(pn[1])
    plaintext = decrypt(cipherStream, pvtKey , nKey)
    return {"plaintext" : plaintext}
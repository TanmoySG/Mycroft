from sympy import *
import math 

#Generate p and q
p = randprime(1, 10)
q = randprime(11, 20)

#Generate n and l(n)
n = p*q
l = (p-1)*(q-1)

#Function to test Co-Primality for generation of list of Public Keys
def isCoPrime(x):
    if math.gcd(l,x)==1:
        return True
    else:
        return False

#Function to find mod Inverese of e with l(n) to generate d     
def modInverse(e, l) :
    e = e % l;
    for x in range(1, l) :
        if ((e * x) % l == 1) :
            return x
    return 1

#List for Co-Primes
listOfCP = []
for i in range(1, l):
    if isCoPrime(i) == True:
        listOfCP.append(i)

#Print values of P, Q, N, L        
print("Value of P = ", p)
print("Value of Q = ", q)
print("Value of N = ", n)
print("Value of L = ", l)

print(" ")

#Print List of Co-Primes for e
print("List of Available Public Keys")
print(listOfCP)

print(" ")

#select a Public Key from list of Co-Primes
e = int(input("Select Public Key from the Above List ONLY: "))

#Value of d
d = modInverse(e, l)

print(" ")

#Print Public and Private Keys
print("PUBLIC KEY  : { e , n } = {", e ,",", n , "}")
print("PRIVATE KEY : { d , n } = {", d ,",", n , "}")

print(" ")

def encrypt(plainText):
    plaintext = plainText.split()
    encodedStream = []
    cipherStream = []
    for i in plainText:
        encodedStream.append(ord(i))
    for i in encodedStream:
        cipherStream.append((i**e)%n)
    return cipherStream

#Decryption Algorithm
def decrypt(cipherStream):
    pvtKey = int(input("Enter your Private Key: "))
    encodedStream = []
    plainStream = []
    for i in cipherStream:
        encodedStream.append((int(i)**pvtKey)%n)
    for i in encodedStream:
        plainStream.append(chr(i))
    return "".join(plainStream)
    
#Driver Code

#Message Input
pt = input('Enter the Plain Text: ')
print("CipherText: ", encrypt(pt))

print(" ")

#CipherText Input
ct = input('Enter the Cipher Text: ').split(", ")
print("PlainText: ", decrypt(ct))
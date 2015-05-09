import math

def solution():
    a,b,c = 0,0,0
    for i in range(2,1000/3):
        for j in range(2,1000/2):
            a = i
            b = j
            c = int(math.sqrt(math.pow(a,2) + math.pow(b,2)))
            psum = a+b+c

            if math.pow(a,2) + math.pow(b,2) == math.pow(c,2) and psum == 1000:
                return a*b*c

print solution()

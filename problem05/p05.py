def gcd(a,b):
    while(a != b):
        if(a > b):
            a = a -b
        else:
            b = b - a
    return a

def lcm(a,b):
    return (a * b) / gcd(a, b)

def solution():
    N = 2
    for i in range(2,20):
        N = lcm(N,i)
    return N

print solution()

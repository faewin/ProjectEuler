import math

def isPrime(num):
    sqrt = int(math.ceil(math.sqrt(num)))
    for i in range(2,sqrt + 1):
        if num % i == 0:
            return False
    return True

def solution():
    primes = []
    lpn = 2

    while 10000 > len(primes):
        if isPrime(lpn):
            primes.append(lpn)
        lpn += 1
    return primes[-1]

print solution()

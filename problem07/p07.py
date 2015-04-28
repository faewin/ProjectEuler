import math

def isPrime(num):
    sqrt = int(math.ceil(math.sqrt(num)))
    for i in range(2,sqrt+1):
        if num % i == 0:
            return False
    return True



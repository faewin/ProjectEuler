import math #import math module

def solution():
    sumOfSq = reduce(lambda x,y: x+math.pow(y,2), range(1,101))
    sqOfSum = math.pow((reduce(lambda x,y: x+y, range(1,101))), 2)

    return sqOfSum - sumOfSq

print solution()

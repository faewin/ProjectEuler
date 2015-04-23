def sol():
    a, b = 0, 1
    while a < 4000000:
        if a % 2 :
            yield a
        a, b = b, a+b

print sum(sol())

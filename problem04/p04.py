def solution():
    product = 0
    largestPalindrome = 0

    for x in xrange(100, 999):
        for y in xrange(100, 999):
            product = x * y
            string = str(product)
            if string == string[::-1] and largestPalindrome < product:
                largestPalindrome = product
    return largestPalindrome

print(solution())

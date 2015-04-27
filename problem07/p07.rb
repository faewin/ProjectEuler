def isPrime n
  sqrt = Math.sqrt n
  (2..sqrt).each {|i| return false if n % i == 0}
  true
end

def solution
  primes = []
  lpn = 2

  until primes.length == 10_001
    primes << lpn if isPrime lpn
    lpn += 1
  end
  primes.last
end

p solution

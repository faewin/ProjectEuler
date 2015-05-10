def primes n
  primes = []
  (2..n).each do |i|
    n1 = 3**i % i
    n2 = 3 % i
    if n1 == n2
      primes.push(i)
    end
  end
  primes.select{|x| x % 2 != 0 ||x == 2}.reduce(:+)
end
p primes 2_000_000
#p primes 10

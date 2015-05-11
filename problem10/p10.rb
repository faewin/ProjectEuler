def primes n
  primes = []
  n.times do |num|
    primes.push(num) if is_prime? num
  end
  primes
end

def is_prime? n
  return false if n <= 1
  num = Math.sqrt(n)
  (2..num).each {|i| return false if n % i == 0}
  true
end

def list_sum list
  list.reduce(:+)
end

p list_sum(primes(10))
p list_sum(primes(2_000_000))

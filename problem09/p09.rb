def solution
  a,b,c = 0,0,0
  sum = 0
  (2..1000).each do |n|
    (2..1000).each do |j|
      a = n
      b = j
      c = Math.sqrt(a**2 + b**2).to_i

      sum = [a,b,c].reduce(:+)

      if a**2 + b**2 == c**2
        return [a,b,c].reduce(:*) if sum == 1000
      end
    end
  end
end

p solution

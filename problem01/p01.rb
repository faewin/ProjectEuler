def solution
  sum = 0
  1000.times do |n|
      sum += n if n%3 == 0 || n%5 == 0
  end
  sum
end

print solution

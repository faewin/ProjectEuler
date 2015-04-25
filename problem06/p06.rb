def solution
  sum_of_sq = (1..100).inject {|n,i| n += i**2}
  sq_sum = (1..100).inject{|n,i| n += i}**2

  sq_sum - sum_of_sq
end

p solution

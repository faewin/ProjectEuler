def solution
  fab = [1,2]
  result = []
  until fab.last > 4_000_000
    next_term = fab[-1] + fab[-2]
    result = fab.push(next_term)
  end
  result.select{|num| num % 2 == 0}.reduce(:+)
end

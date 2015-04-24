def solution
  #Integer class has an LCM method thus the 2 methods below will yield the same anwser
  (2..20).inject {|n,i|n.lcm i}
  # shorter version using symbol to proc
  (2..20).inject(:lcm)
end

p solution

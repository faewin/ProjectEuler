def solution
  possible_values = (100..999).to_a
  palindromes = []
  product = 0

  possible_values.each do |i|
    possible_values.each do |j|
      product = i * j
      palindromes << product if product.to_s == product.to_s.reverse
    end
  end
  palindromes.max
end

p solution

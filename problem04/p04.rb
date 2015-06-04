def solution
  possible_values = (100..999).to_a
  palindromes = []

  possible_values.each do |i|
    possible_values.each do |j|
      product = i * j
      palindromes << product if is_palindrome?(product.to_s)
    end
  end
  palindromes.max
end

def is_palindrome?(string)
  return true if string == string.reverse
  false
end

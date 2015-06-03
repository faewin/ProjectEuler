def lpf number
  magic_number = number
  largest_prime_factor = 2

  while magic_number > largest_prime_factor
    if magic_number % largest_prime_factor == 0
      magic_number = magic_number / largest_prime_factor
      largest_prime_factor = 2
    else
      largest_prime_factor += 1
    end
  end
  largest_prime_factor
end

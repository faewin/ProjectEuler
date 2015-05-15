require 'spec_helper'

describe '#primes' do
  it "should return a list of all prime numbers between 2 and n" do
    n = 10
    expect(primes n).to eq ([2,3,5,7])
  end
end

describe "#is_prime?" do
  it "should return false if n <= 1" do
    n = 1
    expect(is_prime? n).to be(false)
  end

  it "should return false if n is not prime number" do
    n = 6
    expect(is_prime? n).to be(false)
  end

  it "should return true if n is a prime number" do
    n = 7
    expect(is_prime? n ).to be(true)
  end
end

describe "#list_sum" do
  it "should return the sum of the list" do
    list = [2,3,5,7]
    sum = 17
    expect(list_sum list).to eq(sum)
  end
end

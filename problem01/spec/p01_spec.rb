require_relative '../p01.rb'
require 'yaml'

describe '#solution' do
  it 'should return the sum of numbers below 1000 that are divisible by 3 and 5' do
    sum = solution()
    expect(sum).to eq(233168)
  end
end

require_relative '../p03.rb'

describe '#lpf' do
  it 'should return the largest prime factor of n' do
    result = lpf(100)
    expect(result).to eq(5)
  end
end

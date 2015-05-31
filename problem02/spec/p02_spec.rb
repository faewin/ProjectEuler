require_relative '../p02.rb'

describe '#solution' do
  it "should return the sum of all fibonnaci numbers below 4 million" do
    result = solution
    expect(result).to eq(4613732)
  end
end

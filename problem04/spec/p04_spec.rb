require_relative '../p04.rb'

describe '#is_palindrome?' do
  it 'should return true if string is a palindrome' do
    string = 'anna'
    expect(is_palindrome?(string)).to eq(true)
  end

  it 'should return false is string is not a palindrome' do
    string = 'eddie'
    expect(is_palindrome?(string)).to eq(false)
  end
end

describe '#solution' do
  it 'should return the largest 3 digit palindrome' do
    result = 906609
    expect(solution).to eq(result)
  end
end

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

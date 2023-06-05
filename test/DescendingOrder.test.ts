function descendingOrder(number: number) {
  const getDigits = Array.from(number.toString())

  if(getDigits.length === 1)
    return number

  if (getDigits[0] > getDigits[1])
    return number

  return parseInt(getDigits[1] + getDigits[0])
}

describe('Descending order training', () => {
  // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
  // Essentially, rearrange the digits to create the highest possible number.
  // Input: 42145 Output: 54421
  // Input: 145263 Output: 654321
  // Input: 123456789 Output: 987654321
  it('descendingOrder with one digit return the number without changes', () => {
    const number = 9

    const result = descendingOrder(number)

    expect(result).toBe(number)
  })

  it('descendingOrder with two digits return the highest possible number', () => {
    const number = 45

    const result = descendingOrder(number)

    expect(result).toBe(54)
  })

  it('descendingOrder with two digits return the same number if digits are sorted', () => {
    const number = 43

    const result = descendingOrder(number)

    expect(result).toBe(43)
  })


})

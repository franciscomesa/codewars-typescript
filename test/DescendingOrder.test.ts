function descendingOrder(number: number) {
  return number
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

})

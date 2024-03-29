export function createPhoneNumber(numbers: number[]): string {
  return numbers
    .join('')
    .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
}

describe('Create Phone Number should', () => {
  // https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/typescript
  /*
   * Write a function that accepts an array of 10 integers (between 0 and 9),
   * that returns a string of those numbers in the form of a phone number.
   *
   * Example
   * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
   * The returned format must be correct in order to complete this challenge.
   *
   * Don't forget the space after the closing parentheses!
   * #ARRAYS #STRINGS #REGULAREXPRESSIONS #ALGORITHMS
   */

  it('format phone number', () => {
    expect(createPhoneNumber([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe('(000) 000-0000')
  })

  it('codewars tests', () => {
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('(123) 456-7890')
    expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe('(111) 111-1111')
    expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe('(123) 456-7890')
  })
})

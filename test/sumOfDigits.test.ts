export const digitalRoot = (n: number): number => {
  const toString = n.toString()
  const toArray = Array.from(toString)
  return toArray
    .map(element => parseInt(element))
    .reduce((partial, element) => partial + element, 0 )
}

describe('Sum of Digits / Digital Root', () => {
  // https://www.codewars.com/kata/541c8630095125aba6000c00/typescript
  /*
   * Digital root is the recursive sum of all the digits in a number.
   * Given n, take the sum of the digits of n. If that value has more than one digit,
   * continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
   * Examples
   *     16  -->  1 + 6 = 7
   *    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
   * 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
   * 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
   * #MATHEMATICS #ALGORITHMS
   */

  it('return the same number if only one digit', () => {
    const simpleDigit = 7

    expect(digitalRoot(simpleDigit)).toBe(7)
  })

  it('return the sum of digits with two digits number', () => {
    const twoDigits = 16

    expect(digitalRoot(twoDigits)).toBe(7)
  })

  it.each([
    [7, 7],
    [16, 7],
    [942, 6],
    [132189, 6],
    [403193, 2]
  ])('return the sum of digits %i', (digits, sumExpected) => {
    expect(digitalRoot(digits)).toBe(sumExpected)
  })

})

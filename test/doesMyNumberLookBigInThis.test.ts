function narcissistic(value: number): boolean {
  const digits = value.toString().split('').map(Number) //currying
  const narcissisticNumber = digits.reduce((partial, element) => partial + Math.pow(element, digits.length), 0)
  return value === narcissisticNumber

}

describe('Does my (Narcissistic) number look big in this?', () => {
  // https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/typescript
  /*
   * A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits,
   * each raised to the power of the number of digits in a given base.
   * In this Kata, we will restrict ourselves to decimal (base 10).
   * For example, take 153 (3 digits), which is narcissistic:
   *     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
   * The Challenge:
   * Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a
   * Narcissistic number in base 10.
   *
   * This may be True and False in your language, e.g. PHP.
   * Error checking for text strings or other invalid inputs is not required,
   * only valid positive non-zero integers will be passed into the function.
   */

  it.each([[1],[2],[3],[4],[5],[6],[7],[8],[9]])('One digit number %i is allways narcissistic', (oneDigit) => {
    expect(narcissistic(oneDigit)).toBeTruthy()
  })

  it('1652 is a not a narcissistic number', () => {
    expect(narcissistic(1652)).toBeFalsy()
  })

  it('Codewars basic tests', () => {
    expect(narcissistic(7)).toBeTruthy()
    expect(narcissistic(153)).toBeTruthy()
    expect(narcissistic(1634)).toBeTruthy()
  });

})

function isTriangle(a: number, b: number, c: number): boolean {
  return false;
}

describe('Is this a triangle', () => {
  // https://www.codewars.com/kata/56606694ec01347ce800001b/typescript
  /*
  * Implement a function that accepts 3 integer values a, b, c.
  * The function should return true if a triangle can be built with the sides of given length and false in any other case.
  * (In this case, all triangles must have surface greater than 0 to be accepted).
  * #MATHEMATICS #FUNDAMENTALS
  *
  * Hint: Triangle Inequality Theorem: the sum of two side lengths of a triangle is always greater than the third side.
  * */

  it('Lengths of 1, 2, 2 can built a triangle', () => {
    expect(isTriangle(1, 2, 2)).toBeTruthy()
  })


})

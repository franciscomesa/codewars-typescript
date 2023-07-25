export function sumPairs(ints: number[], s: number): [number, number] | void {
  if (ints.length > 1) {
    if (ints[0] + ints[1] === s)
      return [ints[0], ints[1]]
  }

  return undefined

}
describe('Sum of Pairs', () => {
  // https://www.codewars.com/kata/54d81488b981293527000c8f/typescript
  /*
   * Given a list of integers and a single sum value,
   * return the first two values (parse from the left please) in order of appearance that add up to form the sum.
   *
   * If there are two or more pairs with the required sum,
   * the pair whose second element has the smallest index is the solution.
   *
   * Negative numbers and duplicate numbers can and will appear.
   *
   * NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements.
   * Be sure your code doesn't time out.
   *
   * #MEMOIZATION #FUNDAMENTALS #PERFORMANCE
   */

  it('An empty array returns undefined', () => {
    expect(sumPairs([], 1)).toBe(undefined)
  })

  it('One element array returns undefined', () => {
    expect(sumPairs([], 1)).toBe(undefined)
  })

  it('Two elements array returns the same values if it add up', () => {
    expect(sumPairs([0, 2], 2)).toStrictEqual([0, 2])
  })



})

export function sumPairs(ints: number[], s: number): [number, number] | void {
  return undefined // your code here...
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

})

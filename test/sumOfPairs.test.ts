export function sumPairs(ints: number[], s: number): [number, number] | void {
  if (ints.length < 2)
    return undefined
  let result: [number, number] | void = undefined // TODO Remove variable

  ints.forEach((firstNumber, index) => {
    const splitedInts = Array.from(ints).splice(index + 1)
    splitedInts.forEach(secondNumber => {
      if (firstNumber + secondNumber === s)
        result = [firstNumber, secondNumber]
    })
  })

  return result
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
    expect(sumPairs([], 1)).toStrictEqual(undefined)
  })

  it('One element array returns undefined', () => {
    expect(sumPairs([], 1)).toStrictEqual(undefined)
  })

  it('Two elements array returns the same values if it add up', () => {
    expect(sumPairs([0, 2], 2)).toStrictEqual([0, 2])
  })

  it('Two elements array returns undefined if it does not add up', () => {
    expect(sumPairs([0, 3], 2)).toStrictEqual(undefined)
  })

  describe('Thre elements array returns', () => {
    it('undefined if it does not add up', () => {
      expect(sumPairs([20, -13, 40], 10)).toStrictEqual(undefined)
    })

    it('array if it add up', () => {
      expect(sumPairs([20, -13, 40], 60)).toStrictEqual([20, 40])
    })

    it('array if it add up', () => {
      expect(sumPairs([20, -13, 40], 27)).toStrictEqual([-13, 40])
    })
  })




})

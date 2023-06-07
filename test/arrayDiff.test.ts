
function arrayDiff(a: number[], b: number[]): number[] {
  return [NaN]
}
describe('Array.diff', () => {
  // https://www.codewars.com/kata/523f5d21c841566fde000009/typescript
  /*
  * Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
  *
  * It should remove all values from list a, which are present in list b keeping their order.
  * array_diff({1, 2}, 2, {1}, 1, *z) == {2} (z == 1)
  *
  * If a value is present in b, all of its occurrences must be removed from the other:
  * array_diff({1, 2, 2, 2, 3}, 5, {2}, 1, *z) == {1, 3} (z == 2)
  *
  * #ARRAYS #FUNDAMENTALS #ALGORITHMS
  * */

  it ('return empty array if first do not have elements', () => {
    const result = arrayDiff([], [4,5])

    expect(result).toBe([])
  })
})

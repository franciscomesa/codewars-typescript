function nextBigger(n: number): number {
  if (n < 10) {
    return -1
  }
  const unversedSortedDigitsArray = Array.from(n.toString()).sort((a, b) => parseInt(b) - parseInt(a))
  const biggerNumber = parseInt(unversedSortedDigitsArray.join(''))
  return n === biggerNumber
    ? -1
    : biggerNumber
}
describe('Next bigger number with the same digits', () => {
  //https://www.codewars.com/kata/55983863da40caa2c900004e
  /*
   * Create a function that takes a positive integer and returns the next bigger number that can be
   * formed by rearranging its digits. For example:
   *
   *   12 ==> 21
   *  513 ==> 531
   * 2017 ==> 2071
   * If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):
   *
   *   9 ==> -1
   * 111 ==> -1
   * 531 ==> -1
   * #STRINGS# REFACTORING
   */

  it.each([[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],])('the number %s with only only digit can not be rearranged',
    (toBeRearranged) => {
      expect(nextBigger(toBeRearranged)).toBe(-1)
  })

  it('the number 12 is rearranged as 21',
    () => {
      expect(nextBigger(12)).toBe(21)
    })

  it('the number 513 is rearranged as 531',
    () => {
      expect(nextBigger(513)).toBe(531)
    })
})

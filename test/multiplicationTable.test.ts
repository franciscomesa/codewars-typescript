function multiplicationTable (size: number): number[][] {
  if (size < 1) {
    return []
  }

  const table = Array(size).fill(0).map(() => Array(size).fill(0))
  for(let i = 0; i < size; i++) {
    for(let j = 0; j < size; j++) {
      table[i][j] = (i+1) * (j+1)
    }
  }
  return table
}
describe('Multiplication Table', () => {
  // https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/typescript
  /*
   * Your task, is to create N×N multiplication table, of size provided in parameter.
   * For example, when given size is 3:
   * 1 2 3
   * 2 4 6
   * 3 6 9
   *
   * For the given example, the return value should be:
   *
   * [[1,2,3],[2,4,6],[3,6,9]]
   * #ARRAYS #FUNDAMENTALS
   */

  it('return empty array if size is 0', () => {
    const result = multiplicationTable(0)

    expect(result).toStrictEqual([])
  })

  it('return array with one element if size is 1', () => {
    const result = multiplicationTable(1)

    expect(result).toStrictEqual([[1]])
  })

})



describe('You\'re a square!', () => {
  // A square of squares
  // You like building blocks. You especially like building blocks that are squares.
  //   And what you even like more, is to arrange them into a square of square building blocks!
  //
  // However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! ' +
  // 'Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait!
  // That's it! You just have to check if your number of building blocks is a perfect square.
  //
  // Task
  // Given an integral number, determine if it's a square number:
  //
  // In mathematics, a square number or perfect square is an integer that is the square of an integer;
  // in other words, it is the product of some integer with itself.
  //
  // The tests will always use some integral number, so don't worry about that in dynamic typed languages.
  //
  // Examples
  // -1  =>  false
  // 0  =>  true
  // 3  =>  false
  // 4  =>  true
  // 25  =>  true
  // 26  =>  false

  it('Negative numbers are not square', () => {
    const negativeNumber = -1

    const result = isSquare(negativeNumber)

    expect(result).toBeFalsy()
  })

  it('Zero number is square', () => {
    const zeroNumber = 0

    const result = isSquare(zeroNumber)

    expect(result).toBeTruthy()
  })

  it('Three number is not square', () => {
    const testNumber = 3

    const result = isSquare(testNumber)

    expect(result).toBeFalsy()
  })

  it('Number 4 is not square', () => {
    const testNumber = 4

    const result = isSquare(testNumber)

    expect(result).toBeTruthy()
  })

  it('Number 25 is square', () => {
    const testNumber = 25

    const result = isSquare(testNumber)

    expect(result).toBeTruthy()
  })

  it('Number 26 is not square', () => {
    const testNumber = 26

    const result = isSquare(testNumber)

    expect(result).toBeFalsy()
  })

})

function isSquare(square: number): boolean {
  if (square < 0) {
    return false
  }
  const tested = Math.sqrt(square)
  return tested * tested === square
}

function rot13(str: string): string {
  const upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'
  const characters = str.split('')
  const result = characters.map(
    (letter) => {
      const upperCharacterIndex = upperCharacters.indexOf(letter)
      if (upperCharacterIndex !== -1) {
        return upperCharacters.charAt((upperCharacterIndex + 13) % 26)
      }
      const lowerCharacterIndex = lowerCharacters.indexOf(letter)
      if (lowerCharacterIndex !== -1) {
        return lowerCharacters.charAt((lowerCharacterIndex + 13) % 26)
      }
      return letter
    }
  )

  return result.join('').toString();
}
describe('ROT13 algorithm should', () => {
  // https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/typescript
  /*
   * How can you tell an extrovert from an introvert at NSA?
   * Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
   *
   * I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
   * According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.
   *
   * For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.
   *
   * Test examples:
   * 'EBG13 rknzcyr.' -> 'ROT13 example.'
   * 'This is my first ROT13 excercise!' -> 'Guvf vf zl svefg EBG13 rkprepvfr!'
   */

  describe('change uppercase characters', () => {
    it('A', () => {
      expect(rot13('A')).toBe('N')
    })

    it('N', () => {
      expect(rot13('N')).toBe('A')
    })

    it('Z', () => {
      expect(rot13('Z')).toBe('M')
    })
  })

  describe('change lowercase characters', () => {
    it('a', () => {
      expect(rot13('a')).toBe('n')
    })

    it('n', () => {
      expect(rot13('n')).toBe('a')
    })

    it('z', () => {
      expect(rot13('z')).toBe('m')
    })
  })

  describe('Sample tests', () => {
    it('should work for EBG13 rknzcyr.', () => {
        expect(rot13('EBG13 rknzcyr.')).toBe('ROT13 example.')
      }
    )

    it('should work for This is my first ROT13 excercise!', () => {
        expect(rot13('This is my first ROT13 excercise!')).toBe('Guvf vf zl svefg EBG13 rkprepvfr!')
      }
    )
  })

})

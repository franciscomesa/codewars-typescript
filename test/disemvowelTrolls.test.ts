export class Kata {
  static disemvowel(str: string): string {
    return str.replace(/[aeiouAEIOU]/g, '');
  }
}

describe ('Disemvowel Trolls', () => {
  /*
  * Trolls are attacking your comment section!
  * A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
  * Your task is to write a function that takes a string and return a new string with all vowels removed.
  * For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
  * Note: for this kata y isn't considered a vowel.
  * #STRINGS #REGULAREXPRESSIONS #FUNDAMENTALS
  * */

  it('return empty string if no text at entry', () => {
    expect(Kata.disemvowel('')).toBe('')
  })

  it('remove the vowel a', () => {
    expect(Kata.disemvowel('kata')).toBe('kt')
  })

  it('remove the vowel e', () => {
    expect(Kata.disemvowel('web')).toBe('wb')
  })

  it('remove the vowel i', () => {
    expect(Kata.disemvowel('This')).toBe('Ths')
  })

  it('remove the vowel o', () => {
    expect(Kata.disemvowel('for')).toBe('fr')
  })

  it('remove the vowel u', () => {
    expect(Kata.disemvowel('bluff')).toBe('blff')
  })

  it('remove the vowel A', () => {
    expect(Kata.disemvowel('KATA')).toBe('KT')
  })

  it('remove the vowel E', () => {
    expect(Kata.disemvowel('WEB')).toBe('WB')
  })

  it('remove the vowel I', () => {
    expect(Kata.disemvowel('THIS')).toBe('THS')
  })

  it('remove the vowel O', () => {
    expect(Kata.disemvowel('FOR')).toBe('FR')
  })

  it('remove the vowel U', () => {
    expect(Kata.disemvowel('BLUFF')).toBe('BLFF')
  })

  it('do not remove the letter y', () => {
    expect(Kata.disemvowel('yes')).toBe('ys')
  })

  it('remove vowels in a sentence', () => {
    expect(Kata.disemvowel('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!')
  })
})

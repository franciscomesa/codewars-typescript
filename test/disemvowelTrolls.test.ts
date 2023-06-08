export class Kata {
  static disemvowel(str: string): string {
    return str.replace(/a/g, '');
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

})

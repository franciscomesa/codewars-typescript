type GetOnGetOff = [number, number];
type GetsOnGetsOff = GetOnGetOff[];
function numberOfPeopleInTheBus(busStops: GetsOnGetsOff): number {
  if (busStops.length === 0) {
    return 0
  }
  return busStops.reduce((numberOfPeople, [on, off]) => numberOfPeople + on - off, 0)

}
describe('Number of people in the bus', () => {
  // https://www.codewars.com/kata/5648b12ce68d9daa6b000099
  /*
   * There is a bus moving in the city which takes and drops some people at each bus stop.
   * You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people
   * that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
   * Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).
   * Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus,
   * they are probably sleeping there :D
   *
   * Take a look on the test cases.
   * Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0.
   * So the returned integer can't be negative.
   * The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
   *
   * #Fundamentals
   */

  it('Zero people in bus without bus stops', () => {
    const emptyBusAtBeginning: GetsOnGetsOff = []

    const result = numberOfPeopleInTheBus(emptyBusAtBeginning)

    expect(result).toBe(0)
  })

  it('There could be at least one person at last bus stop', () => {
    const emptyBusAtBeginning: GetsOnGetsOff = [[3, 0]]

    const result = numberOfPeopleInTheBus(emptyBusAtBeginning)

    expect(result).toBe(3)
  })

  it('Codewars sample tests', () => {
    expect(numberOfPeopleInTheBus([[10,0],[3,5],[5,8]])).toBe(5)
    expect(numberOfPeopleInTheBus([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toBe(17)
    expect(numberOfPeopleInTheBus([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toBe(21)
    expect(numberOfPeopleInTheBus([[0,0]])).toBe(0)
  })
})

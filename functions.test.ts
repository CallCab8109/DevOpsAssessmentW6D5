const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
test("whatever", () => {
    expect(shuffleArray([1, 2, 3])).toHaveLength(3)
})
test("test2", () => {
    expect(shuffleArray([1, 2, 3])).toBeInstanceOf(Array)
})
})
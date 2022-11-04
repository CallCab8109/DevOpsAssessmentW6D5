let myFunction = require('./utils')

describe('shuffleArray should', () => {
    expect(myFunction.shuffleArray(1, 2, 3)).toContain(1)
})
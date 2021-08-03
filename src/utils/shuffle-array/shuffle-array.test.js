import { shuffleArray } from './shuffle-array'

describe ('shuffleArray', () => {

    it ('should return a different array (stringify to freeze)', () => {

        const input = [1, 2, 3]
        const inputString = JSON.stringify (input)
        const output = shuffleArray (input)
        const outputString = JSON.stringify (output)

        expect (inputString === outputString).toBe (false)
    
    })

})
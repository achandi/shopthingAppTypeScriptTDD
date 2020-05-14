import { SieveHandler } from '../handlers/SieveHandler'

describe('SieveHandler', () => {

    it('should verify the instance of Class, and should define prime numbers and medians', async () => {
        const instance = new SieveHandler(0)
        expect(instance).toBeInstanceOf(SieveHandler)
        expect(instance.primeNumbers).toBeDefined()
        expect(instance.primeMedians).toBeDefined()
    })

    it('should have a method to get Prime Numbers and Prime Medians', async () => {
        const instance = new SieveHandler(0)
        expect(instance.getPrimeNumbers).toBeDefined()
        expect(instance.getPrimeMedian).toBeDefined()
    })

})

describe('getPrimeNumbers', () => {

    //from assignment:
    it('should return the following for an input of 10: Prime Numbers: [2,3,5,7]', async () => {
        const instance = new SieveHandler(0)
        expect(instance.getPrimeNumbers(10)).toEqual(
            expect.arrayContaining([2, 3, 5, 7])
        )
    })

    //from assignment:
    it('should return the following for an input of 18: Prime Numbers: [2,3,5,7,11,13,17]', async () => {
        const instance = new SieveHandler(0)
        expect(instance.getPrimeNumbers(18)).toEqual(
            expect.arrayContaining([2, 3, 5, 7, 11, 13, 17])
        )
    })

    it('it should return an empty array on errors or non prime values', async () => {
        const instance = new SieveHandler(0)
        expect(instance.getPrimeNumbers(0)).toEqual(
            expect.arrayContaining([])
        )
        const instanceTwo = new SieveHandler(0)
        expect(instanceTwo.getPrimeNumbers(-100)).toEqual(
            expect.arrayContaining([])
        )
    })

})

describe('getPrimeMedian', () => {

    //from assignment:
    it('should return medians of [3,5] for an input of [2,3,5,7]', async () => {
        const instance = new SieveHandler(0)
        expect(instance.getPrimeMedian([2, 3, 5, 7])).toEqual(
            expect.arrayContaining([3, 5])
        )
    })

    //from assignment:
    it('should return a median of [7] if Prime Numbers: [2,3,5,7,11,13,17]', async () => {
        const instance = new SieveHandler(0)
        expect(instance.getPrimeMedian([2, 3, 5, 7, 11, 13, 17])).toEqual(
            expect.arrayContaining([7])
        )
    })

    it('it should return an empty array for an empty array', async () => {
        const instance = new SieveHandler(0)
        expect(instance.getPrimeMedian([])).toEqual(
            expect.arrayContaining([])
        )
    })

})

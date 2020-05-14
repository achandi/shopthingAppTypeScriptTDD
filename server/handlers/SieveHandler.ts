export class SieveHandler {

    private inputVal: number
    primeNumbers: number[]
    primeMedians: number[]

    constructor(inputVal: number) {
        this.inputVal = inputVal
        this.primeNumbers = this.getPrimeNumbers(this.inputVal)
        this.primeMedians = this.getPrimeMedian(this.primeNumbers)
    }

    getPrimeNumbers(inputVal: number): number[] {
        try {
            const sieveArr: number[] = new Array(inputVal).slice(1) // n less than
            const sieveLength: number = inputVal
            for (const indexValPair of sieveArr.entries()) {
                const [index, isPrime] = indexValPair
                if (isPrime !== 0) {
                    const primeVal = index + 2
                    sieveArr[index] = primeVal
                    const multiplyLimit = (sieveLength / primeVal)
                    for (let i = 2; i <= multiplyLimit; i++) {
                        const indexOfProduct = (primeVal * i) - 2
                        sieveArr[indexOfProduct] = 0
                    }
                }
            }
            return sieveArr.filter(isPrime => isPrime !== 0)
        } catch (error) {
            return []
        }
    };

    getPrimeMedian(primeNumbers: number[]): number[] {
        try {
            const primeNumbersLength = primeNumbers ? primeNumbers.length : 0
            if (!primeNumbersLength) return []
            const mid = Math.ceil(primeNumbersLength / 2)
            return (primeNumbersLength % 2 == 0) ? [primeNumbers[mid - 1], primeNumbers[mid]] : [primeNumbers[mid - 1]]
        } catch (error) {
            return []
        }
    };

}

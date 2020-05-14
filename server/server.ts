import express from 'express'
import { SieveHandler } from './handlers/SieveHandler'
export const app = express()

const maxLength = 100000
//with one route i felt it unnessary to move to a seperate file, but still try Object Oritented Principles
//minimzing use of other depedencies, like http-errors 
class Routes {
    Calculate = (req: express.Request, res: express.Response): void => {
        try {
            console.log(req.query)
            const inputVal = Number(req.query.input)
            if (typeof inputVal === 'number' && inputVal < maxLength) {
                const calculate = new SieveHandler(inputVal)
                res.json([calculate.primeNumbers, calculate.primeMedians])
            } else if (inputVal < 100000) {
                res.status(400)
                res.send('Number too long!')
            } else {
                res.status(400)
                res.send('Number is not valid!')
            }
        } catch {
            res.status(400)
            res.send('Error in calculation server!')
        }
    }
}

const routes = new Routes()
app.get('/calculation', routes.Calculate)
app.listen(8080)
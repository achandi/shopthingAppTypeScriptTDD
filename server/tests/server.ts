import { app } from '../server'
import request from 'supertest'

describe('GET /calculation', () => {
    it('returns a status code 200 for a valid input', async () => {
        const result = await request(app).get('/calculation?input=1')
        expect(result.status).toEqual(200)
    })
    it('returns Number is not valid! for null, or no query param passed and code 400', async () => {
        const result = await request(app).get('/calculation')
        expect(result.text).toEqual('Number is not valid!')
        expect(result.status).toEqual(400)
    })
    it('returns [[2],[2]] for an input of 2 passed and status code 200', async () => {
        const result = await request(app).get('/calculation?input=2')
        const json = JSON.parse(result.text)
        expect(json).toEqual([[2], [2]])
        expect(result.status).toEqual(200)
    })
})


require('dotenv').config()
import supertest from 'supertest'
import app from './app'
import { expect } from 'chai'

const request = supertest(app)
describe('app', () => {
  it('can show hello world message', async () => {
    const msg = await request.get('/')

    expect(msg.body).to.deep.include({
      "isSucces": true,
      "message": "Hello, World!"
    })
  })
})
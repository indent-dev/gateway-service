import endpoint from './api/endpoint.json'
import express, { Request, Response } from 'express'
import cors from 'cors'
import errorHandler from './middlewares/errorHandler'
import productApiRouter from './api/productApi/productApi.router'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send(endpoint)
})

app.use(productApiRouter)
app.use(errorHandler)

export default app

import express, { Request, Response } from 'express'
import cors from 'cors'
import errorHandler from './middlewares/errorHandler'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({
    isSucces: true,
    message: 'Hello, World!',
  })
})

app.use(errorHandler)

export default app
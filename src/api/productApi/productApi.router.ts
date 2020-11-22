import { Router } from 'express'
import ProductRouter from './product/product.router'
import CategoryRouter from './category/category.router'

const productApiRouter = Router()

const baseUrl = '/productApi'

productApiRouter.use(`${baseUrl}/product`, ProductRouter)
productApiRouter.use(`${baseUrl}/category`, CategoryRouter)

export default productApiRouter

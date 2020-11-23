import { Router } from 'express'
import ProductController from './product.controller'

const productRouter = Router()
const productController = new ProductController()

productRouter.get(`/`, productController.index)
productRouter.post(`/`, productController.store)
productRouter.put(`/:id`,productController.edit)
productRouter.delete(`/:id`,productController.delete)

export default productRouter

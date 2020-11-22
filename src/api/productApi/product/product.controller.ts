import { Request, Response, NextFunction } from 'express'
import ProductService from './product.service'
import httpException from '../../../utils/httpException'

const productService = new ProductService()

export default class ProductController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await productService.getProduct()
      res.send(product)
    } catch (error) {
      next(new httpException(error.statusCode || 500, error.message))
    }
  }
}

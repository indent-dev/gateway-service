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

  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const product = await productService.createProduct(req.body)
      res.send(product)
    } catch (error) {
      next(new httpException(error.statusCode || 500, error.message))
    }
  }

  async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await productService.updateProduct(req.params.id,req.body)
      res.send(data)
    } catch (error) {
      next(new httpException(error.statusCode || 500, error.message))
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await productService.deleteProduct(req.params.id)
      res.send(data)
    } catch (error) {
      next(new httpException(error.statusCode || 500, error.message))
    }
  }

}

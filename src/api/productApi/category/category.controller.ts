import { Request, Response, NextFunction } from 'express'
import CategoryService from './category.service'
import httpException from '../../../utils/httpException'

const categoryService = new CategoryService()

export default class CategoryController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await categoryService.getCategory()
      res.send(data)
    } catch (error) {
      next(new httpException(error.statusCode || 500, error.message))
    }
  }

  async store(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await categoryService.createCategory(req.body)
      res.send(data)
    } catch (error) {
      next(new httpException(error.statusCode || 500, error.message))
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await categoryService.updateCategory(req.params.id, req.body)
      res.send(data)
    } catch (error) {
      next(new httpException(error.statusCode || 500, error.message))
    }
  }
}

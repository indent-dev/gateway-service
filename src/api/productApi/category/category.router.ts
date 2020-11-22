import { Router } from 'express'
import CategoryController from './category.controller'

const categoryRouter = Router()
const categoryController = new CategoryController()

categoryRouter.get(`/`, categoryController.index)

export default categoryRouter

import Axios from 'axios'
import { CategoryRequest } from './category.type'

export default class CategoryService {
  getCategory() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = (
          await Axios.get(
            `https://product-service-indent.herokuapp.com/category`
          )
        ).data
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }

  createCategory(category: CategoryRequest) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = (
          await Axios.post(
            `https://product-service-indent.herokuapp.com/category`,
            { ...category }
          )
        ).data
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }

  updateCategory(id: string, category: CategoryRequest) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = (
          await Axios.put(
            `https://product-service-indent.herokuapp.com/category/${id}`,
            { ...category }
          )
        ).data
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }
}

import Axios from 'axios'
import { Product } from "./product.type";
import httpException from '../../../utils/httpException'

export default class ProductService {
  getProduct() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = (
          await Axios.get(
            'https://product-service-indent.herokuapp.com/product'
          )
        ).data
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }

  createProduct(product: Product) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = (
          await Axios.post(
            `https://product-service-indent.herokuapp.com/product`,
            { ...product }
          )
        ).data
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }

  updateProduct(id: string, product: Product) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = (
          await Axios.put(
            `https://product-service-indent.herokuapp.com/product/${id}`,
            { ...product }
          )
        ).data
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }

  deleteProduct(id: string){
    return new Promise(async (resolve, reject) => {
      try {
        const response = (
          await Axios.delete(
            `https://product-service-indent.herokuapp.com/product/${id}`
          )
        ).data
        resolve(response)
      } catch (error) {
        reject(error)
      }
    })
  }

}

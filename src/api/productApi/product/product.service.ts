import Axios from 'axios'
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
}

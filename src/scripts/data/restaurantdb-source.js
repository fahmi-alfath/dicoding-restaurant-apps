import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantDbSource {
  static async restaurantLists () {
    const response = await fetch(API_ENDPOINT.LISTS)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async restaurantDetail (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const responseJson = await response.json()

    return responseJson.restaurant
  }
}

export default RestaurantDbSource

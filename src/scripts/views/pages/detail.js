import '../../../styles/restaurant-detail.css'
import UrlParser from '../../routes/url-parser'
import RestaurantDbSource from '../../data/restaurantdb-source'
import { createRestaurantDetailTemplate } from '../templates/template-creator'
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator'

const Detail = {
  async render () {
    return `
    <section class="detail">
        <div id="catalog" class="catalog">
        </div>
        <div id="favoriteButtonContainer"></div>
    </section>
    `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id)
    const restaurantContainer = document.querySelector('#catalog')
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        address: restaurant.address,
        rating: restaurant.rating,
        categories: restaurant.categories,
        menus: restaurant.menus,
        customerReviews: restaurant.customerReviews
      }
    })
  }
}

export default Detail

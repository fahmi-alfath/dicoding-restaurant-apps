import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import { createRestaurantCatalogTemplate } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
    <section class="nearest">
        <h1 class="nearest-label">
          Restoran Favorit Tersimpan
          </h1>
        <div id="catalogs" class="catalogs">
        </div>
    </section>
    `
  },

  async afterRender () {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants()
    const restaurantsContainer = document.querySelector('#catalogs')

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantCatalogTemplate(restaurant)
    })
  }
}

export default Favorite

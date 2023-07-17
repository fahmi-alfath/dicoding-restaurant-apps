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

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantCatalogTemplate(restaurant)
      })
    } else {
      restaurantsContainer.innerHTML = `
        <article>
        </article>
        <article>
        <section class="message">
        <h1>🤨</h1>
        <p>Belum Ada Restoran Favorit</p>
        </section>
        </article>
        <article>
        </article>
      `
    }
  }
}

export default Favorite

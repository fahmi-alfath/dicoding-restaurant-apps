import '../../../styles/restaurant-catalogs.css'
import restaurantDbSource from '../../data/restaurantdb-source'
import { createRestaurantCatalogTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
    <section class="nearest">
        <h1 class="nearest-label">
          Katalog Restoran
        </h1>
        <div id="catalogs" class="catalogs">
        </div>
    </section>
    `
  },

  async afterRender () {
    const restaurants = await restaurantDbSource.restaurantLists()

    const restaurantsContainer = document.querySelector('#catalogs')
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantCatalogTemplate(restaurant)
    })
  }
}

export default Home

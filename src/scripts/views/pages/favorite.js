import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb'
import FavoriteRestaurantView from './favorite-restaurants/favorite-restaurant-view'
import FavoriteRestaurantShowPresenter from './favorite-restaurants/favorite-restaurant-show-presenter'
// import { createRestaurantCatalogTemplate } from '../templates/template-creator'

const view = new FavoriteRestaurantView()

const Favorite = {
  async render () {
    return view.getTemplate()
  },

  async afterRender () {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb })
  }
}

export default Favorite

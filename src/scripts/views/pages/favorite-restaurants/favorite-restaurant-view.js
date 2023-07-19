import { createRestaurantCatalogTemplate } from '../../templates/template-creator'

class FavoriteRestaurantView {
  getTemplate () {
    return `
    <section class="nearest">
        <h1 class="nearest-label">
          Restoran Favorit Tersimpan
          </h1>
        <div id="catalogs" class="catalogs">
        </div>
    </section>
   `
  }

  showRestaurants (restaurant) {
    this.showFavoriteRestaurants(restaurant)
  }

  showFavoriteRestaurants (restaurant = []) {
    let html
    if (restaurant.length) {
      html = restaurant.reduce((carry, retaurant) => carry.concat(createRestaurantCatalogTemplate(retaurant)), '')
    } else {
      html = this._getEmptyRestaurantTemplate()
    }

    document.getElementById('catalogs').innerHTML = html

    document.getElementById('catalogs').dispatchEvent(new Event('catalogs:updated'))
  }

  _getEmptyRestaurantTemplate () {
    return `
    <article class="message">
      <h1>😔</h1>
      <p>Belum Ada Restoran Favorit</p>
    </article>
    <article class="message">
      <h1>😔</h1>
      <p>Belum Ada Restoran Favorit</p>
    </article>
    <article class="message">
      <h1>😔</h1>
      <p>Belum Ada Restoran Favorit</p>
    </article>
    `
  }
}

export default FavoriteRestaurantView

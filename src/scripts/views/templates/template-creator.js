import CONFIG from '../../globals/config'

const createRestaurantDetailTemplate = (restaurant) => `
  <article class="restaurant">
    <h1 class="restaurant-name">${restaurant.name}</h1>
    <img class="restaurant-picture lazyload" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + 'large/' + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" />
    <div class="restaurant-info">
      <h3>Informasi</h3>
      <p>
        Kota: 
        <span>
        ${restaurant.city}
        </span>
      </p>
      <p>
        Alamat Lengkap: 
        <span>
        ${restaurant.address}
        </span>
      </p>
      <p>
      Kategori: 
        <span>
        ${restaurant.categories.map(category => {
          return ' ' + category.name
        })}
        </span>
      </p>
      <p>
      Rating: 
        <span>
        ${restaurant.rating}
        </span>
      </p>
    </div>
    <div class="restaurant-description">
      <h3>Deskripsi</h3>
      <p>${restaurant.description}</p>
    </div>
    <div class="restaurant-menu-foods">
      <h3>Menu Makanan</h3>
      <p>
      ${restaurant.menus.foods.map(food => {
        return ' ' + food.name
      })}
      </p>
    </div>
    <div class="restaurant-menu-drinks">
      <h3>Menu Minuman</h3>
      <p>
      ${restaurant.menus.drinks.map(drink => {
        return ' ' + drink.name
      })}
      </p>
    </div>
    <div class="restaurant-review">
      <h3>Review</h3>
      ${restaurant.customerReviews.map(customer => {
        return `
          <div class="restaurant-review-customer">
            <p class="review-customer-date">${customer.date}</p>
            <p class="review-customer-name">${customer.name}</p>
            <p class="review-customer-description">${customer.review}</p>
          </div>
        `
      }).join('')}
    </div>
  </article>
`

const createRestaurantCatalogTemplate = (restaurant) => `
  <article class="catalog-item">
  <div class="catalog-item-content">
      <h1 class="catalog-item-title" aria-label="nama restoran">
        <a href="/#/detail/${restaurant.id}">
          ${restaurant.name}
        </a>
      </h1>
  </div>
    <div class="catalog-image-group">
      <img class="catalog-item-thumbnail lazyload" data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + 'small/' + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
      alt="${restaurant.name}">
      <div class="catalog-item-detail">
        <p class="catalog-item-location">
          <i aria-label="lokasi restoran" class="fa fa-map"></i>
          <span class="catalog-item-location-city">${restaurant.city}</span>
          </p>
        <p class="catalog-item-rating">
          <i aria-label="rating restoran" class="fa fa-star"></i>
          <span class="catalog-item-rating-number">${restaurant.rating}</span>
        </p>
      </div>
    </div>
  </article>
`

const createFavoriteButtonTemplate = () => `
  <button aria-label="tambah ke favorit" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createFavoritedButtonTemplate = () => `
  <button aria-label="hapus dari favorit" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantCatalogTemplate, createRestaurantDetailTemplate, createFavoriteButtonTemplate,
  createFavoritedButtonTemplate
}

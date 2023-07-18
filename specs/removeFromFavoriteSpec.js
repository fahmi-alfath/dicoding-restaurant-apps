/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb'
import * as TestFactories from './helpers/testFactories'

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>'
}

describe('Unfavoriting A Restaurant', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer()
    await FavoriteRestaurantIdb.putRestaurant({ id: 'dy62fuwe6w8kfw1e867' })
  })

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant('dy62fuwe6w8kfw1e867')
  })

  it('should display unfavorite widget when the restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 'dy62fuwe6w8kfw1e867' })

    expect(document.querySelector('[aria-label="hapus dari favorit"]')).toBeTruthy()
  })

  it('should not display like widget when the restaurant has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 'dy62fuwe6w8kfw1e867' })

    expect(document.querySelector('[aria-label="tambah ke favorit"]')).toBeFalsy()
  })

  it('should be able to remove favorited restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 'dy62fuwe6w8kfw1e867' })

    document.querySelector('[aria-label="hapus dari favorit"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })

  it('should not throw error if the unfavorited restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 'dy62fuwe6w8kfw1e867' })

    await FavoriteRestaurantIdb.deleteRestaurant('dy62fuwe6w8kfw1e867')

    document.querySelector('[aria-label="hapus dari favorit"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })
})

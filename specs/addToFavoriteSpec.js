/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb'
import * as TestFactories from './helpers/testFactories'

describe('Favoriting a restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>'
  }

  beforeEach(() => {
    addFavoriteButtonContainer()
  })

  it('should show the add to favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 'dy62fuwe6w8kfw1e867' })

    expect(document.querySelector('[aria-label="tambah ke favorit"]'))
      .toBeTruthy()
  })

  it('should not show the remove from favorite button when the restaurant has not been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 'dy62fuwe6w8kfw1e867' })

    expect(document.querySelector('[aria-label="hapus dari favorit"]')).toBeFalsy()
  })

  it('should be able to favorite the restaurant', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 'dy62fuwe6w8kfw1e867' })

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'))
    const restaurant = await FavoriteRestaurantIdb.getRestaurant('dy62fuwe6w8kfw1e867')

    expect(restaurant).toEqual({ id: 'dy62fuwe6w8kfw1e867' })

    FavoriteRestaurantIdb.deleteRestaurant('dy62fuwe6w8kfw1e867')
  })

  it('should not add a restaurant again when its already favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 'dy62fuwe6w8kfw1e867' })

    await FavoriteRestaurantIdb.putRestaurant({ id: 'dy62fuwe6w8kfw1e867' })

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 'dy62fuwe6w8kfw1e867' }])

    FavoriteRestaurantIdb.deleteRestaurant('dy62fuwe6w8kfw1e867')
  })

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({})

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([])
  })
})

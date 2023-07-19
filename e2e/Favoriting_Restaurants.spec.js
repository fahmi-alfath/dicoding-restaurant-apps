/* eslint-disable no-undef */
const assert = require('assert')

Feature('Favoriting Restaurants')

Before(({ I }) => {
  I.amOnPage('#/favorite')
})

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.seeElement('#catalogs')
  I.see('Belum Ada Restoran Favorit', '.message')
})

Scenario('add a restaurant to favorite', async ({ I }) => {
  I.see('Belum Ada Restoran Favorit', '.message')

  I.amOnPage('/')

  I.waitForElement('.catalog-item', 10)

  I.seeElement('.catalog-item-title a')
  const firstResto = locate('.catalog-item-title a').first()
  const firstRestoName = await I.grabTextFrom(firstResto)
  I.click(firstResto)

  I.waitForElement('#favoriteButton', 10)
  I.seeElement('#favoriteButton')
  I.click('#favoriteButton')

  I.amOnPage('#/favorite')
  I.waitForElement('.catalog-item', 10)
  I.seeElement('.catalog-item-title a')
  const likedRestoName = await I.grabTextFrom('.catalog-item-title a')

  assert.strictEqual(firstRestoName, likedRestoName)
})

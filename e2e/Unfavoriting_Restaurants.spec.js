const assert = require('assert')

Feature('Unfavoriting Restaurants')

Before(({ I }) => {
  I.amOnPage('/#/detail/dy62fuwe6w8kfw1e867')
})

Scenario('remove a restaurant from favorite', async ({ I }) => {
  I.waitForElement('#favoriteButton', 10)
  I.seeElement('#favoriteButton')
  I.click('#favoriteButton')

  I.amOnPage('/#/favorite')
  I.waitForElement('.catalog-item', 10)

  I.seeElement('.catalog-item-title a')
  const firstResto = locate('.catalog-item-title a').first()
  I.click(firstResto)

  I.waitForElement('#favoriteButton', 10)
  I.seeElement('#favoriteButton')
  I.click('#favoriteButton')

  I.amOnPage('/#/favorite')
  I.see('Belum Ada Restoran Favorit', '.message')
})

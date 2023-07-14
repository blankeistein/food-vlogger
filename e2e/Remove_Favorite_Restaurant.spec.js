const assert = require('assert');

Feature('Remove Favorite Restaurant');

Scenario('remove restaurant from favorite list', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__wrapper .restaurant__cta a');
  I.seeElement('.restaurant__wrapper .restaurant__cta a');
  const firstRestaurant = locate('.restaurant__wrapper').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant.find('.restaurant__content .title'));
  const firstRestaurantLink = firstRestaurant.find('a');
  I.click(firstRestaurantLink);

  I.waitForElement('#favoriteBtn');
  I.seeElement('#favoriteBtn');
  I.click('#favoriteBtn');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__wrapper');
  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant__wrapper .restaurant__content .title');

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  I.click(locate('.restaurant__wrapper .restaurant__cta a'));

  I.waitForElement('#favoriteBtn');
  I.seeElement('#favoriteBtn');
  I.click('#favoriteBtn');

  I.amOnPage('/#/favorite');
  I.see('Kamu tidak memiliki restaurant yang kamu simpan', '.restaurant__container');
});

Feature('Add Review a Restaurant');

Scenario('add review a restaurant', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant__wrapper .restaurant__cta a');
  I.seeElement('.restaurant__wrapper .restaurant__cta a');
  I.click(locate('.restaurant__wrapper .restaurant__cta a').first());

  I.waitForElement('form');

  I.fillField('input[name="name"]', 'Dika');
  I.fillField('textarea[name="review"]', 'Makanannya Enak');

  I.click('button[type="submit"]');

  I.waitForElement('.alert.alert-success');
  I.seeElement('.alert.alert-success');
});

import FavoriteRestoIdb from '../src/scripts/data/restaurant-favorite-db';
import * as TestFactories from './helpers/testFactories';

describe('Remove A Restaurant From Favorite', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteBtnContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.add({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.remove(1);
  });

  it('should display remove favorite button when restaurant is in favorite list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="remove from favorite"]')).toBeTruthy();
  });

  it('should not display add to favorite button when restaurant is in favorite list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="add to favorite"]')).toBeFalsy();
  });

  it('should be able to remove restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document.getElementById('favoriteBtn').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAll()).toEqual([]);
  });

  it('should not throw error if the restaurant not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestoIdb.remove(1);

    document.getElementById('favoriteBtn').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAll()).toEqual([]);
  });
});

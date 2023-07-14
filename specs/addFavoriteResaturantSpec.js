import FavoriteRestoIdb from '../src/scripts/data/restaurant-favorite-db';
import * as TestFactories from './helpers/testFactories';

describe('Add A Restaurant To Favorite', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteBtnContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show add favorite button when restaurant has not been favorite before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Tambah ke daftar favorit"]')).toBeTruthy();
  });

  it('should show remove from favorite button when restaurant was favoured before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus dari daftar favorit"]')).toBeFalsy();
  });

  it('should be able to add restaurant to favorite', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document.getElementById('favoriteBtn').dispatchEvent(new Event('click'));

    const movie = await FavoriteRestoIdb.getOne(1);
    expect(movie).toEqual({ id: 1 });

    await FavoriteRestoIdb.remove(1);
  });

  it('should not to add favorite restaurant again when its already favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestoIdb.add({ id: 1 });
    document.getElementById('favoriteBtn').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAll()).toEqual([{ id: 1 }]);

    await FavoriteRestoIdb.remove(1);
  });

  it('should not add favorite restaurant when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ });

    document.getElementById('favoriteBtn').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAll()).toEqual([]);
  });
});

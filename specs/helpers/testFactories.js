import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/restaurant-favorite-db';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.getElementById('favoriteBtnContainer'),
    favoriteRestaurants: FavoriteRestoIdb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavoriteButtonPresenterWithRestaurant };

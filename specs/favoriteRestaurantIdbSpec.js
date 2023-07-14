import FavoriteRestoIdb from '../src/scripts/data/restaurant-favorite-db';
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAll()).forEach(async (resto) => {
      await FavoriteRestoIdb.remove(resto.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestoIdb);
});

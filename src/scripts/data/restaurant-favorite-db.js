import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME.FAVORITE, { keyPath: 'id' });
  },
});

const FavoriteRestoIdb = {
  async getOne(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return (await dbPromise).get(OBJECT_STORE_NAME.FAVORITE, id);
  },

  async getAll() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME.FAVORITE);
  },

  async add(restaurant) {
    if (!restaurant.id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return (await dbPromise).put(OBJECT_STORE_NAME.FAVORITE, restaurant);
  },

  async remove(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME.FAVORITE, id);
  },
};

export default FavoriteRestoIdb;

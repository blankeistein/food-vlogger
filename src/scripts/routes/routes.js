import Index from '../views/page';
import DetailRestaurant from '../views/page/detail';
import FavoriteRestaurant from '../views/page/favorite';
import PageNotFound from '../views/page/404';

const routes = {
  '/': Index,
  '/detail/:id': DetailRestaurant,
  '/favorite': FavoriteRestaurant,
  '/404': PageNotFound,
};

export default routes;

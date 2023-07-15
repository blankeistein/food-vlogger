import FavoriteRestoIdb from '../../data/restaurant-favorite-db';
import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import AddReviewInitiator from '../../utils/add-review-initiator';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import SkipToContentInitiator from '../../utils/skip-to-content-initiator';
import Loading from '../components/loading';
import RestaurantDetail from '../components/restaurant-detail';

const DetailRestaurant = {
  async render() {
    return `
    <section id="mainContent" tabindex="0" class="restaurant__detail container">
      ${Loading()}
    </section>

    <div id="favoriteBtnContainer" class="favorite__btn_container">
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const restaurantDetailContainer = document.querySelector('.restaurant__detail');

    SkipToContentInitiator.init({
      button: document.getElementById('skipToContent'),
      content: document.getElementById('mainContent'),
    });

    try {
      const restaurant = await RestaurantsSource.detailRestaurant(url.id);
      restaurantDetailContainer.innerHTML = RestaurantDetail(restaurant);

      const addReviewForm = document.getElementById('addReviewForm');
      AddReviewInitiator.init({
        id: restaurant.id,
        form: addReviewForm,
      });

      const favoriteBtnContainer = document.getElementById('favoriteBtnContainer');
      FavoriteButtonPresenter.init({
        favoriteButtonContainer: favoriteBtnContainer,
        favoriteRestaurants: FavoriteRestoIdb,
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          city: restaurant.city,
        },
      });
    } catch (err) {
      restaurantDetailContainer.innerHTML = err.message;
    }
  },
};

export default DetailRestaurant;

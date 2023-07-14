import FavoriteRestoIdb from '../../data/restaurant-favorite-db';
import SkipToContentInitiator from '../../utils/skip-to-content-initiator';
import RestaurantItem from '../components/restaurant-item';

const FavoriteRestaurant = {
  async render() {
    return `
      <section id="mainContent" tabindex="0" class="favorite__container container">
        <h1 class="header__title">
          <i class="fa-solid fa-bookmark text-error"></i>
          Your Favorite Restaurant
        </h1>

        <div id="restaurantsContainer" class="restaurant__container">
        </div>
      </section>
    `;
  },

  async afterRender() {
    SkipToContentInitiator.init({
      button: document.getElementById('skipToContent'),
      content: document.getElementById('mainContent'),
    });

    const restaurantsContainer = document.getElementById('restaurantsContainer');
    const favoriteRestaurants = await FavoriteRestoIdb.getAll();

    restaurantsContainer.innerHTML = '';

    if (favoriteRestaurants.length === 0) {
      restaurantsContainer.classList.add('no-list');
      restaurantsContainer.innerHTML = 'Kamu tidak memiliki restaurant yang kamu simpan';
    } else {
      restaurantsContainer.classList.remove('no-list');
      favoriteRestaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += RestaurantItem(restaurant);
      });
    }
  },
};

export default FavoriteRestaurant;

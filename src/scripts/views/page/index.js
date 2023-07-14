import RestaurantsSource from '../../data/restaurants-source';
import SkipToContentInitiator from '../../utils/skip-to-content-initiator';
import Loading from '../components/loading';
import RestaurantItem from '../components/restaurant-item';

const Index = {
  async render() {
    return `
      <section class="hero__container">
        <div class="hero__wrapper">
          <h1 class="hero__tagline">Exploring Flavors, One Bite at a Time</h1>
          <a href="#restaurantContainer" id="scrollDown" class="hero__action">Scroll Down</a>
        </div>
      </section>

      <section id="mainContent" class="container" tabindex="0">
        <h2 class="headline">Explore Restaurant</h2>
        
        <div class="restaurant__container">
          ${Loading()}
        </div>
      </section>
    `;
  },

  async afterRender() {
    SkipToContentInitiator.init({
      button: document.getElementById('skipToContent'),
      content: document.getElementById('mainContent'),
    });

    const restaurantsContainer = document.querySelector('.restaurant__container');
    try {
      const restaurants = await RestaurantsSource.listRestaurant();
      restaurantsContainer.innerHTML = '';
      const renderedRestaurant = restaurants.map((resto) => RestaurantItem(resto));
      restaurantsContainer.innerHTML = renderedRestaurant.join('');
    } catch (err) {
      restaurantsContainer.innerHTML = err.message;
    }

    SkipToContentInitiator.init({
      button: document.getElementById('scrollDown'),
      content: document.getElementById('mainContent'),
    });
  },
};

export default Index;

import { AddFavoriteButton, RemoveFavoriteButton } from '../views/components/favorite-button';

const FavoriteButtonPresenter = {
  async init({ favoriteButtonContainer, favoriteRestaurants, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._render();
  },

  async _render() {
    const { id } = this._restaurant;

    if (await this._isFavorite(id)) {
      this._renderActive();
    } else {
      this._renderNonActive();
    }
  },

  async _isFavorite(id) {
    const resto = await this._favoriteRestaurants.getOne(id);
    return !!resto;
  },

  _renderNonActive() {
    this._favoriteButtonContainer.innerHTML = AddFavoriteButton();

    const favoriteButton = document.getElementById('favoriteBtn');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.add(this._restaurant);
      this._render();
    });
  },

  _renderActive() {
    this._favoriteButtonContainer.innerHTML = RemoveFavoriteButton();

    const favoriteButton = document.getElementById('favoriteBtn');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.remove(this._restaurant.id);
      this._render();
    });
  },
};

export default FavoriteButtonPresenter;

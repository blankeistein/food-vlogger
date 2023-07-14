import CONFIG from '../../globals/config';
import RestaurantReviewCard from './restaurant-review-card';

const RestaurantDetail = (restaurant) => {
  const {
    name,
    pictureId,
    description,
    city,
    address,
    rating,
    categories,
    menus,
    customerReviews,
  } = restaurant;

  return `
    <header class="detail__header">
      <img class="image__box" height="360px" src="${CONFIG.LARGE_IMAGE_URL + pictureId}" alt="${name}" />
      <h1 class="name">${name}</h1>
      <span class="rating" aria-label="Rating ${rating}">
        <i class="fa-solid fa-star"></i>
        ${rating}
      </span>
    </header>
    
    <section class="info__wrapper">
      <h5>Info</h5>
      <hr />

      <p class="description">
        ${description}
      </p>
      <p class="address">
        <strong>Alamat :</strong> 
        <span>${address}, ${city}</span>
      </p>
      <p class="category">
        <strong>Kategori : </strong>
        ${categories.map((item) => `
            <span class="chip">${item.name}</span>
          `)}
      </p>
    </section>

    <section>
      <h5>Menu</h5>
      <hr />
      
      <div class="menu__container">
        <article class="menu__wrapper food__menu">
          <h6 class="menu__header">
            <i class="fa-solid fa-bowl-food"></i>
            Makanan
          </h6>
          <ul class="list__menu">
            ${menus.foods.map((food) => `
              <li class="list__item">${food.name}</li>
            `).join('')}
          </ul>
        </article>

        <article class="menu__wrapper drink__menu">
          <h6 class="menu__header">
            <i class="fa-solid fa-glass-water"></i>
            Minuman
          </h6>

          <ul class="list__menu">
          ${menus.drinks.map((food) => `
            <li class="list__item">${food.name}</li>
          `).join('')}
          </ul>
        </article>
      </div>
    </section>

    <section>
      <h5>Ulasan</h5>
      <hr />

      <div class="reviews__container">
        ${customerReviews.map((review) => RestaurantReviewCard(review)).join('')}
      </div>
      <div class="add__review">
        <h5>Berikan ulasanmu</h5>

        <form id="addReviewForm">
          <div class="input__wrapper">
            <label for="userName">Nama</label>
            <input  type="text" id="userName" name="name" required/>
          </div>
          <div class="input__wrapper">
            <label for="userReview">Ulasan yang kamu berikan</label>
            <textarea id="userReview" name="review" rows="5" required></textarea> 
          </div>
          <button class="btn" type="submit" aria-label="Tambah Ulasan">
            Tambah Ulasan
          </button>
        </form>
      </div>
    </section>
  `;
};

export default RestaurantDetail;

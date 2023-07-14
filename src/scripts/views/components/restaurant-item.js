import CONFIG from '../../globals/config';

const RestaurantItem = (restaurant) => {
  const {
    id,
    name,
    description,
    pictureId,
    city,
    rating,
  } = restaurant;

  return `
    <article class="restaurant__wrapper">
      <div class="restaurant__thumbnail">
        <figure class="image__box">
          <img class="lazyload" data-src="${CONFIG.MEDIUM_IMAGE_URL + pictureId}" alt="${name}" />
        </figure>

        <div class="badge">
          <span>${city}</span>
        </div>
      </div>

      <div class="restaurant__content">
        <h3 class="title" title="${name}">${name}</h3>
        <p class="rating">
          <i class="fa-solid fa-star"></i>
          ${rating}
        </p>
        <p class="description">${description}</p>
      </div>

      <div class="restaurant__cta">
        <a href="#/detail/${id}" class="btn btn-full">
          Selengkapnya
        </a>
      </div>
    </article>
  `;
};

export default RestaurantItem;

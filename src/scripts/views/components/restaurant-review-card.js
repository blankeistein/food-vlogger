const RestaurantReviewCard = (review) => {
  const { name, review: text, date } = review;

  return `
  <article class="review__wrapper">
    <div class="user__photo">
      <span>
        <i class="fa-solid fa-user fa-xl"></i>
      </span>
    </div>
    <p class="user__name">
      ${name}
    </p>
    <span class="date__review">
      ${date}
    </span>
    <p class="user__review">
      ${text}
    </p>
  </article>
`;
};

export default RestaurantReviewCard;

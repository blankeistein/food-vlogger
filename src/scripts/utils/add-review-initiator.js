import RestaurantsSource from '../data/restaurants-source';

const AddReviewInitiator = {
  init({ id, form }) {
    const inputNameElement = form.querySelector('[name=name]');
    const inputReviewElement = form.querySelector('[name=review]');
    const button = form.querySelector('[type=submit]');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = inputNameElement.value;
      const review = inputReviewElement.value;

      try {
        button.disabled = true;
        button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
        await this._sendReview({ id, name, review });
        button.disabled = false;
        button.innerHTML = 'Tambah Ulasan';
        window.alert('Review berhasil dikirim');
      } catch (err) {
        console.error(err);
        window.alert('Gagal menambah ulasan');
        button.innerHTML = 'Tambah Ulasan';
        button.disabled = false;
      }

      form.reset();
    });
  },

  async _sendReview({ id, name, review }) {
    const reviews = await RestaurantsSource.addReview({ id, name, review });

    return reviews;
  },
};

export default AddReviewInitiator;

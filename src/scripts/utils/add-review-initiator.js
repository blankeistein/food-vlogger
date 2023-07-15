import RestaurantsSource from '../data/restaurants-source';
import { ErrorAlert, SuccessAlert } from '../views/components/alert';

const AddReviewInitiator = {
  init({ id, form }) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      this._sendReview(id, form);
    });
  },

  async _sendReview(id, form) {
    const name = form.querySelector('[name=name]').value;
    const review = form.querySelector('[name=review]').value;
    const button = form.querySelector('[type=submit]');

    const alertContainer = document.querySelector('.add__review .alert__container');
    try {
      button.disabled = true;
      button.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
      await RestaurantsSource.addReview({ id, name, review });
      button.disabled = false;
      button.innerHTML = 'Tambah Ulasan';
      alertContainer.innerHTML = SuccessAlert('Berhasil menambah ulasan');
    } catch (err) {
      console.error(err);
      alertContainer.innerHTML = ErrorAlert(err.message);
      button.innerHTML = 'Tambah Ulasan';
      button.disabled = false;
    }

    form.reset();
  },
};

export default AddReviewInitiator;

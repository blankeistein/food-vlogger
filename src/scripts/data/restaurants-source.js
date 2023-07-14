import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);

    if (!response.ok) {
      throw new Error('Gagal memuat data');
    }

    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));

    if (!response.ok) {
      throw new Error('Gagal memuat data');
    }

    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview({ id, name, review }) {
    const body = JSON.stringify({ id, name, review });
    const headers = { 'Content-Type': 'application/json' };
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, { method: 'POST', body, headers });
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default RestaurantsSource;

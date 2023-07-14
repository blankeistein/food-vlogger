import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.API_BASE_URL}list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.API_BASE_URL}detail/${id}`,
  ADD_REVIEW: `${CONFIG.API_BASE_URL}review`,
};

export default API_ENDPOINT;

const PageNotFound = {
  async render() {
    return `
      <div class="container">
        <h1>404</h1>
        <p>Halaman tidak ditemukan</p>
      </div>
    `;
  },

  async afterRender() {
    return;
  },
};

export default PageNotFound;

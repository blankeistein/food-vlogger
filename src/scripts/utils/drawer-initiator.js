const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, button, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, button, drawer);
    });
  },

  _toggleDrawer(event, button, drawer) {
    event.stopPropagation();
    button.classList.toggle('open');
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, button, drawer) {
    event.stopPropagation();
    button.classList.remove('open');
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;

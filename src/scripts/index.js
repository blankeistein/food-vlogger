import 'regenerator-runtime';
import '../styles/_main.scss';
import App from './app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.getElementById('hamburgerBtn'),
  drawer: document.querySelector('.nav__wrapper'),
  content: document.getElementById('content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

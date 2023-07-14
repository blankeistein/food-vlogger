import routes from './routes/routes';
import UrlParser from './routes/url-parser';
import DrawerInitiator from './utils/drawer-initiator';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initAppShell();
  }

  _initAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = (routes[url]) ? routes[url] : routes['/404'];

    window.scroll({ top: 0, left: 0, behavior: 'instant' });

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }

  _closeDrawer() {
    this._button.classList.remove('open');
    this._drawer.classList.remove('open');
  }
}

export default App;

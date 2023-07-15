const routes = {
  '/': import('../views/page'),
  '/detail/:id': import('../views/page/detail'),
  '/favorite': import('../views/page/favorite'),
  '/404': import('../views/page/404'),
};

export default routes;

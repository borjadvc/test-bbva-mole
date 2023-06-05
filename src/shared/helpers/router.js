import { Router } from '@vaadin/router';
import { View, Route } from '../constants/views.js';

let router;
let location;

const checkPath = ({ pathname }) => Route[pathname] ?? View.Home.id;

function initRouter() {
  const routeViewEl = this.shadowRoot.querySelector('#router-outlet');
  router = new Router(routeViewEl, {
    baseUrl: '/',
  });

  router.setRoutes([
    { path: View.Home.id, component: View.Home.component },
    { path: '(.*)', redirect: View.Home.id },
  ]);

  location = checkPath({ pathname: window.location.pathname });

  return router;
}

export const AppRouter = {
  getRouter() {
    return router ?? initRouter.call(this);
  },
  go({ pathname }) {
    location = this.checkPath({ pathname });

    Router.go({ pathname: location });

    return this.getLocation();
  },
  checkPath,
  getLocation() {
    return location;
  },
  getRootPath() {
    const spliterRoute = location.split('/');
    return spliterRoute.length ? `/${spliterRoute[1]}` : location;
  },
};

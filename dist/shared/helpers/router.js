"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppRouter = void 0;
var _router2 = require("@vaadin/router");
var _views = require("../constants/views.js");
var router;
var location;
var checkPath = function checkPath(_ref) {
  var _Route$pathname;
  var pathname = _ref.pathname;
  return (_Route$pathname = _views.Route[pathname]) !== null && _Route$pathname !== void 0 ? _Route$pathname : _views.View.Home.id;
};
function initRouter() {
  var routeViewEl = this.shadowRoot.querySelector('#router-outlet');
  router = new _router2.Router(routeViewEl, {
    baseUrl: '/'
  });
  router.setRoutes([{
    path: _views.View.Home.id,
    component: _views.View.Home.component
  }, {
    path: _views.View.Game.id,
    component: _views.View.Game.component
  }, {
    path: '(.*)',
    redirect: _views.View.Home.id
  }]);
  location = checkPath({
    pathname: window.location.pathname
  });
  return router;
}
var AppRouter = {
  getRouter: function getRouter() {
    var _router;
    return (_router = router) !== null && _router !== void 0 ? _router : initRouter.call(this);
  },
  go: function go(_ref2) {
    var pathname = _ref2.pathname;
    location = this.checkPath({
      pathname: pathname
    });
    _router2.Router.go({
      pathname: location
    });
    return this.getLocation();
  },
  checkPath: checkPath,
  getLocation: function getLocation() {
    return location;
  },
  getRootPath: function getRootPath() {
    var spliterRoute = location.split('/');
    return spliterRoute.length ? "/".concat(spliterRoute[1]) : location;
  }
};
exports.AppRouter = AppRouter;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = exports.Route = void 0;
var Route = {};
exports.Route = Route;
Route['/home'] = '/home';
Route['/game'] = '/game';
var View = {
  Home: {
    id: Route['/home'],
    title: 'Home',
    component: 'home-view'
  },
  Game: {
    id: Route['/game'],
    title: 'Game',
    component: 'game-view'
  }
};
exports.View = View;
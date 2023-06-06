const Route = {};
Route['/home'] = '/home';
Route['/game'] = '/game';

const View = {
  Home: {
    id: Route['/home'],
    title: 'Home',
    component: 'home-view',
  },
  Game: {
    id: Route['/game'],
    title: 'Game',
    component: 'game-view',
  },
};

export { View, Route };

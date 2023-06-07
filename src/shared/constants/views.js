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
    title: 'TestBBVAMoleView',
    component: 'test-bbva-mole-view',
  },
};

export { View, Route };

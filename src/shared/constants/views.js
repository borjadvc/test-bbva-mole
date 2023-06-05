const Route = {};
Route['/home'] = '/home';

const View = {
  Home: {
    id: Route['/home'],
    title: 'Home',
    component: 'home-view',
  },
};

export { View, Route };

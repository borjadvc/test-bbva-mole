const Route = {};
Route['/login'] = '/login';

const View = {
  Login: {
    id: Route['/login'],
    title: 'Login',
    component: 'login-view',
  },
};

export { View, Route };

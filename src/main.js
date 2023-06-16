import { logIn } from './components/login.js';
import { register } from './components/register.js';

const rootDiv = document.getElementById('root');

export const routes = {
  '/': logIn,
  '/register': register,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.appendChild(routes[pathname]());
};

rootDiv.appendChild(routes[window.location.pathname]());
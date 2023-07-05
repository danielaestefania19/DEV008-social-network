import { logIn } from './components/login.js';
import { register } from './components/register.js';
import { inicio } from './components/inicio.js';

const rootDiv = document.getElementById('root');

export const routes = {
  '/': logIn,
  '/register': register,
  '/inicio': inicio,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname](onNavigate));
};

rootDiv.appendChild(routes[window.location.pathname](onNavigate));

// export const onNavigates = (pathname) => {
// console.log(pathname);
// };

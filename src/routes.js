import { logIn } from './components/login.js';
import { register } from './components/register.js';
import { inicio } from './components/inicio.js';

export const routes = {
  '/': logIn,
  '/register': register,
  '/inicio': inicio,
};

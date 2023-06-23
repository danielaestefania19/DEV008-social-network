import { logIn } from './components/login.js';
import { register } from './components/register.js';
import { inicio } from './components/inicio.js';
import {observador,redirige } from './lib/index.js';

const rootDiv = document.getElementById('root');
const respuesta = observador();

export const routes = {
  '/': logIn,
  '/register': register,
  '/inicio': inicio,
};

const pathPW = redirige();
console.log(pathPW)

export const onNavigate = (pathPW) => {  
  if(respuesta !== null){
  
    
  window.history.pushState({}, pathPW, window.location.origin + pathPW);

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathPW](onNavigate));
   }
};

 rootDiv.appendChild(routes[window.location.pathname](onNavigate));



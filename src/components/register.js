import { registrar } from '../lib/index.js';

export const register = (onNavigate) => {
  const logMainSection = document.createElement('section');
  logMainSection.setAttribute('id', 'idlogin');
  const logInCont = document.createElement('div');
  logInCont.classList.add('loginContainer');

  const containerLogo = document.createElement('div');
  containerLogo.classList.add('loginContainer__logo');
  const logo = document.createElement('img');
  logo.classList.add('loginContainer__logo__img');
  logo.setAttribute('src', 'img/logoNegativo.png');
  const slogan = document.createElement('p');
  slogan.classList.add('loginContainer__logo__label');
  slogan.innerHTML = 'Conecta, emprende e inspira.';

  containerLogo.appendChild(logo);
  containerLogo.appendChild(slogan);

  const containerInput = document.createElement('div');
  containerInput.classList.add('loginContainer__inputs');
  containerInput.setAttribute('id', 'regContainer');
  const email = document.createElement('input');
  email.setAttribute('type', 'text');
  email.setAttribute('placeholder', 'Correo electrónico');
  email.setAttribute('id', 'idEmail');
  email.classList.add('loginContainer__inputs__text');
  const pass = document.createElement('input');
  pass.setAttribute('type', 'password');
  pass.setAttribute('placeholder', 'Contraseña');
  pass.setAttribute('id', 'idPassword');
  pass.classList.add('loginContainer__inputs__text');
  const verifyPass = document.createElement('input');
  verifyPass.setAttribute('type', 'password');
  verifyPass.setAttribute('placeholder', 'Verificar contraseña');
  verifyPass.setAttribute('id', 'idPasswordVerify');
  verifyPass.classList.add('loginContainer__inputs__text');

  containerInput.appendChild(email);
  containerInput.appendChild(pass);
  containerInput.appendChild(verifyPass);

  const containerBtns = document.createElement('div');
  containerBtns.classList.add('loginContainer__botones');
  const createUser = document.createElement('button');
  createUser.classList.add('loginContainer__botones__ing');
  createUser.textContent = 'Crear cuenta';
  const labelO = document.createElement('label');
  labelO.textContent = 'o';
  const gooBtnCreate = document.createElement('button');
  gooBtnCreate.classList.add('loginContainer__botones__goo');
  gooBtnCreate.textContent = 'Crear cuenta con Google';
  const gooImg = document.createElement('img');
  gooImg.setAttribute('src', 'img/goo.png');
  gooBtnCreate.appendChild(gooImg);
  const createAccount = document.createElement('p');
  const noAccount = document.createElement('label');
  noAccount.textContent = '¿Ya tienes cuenta?';
  const IngresaT = document.createElement('a');
  IngresaT.textContent = '¡Ingresa!';

  IngresaT.addEventListener('click', () => onNavigate('/'));
  createUser.addEventListener('click', () => registrar());

  createAccount.appendChild(noAccount);
  createAccount.appendChild(IngresaT);

  containerBtns.appendChild(createUser);
  containerBtns.appendChild(labelO);
  containerBtns.appendChild(gooBtnCreate);
  containerBtns.appendChild(createAccount);

  // createUser.addEventListener('click', () => onNavigate('/inicio'));

  const containertImg = document.createElement('div');
  containertImg.classList.add('loginContainer__idImagen');
  const imgBoun = document.createElement('img');
  imgBoun.classList.add('loginContainer__idImagen__boun');
  imgBoun.setAttribute('src', 'img/flower_peakingRegister.png');
  const imgMujer = document.createElement('img');
  imgMujer.classList.add('loginContainer__idImagen__reg');
  imgMujer.setAttribute('src', 'img/profileRegister.png');

  containertImg.appendChild(imgBoun);
  containertImg.appendChild(imgMujer);

  // Agregar todos los div al div principal
  logInCont.appendChild(containerLogo);
  logInCont.appendChild(containerInput);
  logInCont.appendChild(containerBtns);
  logInCont.appendChild(containertImg);

  logMainSection.appendChild(logInCont);

  return logMainSection;
};

import { registrarUsuario, inicioGoogle } from '../lib/firebase';

export const register = (onNavigate) => {
  const logMainSection = document.createElement('section');
  logMainSection.setAttribute('id', 'idRegister');
  logMainSection.classList.add('sectionReg');
  const logInCont = document.createElement('div');
  logInCont.classList.add('registerContainer');
  const rsgisterImagenCont = document.createElement('div');
  rsgisterImagenCont.classList.add('registerImagenContainer');

  const containerLogo = document.createElement('div');
  containerLogo.classList.add('registerContainer__logo');
  const logo = document.createElement('img');
  logo.classList.add('registerContainer__logo__img');
  logo.setAttribute('src', 'img/logoNegativo.png');
  const slogan = document.createElement('p');
  slogan.classList.add('registerContainer__logo__label');
  slogan.innerHTML = 'Conecta, emprende e inspira.';

  containerLogo.appendChild(logo);
  containerLogo.appendChild(slogan);

  const containerInput = document.createElement('div');
  containerInput.classList.add('registerContainer__inputs');
  containerInput.setAttribute('id', 'regContainer');
  const nameUser = document.createElement('input');
  nameUser.setAttribute('type', 'text');
  nameUser.setAttribute('placeholder', 'Nombre usuario');
  nameUser.setAttribute('id', 'idNameUser');
  nameUser.classList.add('loginContainer__inputs__text');
  const email = document.createElement('input');
  email.setAttribute('type', 'text');
  email.setAttribute('placeholder', 'Correo electrónico');
  email.setAttribute('id', 'idEmail');
  email.required = 'true';
  email.classList.add('registerContainer__inputs__text');
  const pass = document.createElement('input');
  pass.setAttribute('type', 'password');
  pass.setAttribute('placeholder', 'Contraseña');
  pass.setAttribute('id', 'idPassword');
  pass.classList.add('registerContainer__inputs__text');
  const msj = document.createElement('label');
  msj.setAttribute('id', 'idmsjerror');
  msj.classList.add('registerContainer__inputs__error');
  msj.classList.add('alert-content');
  msj.style.display = 'none';

  containerInput.appendChild(email);
  containerInput.appendChild(pass);
  containerInput.appendChild(msj);

  const containerBtns = document.createElement('div');
  containerBtns.classList.add('registerContainer__botones');
  const createUser = document.createElement('button');
  createUser.classList.add('registerContainer__botones__ing');
  createUser.textContent = 'Crear cuenta';
  const labelO = document.createElement('label');
  labelO.textContent = 'o';
  const gooBtnCreate = document.createElement('button');
  gooBtnCreate.classList.add('registerContainer__botones__goo');
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

  createUser.addEventListener('click', () => {
    document.getElementById('idmsjerror').style.display = 'none';
    const email= document.getElementById('idEmail');
    const pass = document.getElementById('idPassword');
    // localStorage.setItem("nameStorage",document.getElementById("idNameUser").value);
    registrarUsuario(email.value, pass.value).then((response) => {
      if(response.user.email !== null) {
        onNavigate('/inicio');
      }
    }).catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      document.getElementById('idmsjerror').style.display='block';
      document.getElementById('idmsjerror').innerHTML='Favor de ingresar correo electrónico y contraseña.';
      //console.log(errorCode, errorMessage);
    });
  });

  gooBtnCreate.addEventListener('click', () => {
    inicioGoogle()
      .then((response) => {
        console.log('my google -->', response);
        onNavigate('/inicio');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      // console.log(errorCode, errorMessage);
      });
  });

  containerBtns.appendChild(createUser);
  containerBtns.appendChild(labelO);
  createAccount.appendChild(noAccount);
  createAccount.appendChild(IngresaT);
  containerBtns.appendChild(gooBtnCreate);
  containerBtns.appendChild(createAccount);

  const containertImg = document.createElement('div');
  containertImg.classList.add('registerImagenContainer__idImagen');
  const imgBoun = document.createElement('img');
  imgBoun.classList.add('registerImagenContainer__idImagen__boun');
  imgBoun.setAttribute('src', 'img/flower_sprout(verde).png');
  const imgMujer = document.createElement('img');
  imgMujer.classList.add('registerImagenContainer__idImagen__reg');
  imgMujer.setAttribute('src', 'img/pwm-register.png');

  containertImg.appendChild(imgBoun);
  containertImg.appendChild(imgMujer);

  // Agregar todos los div al div principal
  logInCont.appendChild(containerLogo);
  logInCont.appendChild(containerInput);
  logInCont.appendChild(containerBtns);
  rsgisterImagenCont.appendChild(containertImg);

  logMainSection.appendChild(logInCont);
  logMainSection.appendChild(rsgisterImagenCont);

  return logMainSection;
};

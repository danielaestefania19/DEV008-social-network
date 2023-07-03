import { iniciaSesionUsuario, inicioGoogle } from "../lib/firebase";


export const logIn = (onNavigate, onNavigates) => {
  const logMainSection = document.createElement('section');
  logMainSection.setAttribute('id', 'idlogin');
  logMainSection.classList.add('sectionLog');
  const logInCont = document.createElement('div');
  logInCont.classList.add('loginContainer');
  const loginImagenCont = document.createElement('div');
  loginImagenCont.classList.add('loginImagenContainer');

  const containerLogo = document.createElement("div");
  containerLogo.classList.add("loginContainer__logo");
  const logo = document.createElement("img");
  logo.classList.add("loginContainer__logo__img");
  logo.setAttribute("src", "img/logoNegativo.png");
  const slogan = document.createElement("p");
  slogan.classList.add("loginContainer__logo__label");
  slogan.innerHTML = "Conecta, emprende e inspira.";

  containerLogo.appendChild(logo);
  containerLogo.appendChild(slogan);

  const containerInput = document.createElement("div");
  containerInput.classList.add("loginContainer__inputs");
  containerInput.setAttribute('id', 'logContainer');
  const email = document.createElement("input");
  email.setAttribute("type", "text");
  email.setAttribute("placeholder", "Usuario");
  email.setAttribute("id", "idUserEmail");
  email.classList.add("loginContainer__inputs__text");
  const pass = document.createElement("input");
  pass.setAttribute("type", "password");
  pass.setAttribute("placeholder", "Contraseña");
  pass.setAttribute("id", "idUserPass");
  pass.classList.add("loginContainer__inputs__text");
  const remember = document.createElement("p");
  remember.classList.add("loginContainer__inputs__rec");
  remember.textContent = "Recuérdame";
  const rememInput = document.createElement("input");
  rememInput.setAttribute("type", "radio");
  rememInput.setAttribute("value", "idrecuerdame");
  remember.appendChild(rememInput);

  containerInput.appendChild(email);
  containerInput.appendChild(pass);
  containerInput.appendChild(remember);

  const containerBtns = document.createElement("div");
  containerBtns.classList.add("loginContainer__botones");
  const iniciaBtn = document.createElement("button");
  iniciaBtn.classList.add("loginContainer__botones__ing");
  iniciaBtn.setAttribute("id", "idBotonInicia");
  iniciaBtn.textContent = "Ingresar";
  const labelO = document.createElement("label");
  labelO.textContent = "o";
  const gooBtn = document.createElement("button");
  gooBtn.setAttribute("id", "idbotongoogle");
  gooBtn.classList.add("loginContainer__botones__goo");
  gooBtn.textContent = "Inicia sesión con tu cuenta de Google";
  const gooImg = document.createElement("img");
  gooImg.setAttribute("src", "img/goo.png");
  gooBtn.appendChild(gooImg);
  const createAccount = document.createElement("p");
  const noAccount = document.createElement("label");
  noAccount.textContent = "¿No tienes cuenta?";
  const creaC = document.createElement("a");
  creaC.textContent = "¡Crea tu cuenta!";
  creaC.addEventListener("click", () => onNavigate("/register"));

  iniciaBtn.addEventListener("click", () => {
    const email = document.getElementById("idUserEmail").value;
    const pass = document.getElementById("idUserPass").value;
    iniciaSesionUsuario(email, pass)
      .then(function (response) {
        console.log("my user -->", response.user);
        if (response.user.email !== null) {
          // guardar esos datos local.storage
          // redirigir
          // onNavigate("/home");
          onNavigate("/inicio");
        }
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });
  gooBtn.addEventListener("click", () => {
    inicioGoogle()
      .then(function (response) {
        console.log("my google -->", response);
        onNavigate("/inicio");
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });
  createAccount.appendChild(noAccount);
  createAccount.appendChild(creaC);
  containerBtns.appendChild(iniciaBtn);
  containerBtns.appendChild(labelO);
  containerBtns.appendChild(gooBtn);
  containerBtns.appendChild(createAccount);

  const containertImg = document.createElement("div");
  containertImg.classList.add("loginImagenContainer__idImagen");
  const imgBoun = document.createElement("img");
  imgBoun.classList.add("loginImagenContainer__idImagen__boun");
  imgBoun.setAttribute("src", "img/flower_peaking.png");
  const imgMujer = document.createElement("img");
  imgMujer.classList.add("loginImagenContainer__idImagen__log");
  imgMujer.setAttribute("src", "img/principal-mobil-powemp.png");

  containertImg.appendChild(imgBoun);
  containertImg.appendChild(imgMujer);

  // Agregar todos los div al div principal
  logInCont.appendChild(containerLogo);
  logInCont.appendChild(containerInput);
  logInCont.appendChild(containerBtns);
  loginImagenCont.appendChild(containertImg);

  logMainSection.appendChild(logInCont);
  logMainSection.appendChild(loginImagenCont);

  return logMainSection;
};

import { salirSesion, pushDoc, unsub } from '../lib/firebase';

export const inicio = (onNavigate) => {
  const inicioSection = document.createElement('section');
  inicioSection.setAttribute('id', 'idInicio');
  const InicioCont = document.createElement('div');
  InicioCont.classList.add('mainContainer');

  const header = document.createElement('header');
  header.classList.add('mainContainer__header');
  const menuBtn = document.createElement('i');
  menuBtn.setAttribute('id', 'openNav');
  menuBtn.classList.add('mainContainer__header__btn');
  menuBtn.classList.add(`${'fa-solid'}`);
  menuBtn.classList.add(`${'fa-bars'}`);
  menuBtn.classList.add(`${'fa-xl'}`);
  const containerLogout = document.createElement('nav');
  containerLogout.setAttribute('id', 'navegate');
  containerLogout.classList.add('mainContainer__header__logout');
  containerLogout.classList.add('mainContainer__header__close');
  containerLogout.classList.add('navAction');
  const btlogout = document.createElement('ul');
  btlogout.classList.add('mainContainer__header__logout__selection');
  btlogout.innerHTML = 'Cerrar sesión';
  const closeMenu = document.createElement('i');
  closeMenu.setAttribute('id', 'closeNav');
  closeMenu.classList.add('mainContainer__header__logout__closebtn');
  closeMenu.classList.add(`${'fa-regular'}`);
  closeMenu.classList.add(`${'fa-circle-xmark'}`);
  closeMenu.classList.add(`${'fa-xl'}`);

  menuBtn.addEventListener('click', () => {
    containerLogout.classList.remove('navAction');
  });
  closeMenu.addEventListener('click', () => {
    containerLogout.classList.add('navAction');
  });

  btlogout.addEventListener('click', () => {
    salirSesion().then(() => {
      onNavigate('/');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  });

  // closeMenu.appendChild(closePopUp);
  containerLogout.appendChild(btlogout);
  containerLogout.appendChild(closeMenu);
  header.appendChild(containerLogout);
  header.appendChild(menuBtn);

  const containerBienvenida = document.createElement('div');
  containerBienvenida.classList.add('mainContainer__bienvenida');
  const right = document.createElement('div');
  right.classList.add('mainContainer__bienvenida__right');
  const logo = document.createElement('img');
  logo.classList.add('mainContainer__bienvenida__right__logo');
  logo.setAttribute('src', 'img/logoPowempNombre.png');
  const containerNombre = document.createElement('div');
  containerNombre.classList.add('mainContainer__bienvenida__nombre');
  const parrfBien = document.createElement('p');
  parrfBien.classList.add('mainContainer__bienvenida__nombre__parr');
  parrfBien.innerHTML = 'Bienvenida,';
  const parrName = document.createElement('p');
  parrName.classList.add('mainContainer__bienvenida__nombre__parrName');
  parrName.innerHTML = `${localStorage.getItem('nameStorage')}`;
  const parrfFeed = document.createElement('p');
  parrfFeed.classList.add('mainContainer__bienvenida__nombre__feed');
  parrfFeed.innerHTML = ('lo nuevo en tu feed');

  header.appendChild(menuBtn);
  right.appendChild(logo);
  containerBienvenida.appendChild(containerNombre);
  containerNombre.appendChild(parrfBien);
  containerNombre.appendChild(parrName);
  containerNombre.appendChild(parrfFeed);

  const fotoPerfil = document.createElement('div');
  fotoPerfil.classList.add('mainContainer__bienvenida__fotoPerfil');
  const iconoCircular = document.createElement('img');
  iconoCircular.setAttribute('src', 'img/iconoCircular.png');
  iconoCircular.classList.add('mainContainer__bienvenida__fotoPerfil__Imagen');

  containerBienvenida.appendChild(fotoPerfil);
  fotoPerfil.appendChild(iconoCircular);

  const containerMenu = document.createElement('div');
  containerMenu.classList.add('mainContainer__menu');
  const inicioBtn = document.createElement('i');
  inicioBtn.classList.add('mainContainer__menu__button');
  inicioBtn.classList.add(`${'fa-solid'}`);
  inicioBtn.classList.add(`${'fa-house'}`);
  inicioBtn.classList.add(`${'fa-xl'}`);
  const negociosBtn = document.createElement('i');
  negociosBtn.classList.add('mainContainer__menu__button');
  negociosBtn.classList.add(`${'fa-solid'}`);
  negociosBtn.classList.add(`${'fa-store'}`);
  negociosBtn.classList.add(`${'fa-xl'}`);

  const perfilBtn = document.createElement('i');
  perfilBtn.classList.add('mainContainer__menu__button');
  perfilBtn.classList.add(`${'fa-solid'}`);
  perfilBtn.classList.add(`${'fa-user'}`);
  perfilBtn.classList.add(`${'fa-xl'}`);

  containerMenu.appendChild(inicioBtn);
  containerMenu.appendChild(negociosBtn);
  containerMenu.appendChild(perfilBtn);

  const containerPublicar = document.createElement('div');
  containerPublicar.classList.add('mainContainer__publicar');
  const btpub = document.createElement('button');
  btpub.classList.add('mainContainer__publicar__button');
  const imgPlus = document.createElement('i');
  imgPlus.classList.add(`${'fa-solid'}`);
  imgPlus.classList.add(`${'fa-plus'}`);

  containerPublicar.appendChild(btpub);
  btpub.appendChild(imgPlus);

  // <label for= "title">Título de tu publicación</label>
  // <input type= "text" placeholder= "Título de tu publicación" class= "content__title"></input>

  btpub.addEventListener('click', () => {
    const publishModal = document.createElement('div');
    publishModal.setAttribute('id', 'idModal');
    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = `
    <label for= "postcontent" class= "content__title">Cuéntanos</label>
    <input type= "text" placeholder= "Escribe aqui..." class= "content__text"></input>
    <div class= "btnContainer">
    <button class= "unstyle is-publish content__publishbtn">Publicar</button>
    <button class= 'unstyle is-ghost content__closeBtn'>Cerrar</button>
    </div>`;

    publishModal.appendChild(content);
    InicioCont.appendChild(publishModal);

    const btnCloseModal = document.querySelector('.content__closeBtn');
    const publishBtn = document.querySelector('.content__publishbtn');

    btnCloseModal.addEventListener('click', () => {
      publishModal.classList.add('closeModal');
    });

    // Obtener datos para post en modal
    publishBtn.addEventListener('click', (e) => {
      const postTitle = document.querySelector('.content__title').value;
      const postContent = document.querySelector('.content__text').value;
      e.preventDefault();
      pushDoc(postTitle, postContent);
    });
  });

  const containerPublicaciones = document.createElement('div');
  containerPublicaciones.classList.add('mainContainer__publicaciones');

  const pintarCosas = (myresponse) => {
    containerPublicaciones.innerHTML = '';
    console.log(myresponse.docs);
    myresponse.docs.forEach((doc) => {
      const textp = document.createElement('div');
      textp.classList.add('mainContainer__publicaciones__text');
      const parrafUserLikes = document.createElement('div');
      parrafUserLikes.classList.add('mainContainer__publicaciones__text__userLikes');
      const circleUser = document.createElement('div');
      circleUser.classList.add('mainContainer__publicaciones__text__imgUser');
      circleUser.classList.add(`${'fa-solid'}`);
      circleUser.classList.add(`${'fa-circle'}`);
      circleUser.classList.add(`${'fa-lg'}`);

      const parrafWord = document.createElement('p');
      parrafWord.classList.add('mainContainer__publicaciones__text__userLikes__userWord');
      // parrafWord.innerHTML = doc.data().user.substr(0, 1);
      const parraforUser = document.createElement('p');
      parraforUser.classList.add('mainContainer__publicaciones__text__userLikes__user');
      parraforUser.innerHTML = doc.data().user;
      const parrafLikes = document.createElement('p');
      parrafLikes.classList.add('mainContainer__publicaciones__text__userLikes__likes');
      parrafLikes.innerHTML = doc.data().likes;
      parrafLikes.classList.add(`${'fa-regular'}`);
      parrafLikes.classList.add(`${'fa-heart'}`);
      const parraforCont = document.createElement('p');
      parraforCont.classList.add('mainContainer__publicaciones__text__content');
      parraforCont.innerHTML = doc.data().postcontent;
      const parraforDate = document.createElement('p');
      parraforDate.classList.add('mainContainer__publicaciones__text__date');
      // parraforDate.innerHTML = doc.data().datePost.toDate().toLocaleDateString('es-MX');

      containerPublicaciones.appendChild(textp);
      textp.appendChild(parraforCont);
      textp.appendChild(parrafUserLikes);
      textp.appendChild(circleUser);
      parrafUserLikes.appendChild(parrafWord);
      parrafUserLikes.appendChild(parraforUser);
      parrafUserLikes.appendChild(parrafLikes);
      textp.appendChild(parraforDate);
    });
  };
  unsub(pintarCosas);

  // QuerySnapshot.forEach((doc) => {
  //   const textp = document.createElement('div');
  //   textp.classList.add('mainContainer__publicaciones__text');
  //   const parrafUserLikes = document.createElement('div');
  //   parrafUserLikes.classList.add('mainContainer__publicaciones__text__userLikes');
  //   const circleUser = document.createElement('div');
  //   circleUser.classList.add('mainContainer__publicaciones__text__imgUser');
  //   circleUser.classList.add(`${'fa-solid'}`);
  //   circleUser.classList.add(`${'fa-circle'}`);
  //   circleUser.classList.add(`${'fa-lg'}`);

  //   const parrafWord = document.createElement('p');
  //   parrafWord.classList.add('mainContainer__publicaciones__text__userLikes__userWord');
  //   parrafWord.innerHTML = doc.data().user.substr(0, 1);
  //   const parraforUser = document.createElement('p');
  //   parraforUser.classList.add('mainContainer__publicaciones__text__userLikes__user');
  //   parraforUser.innerHTML = doc.data().user;
  //   const parrafLikes = document.createElement('p');
  //   parrafLikes.classList.add('mainContainer__publicaciones__text__userLikes__likes');
  //   parrafLikes.innerHTML = doc.data().likes;
  //   parrafLikes.classList.add(`${'fa-regular'}`);
  //   parrafLikes.classList.add(`${'fa-heart'}`);
  //   const parraforCont = document.createElement('p');
  //   parraforCont.classList.add('mainContainer__publicaciones__text__content');
  //   parraforCont.innerHTML = doc.data().postcontent;
  //   const parraforDate = document.createElement('p');
  //   parraforDate.classList.add('mainContainer__publicaciones__text__date');
  //   parraforDate.innerHTML = doc.data().datePost.toDate().toLocaleDateString('es-MX');

  //   containerPublicaciones.appendChild(textp);
  //   textp.appendChild(parraforCont);
  //   textp.appendChild(parrafUserLikes);
  //   textp.appendChild(circleUser);
  //   parrafUserLikes.appendChild(parrafWord);
  //   parrafUserLikes.appendChild(parraforUser);
  //   parrafUserLikes.appendChild(parrafLikes);
  //   textp.appendChild(parraforDate);
  // });

  // Agregar todos los div al div principal
  InicioCont.appendChild(header);
  // InicioCont.appendChild(containerLogout);
  InicioCont.appendChild(right);
  InicioCont.appendChild(containerBienvenida);
  InicioCont.appendChild(containerPublicaciones);
  InicioCont.appendChild(containerPublicar);
  InicioCont.appendChild(containerMenu);
  inicioSection.appendChild(InicioCont);

  return inicioSection;
};

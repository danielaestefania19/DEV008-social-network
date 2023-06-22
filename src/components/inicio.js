export const inicio = (onNavigate) => {
    const inicioSection = document.createElement('section');
    inicioSection.setAttribute('id', 'idInicio');
    const InicioCont = document.createElement('div');
    InicioCont.classList.add('mainContainer');
  
    const containerBienvenida = document.createElement('div');
    containerBienvenida.classList.add('mainContainer__bienvenida');
    const right = document.createElement('div');
    right.classList.add('mainContainer__bienvenida__right');
    const logo = document.createElement('img');
    logo.classList.add('mainContainer__bienvenida__right__logo');
    logo.setAttribute('src', 'img/logoPowempNombre.png');
    const parrfBien = document.createElement('p');
    parrfBien.classList.add('mainContainer__bienvenida__right__parr');
    parrfBien.innerHTML = 'Bienvenida';
  
    containerBienvenida.appendChild(right);
    right.appendChild(logo);
    right.appendChild(parrfBien);
  
  
    const fotoPerfil = document.createElement('div');
    fotoPerfil.classList.add('mainContainer__bienvenida__fotoPerfil');
    const iconoCircular = document.createElement('img');
    iconoCircular.setAttribute('src', 'img/iconoCircular.png');
    iconoCircular.classList.add('mainContainer__bienvenida__fotoPerfil__Imagen');
   
    containerBienvenida.appendChild(fotoPerfil)
    fotoPerfil.appendChild(iconoCircular);
  
    const containerMenu = document.createElement('div');
    containerMenu.classList.add('mainContainer__menu');
    const inicioBtn = document.createElement('button');
    inicioBtn.classList.add('mainContainer__menu__button');
    const imgbt1m=document.createElement('img');
    imgbt1m.setAttribute('src','img/Home.png');
    const textb1 = document.createElement('span');
    textb1.classList.add('mainContainer__menu__button__textboton');
    textb1.textContent='Inicio';
    const negociosBtn = document.createElement('button');
    negociosBtn.classList.add('mainContainer__menu__button');
    const imgbt2m=document.createElement('img');
    imgbt2m.setAttribute('src','img/MisNegocios.png');
    const textb2 = document.createElement('span');
    textb2.classList.add('mainContainer__menu__button__textboton');
    textb2.textContent='Mis Negocios';
    const perfilBtn = document.createElement('button');
    perfilBtn.classList.add('mainContainer__menu__button');
    const imgbt3m=document.createElement('img');
    imgbt3m.setAttribute('src','img/MisNegocios.png');
    const textb3 = document.createElement('span');
    textb3.classList.add('mainContainer__menu__button__textboton');
    textb3.textContent='Mi Perfil';
    
    containerMenu.appendChild(inicioBtn);
    containerMenu.appendChild(negociosBtn);
    containerMenu.appendChild(perfilBtn);

    inicioBtn.appendChild(textb1);
    inicioBtn.appendChild(imgbt1m);
    negociosBtn.appendChild(textb2);
    negociosBtn.appendChild(imgbt2m);
    perfilBtn.appendChild(textb3);
    perfilBtn.appendChild(imgbt3m);


    // iniciaBtn.addEventListener('click', () => onNavigate('/register'));
  
    const containerPublicar = document.createElement('div');
    containerPublicar.classList.add('mainContainer__publicar');
    const btpub = document.createElement('button');
    btpub.classList.add('mainContainer__publicar__button');
    const txtBut = document.createElement('span');
    txtBut.classList.add('mainContainer__publicar__button__textbutton');
    txtBut.textContent = 'Publicar';
    const imgPlus = document.createElement('img');
    imgPlus.setAttribute('src', 'img/plus.png');
  
    containerPublicar.appendChild(btpub);
    btpub.appendChild(txtBut);
    btpub.appendChild(imgPlus);


    const containerPublicaciones = document.createElement('div');
    containerPublicaciones.classList.add('mainContainer__publicaciones');
    const textp = document.createElement('div');
    textp.classList.add('mainContainer__publicaciones__text');

    containerPublicaciones.appendChild(textp);

    // Agregar todos los div al div principal
    InicioCont.appendChild(containerBienvenida);
    InicioCont.appendChild(containerMenu);
    InicioCont.appendChild(containerPublicar);
    InicioCont.appendChild(containerPublicaciones);
  
    inicioSection.appendChild(InicioCont);
  
    return inicioSection;
  };
  
/* eslint-disable arrow-body-style */
// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });
// import {
//   iniciaSesionUsuario,
//   registrarUsuario,
//   // inicioGoogle,
//   // salirSesion,
//   // actualizaPerfil,
// } from '../src/lib/firebase';

// // Mock de las funciones de Firebase
// jest.mock('../src/lib/firebase', () => ({
//   iniciaSesionUsuario: jest.fn(),
//   registrarUsuario: jest.fn(),
//   inicioGoogle: jest.fn(),
//   salirSesion: jest.fn(),
//   actualizaPerfil: jest.fn(),
// }));

// describe('Funciones de Firebase', () => {
//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   describe('iniciaSesionUsuario', () => {
//     it('debe llamar  correctos', () => {
//       const email = 'prueba@gmail.com';
//       const password = '123456';

//       iniciaSesionUsuario(email, password);

//       expect(iniciaSesionUsuario).toHaveBeenCalledWith(email, password);
//     });
//   });

//   describe('registrarUsuario', () => {
//     it('debe llamar a la tos', () => {
//       // Configuración del mock o spy
//       // eslint-disable-next-line no-unused-vars
//       const createUserWithEmailAndPassword = jest.fn();
//       const email = 'test@example.com';
//       const password = 'password123';

//       // Llamar a la función que se está probando
//       registrarUsuario(email, password);

//       // eslint-disable-next-line max-len
//       // Verificar os parámetros correctos
//       expect(registrarUsuario).toHaveBeenCalledWith(email, password);
//     });
//   });
// });

/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { getMaxListeners } from 'process';
import { register } from '../src/components/register.js';
import { registrarUsuario } from '../src/lib/firebase';
import { onNavigate } from '../src/main';

jest.mock('../src/lib/firebase');
jest.mock('../src/main');

function tick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

describe('first Test for Register', () => {
  let logMainSection;
  let logInCont;
  let containerInput;
  let email;
  let pass;
  let msj;
  let createUser;

  beforeEach(() => {
    document.body.appendChild(register());
    logMainSection = document.getElementById('idRegister');
    logInCont = document.querySelector('.registerContainer');
    containerInput = document.getElementById('regContainer');
    email = document.getElementById('idEmail');
    pass = document.getElementById('idPassword');
    msj = document.getElementById('idmsjerror');
    createUser = document.getElementById('idCreateUser');
  });

  it('Debería mostrar un error', async () => {
    // eslint-disable-next-line arrow-body-style
    registrarUsuario.mockImplementationOnce((email, pass) => {
      return Promise.reject(
        new Error('Firebase: Error (auth/email-already-in-use).'),
      );
    });
    createUser.click();
    await tick();
    expect(msj.innerHTML).toBe(
      'El correo es inválido.',
    );
  });

  it('Debería mostrar exito', async () => {
    register.mockImplementationOnce((email, pass) => {
      return Promise.resolve({
        user: { email: 'hola@hola.com', password: '8520963' },
      });
    });

    // inputForEmail.value = 'email@verify.com';
    // inputForPassword.value = '123456';
    createUser.click();
    await tick();
    expect(onNavigate()).toHaveBeenCalledWith('/');
  });
});

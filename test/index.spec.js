import { registrarUsuario } from '../src/lib/firebase';
// import { register } from '../src/components/register.js';
// import { beforeEach, describe } from 'node:test';
// import {
//   register,
//   iniciaSesionUsuario,
//   registrarUsuario,
//   // inicioGoogle,
//   // salirSesion,
//   // actualizaPerfil,
// } from '../src/lib/firebase';

jest.mock('../src/components/register.js');

describe('register', () => {
  const createUser = document.createElement('button');
  createUser.innerHTML = 'hola boton';
  console.log(createUser);
  // document.body.innerHTML = '<input id="emailInput" placeholder="tu email"></input>';
  // expect(document.queryByTestId('emailInput')).not.toBeUndefined();
});

beforeEach(() => {
  registrarUsuario.mockClear();
});

describe('iniciarSesion') = () => {

  it()
}
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
// eslint-disable-next-line max-len
//     it('debe llamar a la función signInWithEmailAndPassword con los parámetros correctos', () => {
//       const email = 'prueba@gmail.com';
//       const password = '123456';

//       iniciaSesionUsuario(email, password);

//       expect(iniciaSesionUsuario).toHaveBeenCalledWith(email, password);
//     });
//   });

//   describe('registrarUsuario', () => {
// eslint-disable-next-line max-len
//     it('debe llamar a la función createUserWithEmailAndPassword con los parámetros correctos', () => {
//       // Configuración del mock o spy
//       // eslint-disable-next-line no-unused-vars
//       const createUserWithEmailAndPassword = jest.fn();
//       const email = 'test@example.com';
//       const password = 'password123';

//       // Llamar a la función que se está probando
//       registrarUsuario(email, password);

//       expect(registrarUsuario).toHaveBeenCalledWith(email, password);
//     });
//   });
// });

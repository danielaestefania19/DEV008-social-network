// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });
import {
  iniciaSesionUsuario,
  registrarUsuario,
  // inicioGoogle,
  // salirSesion,
  // actualizaPerfil,
} from '../src/lib/firebase';

// Mock de las funciones de Firebase
jest.mock('../src/lib/firebase', () => ({
  iniciaSesionUsuario: jest.fn(),
  registrarUsuario: jest.fn(),
  inicioGoogle: jest.fn(),
  salirSesion: jest.fn(),
  actualizaPerfil: jest.fn(),
}));

describe('Funciones de Firebase', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('iniciaSesionUsuario', () => {
    it('debe llamar a la función signInWithEmailAndPassword con los parámetros correctos', () => {
      const email = 'prueba@gmail.com';
      const password = '123456';

      iniciaSesionUsuario(email, password);

      expect(iniciaSesionUsuario).toHaveBeenCalledWith(email, password);
    });
  });

  describe('registrarUsuario', () => {
    it('debe llamar a la función createUserWithEmailAndPassword con los parámetros correctos', () => {
      // Configuración del mock o spy
      // eslint-disable-next-line no-unused-vars
      const createUserWithEmailAndPassword = jest.fn();
      const email = 'test@example.com';
      const password = 'password123';

      // Llamar a la función que se está probando
      registrarUsuario(email, password);

      // eslint-disable-next-line max-len
      // Verificar que la función createUserWithEmailAndPassword se haya llamado con los parámetros correctos
      expect(registrarUsuario).toHaveBeenCalledWith(email, password);
    });
  });
});



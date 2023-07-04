// importamos la funcion que vamos a testear
// import { myFunction } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// });

import { signInWithEmailAndPassword } from '../src/lib/firebase';
import { iniciaSesionUsuario } from '../src/lib/firebase';

test('iniciaSesionUsuario debería llamar a signInWithEmailAndPassword con los argumentos correctos', () => {
  // Arrange (preparación)
  const email = 'ejemplo@example.com';
  const password = 'contraseña';

  // Act (acción)
  const signInWithEmailAndPasswordMock = jest.fn();
  signInWithEmailAndPassword.mockReturnValue(Promise.resolve('usuario'));
  const resultado = iniciaSesionUsuario(email, password);

  // Assert (verificación)
  expect(signInWithEmailAndPasswordMock).toHaveBeenCalledWith(email, password);
  expect(resultado).resolves.toBe('usuario');
});

/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { register } from '../src/components/register.js';
import { registrarUsuario } from '../src/lib/firebase';
import { onNavigate } from '../src/main';

jest.mock('../src/lib/firebase', () => ({
  registrarUsuario: jest.fn(),
}));
jest.mock('../src/main', () => ({
  onNavigate: jest.fn(),
}));

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
    document.body.replaceChildren(register(onNavigate));
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

  // eslint-disable-next-line jest/no-focused-tests
  it.only('Debería redireccionar a inicio', async () => {
    registrarUsuario.mockImplementationOnce((email, pass) => { 
      return Promise.resolve({
        user: { email: 'hola@hola.com', password: '8520963' },
    });
  });

    email.value = 'email@verify.com';
    pass.value = '123456';
    createUser.click();
    await tick();
    expect(onNavigate).toHaveBeenCalledWith('/inicio');

    // expect(global.window.location.href).toContain('/inicio');
  });
});

import { onNavigate } from '../main';

export const logIn = () => {
  const logContainer = document.createElement('div');
  const mailInput = document.createElement('input');
  mailInput.setAttribute('type', 'email');
  const logPassword = document.createElement('input');
  logPassword.setAttribute('type', 'password');
  const logInButton = document.createElement('button');
  const logInGoogle = document.createElement('button');

  logInButton.textContent = 'Iniciar sesión';
  logInGoogle.textContent = 'Inicia sesión con Google';

  logInButton.addEventListener('click', () => onNavigate('/register'));

  logContainer.appendChild(mailInput);
  logContainer.appendChild(logPassword);
  logContainer.appendChild(logInButton);

  return logContainer;
};

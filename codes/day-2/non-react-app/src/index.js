import app from './app'

const appElement = app();
const placeHolder = document.getElementById('root');
placeHolder.appendChild(appElement);
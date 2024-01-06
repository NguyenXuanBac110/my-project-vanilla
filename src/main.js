import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import classes from './main.module.css';

document.querySelector('#app').innerHTML = `
  <div class="${classes.red}">
  hello world
  </div>
   `
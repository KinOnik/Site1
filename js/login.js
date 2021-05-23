var pass = document.querySelector('.vv_pas');
var login = document.querySelector('.vv_log');


pass.addEventListener('input', changeBackground);
login.addEventListener('input', changeBackground);

function changeBackground() {
  if (pass.value !== '' && login.value !== '') {
    document.querySelector('button').style.backgroundImage  = "url('img/logIn_1.png')"
  } else {
    document.querySelector('button').style.backgroundImage  = "url('img/logIn_2.png')";
  }
}
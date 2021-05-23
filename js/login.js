var pass = document.querySelector('.vv_pas');
var login = document.querySelector('.vv_log');
var but = document.querySelector('button');

pass.addEventListener('input', changeBackground);
login.addEventListener('input', changeBackground);
but.addEventListener('click', pustite);
	

function changeBackground() {
  if (pass.value !== '' && login.value !== '') {
    document.querySelector('button').style.backgroundImage  = "url('img/logIn_1.png')"    
  } else {
    document.querySelector('button').style.backgroundImage  = "url('img/logIn_2.png')";
  }
}

function pustite(){
	if (pass.value == '1234' && login.value == 'KinOn') {
  	document.location.href ="news.html";
  } else {
  	alert('Логин или Пароль введены неверно!');
  }
}
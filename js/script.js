const btnMobile = document.querySelector('#btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.querySelector('#nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', 'active');
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


function typeWriter(elemento) {
  const textArray = elemento.innerHTML.split('');
  elemento.innerHTML='';
  textArray.forEach((leter,i) => {
    setTimeout(() => elemento.innerHTML += leter, 75 * i) 
  });
}

const title = document.querySelector('#typeText');


$("#typeText").one('mouseover', function () {
  typeWriter(title);
  clearTimeout(typeWriter)
});

var btn = document.querySelector("#btn");
btn.addEventListener("click", function() {
    var div = document.querySelectorAll(".dev");
    var edu = document.querySelectorAll(".edu");

for (i = 0; i < div.length; i++){
  div[i].style.display = "flex";
}

for (i = 0; i < edu.length; i++){
  edu[i].style.display = "none";
}
});

var btn = document.querySelector("#btn-edu");
btn.addEventListener("click", function() {
    var div = document.querySelectorAll(".dev");
    var edu = document.querySelectorAll(".edu");

for (i = 0; i < div.length; i++){
  div[i].style.display = "none";
}

for (i = 0; i < edu.length; i++){
  edu[i].style.display = "flex";
}
});

var btn = document.querySelector("#btn-all");
btn.addEventListener("click", function() {
    var div = document.querySelectorAll(".dev");
    var edu = document.querySelectorAll(".edu");
for (i = 0; i < div.length; i++){
  div[i].style.display = "flex";
}

for (i = 0; i < edu.length; i++){
  edu[i].style.display = "flex";
}
});


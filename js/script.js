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
const title1 = document.querySelector('#typeText1');
const title2 = document.querySelector('#typeText2');
const title3 = document.querySelector('#typeText3');

$("#typeText").one('mouseover', function () {
  typeWriter(title);
});

$("#typeText1").one('mouseover', function () {
  typeWriter(title1);
});

$("#typeText2").one('mouseover', function () {
  typeWriter(title2);
});

$("#typeText3").one('mouseover', function () {
  typeWriter(title3);
});

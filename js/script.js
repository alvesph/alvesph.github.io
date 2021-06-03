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


class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }

  activeSlide(index) {
    this.active = index;
    this.items.forEach((item) => item.classList.remove('active'));
    this.items[index].classList.add('active');
    this.thumbItems.forEach((item) => item.classList.remove('active'));
    this.thumbItems[index].classList.add('active');
    this.autoSlide();
  }

  prev() {
    if (this.active > 0) {
      this.activeSlide(this.active - 1);
    } else {
      this.activeSlide(this.items.length - 1);
    }
  }

  next() {
    if (this.active < this.items.length - 1) {
      this.activeSlide(this.active + 1);
    } else {
      this.activeSlide(0);
    }
  }

  addNavigation() {
    const nextBtn = this.slide.querySelector('.slide-next');
    const prevBtn = this.slide.querySelector('.slide-prev');
    nextBtn.addEventListener('click', this.next);
    prevBtn.addEventListener('click', this.prev);
  }

  addThumbItems() {
    this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
    this.thumbItems = Array.from(this.thumb.children);
  }

  autoSlide() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.next, 5000);
  }

  init() {
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.items = this.slide.querySelectorAll('.slide-items > *');
    this.thumb = this.slide.querySelector('.slide-thumb');
    this.addThumbItems();
    this.activeSlide(0);
    this.addNavigation();
  }
}

new SlideStories('slide');


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


var btn = document.querySelectorAll(".game");
var a = Math.floor(Math.random() * 14);
var b = Math.floor(Math.random() * 14);
var c = Math.floor(Math.random() * 14);


var div = document.querySelectorAll(".game");

  btn[a].addEventListener("click", function() {
    btn[a].style.backgroundImage = "url('/img/pixel_art.png')";
    btn[a].style.backgroundRepeat = "no-repeat";
    btn[a].style.fontSize = "0px";

  });

  btn[b].addEventListener("click", function() {
    btn[b].style.backgroundImage = "url('/img/bomb.png')";
    btn[b].style.backgroundRepeat = "no-repeat";
    btn[b].style.fontSize = "0px";
  });

  btn[c].addEventListener("click", function() {
    btn[c].style.backgroundImage = "url('/img/bomb.png')";
    btn[c].style.backgroundRepeat = "no-repeat";
    btn[c].style.fontSize = "0px";
  });
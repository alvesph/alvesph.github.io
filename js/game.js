
var btn = document.querySelectorAll(".game");
var a = Math.floor(Math.random() * 14);
var b = Math.floor(Math.random() * 14);
var c = Math.floor(Math.random() * 14);

var life = "on";

btn[a].addEventListener("click", function() {
  if (life === "on") {
    btn[a].style.backgroundImage = "url('/img/logoGame.png')";
    btn[a].style.color = "brown";
    btn[a].style.backgroundColor = "white";
    btn[a].style.borderRadius = "15px";
    btn[a].style.backgroundRepeat = "no-repeat";
    
    
    for (i = 0; i < btn.length; i++) {
      if (i !== a){
        btn[i].style.backgroundImage = "url('/img/serpentina.gif')";
        btn[i].style.borderRadius = "0px";
        btn[i].style.backgroundRepeat = "no-repeat";
      } else {}
    }

    setTimeout(function(){
    for (i = 0; i < btn.length; i++) {
      btn[i].style.backgroundImage = "";
    }
    },10000);

    setTimeout(function(){
      btn[a].style.backgroundImage = "";
      btn[a].style.color = "white";
      btn[a].style.backgroundColor = "black";
      btn[a].style.borderRadius = "0px";
    }, 10000);
  }
});

btn[b].addEventListener("click", function() {
  if (life === "on") {
    btn[b].style.backgroundImage = "url('/img/bomb.png')";
    btn[b].style.backgroundColor = "brown";
    btn[b].style.borderRadius = "15px";
    btn[b].style.backgroundRepeat = "no-repeat";
    life = "off";

    for (i = 0; i < btn.length; i++) {
      if (i !== b){
        btn[i].style.backgroundImage = "url('/img/explosion.gif')";
        btn[i].style.borderRadius = "0px";
        btn[i].style.backgroundRepeat = "no-repeat";
      } else {}
    }

    setTimeout(function(){
    for (i = 0; i < btn.length; i++) {
      btn[i].style.backgroundImage = "";
    }
    },10000);

    setTimeout(function(){
      btn[b].style.backgroundImage = "";
      btn[b].style.color = "white";
      btn[b].style.backgroundColor = "black";
      btn[b].style.borderRadius = "0px";
    }, 10000);
  }
});

btn[c].addEventListener("click", function() {
  if (life === "on") {
    btn[c].style.backgroundImage = "url('/img/bomb.png')";
    btn[c].style.backgroundColor = "brown";
    btn[c].style.borderRadius = "15px";
    btn[c].style.backgroundRepeat = "no-repeat";
    life = "off";

    for (i = 0; i < btn.length; i++) {
      if (i !== c){
        btn[i].style.backgroundImage = "url('/img/explosion.gif')";
        btn[i].style.borderRadius = "0px";
        btn[i].style.backgroundRepeat = "no-repeat";
      } else {}
    }
    
    setTimeout(function(){
    for (i = 0; i < btn.length; i++) {
      btn[i].style.backgroundImage = "";
    }
    },10000);

    setTimeout(function(){
      btn[c].style.backgroundImage = "";
      btn[c].style.color = "white";
      btn[c].style.backgroundColor = "black";
      btn[c].style.borderRadius = "0px";
    }, 10000);
  }
});

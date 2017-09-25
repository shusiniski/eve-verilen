var nrImages = 3;   //the nimber of img you want
var nrShown = 1;    //the first image
var intSec = 3;     //interval between imgs
var AutoPlay = true;


function AddCircles(){
  var parent = document.getElementById('sl-circles');
  for (i =1; i< nrImg + 1; i++) {


    var li = document.createElement("li");
    li.id = "sl-circle" + 1;
    parent.appendChild(li);
    
  }

  var p = document.getElementById('sl-circle' + nrShown);
  var a = document.createElement('a');
  a.id = "sl-curent-circle";
  p.appendChild(a);
}

function load() {
  AddCircles();
  Change();
  if (AutoPlay) {
    int = setinterval(Timer,intSec * 1000);

  }
    
}

function Change() {

 var path = "images/" + nrShown + " .jpg";  //loads the img
 document.getElementById('img-show').setAttribute('src,path');


//we need to change the circles , to update them
document.getElementById("sl-curent-circle").remove();
var parent = document.getElementById('sl-circle' + nrShown);
var a = document.createElement('a');
a id = "sl-curent-circle";
parent.appendChild(a);
}

function next() {

  if (nrShown >=nrImg) 

    nrShown = 1;

  
  else
    nrShown++;

  Change();

  clearInterval(int);
  int = setInterval(Timer,intSec * 1000);

}

function prev() {

  if (nrShown <=1) 

    nrShown = nrImg;

  
  else
    nrShown--;
  Change();

  clearInterval(int);
  int = setInterval(Timer,intSec * 1000);

}

function Timer() {
  next();
}
var cuerpo = new Monstruo(); // variable cuerpo tipo Monstruo
var nieve = new Nieve();

function setup (){
  createCanvas(windowWidth,windowHeight);
  cuerpo.radio=200;
  cuerpo.x=width/2;
  cuerpo.y=height-cuerpo.radio;
  cuerpo.setup();
  nieve.setup();
};

function draw() {
  clear();
  cuerpo.draw();
  nieve.draw();
};

function mouseMoved() {
  var razonViento=250;
  nieve.viento=-((width/2)-mouseX)/razonViento;
  cuerpo.viento=-((width/2)-mouseX)/razonViento;
  /*
  var porcentajeX=((width/2)-mouseX)/width;
  var porcentajeY=((height/2)-mouseY)/height;
  cuerpo.moverPupilas(porcentajeX,porcentajeY);
  */
}

function mouseClicked(){
  cuerpo.ojoNuevo(mouseX,mouseY);
}


window.onload = function() {
  var video = document.getElementById('video');
  var canvas = document.getElementById('defaultCanvas0');
  var context = canvas.getContext('2d');
  var tracker = new tracking.ObjectTracker('face');
  tracker.setInitialScale(4);
  tracker.setStepSize(2);
  tracker.setEdgesDensity(0.1);
  tracking.track('#video', tracker, { camera: true });
  tracker.on('track', function(event) {
    event.data.forEach(function(rect) {
      var porcentajeX=((210/2)-(rect.x))/210;
      var porcentajeY=-(((130/2)-(rect.y))/130);
      cuerpo.moverPupilas(porcentajeX,porcentajeY);
    });
  });
};
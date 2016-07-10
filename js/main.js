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
        //context.clearRect(0, 0, canvas.width, canvas.height);
        event.data.forEach(function(rect) {
          context.strokeStyle = '#a64ceb';
          context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          context.font = '11px Helvetica';
          context.fillStyle = "#fff";
          context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
          context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);

          

          var porcentajeX=((video.width/2)-(rect.x+5))/video.width;
          var porcentajeY=((video.height/2)-(rect.y+12))/video.height;


          //console.log(rect.x+' '+rect.y);

          cuerpo.moverPupilas(porcentajeX,porcentajeY);
        });
      });

      
      /*
      var gui = new dat.GUI();
      gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
      gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
      gui.add(tracker, 'stepSize', 1, 5).step(0.1);
*/
    };
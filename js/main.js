var d= 250;
var numero_pelos=10;
var lineas= new Array();
var x=50;
var y=30;
var cuerpo = new Monstruo(); // variable cuerpo tipo Monstruo
var nieve = new Nieve();
//var ojos = new Ojos();

function setup (){
  createCanvas(windowWidth,windowHeight);
    
  cuerpo.x=width/2;
  cuerpo.y=height/2;
  cuerpo.radio=200;
  cuerpo.setup();
  nieve.setup();
  //ojos.setup();
   
};

function draw() {
  clear();

  cuerpo.draw();
  nieve.draw();
 

};


function mouseMoved() {
  var razonViento=150;
  nieve.viento=-((width/2)-mouseX)/razonViento;
}



/*function mouseClicked(){
  ojos.draw();
}
*/
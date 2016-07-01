var d= 250;
var numero_pelos=10;
var lineas= new Array();
var x=50;
var y=30;
var cuerpo = new Monstruo(); // variable cuerpo tipo Monstruo


function setup (){
	createCanvas(windowWidth,windowHeight);
  background(255);

    for (var i = 0; i <= numero_pelos; i++) {

        lineas[i] = {
          "x":x,       //estoy asignando propiedades a un objeto, sabemos que es un objeto porque esta en llaves
          "y":y,
          "x1":x+3,
          "y1":y+3,
        };
    };
    
   cuerpo.x=width/2;
   cuerpo.y=height/2;
   cuerpo.radio=100;
   console.log(cuerpo.area());
};

function draw() {
  clear();

  ellipse(width/2, height-150, 200,200);
  cuerpo.draw();


/*for (var i = 0; i < numero_pelos; i++) {
      fill(0);
      line(lineas[i].x,lineas[i].y,lineas[i].x1,lineas[i].y1);
      
  } */
    
};

function Monstruo (){  //Objeto
  //Atributos
  this.radio=0;   
  this.x=0;
  this.y=0;
  this.pelos=0;  // Los pelos dependen del radio
  
  //Métodos
  this.draw=function(){
    this.pelos=100*this.radio;
    ellipse(this.x,this.y,this.radio*2,this.radio*2);

    
    for (var i = 0;i < this.pelos ; i++) {
      //var x=random(this.x-,this.x+this.radio);
      //var y=random(this.y-this.radio,this.y+this.radio);
      var alpha=random(0,TWO_PI);
      var radio=random(0,this.radio);

      var x=this.x+(radio*sin(alpha));
      var y=this.y+(radio*cos(alpha));

      point(x,y);
    }

  };
  //Método para saber el area, se escribe en la consola que está en el setup
  this.area=function(){
      return 2*PI*this.radio;
  };

};





/*
function draw(){

	fill(176,173,168);
	ellipse(width/2, height/2, d,d);

}

function mouseDragged() {					//pincel rustico

	line(mouseX, mouseY, pmouseX, pmouseY);
	print(pmouseX + " -> " + mouseX);
	
}


function mouseReleased(){
	fill(200,212,164);
	bezier(width/2, height/2, 600, 480, width/2, height/2, mouseX, mouseY);
	ellipse(mouseX, mouseY,70,70);
	
	fill(0);
	ellipse(mouseX, mouseY,5,10);

	fill(255);
	ellipse(mouseX, mouseY,2,3);


}
*/

/*function dragSegment(i, xin, yin) {
  background(0);

  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);

  tx = mouseX - cos(angle1) * segLength;
  ty = mouseY - sin(angle1) * segLength;
  dx = tx - x2;
  dy = ty - y2;
  angle2 = atan2(dy, dx);
  x = x2 + cos(angle2) * segLength;
  y = y2 + sin(angle2) * segLength;

  segment(x, y, angle1);
  segment(x2, y2, angle2);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}*/



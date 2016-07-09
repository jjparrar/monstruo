var d= 250;
var numero_pelos=10;
var lineas= new Array();
var x=50;
var y=30;
var cuerpo = new Monstruo(); // variable cuerpo tipo Monstruo
var circulos = new Nieve();


function setup (){
	createCanvas(windowWidth,windowHeight);
  //background(255);

    /*for (var i = 0; i <= numero_pelos; i++) {

        lineas[i] = {
          "x":x,       //estoy asignando propiedades a un objeto, sabemos que es un objeto porque esta en llaves
          "y":y,
          "x1":x+3,
          "y1":y+3,
        };
    };*/
    
   cuerpo.x=width/2;
   cuerpo.y=height/2;
   cuerpo.radio=200;
   cuerpo.setup();
   
};

function draw() {
  clear();


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
  this.n_pelos=0;  // Los pelos dependen del radio
  this.pelos= new Array();
  this.viento=5;

  //Métodos
  this.setup=function(){

    this.n_pelos=30*this.radio;

    for (var i = 0;i < this.n_pelos ; i++) {
      //var x=random(this.x-,this.x+this.radio);
      //var y=random(this.y-this.radio,this.y+this.radio);
      var alpha=random(0,TWO_PI);
      var radio=random(this.radio*0.05,this.radio);

      var x=this.x+(radio*sin(alpha));
      var y=this.y+(radio*cos(alpha));

      this.pelos.push({
        "x": x,
        "y": y
      });
    };
  };
  
  
  this.draw=function(){
    
    ellipse(this.x,this.y,this.radio*2,this.radio*2);
    noFill();

    for (var i = 0;i < this.n_pelos ; i++) {

      bezier(this.pelos[i].x,this.pelos[i].y,this.pelos[i].x-10,this.pelos[i].y-10, this.pelos[i].x-20+random(0,this.viento),this.pelos[i].y+20,this.pelos[i].x-20+random(0,this.viento),this.pelos[i].y+30);

    }   
    

  };
  //Método para saber el area
  this.area=function(){
      return 2*PI*this.radio;
  };

};


function Nieve(){
  //Atributos
  this.d=0;
  this.nievex=0;
  this.nievey=0;
  this.velocidadx=0;
  this.velocidady=0;
  this.color=0;
  this.circulos=0;
  //Metodos

 
  this.setup=function(){

    this.circulos=4;

    for(var i = 0; i < this.circulos.length; i++){

      var nievex=random(0,width);      
      var nievey=random(0,height);
      var d=random(10,40);
      var valocidadx=random(5,20);
      var velocidady=random(20,30);
      var color=[random(240,255),random(240,255),random(240,255),random(0,1)]; 
   
    }
    
  }


 this.draw=function(){

    //noStroke();
    console.log(this.circulos.length);

    for (var i = 0; i < this.circulos.length; i++) {
      
      fill(this.color[0], this.color[1],this.color[2],this.color[3]);
      ellipse(this.nievex,this.nievey,this.d,this.d);
      

      this.nievex += this.velocidadx;
      this.nievex += this.velocidadx;
      

      /*if (circulos[i].nievex > width) {

        circulos[i].nievex=0;
      };
      if (circulos[i].nievey > height) {

        circulos[i].nievey=0;
      };

      if (circulos[i].nievex < 0) {

        circulos[i].nievex=width;
      };
      if (circulos[i].nievey < 0) {

        circulos[i].nievey=height;
      };*/

      
    };
  };


}




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



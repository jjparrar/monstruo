var d= 250;
var numero_pelos=10;
var lineas= new Array();
var x=50;
var y=30;

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
    }

   
}

function draw() {
  clear();
     for (var i = 0; i < numero_pelos; i++) {
      fill(0);
      line(lineas[i].x,lineas[i].y,lineas[i].x1,lineas[i].y1);
      
    } 
 


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



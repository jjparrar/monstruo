
var n = 10;
var circulos = new Array();

function setup (){
	createCanvas(windowWidth,windowHeight);

	for(var i = 0; i < n; i++){

		circulos[i] = {
			"x":random(0,width),       //estoy asignando propiedades a un objeto, sabemos que es un objeto porque esta en llaves
			"y":random(0,height),
			"d":random(10,40),
			"speedX":random(5,20),
			"speedY":random(20,30),
			"color":[random(240,255),random(240,255),random(240,255),random(0,1)] // estoy poniendo aleatorio el color
		};
	}
}

function draw() {
	clear();
	noStroke();

	for (var i = 0; i < circulos.length; i++) {
		
		fill(circulos[i].color[0], circulos[i].color[1],circulos[i].color[2]);
		ellipse(circulos[i].x,circulos[i].y,circulos[i].d,circulos[i].d);
		

		circulos[i].x += circulos[i].speedX;
		circulos[i].y += circulos[i].speedY;



		if (circulos[i].x > width) {

			circulos[i].x=0;
		}
		if (circulos[i].y > height) {

			circulos[i].y=0;
		}

		if (circulos[i].x < 0) {

			circulos[i].x=width;
		}
		if (circulos[i].y < 0) {

			circulos[i].y=height;
		}

		
	}

}
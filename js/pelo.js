function Pelo(){
	this.x=0;
	this.y=0;
	this.largo=0;
	this.ondulado=7;

	this.setup=function(x,y){
		this.x=x;
		this.y=y;
		this.largo=random(30,40);
	};


	this.draw=function(viento){
		noFill();
		stroke(255);
		bezier(
			this.x,this.y,
			this.x+(viento*random(0,this.ondulado)),this.y-(2*this.largo/3),
			this.x+(viento*random(0,this.ondulado)),this.y+(2*this.largo/3),
			this.x+(viento*random(0,this.ondulado)),this.y+this.largo
		);

		//curveTightness(5);
		//beginShape();
		//vertex(this.x1,this.y1); //Punto 1

		//console.log(((this.x2-this.x1)/4));

		//curveVertex(this.x1,this.y1);





		//curveVertex(this.x1-(this.direccion*(this.x2-this.x1)/4),this.y1+((this.x2-this.x1)/2));
		//curveVertex(this.x1-(this.direccion*(this.x2-this.x1)/2),this.y2+((this.x2-this.x1)));
		//curveVertex((this.x1+this.x2)/2,this.y2+(1.8*(this.x2-this.x1)));
		//curveVertex(this.x1-(this.direccion*(this.x2-this.x1)/4),this.y1+((this.x2-this.x1)));
		//curveVertex(this.x1-(this.direccion*(this.x2-this.x1)/4),this.y1+((this.x2-this.x1)/2));
		//curveVertex(this.x3,this.y3);

		//curveVertex(this.x2,this.y2);


		//line(this.x1,this.y1);
/*
		bezierVertex(
			this.x1-(this.direccion*(this.x2-this.x1)/4),this.y1+((this.x2-this.x1)/2),
			this.x1-(this.direccion*(this.x2-this.x1)/2),this.y2+((this.x2-this.x1)),
			(this.x1+this.x2)/2,this.y2+(1.8*(this.x2-this.x1)) //Punto 3
		);

		bezierVertex(
			this.x1-(this.direccion*(this.x2-this.x1)/4),this.y1+((this.x2-this.x1)),
			this.x1-(this.direccion*(this.x2-this.x1)/4),this.y1+((this.x2-this.x1)/2),
			this.x2,this.y2	//Punto 2
		);
*/
		/*
		bezierVertex(
			//this.x1,this.y1,
			this.x1-((this.y3-this.y1)*0.2),this.y1+((this.y3-this.y1)*0.1),
			this.x1+((this.y3-this.y1)*0.1),this.y1+((this.y3-this.y1)*0.2),
			this.x3,this.y3
		);*/
		/*
		vertex(this.x2,this.y2);
		bezierVertex(
			this.x2,this.y2,
			this.x2-((this.y3-this.y2)*0.1),this.y2+((this.y3-this.y2)*0.1),
			this.x2+((this.y3-this.y2)*0.1),this.y2+((this.y3-this.y2)*0.2),
			this.x3,this.y3
		);
		*/
		//endShape(CLOSE);
	};
};
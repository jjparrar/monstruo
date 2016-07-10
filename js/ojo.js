function Ojo(){
	//Atributos
	this.origX=0;
	this.origY=0;
	this.x=0;
	this.y=0;
	this.radio=0;
	this.color=0;
	this.pupilaX=0;
	this.pupilaY=0;
	this.pupila=0;
	this.brazoX=0;
	this.brazoY=0;

	//Metodos
	this.setup=function(x,y,brazoX,brazoY){
		this.x=x;
		this.y=y;
		this.origX=x;
		this.origY=y;
		this.radio=random(10,40);
		this.color=255;
		this.pupila=this.radio*0.1;
		this.pupilaX=this.x;
		this.pupilaY=this.y;
		this.brazoX=brazoX;
		this.brazoY=brazoY;
	};

	this.draw=function(){
		noFill();
		stroke(this.color);
		strokeWeight(2);
		bezier(
			this.brazoX,this.brazoY,
			this.x,this.y-150,
			this.x+20,this.y,
			this.x,this.y
		);
		strokeWeight(1);
		noStroke();
		fill(this.color);
		ellipse(this.x,this.y,this.radio*2,this.radio*2);
		fill(0);
		ellipse(this.pupilaX,this.pupilaY,this.pupila*2,this.pupila*2);
	};

	this.moverPupila=function(porcentajeX,porcentajeY){
		this.pupilaX=this.x+(this.radio*porcentajeX);
		this.pupilaY=this.y+(this.radio*porcentajeY);
	};

	this.moverViento=function(viento){
		this.x=random(this.origX,this.origX+(viento*3));
	};
};
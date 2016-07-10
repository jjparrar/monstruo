function Ojo(){
	//Atributos
	this.x=0;
	this.y=0;
	this.radio=0;
	this.color=0;
	this.pupilaX=0;
	this.pupilaY=0;
	this.pupila=0;
	this.brazo=0;

	//Metodos
	this.setup=function(x,y){
		this.x=x;
		this.y=y;
		this.radio=random(10,40);
		this.color=255;
		this.pupila=this.radio*0.1;
		this.pupilaX=this.x;
		this.pupilaY=this.y;
		//this.brazo=0;


	};

	this.draw=function(){
		noStroke();
		fill(this.color);
		ellipse(this.x,this.y,this.radio*2,this.radio*2);
		fill(0);
		ellipse(this.pupilaX,this.pupilaY,this.pupila*2,this.pupila*2);
	};

	this.moverPupila=function(porcentajeX,porcentajeY){
		this.pupilaX=this.x+this.radio*porcentajeX;
		this.pupilaY=this.y+this.radio*porcentajeY;
	};

};
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
	};
};
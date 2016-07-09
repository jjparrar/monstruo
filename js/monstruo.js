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
    stroke(255,255,255);
    ellipse(this.x,this.y,this.radio*2,this.radio*2);
    noFill();

    for (var i = 0;i < this.n_pelos ; i++) {
      stroke(0,0,0);
      bezier(this.pelos[i].x,this.pelos[i].y,this.pelos[i].x-10,this.pelos[i].y-10, this.pelos[i].x-20+random(0,this.viento),this.pelos[i].y+20,this.pelos[i].x-20+random(0,this.viento),this.pelos[i].y+30);

    }   
    

  };
  //Método para saber el area
  this.area=function(){
      return 2*PI*this.radio;
  };

};



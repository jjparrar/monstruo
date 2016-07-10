function Monstruo (){  //Objeto
  //Atributos
  this.radio=0;   
  this.x=0;
  this.y=0;
  this.n_pelos=0;  // Los pelos dependen del radio
  this.pelos= new Array();
  this.viento=5;
  this.ojos=new Array();
  this.viento=0;

  //Métodos
  this.setup=function(){
    /*this.n_pelos=30*this.radio;
    for (var i = 0;i < this.n_pelos ; i++) {
      var alpha=random(0,TWO_PI);
      var radio=random(this.radio*0.05,this.radio);
      var x=this.x+(radio*sin(alpha));
      var y=this.y+(radio*cos(alpha));
      this.pelos.push({
        "x": x,
        "y": y
      });
    };*/
    this.n_pelos=2*this.radio;
    for (var i = 0;i < this.n_pelos ; i++) {
      var alpha=random(0,TWO_PI);
      //var radio=random(this.radio*0.05,this.radio);
      var x=this.x+(this.radio*sin(alpha));
      var y=this.y+(this.radio*cos(alpha));
      


      var pelo=new Pelo();
      pelo.setup(x,y);
      this.pelos.push(pelo);
    }
  };
  
  
  this.draw=function(){
    stroke(255,255,255);
    fill(255);
    ellipse(this.x,this.y,this.radio*2,this.radio*2);
    //noFill();
    fill(255,0,0);
    for (var i in this.pelos) {
      //stroke(0,0,0);
      
      this.pelos[i].draw(this.viento);

      //console.log(this.pelos[i]);
      //bezier(this.pelos[i].x,this.pelos[i].y,this.pelos[i].x-10,this.pelos[i].y-10, this.pelos[i].x-20+random(0,this.viento),this.pelos[i].y+20,this.pelos[i].x-20+random(0,this.viento),this.pelos[i].y+30);

    }   
    

    for(var i in this.ojos){
      this.ojos[i].moverViento(this.viento);
      this.ojos[i].draw();
    }

  };
  //Método para saber el area
  this.area=function(){
      return 2*PI*this.radio;
  };

  //Método que crea un ojo en el monstruo
  this.ojoNuevo=function(x,y){
    var brazoX=this.x;
    var brazoY=this.y;
    var ojo=new Ojo();
    ojo.setup(x,y,brazoX,brazoY);
    this.ojos.push(ojo);
  };

  //Mueve las pupilas de todos los ojos
  this.moverPupilas=function(porcentajeX,porcentajeY){
    for(var i in this.ojos){
      this.ojos[i].moverPupila(porcentajeX,porcentajeY);
    }
  };

};



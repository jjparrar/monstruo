
function Copo(){
  //Atributos
  this.x=0;
  this.y=0;
  this.velocidad=0;
  this.radio=0;
  this.color=0;

  //Métodos
  this.setup=function(){
    this.x=random(0,width);
    this.y=random(0,height);
    this.radio=random(1,10);
    this.velocidad=0.5*this.radio;
    this.color=[random(240,255),random(240,255),random(240,255),random(0,1)];
  };

  this.draw=function(){
    noStroke();
    fill(this.color[0],this.color[1],this.color[2]);
    ellipse(this.x,this.y,this.radio*2,this.radio*2);
  };

  this.mover=function(viento){
    if(this.y>height){
      this.y=0;
    }else{
      this.y+=this.velocidad;
    }
    if(this.x>width){
      this.x=0;
    }else if(this.x<0){
      this.x=width;
    }else{
      this.x+=(viento*this.radio);
    }
  };
};

function Nieve(){
  //Atributos
  this.numeroCopos=0;
  this.copos=new Array();
  this.millis=0;
  this.tiempoAnterior=0;
  this.viento=0;

  //Metodos
  this.setup=function(){
    this.numeroCopos=200;
    for(var i = 0; i < this.numeroCopos; i++){
      var copo=new Copo();
      copo.setup();
      this.copos.push(copo);
    }
  };

  this.draw=function(){
    this.millis=millis()-this.tiempoAnterior;
    for(var i = 0; i < this.numeroCopos; i++){
      var copo=this.copos[i];
      copo.draw();
    }
    if(this.millis>10){
      for(var i = 0; i < this.numeroCopos; i++){
        var copo=this.copos[i];
        copo.mover(this.viento);
      }
      
      this.millis=0;
      this.tiempoAnterior=millis();
    }
  };
};
class Paper {
   constructor (x,y,r){
       var options ={
           isStatic: false,
           restitution: 0.3,
           friction:0.5,
           density:1.2
       }
       this.r=r;
       this.bodies = Bodies.circle(x,y,r,options);
       World.add(world,this.bodies);
       this.image = loadImage("Image/paper.png");
    }

       display(){
       var paperpos=this.bodies.position;
       push();
       translate(paperpos.x,paperpos.y);   
       ellipseMode(RADIUS);
       strokeWeight(3);
       fill(255,0,255);
       ellipse(0,0,this.r,this.r);
       pop()
       }
    }

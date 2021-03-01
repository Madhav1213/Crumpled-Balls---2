const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperImage;
var dustbinImage;

function preload(){
  paperImage=loadImage("Image/paper.png");
  dustbinImage=loadImage("Image/dustbin.png");
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	floor = new Floor(400,670,800,10); 
  paper = new Paper(150,650,20);

  line1 = new Dustbin (310,620,20,100);
	line2 = new Dustbin (410,660,200,20);
	line3 = new Dustbin (510,620,20,100);
  
	Engine.run(engine);
  
}


function draw() {
  background(0);
  paper.display();
  floor.display();
  paperImage.display();
  dustbinImage.display();
  
}

function keyPressed() {
  if (keyCode === UP_ARROW ){
    Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
  }
}




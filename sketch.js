const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;



  ground1 = new Ground(500,500,1000,10);
  ground2 = new Ground(400,450,200,20);
  
  polygon1 = new Polygon(60,300,40);

  // five blocks
  block1 = new Block(400,400,20,20);
  block2 = new Block(420,400,20,20);
  block3 = new Block(440,400,20,20);
  block4 = new Block(480,400,20,20);
  block5 = new Block(500,400,20,20);
  // three blocks
  block6 = new Block(420,380,20,20);
  block7 = new Block(440,380,20,20);
  block8 = new Block(460,380,20,20);
  // two blocks
  block9 = new Block(430,380,20,20);
  block10 = new Block(450,380,20,20);
  // one block
  block11 = new Block(440,360,20,20);
  
  
	

	
   
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
 Engine.update(engine);
   
  ground1.display();
  polygon1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  drawSprites();
}

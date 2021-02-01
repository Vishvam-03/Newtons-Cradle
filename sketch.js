
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200, 200, 20, 20);
	bob2 = new Bob(150, 200, 20, 20);
	bob3 = new Bob(100, 200, 20, 20);
	bob4 = new Bob(250, 200, 20, 20);
	bob5 = new Bob(300, 200, 20, 20);
	ground = new Ground(350, 200, 500, 60);
	chain1 = new Chain(bob1.body,ground.body);
	chain2 = new Chain(bob2.body,ground.body);
	chain3 = new Chain(bob3.body,ground.body);
	chain4 = new Chain(bob4.body,ground.body);
	chain5 = new Chain(bob5.body,ground.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  ground.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display() 
  drawSprites();
}




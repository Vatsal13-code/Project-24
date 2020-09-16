
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	Waste = new Paper(50,650,10)


	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine)
  Waste.display();
	
  drawSprites();
 
}




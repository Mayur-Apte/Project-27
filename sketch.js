
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

	bobOject1 = new bob(400,600);
	bobOject2 = new bob(370,600);
	bobOject3 = new bob(340,600);
	bobOject4 = new bob(430,600);
	bobOject5 = new bob(460,600);
	roofObject = new roof(400,40,200,40);
	rope1 = new rope(bobOject1.body,roofObject.body,-bobDiameter*2,0)
	rope2 = new rope(bobOject2.body,roofObject.body,-bobDiameter*2,0)
	rope3 = new rope(bobOject3.body,roofObject.body,-bobDiameter*2,0)
	rope4 = new rope(bobOject4.body,roofObject.body,-bobDiameter*2,0)
	rope5 = new rope(bobOject5.body,roofObject.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}




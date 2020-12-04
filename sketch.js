
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

	//Create the Bodies Here.
	bar = new Roof(400,100,300,35)

	bobObject1 = new Bob(400,400,50)
	bobObject2 = new Bob(350,400,50)
	bobObject3 = new Bob(300,400,50)
	bobObject4 = new Bob(450,400,50)
	bobObject5 = new Bob(500,400,50)

	rope1 = new Rope(bobObject1.body,bar.body,0*2,0)
	rope2 = new Rope(bobObject2.body,bar.body,-25*2,0)
	rope3 = new Rope(bobObject3.body,bar.body,-50*2,0)
	rope4 = new Rope(bobObject4.body,bar.body,25*2,0)
	rope5 = new Rope(bobObject5.body,bar.body,50*2,0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bar.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW)[
	Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-15,y:-15})
  ]
}



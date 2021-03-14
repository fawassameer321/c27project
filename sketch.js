
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

	groundObj = new Ground(400,100,400,20);	Engine.run(engine);
	bobObj1 = new bob(400-150,400,70,50);Engine.run(engine);
	bobObj2 = new bob(400-70,400,70,50);Engine.run(engine);
	bobObj3 = new bob(400,400,70,50);Engine.run(engine);
	bobObj4 = new bob(400+70,400,70,50);Engine.run(engine);
	bobObj5 = new bob(400+150,400,70,50);Engine.run(engine);
   // rope = new rope(groundObj.body);Engine.run(engine)
   Slingshot1= new Slingshot(bobObj1.body,groundObj.body,-150,0)
   Slingshot2= new Slingshot(bobObj2.body,groundObj.body,-70,0)
   Slingshot3= new Slingshot(bobObj3.body,groundObj.body,0,0)
   Slingshot4= new Slingshot(bobObj4.body,groundObj.body,70,0)
   Slingshot5= new Slingshot(bobObj5.body,groundObj.body,150,0)
   
}


function draw() {
  rectMode(CENTER);
  background(180)
  
  groundObj.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  
  Slingshot1.display();
  Slingshot2.display();
  Slingshot3.display();
  Slingshot4.display();
  Slingshot5.display();
  drawSprites() 
}




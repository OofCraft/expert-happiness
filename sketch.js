
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var a,b,c,d,e;
var world;


function setup() {
	createCanvas(windowWidth/2, windowHeight/2);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	bob1 = new P(200,270,60);
	bob2 = new P(260,270,60);
	bob3 = new P(320,270,60);
	bob4 = new P(380,270,60);
	bob5 = new P(440,270,60);

	a = new Sling(bob1.body,200,60);
  
}


function draw() {
  rectMode(CENTER);
  //engine.update();
  Engine.update(engine);
  background(230);
  //roofObject.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	a.display();
}


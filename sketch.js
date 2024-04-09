
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ballOptions = {
		restitution : 0.9,
    	frictionAir : 0.01,
		isstatic : false,
		density : 1.2
	}
	ball = Bodies.circle(200,200, 10, ballOptions)
	World.add(world, ball)
	ellipseMode(RADIUS)
	ground = new Ground(300,590, 600,20)
	World.add(world, ground)
	ground2 = new Ground(300,10, 600,20)
	ground3 = new Ground(10,300, 20,600)
	World.add(world, ground2)
	World.add(world, ground3)
	ground4 = new Ground(590,300, 20,600)
	World.add(world, ground4)

	wall1 = new Ground(450,550, 8,100)
	World.add(world, wall1)
	wall2 = new Ground(550,550, 8,100)
	World.add(world, wall2)
	Engine.run(engine);
	

}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,10)
  ground.display()
  ground2.display()
  ground3.display()
  ground4.display()
  wall1.display()
  wall2.display()
  if(keyDown(UP_ARROW)  ){
	h_force()
  }
  drawSprites();
 
}

function h_force(){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:1, y:1})
  }


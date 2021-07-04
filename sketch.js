const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  btn1 = createImg("up.png");
  btn1.position(100,100);
  btn1.size(50,50);
  btn1.mouseClicked(ballUP)

  btn2 = createImg("right.png");
  btn2.position(200,100);
  btn2.size(50,50);
  btn2.mouseClicked(ballRIGHT);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ball = Bodies.circle(200,200,20,20);
  World.add(world,ball);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20);
}
function ballUP()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
function ballRIGHT()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

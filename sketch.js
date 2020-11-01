const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine,world;
var stand;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var slingShot

function setup() {
  createCanvas(800,400);
  
  // creating a stand for the pyramid
  stand = new Ground(400,750,100,30);

  // creating blocks

  // level two
   block8 = new Box(330,235,30,40);
   block9 = new Box(360,235,30,40);
   block10 = new Box(390,235,30,40);
   block11 = new Box(420,235,30,40);
   block12 = new Box(450,235,30,40);
  
   // level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  // top level 
  block16 = new Box(390,155,30,40);

  // polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  world.add(world ,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});
  

}

function draw() {
  background(0);
  
  stand.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  polygon.display();

  slingShot.display();


  drawSprites();
}

function mouseDragged(){

  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

  slingShot.fly();
}
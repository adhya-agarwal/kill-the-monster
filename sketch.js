const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var holder,ball;
var stand1,stand2,stand3;
var ball;
var slingShot;
var polygon_img;
var thanosimg;
var thanos;
var score=0

function preload(){
  polygon_img=loadImage("black_widow2-removebg-preview.png");
  thanosimg=loadImage("thanos-removebg-preview (1).png");
}



function setup() {
  createCanvas(1400,650);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


 
  stand1 = new Stand(300,600,1450,20);
 // stand2 = new Stand(900,500,200,10);
 
 
 
  block1 = new Block(600,575,70,70);
  console.log(block1);
  block2 = new Block(670,575,70,70);
  block3 = new Block(600,505,70,70);
  block4 = new Block(670,505,70,70);
  block5 = new Block(600,435,70,70);
  block6 = new Block(670,435,70,70);
  block7 = new Block(600,365,70,70);
  
  block8 = new Block(670,365,70,70);
  block9 = new Block(600,295,70,70);
  block10 = new Block(670,295,70,70);
  block11 = new Block(600,225,70,70);
  block12 = new Block(670,225,70,70);
  
  block13 = new Block(600,155,70,70);
  block14 = new Block(670,155,70,70);

  thanos=new Villian(840,400,180,280)
  //block15 = new Block(420,495,70,70);
  
 // block16 = new Block(390,455,70,70);

  
 /* blocks1 = new Block(840,475,30,40);
  blocks2 = new Block(870,475,30,40);
  blocks3 = new Block(900,475,30,40);
  blocks4 = new Block(930,475,30,40);
  blocks5 = new Block(960,475,30,40);
 
  blocks6 = new Block(870,435,30,40);
  blocks7 = new Block(900,435,30,40);
  blocks8 = new Block(930,435,30,40);
  
  blocks9 = new Block(900,395,30,40);*/

 
  ball = Bodies.circle(50,400,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:200,y:400});

}
function draw() {
  background("black"); 
 
 strokeWeight(4);
 stroke("pink")
 textSize(30)
 fill("hotpink")
 text("Drag the black widow like a sling to shoot the building and kill thanos",200,50);
  
 
  stand1.display();
 // stand2.display();

  strokeWeight(2);
  stroke("white");
 
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
  block12.display();
 
  block13.display();
  block14.display();
thanos.display();
 // block15.display();
 
 // block16.display();
 
 /* blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  
  blocks6.display();
  blocks7.display();
  blocks8.display();
  
  blocks9.display();*/
  
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,250,300);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
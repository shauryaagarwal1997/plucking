
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy;
var stone;
var constraint;

function preload(){
	boy=loadImage("images/boy.png");
	stone=loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(980,100,30);
	mango3=new mango(1000,190,30);
	mango4=new mango(1170,160,30);
	mango5=new mango(920,180,30);
	mango6=new mango(1100,200,30);
	mango7=new mango(1230,230,30);
	mango8=new mango(970,250,30);

	stone=new Stone(235,415,20,20);

	constraint=new Chain(stone.body,{x:235,y:415})

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();

  groundObject.display();

  constraint.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	constraint.fly();
}
function keyPressed(){
	if(keyCode === 32){
		constraint.attatch();
	}
}
function detectCollision(astone,amango){
	mangoBodyPosition=amango.body.setPosition
	stoneBodyPosition=astone.body.setPosition

	var distance = dist(astone.body.position.x,astone.body.position.y,amango.body.position.x,amango.body.position.y)
	if(distance<=amango.r+astone.radius)
{
	Matter.Body.setStatic(amango.body,false);
}
}
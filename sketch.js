var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var options;

var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var box2;
var box3;













function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

var options={
'isStatic':true,
'restitution':3,
'density':0.8,
'friction':1

}






	engine = Engine.create();
	world = engine.world;
	

	helicopterSprite=createSprite(30, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX=4
	helicopterSprite.depth=10;

	packageSprite=createSprite(helicopterSprite.x, helicopterSprite.y, 10,10,options)
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityX=4
	packageSprite.depth=0;

	packageBody = Bodies.circle(helicopterSprite.x , helicopterSprite.y , 5 , options );
	 World.add(world, packageBody);
	 packageBody.velocityX=3
	



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	box1=createSprite(400,height-37,200,20,options)
	box1.shapeColor=color("red")
	

	box3=createSprite(290,620,20,100,options)
box3.shapeColor=color("red")

box2=createSprite(500,620,20,100,options)
box2.shapeColor=color("red")
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    
	Engine.run(engine);
  
	
	

}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  
  

if(keyDown("down")){


	Matter.Body.setStatic(packageBody,false)
	packageSprite.x=packageBody.position.x
	packageSprite.y=packageBody.position.y

}
  drawSprites();
 
}






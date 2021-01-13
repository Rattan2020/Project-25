
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,line,line2,line3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	groundSprite=createSprite(400,680,800,50);
	groundSprite.shapeColor=("black");


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(400, 675, 800, 50 , {isStatic:true} );
	World.add(world, ground);

	line=new Bin(650,560,10,200);
    line2=new Bin(585,560,10,200);
	
	ball=new Paper(85,200,35); 
  
	
	Engine.run(engine);
  
}



function draw() {
  console.log(ball.y);
  background("yellow");


  ball.display();
  line2.display();
  line.display();
  
  
 keyPressed();
  drawSprites();
 
}

function keyPressed(){

	if (keyWentDown("up")){
		
		Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-35});
	}
}


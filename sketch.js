
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobs = [];
var grounds = [];
var slingShots = [];


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  

	

	for(var i=300; i<525; i = i + 50){ 
		bobs.push(new Bob(i,400,25));
		grounds.push(new Ground(i,100,337,50));
	}

	for(var j=0; j < bobs.length; j = j + 1){ 
		slingShots.push(new Chain(bobs[j].body, grounds[j].body, 0, 300))
	}
	
}


function draw() {
  //rectMode(CENTER);
  background(0);
  
  //drawSprites();
  
  

  for(var b= 0; b< bobs.length; b = b + 1){ 
	bobs[b].display();
}
for(var g= 0; g< grounds.length; g = g + 1){ 
	grounds[g].display();
}
for(var s= 0; s< slingShots.length; s = s + 1){ 
	slingShots[s].display();
}

}

/*function keyPressed() {
	{	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:0});
    }
}*/


function mouseDragged(){

	for(var t= 0; t< bobs.length; t = t + 1){ 
		if(IsTouching(bobs[t])) {
			Matter.Body.setPosition(bobs[t].body, {x: mouseX , y: mouseY});
		}
	}
  
    }


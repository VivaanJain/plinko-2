var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;

var particle;
var turn = 0;

var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
    
  for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
          text("Score : "+score,20,30);
  
  
  
  
  
  
  
  
  textSize(25);
  fill("white");
  stroke(3);
    text("500",20,525);
              text("500",100,525);
    text("500",180,525);
    text("500",260,525)
    text("100",340,525);
    text("100",420,525);
    text("100",500,525);
text("200",580,525);
    text("200",660,525);
    text("200",740,525);
  
  
    Engine.update(engine);
for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     }
  for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particle!=null){
     particle.display();

     if(particle.body.position.y>760){

      if(particle.body.position.x<300){
        score = score+500;
        particle = null;
      }
     }
   }
                  if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){

     if(particle.body.position.x>327 && particle.body.position.x<567){
       score = score+100;
       particle = null;
     }
    }
  } if(particle!=null){
    particle.display();

    if(particle.body.position.y>760){

     if(particle.body.position.x>566 && particle.body.position.x<807){
       score = score+200;
       particle = null;
     }
    }
  }

   
  
  
              if(turn===5){
   push();
   gameState = "end";
   textSize(50);
   fill("red");
         stroke(3);
   text("Game Over", 290,150);
   pop();
 }

}

function mousePressed(){
          if(gameState!=="end"){
    particle = new Particle(mouseX, 10, 10, 10);
 turn = turn+1
  
  gameState = "start";
  }
}
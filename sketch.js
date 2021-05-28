var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;

var particle;
var turn = 0;

var gamestate = "start";

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

  //mousePressed();

  textSize(20);
  text("Score :- "+score,20,30)
  text("500",25,750);
  text("500",110,750);
  text("500",180,750);
  text("500",250,750);

  text("100",350,750);
  text("100",420,750);
  text("100",500,750);

  text("200",580,750);
  text("200",660,750);
  text("200",750,750);

  ground.display();
  Engine.update(engine);
  
  if(gameState === 'end') {
    textSize(100)
    text('GAME OVER', 150 , 250)

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
  }
  if(particle !== null){
    particle.display()

  if(particle.body.position.x < 300)
  {
    score = score +500;
    particle = null;
    if(count>=5) gamestate = "end";
  }
  
  else if(particle.body.position.x < 600 && particle.body.position.x > 301)
  {
    score+= 100;
    particle = null;
    if(count>=5) gamestate = "end";
  }
  
  else if(particle.body.position.x < 900 && particle.body.position.x > 601)
  {
    sccor += 200;
    particle = null;
    if(count>=5) gamestate = "end";
  }
  }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed()
{
  if(gamestate !== "end" )
  {
    count++;
    particle = new Particle(mouseX,10,10,10);
    particle.display();
  }
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisions = [];
var plinkos = [];
var particles = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
 // border1 = new Border(5, 400, 10, 800);
 // border2 = new Border(475, 400, 10, 800);
 // border3 = new Border(240, 5, 480, 10);
 // border4 = new Border(240, 795, 480, 10);

  ground = new Ground(width/2,height,width,20);

  for (var d = 0; d <= width; d += 80){
    divisions.push(new Division(d, height - divisionHeight/2, 10, divisionHeight));
  }

  for (var a = 42.5; a <= 470; a += 50){
    plinkos.push(new Plinko(a, 100, 15, "red"));
  }

  for (var b = 17.5; b <= 470; b += 50){
    plinkos.push(new Plinko(b, 200, 15, "skyblue"));
  }

  for (var c = 42.5; c <= 470; c += 50){
    plinkos.push(new Plinko(c, 300, 15, "green"));
  }

  for (var e = 17.5; e <= 470; e += 50){
    plinkos.push(new Plinko(e, 400, 15, "pink"));
  }
}

function draw() {
  background("black");
  Engine.update(engine);

  
 // border1.display();
  //border2.display();
  //border3.display();
  //border4.display();

  ground.display();

  if (frameCount % 60 === 0){
    particles.push(new Particle(random(17.5, 462.5), 10, 8))
  }
  
  for (var x = 0; x < divisions.length; x++){
    divisions[x].display();
  }

  for (var y = 0; y < plinkos.length; y++){
    plinkos[y].display();
  }


  for (var z = 0; z < particles.length; z++){
    particles[z].display();
  }
}
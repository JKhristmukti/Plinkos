var particles = [];
var plinkos = [];
var divisions = [];

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var divisionHeight=300;
var engine,world,ground;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  
  ground = new Ground(240,795,480,10);

  Engine.run(engine);
}

function draw() {
  background("black");
  Engine.update(engine);

  for (var k = 0; k <=480; k = k+80) {
    divisions.push(new Divisions(k, 800-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=480; j = j+50) {
    plinkos.push(new Plinkos(j,75));
  }
  
  for (var j = 15; j <=470; j = j+50) {
    plinkos.push(new Plinkos(j,175));
  }

  for (var j = 40; j <=480; j = j+50) {
    plinkos.push(new Plinkos(j,275));
  }

  for (var j = 15; j <=480; j = j+50) {
    plinkos.push(new Plinkos(j,375));
  }

  if(frameCount%5===0){
    particles.push(new Particles(random(40, 440), 30));
  }

  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display();
  }
  
  for (var j = 0; j < divisions.length; j++) {
    divisions[j].display();
  }

  for (var h = 0; h < particles.length; h++) {
    particles[h].display();
  }

  ground.display();
}
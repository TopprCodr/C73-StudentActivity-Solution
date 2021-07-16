const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground, brick1, brick2, ball1, ball2;

function setup(){
    canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(300, 590, 600, 20);
    brick1 = new Brick(200, 200, 120, 60);
    brick2 = new Brick(240, 150, 60, 120);
    ball1 = new Ball(300, 100, 30);
    ball2 = new Ball(340, 50, 20);
    angleMode(RADIANS);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    push();
    stroke("grey");
    strokeWeight(3);
    brick1.display();
    brick2.display();
    pop();
    push();
    stroke("yellow");
    strokeWeight(4);
    ball1.display();
    pop();
    stroke("pink");
    strokeWeight(3);
    ball2.display();
    pop();
}

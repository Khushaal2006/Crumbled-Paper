const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    dustbin = new Dustbin(700,320,70,70);

    paper = new Paper(100,100);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(dustbin.body.position.x);
    console.log(dustbin.body.position.y);
    console.log(dustbin.body.angle);
    dustbin.display();
    ground.display();
    paper.display();
}
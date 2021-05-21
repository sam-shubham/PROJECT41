var w1,w2,w3,w4,w5,w6,w7,w8,t1,t2,t3,t4,character,walking,drop;
var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var engine,world  ;
//var engine,world;
//var  ground;

function preload(){
    w1 = loadImage("images/WF/walking_1.png")
    w2 = loadImage("images/WF/walking_2.png")
    w3 = loadImage("images/WF/walking_3.png")
    w4 = loadImage("images/WF/walking_4.png")
    w5 = loadImage("images/WF/walking_5.png")
    w6 = loadImage("images/WF/walking_6.png")
    w7 = loadImage("images/WF/walking_7.png")
    w8 = loadImage("images/WF/walking_8.png")

    t1 = loadImage("images/TB/1.png");
    t2 = loadImage("images/TB/2.png");
    t3 = loadImage("images/TB/3.png");
    t4 = loadImage("images/TB/4.png");

    walking = loadAnimation(w1,w2,w3,w4,w5,w6,w7,w8);

    

    
}

function setup(){
    createCanvas(700, 700);
    engine = Engine.create();
    world = engine.world;

  character = new Character(600,1050);
  drop = new Drop(400,100);
  World.add(world,drop.body);
    
    
}

function draw(){
    background(00,00,00);
    Engine.update(engine);
    //character.display();

    character.display();
    drop.display();




    drawSprites();
}   


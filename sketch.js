const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var boy, tree, slinshot;

var gameState = "inHand";

var Mango = [];


function preload() {
	boy = loadImage("boy.png");
  tree = loadImage("tree.png");
  bg = loadImage("bg.jpg");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone = new stone(140, 470); 
  slingshot = new Slingshot(stone.body, {x : 120, y : 460});

  m1 = new  BaseClass(1100,100);
  m2 = new  BaseClass(1170,130);
  m3 = new  BaseClass(1010,140);
  m4 = new  BaseClass(1000,70);
  m5 = new  BaseClass(1100,70);
  m6 = new  BaseClass(1000,230);
  m7 = new  BaseClass(900,230);
  m8 = new  BaseClass(1140,150);
  m9 = new  BaseClass(1100,230);
	m10 = new  BaseClass(1200,200);
	m11 = new  BaseClass(1120,50);
	m12 = new  BaseClass(900,160);

  Mango.push(m1);
  Mango.push(m2);
  Mango.push(m3);
  Mango.push(m4);
  Mango.push(m5);
  Mango.push(m6);
  Mango.push(m7);
  Mango.push(m8);
  Mango.push(m9);
  Mango.push(m10);
  Mango.push(m11);
  Mango.push(m12);

	ground = new ground(650,600,1300,20);


	Engine.run(engine);
}

function draw() {

  background(bg);
  image(boy ,80,380,200,300);
  image(tree ,780,0,500,620);

  for(var k = 0; k < Mango.length; k++) {
    Mango[k].display();
    dc(Mango[k]);
  }

  stone.display();
  ground.display();
  slingshot.display();

  textSize(25);
  fill("red")
  text("Press Space to get a second Chance to Play!!",50 ,50);
}


function dc (Fruit) {

    var m = Fruit.body.position;
    var s = stone.body.position;
    var distance=dist(s.x, s.y, m.x, m.y)
     if(distance<=Fruit.r+stone.r) { 
      Matter.Body.setStatic(Fruit.body,false); 
    }

}

function mouseDragged() {
  if(gameState === "inHand") {
    Body.setPosition(stone.body, {x : mouseX, y : mouseY});
  }
}

function mouseReleased() {
  slingshot.fly();
  gameState = "notInHand";
}

function keyPressed() {
  if(keyCode === 32) {
    Body.setPosition(stone.body, {x : 140, y : 470})
    slingshot.attach(stone.body);
    gameState = "inHand";
  }
}
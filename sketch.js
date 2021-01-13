const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score = 0;

function setup() {
  createCanvas(1400,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700, 590, 1400, 20);
  ground1 = new Ground(650, 410, 300, 20);
  ground2 = new Ground(1195, 300, 200, 20);

  box1 = new Box(530, 370, 40, 40);
  box2 = new Box(570, 370, 40, 40);
  box3 = new Box(610, 370, 40, 40);
  box4 = new Box(650, 370, 40, 40);
  box5 = new Box(690, 370, 40, 40);
  box6 = new Box(730, 370, 40, 40);
  box7 = new Box(770, 370, 40, 40);

  box8 = new Box(550, 330, 40, 40);
  box9 = new Box(590, 330, 40, 40);
  box10 = new Box(630, 330, 40, 40);
  box11 = new Box(670, 330, 40, 40);
  box12 = new Box(710, 330, 40, 40);
  box13 = new Box(750, 330, 40, 40);

  box14 = new Box(570, 290, 40, 40);
  box15 = new Box(610, 290, 40, 40);
  box16 = new Box(650, 290, 40, 40);
  box17 = new Box(690, 290, 40, 40);
  box18 = new Box(730, 290, 40, 40);

  box19 = new Box(590, 250, 40, 40);
  box20 = new Box(630, 250, 40, 40);
  box21 = new Box(670, 250, 40, 40);
  box22 = new Box(710, 250, 40, 40);

  box23 = new Box(610, 210, 40, 40);
  box24 = new Box(650, 210, 40, 40);
  box25 = new Box(690, 210, 40, 40);

  box26 = new Box(630, 180, 40, 40);
  box27 = new Box(670, 180, 40, 40);

  box28 = new Box(650, 140, 40, 40);

  box29 = new Box(1120, 260, 30, 30);
  box30 = new Box(1150, 260, 30, 30);
  box31 = new Box(1180, 260, 30, 30);
  box32 = new Box(1210, 260, 30, 30);
  box33 = new Box(1240, 260, 30, 30);
  box34 = new Box(1270, 260, 30, 30);

  box35 = new Box(1135, 230, 30, 30);
  box36 = new Box(1165, 230, 30, 30);
  box37 = new Box(1195, 230, 30, 30);
  box38 = new Box(1225, 230, 30, 30);
  box39 = new Box(1255, 230, 30, 30);

  box40 = new Box(1150, 200, 30, 30);
  box41 = new Box(1180, 200, 30, 30);
  box42 = new Box(1210, 200, 30, 30);
  box43 = new Box(1240, 200, 30, 30);

  box44 = new Box(1165, 170, 30, 30);
  box45 = new Box(1195, 170, 30, 30);
  box46 = new Box(1225, 170, 30, 30);

  box47 = new Box(1180, 140, 30, 30);
  box48 = new Box(1210, 140, 30, 30);

  box49 = new Box(1195, 110, 30, 30);

  polygon = new Polygon(200, 350, 20);

  slingshot = new SlingShot(polygon.body, {x: 200, y: 150});
  Engine.run(engine);
}

function draw() {
  background("lightBlue");  

  Engine.update(engine);

  ground.display();
  ground1.display();
  ground2.display();

  fill ("purple");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box29.display();  
  box30.display(); 
  box31.display(); 
  box32.display(); 
  box33.display(); 
  box34.display();

  fill ("blue");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();

  fill("pink");
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  box40.display();
  box41.display();
  box42.display();
  box43.display();

  fill("Purple");
  box19.display();
  box20.display();
  box21.display();
  box22.display();

  box44.display();
  box45.display();
  box46.display();

  fill("blue");
  box23.display();
  box24.display();
  box25.display();

  box47.display();
  box48.display();

  fill("pink");
  box26.display();
  box27.display();

  box49.display();

  fill("grey");
  box28.display();

  polygon.display();
  slingshot.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
  box31.score();
  box32.score();
  box33.score();
  box35.score();
  box36.score();
  box37.score();
  box38.score();
  box39.score();
  box40.score();
  box41.score();
  box42.score();
  box43.score();
  box44.score();
  box45.score();
  box46.score();
  box47.score();
  box48.score();
  box49.score();

  fill("black");
  textSize (20);
  text ("Drag the stone and release it, to launch it towards the blocks", 400, 50);

  text("Score: " + score, 1200, 50);

 // console.log(box49.body.speed);
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
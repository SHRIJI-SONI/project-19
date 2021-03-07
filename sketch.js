var monkey, monkeyrunning,monkeyimg;
var banana,bananaImage;
var stone,stoneImage;
var backdrop, jungle;
var count;
  
function preload() {
  createCanvas(600, 200);
  monkeyrunning = loadAnimation("Monkey_.png","Monkey_2.png","Monkey_3.png","Monkey_4.png","Monkey_5.png","Monkey_6.png","Monkey_7.png","Monkey_8.png","Monkey_9.png","Monkey_10.png") 
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
  jungle = loadImage("jungle.png");
 stonesGroup = new Group();
bananasGroup = new Group();  
}

function setup() {
  backdrop = createSprite(300,100);
  backdrop.addImage("jungle.png",jungle);
  monkey = createSprite(570,190);
  monkey = addAnimation("Monkey_.png","Monkey_2.png","Monkey_3.png","Monkey_4.png","Monkey_5.png","Monkey_6.png","Monkey_7.png","Monkey_8.png","Monkey_9.png","Monkey_10.png", monkeyrunning);
  backdrop.velocityX=-1;
  if (backdrop.x<0) {
  backdrop.x=backdrop.width/2;  
  }
  var ground = createSprite(569,190,60,10);
  ground.visiblity=false;
  
}

function draw() {
  textSize(20);
  text("Score: "+ count, 20, 40);
  monkey.collide(ground);
  if (keyDown("space") && (monkey.y=190 )) {
    monkey.velocityY = -8;
  }
  monkey.velocityY = monkey.velocityY+0.2;
  monket.collide(ground);
  if(World.frameCount % 100 === 0) {
    banana = createSprite(365, 200);
    banana.addImage("banana.png",bananaImage);
    banana.velocityX = -3;
    banana.scale = 0.1;
    banana.lifetime = 400;
    banana.debug = true;
    banana.depth = 10;
    bananasGroup.add(banana);
  }
  if (monkey.isTouching(bananasgroup)) {
  count++;
  bananasgroup.destroyEach();
  }  
  if(World.frameCount % 100 === 0) {
    stone = createSprite(365, 310);
    stone.setAnimation("stone");
    stone.velocityX = -3;
    stone.debug = true;
    stone.setCollider("circle", 2, 3, 1);
    stone.collide(ground);
    stone.scale = 0.2;
    stone.depth = 10;
    stone.lifetime = 400;
    stonesGroup.add(stone);
  }
  if (monkey.isTouching(stonessgroup)) {
  monkey.scale=-2
  stonesGroup.destroyEach();
  }
    
   switch(count){
     case 10:player.scale=0.12;
       break;
     case 20:player.scale=0.14;
       break;
     case 30:player.scale=0.16;
       break;
     case 40:player.scale=0.18;
       break;
       default: break;
  }
  
  switch(count){
     case 40:player.scale=0.12;
       break;
     case 30:player.scale=0.14;
       break;
     case 20:player.scale=0.16;
       break;
     case 10:player.scale=0.18;
       break;
       default: break;
  }
  
  if (monkey.scale=0) {
  textFont("Arial");
  textSize(60);
  text("GAMEOVER", 300, 200);
  }   
    }
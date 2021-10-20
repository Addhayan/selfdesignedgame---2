var hero;
var heroPunching;
var obstacle1 , obstacle2 , obstacle3;
var healPowerup,speedPowerup;
var bg;
var Villain,villainImg;
var heart,emptyHeart;
var dieSound;
var punchingSound;
var ground;

function preload(){
  heroFlying = loadImage("images/hero_flying.png");
  heroPunching = loadImage("images/hero_punching.png");
  obstacle1 = loadImage("images/obstacle_1.png");
  obstacle2 = loadImage("images/obstacle_2.png");
  obstacle3 = loadImage("images/obstacle_3.png");
  healPowerup = loadImage("images/heal_powerup.png");
  speedPowerup = loadImage("images/speedIncrease_powerup.png");
  bg = loadImage("images/city.png");
  villainImg = loadImage("images/main_villain.png");
  heart = loadImage("images/heart.png");
  emptyHeart = loadImage("images/empty_heart.png");
  dieSound = loadSound("sounds/herodie_sound.mp3");
  punchingSound = loadSound("sounds/punching_sound.wav")
}

function setup() {
  createCanvas(1500,700);

  ground = createSprite(1500,500,800,500);
  ground.addImage("ground",bg);
  ground.x = ground.width/2;
  ground.velocityX = -4;

 hero = createSprite(500,350,50,50);
 hero.addImage("flying",heroFlying);
 hero.addImage("punching",heroPunching);

 Villain = createSprite(1200,350,50,50);
 Villain.addImage("villain",villainImg);
 
  
}

function draw() {
  background("black");
 if(ground.x < 0){
    ground.x = ground.width/2;
  }  

  drawSprites();
}
var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
 
  //Grasses where player can rest
for(var i=0;i<6;i++){
var bottomGrass1 =  createSprite(683,hieght-50-(i*400),width,grassHeight);
if(i%2===0)//adding road
{
var road = createSprite(683,hieght-50-(i*400)-grassHeight,width,300,)
road.shapeColour="black";
}
bottomGrass1.shapeColour = "grey"
  }
  // To create rows of car
  for(var i = 0; 1 < 40; i++){
  cars = new Car(2);
  carGroup1.add(cars.spt);
 }
 
   
 }

function draw() {
  background("skyblue");
 // making logs reappear
 for(i=1;i<logGroup1.length;i++){
 if(logGroup1[i].x<0)
 {
   logGroup1[i].x=width;
 }

 }
 

  drawSprites();
}


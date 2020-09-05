var car,wall;
var weight,speed;
function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1400,200,50,200);
  car.shapeColor = "blue";
  wall.shapeColor = "brown";
  car.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  
  if( wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX = 0;
    var deform = 0.5 * weight * speed * speed/22500;
    if(deform>=180){
      car.shapeColor = "red";
    }
    if(deform<180&& deform>100){
      car.shapeColor = "yellow";
    }
    if(deform<=100){
      car.shapeColor = "green";
    }
  }

  drawSprites();
}
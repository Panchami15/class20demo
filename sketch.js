var movingrect,fixedrect;

function setup() {
  createCanvas(1200,400);
  fixedrect=createSprite(700,200,50,80);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;

  movingrect=createSprite(780,200,80,50);
  movingrect.shapeColor="green";
  movingrect.debug=true;
}

function draw() {
  background("black");
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY; 
  
  if(movingrect.x- fixedrect.x < movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x- movingrect.x < movingrect.width/2+fixedrect.width/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";

  }

  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  drawSprites();
}
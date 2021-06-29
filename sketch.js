var jaxon, jaxon_running;
var path, pathImage;

 
function preload(){
  path_Image = loadImage("path.png")
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
}
 
function setup(){
  createCanvas(400,400);

  path=createSprite(200,200)
   path.addImage("path_image",path_Image);
   path.velocityY=4
   path.scale=1.2

  jaxon = createSprite(160,50,10,10);
  jaxon.addAnimation("jaxon_running",jaxon_running);
  edges = createEdgeSprites();
  

   

   jaxon.scale = 0.1;
   jaxon.x = 50
 
}
 
function draw(){
  background('white')
if (path.y>400){
  path.y=height/2
}
jaxon.x=World.mouseX

drawSprites();
}

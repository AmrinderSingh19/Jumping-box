var canvas;
var music;
var blue,orange,red,green;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    


    //create box sprite and give velocity
    

    if(ball2.isTouching(ball)){
        ball.shapeColor = rgb(255,128,0);
        ball.velocityX = 0;
        music.stop();
    }
    createSprite(random(20,750));
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    //add condition to check if box touching surface and make it box
}
   if(surface1.isTouching(box) && box.bounceOff(surface1)){
   if(surface2.isTouching(box) && box.bounceOff(surface2)){
   if(surface3.isTouching(box) && box.bounceOff(surface3)){   
   if(surface4.isTouching(box) && box.bounceOff(surface4)){ 
 }
 }
 }
 }
    
var backgroundI;
var cat,mouse;
var catImg1,mouseImg1;
var catImg2,mouseImg2;
var catImg3,mouseImg3;

function preload() {
    //load the images here
    backgroundI = loadAnimation("images/garden.png");
    
    catImg1=loadAnimation("cat1.png");
    catImg2=loadAnimation("cat2.png,cat3.png");
    catImg3=loadAnimation("cat4.png");
    
    mouseImg1=loadAnimation("mouse1.png");
    mouseImg2=loadAnimation("mouse2.png,mouse3.png");
    mouseImg3=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites 
    cat = createSprite(800,600,5,5);
    cat.addAnimation("standing1",catImg1);


    mouse = createSprite(100,600,5,5);
    mouse.addAnimation("standing2",mouseImg1);


}

function draw() {

    background("backgroundI");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
  
  cat.changeAnimation("happy1",catImg3);
  mouse.changeAnimation("happy2",mouseImg3);

  cat.velocityX=0;

    }
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay = 25;

cat.changeAnimation(catImg2);
cat.velocityX=-3;

 }

}

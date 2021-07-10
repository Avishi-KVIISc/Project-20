
function preload() {
    //load the images here
    bgImg = loadImage("garden.png")
    catImg1 = loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png");
    catImg3 = loadAnimation("cat4.png");
    
    mouseImg1 = loadAnimation("mouse1.png");    
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850, 670, 70, 70);
    cat.addAnimation("catSitting", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(80, 670, 70, 70);
    mouse.addAnimation("mouseHappy", mouseImg1);
    mouse.scale = 0.15;
}

function draw() {

    background(bgImg);
   // Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        cat.velocityX = 0;
        cat.addAnimation("catStanding", catImg3);
        cat.changeAnimation("catStanding");
        cat.scale = 0.23;
        
        mouse.addAnimation("mouseInspecting", mouseImg3);
        mouse.changeAnimation("mouseInspecting");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.scale = 0.15;
      mouse.frameDelay = 10;

      cat.addAnimation("catWalking", catImg2);
      cat.changeAnimation("catWalking");
      cat.velocityX = -4;
      cat.scale = 0.25;
      cat.frameDelay = 10;
  }
}

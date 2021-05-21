var bgImg;
var cat, catImg1, catImg2, catImg3, catImg4;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");

    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg4 = loadAnimation("images/cat4.png");

    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
 
    mouseImg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(200,600);
    mouse.addImage("mouse",mouseImg1);

    mouse.scale = 0.25;

    cat = createSprite(800,600);
    cat.addImage("cat",catImg1);
    cat.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
      mouse.addAnimation("mouseHappy",mouseImg4);
      mouse.changeAnimation("mouseHappy");
      cat.addAnimation("catHappy",catImg4);
      cat.changeAnimation("catHappy");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseteasing", mouseImg2);
    mouse.changeAnimation("mouseteasing");
      mouse.frameDelay = 25;
  }
  if(keyCode === LEFT_ARROW){
    cat.x = cat.x - 20;
    cat.scale = 0.25;
    cat.addAnimation("catchasing", catImg2);
    cat.changeAnimation("catchasing");
      cat.frameDelay = 25;
  }
  
}

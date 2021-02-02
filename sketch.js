var tom,garden,tom4,jerry;
var tomImage,gardenImage,catRunningAnimation,tom4Image,jerryImage,jerryImage2;
function preload() {
    //load the images here
   //tomImage = loadImage("tomThree.png")
   //gardenImage = loadImage("garden.png");
   //tom4Image = loadImage("tomFour.png");
   //jerryImage = loadImage("jerryTwo.png")
   //catRunningAnimation  = loadAnimation("tomThree.png","tomTwo.png")
   //jerryImage2 = loadImage("jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    background("black");
    //create tom and jerry sprites here
    tom = createSprite(100,100,10,10);
    //tom.addImage(tomImage);
    jerry = createSprite(120,100,10,10);
    //jerry.addImage(jerryImage)
    //garden = createSprite(300,200,10,10);
    ///garden.addImage(gardenImage);

}

function draw() {
    background("black");
    //Write condition here to evalute if tom and jerry collide
    
    //if(tom.x - jerry.x <= jerry.width/2+ tom.width/2
    //&& jerry.x-tom.x <= jerry.width/2+ tom.width/2
    //&& tom.y-jerry.y <= jerry.height/2+ tom.height/2
    //&& jerry.y- tom.y <= jerry.height/2+ tom.height/2){
    //tom.velocityX = 0;
    //tom.changeImage(tom4Image)
  //}
  //Image(tom4Image, 0 , 0)
    
  //if(tom.isTouching(jerry)){
   // tom.velocityX = 0;
   //jerry.addImage()
    //jerry.changeImage()
    //tom.changeImage()
  //}

    drawSprites();
}


function keyPressed(){

   if (keyCode === LEFT_ARROW){
       tom = velocityX = -5
       //tom.addAnimation()
       //tom.changeAnimation();
   }
}
//function isTouching(tom,jerry){
  //  if(tom.x-jerry.x <= jerry.width/2+tom.width/2
    //  && jerry.x-tom.x <= jerry.width/2+tom.width/2
     // &&tom.y-jerry.y <= jerry.height/2+tom.height/2
      //&& jerry.y-tom.y <= jerry.height/2+ tom.height/2){
      
        //return true;
    //}
    //else{
  
      //return false;
    //}
  //}
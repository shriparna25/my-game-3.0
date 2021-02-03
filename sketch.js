var startscreen, playbutton, playbutton_Img;
var gameState = 0;
var finalbg;
var doraemon_stable, doraemon_running ;
var doraemon;
var ground;
var coin_img, coin;
var sunio_img, nobita_img, gian_img;
var ob1_a_img, ob1_b_img, ob1_c_img;
var ob2_a_img, ob2_b_img, ob2__img, ob2_d_im;
var ob3_a_img, ob3_b_img, ob3_c_img;
var ob4_a_img, ob4_b_img, ob4_c_img;
var ob5_img, ob6_img;
var obstacle;  
var draawObstacle = 0;

function preload(){

startscreen = loadImage("startscreen.jpg");
playbutton_img = loadImage("play.png");

finalbg = loadImage("final background img.png")

doraemon_stable = loadAnimation("doraemon6.png");
doraemon_running = loadAnimation("doraemon1.png","doraemon2.png","doraemon3.png","doraemon4.png","doraemon5.png","doraemon6.png");

coin_img = loadAnimation("coin1.png","coin2.png","coin3.png","coin4.png","coin5.png","coin6.png","coin7.png","coin8.png","coin9.png","coin10.png");

gian_img = loadImage("gian.png");
sunio_img = loadImage("sunio.png");
nobita_img = loadImage("nobita.png");

ob1_a_img = loadImage("obstacles/ob1_a.PNG");
ob1_b_img = loadImage("obstacles/ob1_b.PNG");
ob1_c_img = loadImage("obstacles/ob1_c.PNG");

ob2_a_img = loadImage("obstacles/ob2_a.PNG");
ob2_b_img = loadImage("obstacles/ob2_b.PNG");
ob2_c_img = loadImage("obstacles/ob2_c.PNG");

ob3_a_img = loadImage("obstacles/ob3_a.PNG");
ob3_b_img = loadImage("obstacles/ob3_b.PNG");
ob3_c_img = loadImage("obstacles/ob3_c.PNG");

ob4_a_img = loadImage("obstacles/ob4_a.PNG");
ob4_b_img = loadImage("obstacles/ob4_b.PNG");
ob4_c_img = loadImage("obstacles/ob4_c.PNG");

ob5_img = loadImage("obstacles/ob5.PNG");

ob6_img = loadImage("obstacles/ob6.PNG");



}

function setup(){
createCanvas(windowWidth-50, windowHeight-50 )

playbutton = createSprite(450, 200);
playbutton.visible = false;

doraemon = createSprite(width/2, height-100);
doraemon.addAnimation("stable", doraemon_stable);
doraemon.addAnimation("running", doraemon_running);
doraemon.visible = false;
doraemon.scale = 0.8;

doraemon.setCollider("circle", 0, 0, 100);

ground = createSprite(width*5, height-50, width*10, 20);
ground.visible = false;



}


function draw(){

if(gameState == 0){
    background(startscreen);

    playbutton.visible = true;
    playbutton.addImage(playbutton_img);
    playbutton.scale = 0.7;

    if(mousePressedOver(playbutton)){
        gameState= 1;
        playbutton.visible = false;
    }
}
else if(gameState === 1){   
    background("pink");
    image(finalbg, 0, 0, width*10 , height);
    doraemon.visible = true;
   // obstacle.visible = true;

    if(keyWentDown("RIGHT_ARROW")){
        doraemon.velocityX = 5;
        doraemon.changeAnimation("running", doraemon_running);
    }

    if(keyWentUp("RIGHT_ARROW")){
        doraemon.velocityX = 0;
        doraemon.changeAnimation("stable", doraemon_stable);
    }

    if(keyDown("space")&& doraemon.y>=770){
        doraemon.velocityY = -20;

    }

    doraemon.velocityY += 0.5;
    doraemon.collide(ground);

    camera.position.x = doraemon.x;
    camera.position.y = height/2;
    if(ground.x%Math.round(random(200, 500))===0){
        Spawncoin();
    }

    if (smallObstacles === 0){
        smallObstacles(800,800);
        smallObstacles(1500,800);
        smallObstacles(2100,800);
        smallObstacles(2500,800);
        smallObstacles(2900,800);
        smallObstacles(3200,800);
    

    }

    if (bigObstacles === 0){
        bigObstacles(3500,800);
        bigObstacles(3800,800);
        bigObstacles(4100,800);
        bigObstacles(4500,800);
        bigObstacles(4900,800);
        bigObstacles(5200,800);
    

    }

    if (finalObstacles === 0){
       finalObstacles(5400,800);
       finalObstacles(6000,800);
       finalObstacles(6500,800);
       finalObstacles(7000,800);
    

    }
    

}

//console.log(doraemon.x, doraemon.y);

//console.log(doraemon.y)

drawSprites();
}

function Spawncoin(){

coin = createSprite(20, height/2);
coin.addAnimation("coins", coin_img);
coin.x = doraemon.x + 700;
coin.y = random(height/4, height/2);
coin.scale = 0.5;

}

function smallObstacles(x,y){

    obstacle = createSprite(x,y);
   // obstacle.visible = false;
    var choose = Math.round(random(1,6));
    switch(choose){
        case 1 : obstacle.addImage(ob1_a_img);
         break; 
         case 2 : obstacle.addImage(ob2_a_img);
         break; 
         case 3 : obstacle.addImage(ob3_a_img);
         break; 
         case 4 : obstacle.addImage(ob4_a_img);
         break; 
         case 5 : obstacle.addImage(ob5_img);
         break; 
         case 6 : obstacle.addImage(ob1_b_img);
         break; 

    }  

}

    function bigObstacles(x,y){

    var chooseBig = Math.round(random(1,6));
    switch(chooseBig){
        case 1 : obstacle.addImage(ob6_img);
        break;
        case 2 : obstacle.addImage(ob2_b_img);
        break;
        case 3 : obstacle.addImage(ob3_b_img);
        break;
        case 4 : obstacle.addImage(ob4_b_img);
        break;
        case 5 : obstacle.addImage(ob4_c_img);
        break;
        case 6 : obstacle.addImage(ob3_c_img);
        break;

    }

    }

    function finalObstacles(x,y){

        var chooseBig = Math.round(random(1,4));
        switch(chooseFinal){
            case 1 : obstacle.addImage(ob1_c_img);
            break;
            case 2 : obstacle.addImage(ob2_c_img);
            break;
            case 3 : obstacle.addImage(ob3_c_img);
            break;
            case 4 : obstacle.addImage(ob2_d_img);
            break;
           
        }
    
        }
    
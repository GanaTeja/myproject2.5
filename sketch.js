var gameState="hi"
var monkey


function preload(){
farmerimg=loadImage("images/download.png")
treeimg=loadImage("images/tree.png")
basketimg=loadImage("images/basket.png")
appleimg=loadImage("images/apple.png")
bananaimg=loadImage("images/banana.png")
monkey1img=loadImage("images/monkey1.png")
monkey2img=loadImage("images/monkey2.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight)
 farmer =createSprite(windowWidth/2,windowHeight/4)
    farmer.addImage(farmerimg)
    farmer.scale=.5
    appleGarden=createSprite(windowWidth/4,windowHeight/2)
    bananaGarden=createSprite(windowWidth/1.5,windowHeight/2)
     edges=createEdgeSprites();

}

function draw (){
background(0)

drawSprites();
text("x:"+mouseX+",y:"+mouseY,mouseX,mouseY)
if(gameState==="hi"){
if(keyDown(UP_ARROW)){
farmer.y=farmer.y-5

}
if(keyDown(DOWN_ARROW)){
    farmer.y=farmer.y+5
    
    }
    if(keyDown(LEFT_ARROW)){
        farmer.x=farmer.x-5
        
        }
        if(keyDown(RIGHT_ARROW)){
            farmer.x=farmer.x+5
            
            }
        }
if (farmer.isTouching(appleGarden)){
    bg1=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    bg1.shapeColor="black";
    tree=createSprite(600,250)
    tree.addImage(treeimg)
    basket=createSprite(500,450)
    basket.addImage(basketimg)
    basket.scale=.3
    
    gameState = "apple"
    farmer.x=600
    farmer.y=100
}
    if(gameState==="apple"){
        basket.x=mouseX
        if(frameCount%30===0){
    apple=createSprite(400,0,800,200)
    apple.x=random(400,800)
    apple.scale=.1
    apple.addImage(appleimg)
    apple.velocityY=3
    
        }
    }

 
 if(farmer.isTouching(bananaGarden)){
    bg2=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
    bg2.shapeColor="black";
    banana=createSprite(940,250)
    banana.addImage(bananaimg)
    banana.scale=.1
    monkey=createSprite(100,250)
    monkey.addImage(monkey1img)
    monkey.scale=.2
    gameState="banana"
    farmer.x=600;
    farmer.y=100

    puzzle1=createSprite(200,150,10,350)
    puzzle1.velocityY=3    
    puzzle2=createSprite(370,310,10,250) 
    puzzle2.velocityY=-3    
    
    puzzle3=createSprite(540,160,10,200)
    puzzle3.velocityY=4   
    
    puzzle4=createSprite(710,70,10,200)
    puzzle4.velocityY=-4    
    
    puzzle5=createSprite(880,350,10,200) 
    puzzle5.velocityY=5
    
 }
 if(gameState==="banana"){
    puzzle5.bounceOff(edges)
    puzzle4.bounceOff(edges) 
    puzzle3.bounceOff(edges) 
    puzzle2.bounceOff(edges) 
    puzzle1.bounceOff(edges)

    if(keyDown(UP_ARROW)){
        monkey.y=monkey.y-5
        
        }
        if(keyDown(DOWN_ARROW)){
            monkey.y=monkey.y+5
            
            }
            if(keyDown(LEFT_ARROW)){
                monkey.x=monkey.x-5
                
                }
                if(keyDown(RIGHT_ARROW)){
                    monkey.x=monkey.x+5
                    
                    }
                }
}
var soldier,soldierimg
var ground
var groungImg
var enemy, enemyimg
var bulletImage,bullet;
var bulletsGroup,EnemyGroup;
var enemyBulletimg,enemyBullet
var Score=0;
var Play=1
var End=0
var gameState=Play
var EnemyBulletGroup
var soilderDeadimg
var soilderCrouchimg
function preload (){
bulletImage=loadImage("bullet.png")
enemyBulletimg=loadImage("enemybullet.png")
soldierimg=loadAnimation("img1.png","img2.png","img4.png","img 5.png")
soilderDeadimg=loadAnimation("SoilderDead.png")
soilderCrouchimg=loadAnimation("SoilderCrouch.png")
enemyimg=loadAnimation("ememy 1.png","enemy2.png","enemy3.png","enemy4.png","enemy5.png")
groundImg=loadImage("bg.gif")

}
function setup(){
createCanvas(displayWidth,displayHeight);
ground=createSprite(displayWidth/2,displayHeight/2,20,20);
ground.addImage(groundImg);
ground.scale=3.5;
ground.velocityX=-3.5;
soldier=createSprite(100,height-100,20,20);
soldier.addAnimation("Soldierimg",soldierimg);
soldier.addAnimation("soilderDeadimg",soilderDeadimg);
soldier.addAnimation("soilderCrouchimg",soilderCrouchimg);

soldier.debug=true;
bulletsGroup=new Group()
EnemyGroup=new Group()
EnemyBulletGroup=new Group()
}
function draw(){
background(0)
if(gameState===1){
    if(ground.x<0){
        ground.x=ground.width/2
        }
        if(bulletsGroup.isTouching(EnemyGroup)){
        bulletsGroup.destroyEach()
            EnemyGroup.destroyEach()
        
            Score=Score+10
        
        }
        
        spawnEnemys();
        spawnBullets();
        if(EnemyBulletGroup.isTouching(soldier)){
            gameState=0
        }
        if(keyWentDown(DOWN_ARROW)){
        soldier.changeAnimation("soilderCrouchimg",soilderCrouchimg)
        }
        if(keyWentUp(DOWN_ARROW)){
            soldier.changeAnimation("Soldierimg",soldierimg)
            
            }
}
else if (gameState===0){
ground.velocityX=0;
enemy.velocityX=0;
soldier.velocityX=0;
soldier.y=height-50;
soldier.changeAnimation("soilderDeadimg",soilderDeadimg)
}

drawSprites();
textSize(30)
    fill("red")
text("Score:"+Score,displayWidth-150,50)

}

function spawnEnemys(){
if(frameCount%100===0){
    enemy=createSprite(displayWidth,height-100,20,20);
    enemy.addAnimation("enemyimg",enemyimg);
    enemy.velocityX=-8

    enemy.debug=true
    enemy.setCollider("rectangle",0,0,50,100)
    EnemyGroup.add(enemy);
    enemy.lifetime=300;

    enemyBullet=createSprite(displayWidth,height-150,20,20)
    enemyBullet.addImage("enemyBulletimg",enemyBulletimg)
    enemyBullet.velocityX=-30
    enemyBullet.scale=0.1
    enemyBullet.lifetime=300
    EnemyBulletGroup.add(enemyBullet)
}
}
function spawnBullets(){
if(keyWentDown("Space")){
    bullet=createSprite(100,height-125,20,20)
    bullet.addImage("bulletImage",bulletImage)
    bullet.velocityX=+50

    bulletsGroup.add(bullet)
    bullet.scale=0.1

    bullet.debug=true
    bullet.lifetime=300
}


}









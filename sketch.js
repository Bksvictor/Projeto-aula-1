
var fundo, Personagem1,Personagem2
var imgpersonaagem1,imgpersonagem2

function preload(){
 fundo= loadImage("./images/Road.png")
 imgpersonaagem1 = loadImage("./images/mainPlayer1.png") 
 imgpersonagem2  = loadImage("./images/mainPlayer3.png")  
}


function setup(){
    createCanvas(800,300)
    background(fundo)
    Personagem1= createSprite(200,75,20,20)
Personagem1.addImage(imgpersonaagem1)
Personagem1.scale  = 0.08

Personagem2= createSprite(500,200,20,20)
Personagem2.addImage(imgpersonagem2)
Personagem2.scale = 0.08


 
}
function draw(){ 
drawSprites()

}
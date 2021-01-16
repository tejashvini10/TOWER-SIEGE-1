const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world,ground;
var blueblock1,blueblock2,blueblock3,blueblock4,blueblock5,blueblock6,blueblock7,pinkblock8,pinkblock9,pinkblock10;
var pinkblock11,pinkblock12,greenblock13,greenblock14,greenblock15,greyblock16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var stand1,stand2;
var polygon,polygon_img,slingshot;

function preload(){
    polygon_img=loadImage("polygon.png");

}
function setup(){
   var canvas= createCanvas(1500,800);
    engine=Engine.create();
    world=engine.world;
    
    ground=new Ground(600,height,1200,30);
    stand1=new Ground(600,285,200,10);
    stand2=new Ground(900,195,200,10);

    blueblock1=new Block(170,200,320,20);
    blueblock2=new Block(570,260,30,40);
    blueblock3=new Block(540,260,30,40);
    blueblock4=new Block(620,260,30,40);
    blueblock5=new Block(650,260,30,40);
    blueblock6=new Block(580,260,30,40);
    blueblock7=new Block(550,260,30,40);
    pinkblock8=new Block(330,235,30,40);
    pinkblock9=new Block(360,235,30,40);
    pinkblock10=new Block(390,235,30,40);
    pinkblock11=new Block(420,235,30,40);
    pinkblock12=new Block(450,235,30,40);
    greenblock13=new Block(360,195,30,40);
    greenblock14=new Block(390,195,30,40);
    greenblock15=new Block(420,195,30,40);
    greyblock16=new Block(390,155,30,40);

    
    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingshot=new Slingshot(this.polygon,{x:100,y:200});
Engine.run(engine);


}
function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    stand1.display();
stand2.display();
stroke(15);
fill("grey")
    blueblock1.display();
   
    stroke(15);
    fill("green");
    blueblock2.display();
    blueblock3.display();
    blueblock4.display();
    

    stroke(15);
    fill("pink");
    blueblock5.display();
    blueblock6.display();
    blueblock7.display();
    pinkblock8.display();
    pinkblock9.display();

    stroke(15);
    fill("blue");
    pinkblock10.display();
    pinkblock11.display();
    pinkblock12.display();
    greenblock13.display();
    greenblock14.display();
    greenblock15.display();
    greyblock16.display();
  
    polygon.display();
    slingshot.display();

imageMode(CENTER)
image(polygon,polygon.position.x,polygon.position.y,40,40);
    



}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

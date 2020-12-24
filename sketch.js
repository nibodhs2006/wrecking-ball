const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,b2,b3,b4,b5
var ball,rope

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

    
 ground = new Ground(1500,785,3000,30)
 
 
ball = new Ball(200,200,80,80)

b1 = new Building(900,200,70,70)
b2 = new Building(900,210,70,70)
b3 = new Building(900,220,70,70)
b4 = new Building(900,230,70,70)
b5 = new Building(900,240,70,70)


b6= new Building(815,200,70,70)
b7 = new Building(815,210,70,70)
b8= new Building(815,220,70,70)
b9= new Building(815,230,70,70)
b10 = new Building(815,240,70,70)


 
b11= new Building(730,200,70,70)
b12 = new Building(730,210,70,70)
b13= new Building(730,220,70,70)
b14= new Building(730,230,70,70)
b15 = new Building(730,240,70,70)


b16= new Building(645,200,70,70)
b17 = new Building(645,210,70,70)
b18= new Building(645,220,70,70)
b19= new Building(645,230,70,70)
b20 = new Building(645,240,70,70)

rope= new Rope(ball.body,{x:500,y:50})

 
    
}
function draw(){
  background("blue")
   Engine.update(engine);
   ground.display()
   b1.display()
   b2.display()
   b3.display()
   b4.display()
   b5.display()
   b6.display()
   b7.display()
   b8.display()
   b9.display()
   b10.display()
   b11.display()
   b12.display()
   b13.display()
   b14.display()
   b15.display()
   b16.display()
   b17.display()
   b18.display()
   b19.display()
   b20.display()
 ball.display()
  rope.display()
  
}

function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})


}


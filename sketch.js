const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    
}

function setup(){
 createCanvas(600,700)  
 engine = Engine.create();
 world = engine.world;
    
}

function draw(){
   background("black") 
   createDrops();
   for(var i=0; i<maxDrops;i++){
      drops[i].display();
      drops[i].update();
    }
}   



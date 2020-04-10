// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var engine,world;
var ground;
var ball1,ball2,ball3;
var tanker,cannon,cannonball;

function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.


ball1 = new Ball(700,200,30);    
ball2 = new Ball(850,10,20);
ball3 = new Ball(800,100,25);
tanker = new Tanker(100,250,250,230);
ground = new Ground(300,380,2000,30);
cannon = new Cannon(188,245,35,PI/105);


}

function draw() {
    background("white")
// Remember to update the Matter Engine and set the background.
Engine.update(engine);


ball1.display();
ball2.display();
ball3.display();
tanker.display();
ground.display();
cannon.display();

}


function mousePressed() {
    // Call the shoot method for the cannon.
    
        
    
}
class CanonBall {
  constructor(x, y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
  
  this.body = Bodies.circle(x,y,30,options);
  this.radius = 30; 
  this.image = loadImage("assets/canonBall.png");
  World.add(world, this.body);
}
display(){
  var pos =this.body.position;
  imageMode(RADIUS);
  fill("red");
image(this.image,pos.x, pos.y, this.radius);
}
}

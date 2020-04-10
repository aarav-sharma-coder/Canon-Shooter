class Ball {
  constructor(x,y,r) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 100,
        inertia: Infinity,
        restitution: 1
    }
    
 this.body = Bodies.circle(x,y,r,options);
      this.r = r; 
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("red");
    ellipse(pos.x, pos.y, this.r);
    }
  };
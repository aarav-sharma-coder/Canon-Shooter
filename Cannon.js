class Cannon {
    constructor(x, y,height,angle) {
        var options = {
        isStatic: true
       }
       this.body = Bodies.rectangle(x,y,20,height,options);
       this.width = 100;
       this.height = height;
       this.image = loadImage("assets/Untitled.png");
       Matter.Body.setAngle(this.body,angle);
       World.add(world, this.body);
     }
     display(){
       var pos = this.body.position;
       var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(mouseY/2115);
       imageMode(CENTER);
       image(this.image,0,0, this.width, this.height);
       pop();
     }
  }

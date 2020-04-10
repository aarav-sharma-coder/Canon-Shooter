class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     this.image = loadImage("assets/tank.png");
     World.add(world, this.body);
   }
   display(){
     
     imageMode(CENTER);
     image(this.image,120 ,275, this.width, this.height);
     
   }
}

class Ball {
    constructor(x,y,width,height) {
      var options = {
          restituion:0.4,
          density:0.04,
          friction:1.0
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("cyan");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };

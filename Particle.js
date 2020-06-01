class Particles{
    constructor(x, y) {
        var options ={
            restitution:0.4
        }
        this.body = Bodies.circle(x, y, 10,options);
        this.radius=10;
        this.color=color(random(0,255), random(0,255), random(0,255))
        World.add(world, this.body);
      }
      display(){
          push();
          fill(this.color);
          ellipseMode(RADIUS);
          ellipse(this.body.position.x,this.body.position.y,this.radius);
          pop();
        }
    }
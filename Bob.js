  
class Bob{
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':3
      }
      this.body = Bodies.circle(x, y,20, options);
      
      World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle);
        fill("pink");
        ellipseMode(CENTER)
        ellipse(0,0,this.r,this.r)
        pop()
       
       
     
        }
  }
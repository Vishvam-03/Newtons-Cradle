class Chain{
    constructor(bodyA,bodyB, offsetX, offsetY){
        
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.03,
            length:400
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display(){
      var pointA=this.chain.bodyA.position;
      var pointB=this.chain.bodyB.position;
      strokeWeight(4);

      var bob1 = pointA.x
      var bob1 = pointA.y

      var bob2 = pointB.x+this.offsetX
      var bob2 = pointB.y+this.offsetY
      line(pointA.x,pointA.y,pointB.x,pointB.y)  
    }
}
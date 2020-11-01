class SlingShot{
    constructor(bodyA, pointb){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
    
       
        this.polygon = Constraint.create(options);
        this.body = Bodies.circle(polygon.position.x,polygon.position.y,40,40);

        World.add(world, this.polygon);
    }
    attach(body){
        this.polygon.bodyA = body;
        
    }
    
    fly(){
        this.polygon.bodyA = null;
    }

    display(){
       
        if(this.polygon.bodyA){
            var pointA = this.polygon.bodyA.position;
           
          
        }
    }
    
}
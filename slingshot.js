class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.8,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        
       
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        point1 = this.sling.bodyA.position;
        point2 = this.pointB;
        line()
        
        }
    }

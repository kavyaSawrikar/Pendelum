class Chain{
    constructor(bodyA, bodyB, offsetX, offsetY){
        
        this.offsetX=offsetX
        this.offsetY=offsetY
        
        var options = {
            //JSON format of storing data
            'bodyA': bodyA,
            'bodyB': bodyB,
            'length': 100, // distance between bodies
            'stiffness': 1, // it will be of elastic material
            'angularstiffness': 1,
        
           'pointB':{x:this.offsetX, y:this.offsetY},
           
        }
        this.Chain = Matter.Constraint.create(options);
        World.add(world, this.Chain);

    }

    fly(){
        this.Chain.bodyA = null;
    }

    display(){
        var posA = this.Chain.bodyA.position;
        var posB = this.Chain.bodyB.position;
        push();
        stroke("white");
        strokeWeight(4);
        // line instruction needs x, y coordinate of starting point and the end point
        line(posA.x, posA.y, posB.x, posB.y);
        pop();
    }
}
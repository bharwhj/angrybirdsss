class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
       this.catapult1=loadImage("sprites/sling1.png")
        this.catapult2=loadImage("sprites/sling2.png")
        this.catapult3=loadImage("sprites/sling3.png")
    
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(48,22,8)
            if(this.sling.bodyA.position.x>150){
                strokeWeight(6)

                
              




            }
            else{

             strokeWeight(3)


            }
            strokeWeight(4);
            line(pointA.x-10, pointA.y-1, pointB.x+30, pointB.y-1);
            line(pointA.x-10, pointA.y-1, pointB.x-30, pointB.y-1);
            image(this.catapult3,pointA.x-20,pointA.y-20,20,30)
            pop()
        }
        image(this.catapult1,200,35,)
        image(this.catapult2,170,35)
        
    }
    
}
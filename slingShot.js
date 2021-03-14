class Slingshot {

    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:0.4,
            
        }
    
    
    
    this.sling = Constraint.create(options)
    World.add(world,this.sling)
    }
    
    display(){ 

        
    
     var pointA = this.sling.bodyA.position
     var pointB = this.sling.bodyB.position
     
     var anchorAx = pointA.x
     var anchorAy = pointA.y

     var anchorBx = pointB.x + this.offsetX
     var anchorBy = pointB.y + this.offsetY

     
    
    line (anchorAx,anchorAy,anchorBx,anchorBy)
    
    }
    }
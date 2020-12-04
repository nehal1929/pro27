class Bob{
    constructor(x,y,radius){
        var options ={
            'isStatic' : false,
            'restitution' : 1,
            'friction' : 0,
            'density' : 0.2
        }
        
        this.body = Bodies.circle(x,y,20,options);
        this.radius = radius;

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        ellipseMode(CENTER)
        push();
        fill("purple")
        ellipse(pos.x,pos.y,this.radius)
        pop();
    }
}
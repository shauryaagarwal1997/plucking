class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,

            stiffness:0.004,
            length:10
        }
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    fly(){
        this.chain.bodyA =null;
    }
    display(){
        if(this.chain.bodyA != null){
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x,this.chain.pointB.y)
    }
    }
    attatch(){
        Matter.Body.setPosition(stone.body,{x:235,y:415})
        this.chain.bodyA=stone.body;
    }
}
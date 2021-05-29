class Baseclass{
    //all the properties are included inside the constructor(). 
    //construcor is a function that gets called when an object is made
    //the object is referred to as "this"
    constructor(x,y,width,height,angle){ 

        var options = {
            restitution: 0.8,
            friction:1.0,
            density:1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png")
        World.add(world,this.body)
    }

    //functions
    display(){
        //nick name
        var pos = this.body.position;
        var angle = this.body.angle;

        angleMode(RADIANS);
        push();
        //move the 0,0 axis to the body's center using translate
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER); 
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}
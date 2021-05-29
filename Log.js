class Log extends Baseclass{
    //all the properties are included inside the constructor(). 
    //construcor is a function that gets called when an object is made
    //the object is referred to as "this"
    constructor(x,y,height,angle){ 
        super(x,y,20,height,angle)
        this.image = loadImage("sprites/wood2.png")
        Matter.Body.setAngle(this.body,angle)
    }
}
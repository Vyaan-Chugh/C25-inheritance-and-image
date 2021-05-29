class Box extends Baseclass{
    //all the properties are included inside the constructor(). 
    //construcor is a function that gets called when an object is made
    //the object is referred to as "this"
    constructor(x,y,width,height){ 
        super(x,y,width,height);
        this.image = loadImage("sprites/wood1.png")

    }
}
class Bird extends Baseclass{
    //all the properties are included inside the constructor(). 
    //construcor is a function that gets called when an object is made
    //the object is referred to as "this"
    constructor(x,y){ 
        super(x,y,50,50);
        this.image = loadImage("sprites/bird.png")
    }

    //functions
    display(){
        //nick name
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        super.display();
    }
}

class Drop{
    constructor(x,y,radius){
        //  shape of the body
        this.body = ellipse(x,y,radius);
        this.radius = radius;
        this.x = x;
        this.y = y;
    }
    //make fall function to add speed 
    fall(speed){
        this.y +=speed;
    }
  // display function to give the x,y,radius and color
    display(){
        push();
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.radius);
        pop();
    }
  }
class Polygon{
    constructor(x, y, r) {
       
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y, this.r);
        this.pImage = loadImage("polygon.png")
        
        World.add(world, this.body);
      }
      display(){
       
        image(this.pImage,60,300,40,40);
        
      }
}
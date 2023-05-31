class paper
{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
	   this.image = loadImage("paper.png");
	   this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
	   World.add(world, this.body);
    }
         
    
   

    display()
	{
			
			var paperPosition = this.body.position;		

			push()
			translate(paperPosition.x, paperPosition.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}
}

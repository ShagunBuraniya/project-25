class paper
{
    constructor(x,y,width,hieght){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }

         
    }
   

    display()
	{
			
			var paperPosition =this.body.position;		

			push()
			translate(paperPosition.x, paperPosition.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}
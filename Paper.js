class Paper{
    constructor(x,y,r){
        
  var options={
       isStatic:false,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
  }

 
   

   this.x=x;
   this.y=y;
   this.r=r;
   
   this.body=Bodies.circle(x,y,this.r/2,options);
   this.image=loadImage("paper.png")
   World.add(world,this.body);

    }

    display(){
        
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(220,0,112);
        imageMode(CENTER)
        image(this.image,15,15,this.r,this.r)
        
        //ellipse(0,0,this.r,this.r);
        pop();


    }



}
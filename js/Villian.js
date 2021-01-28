class Villian{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("thanos-removebg-preview (1).png");
        World.add(world, this.body);

       

      }
      display(){
          var pos = this.body.position;
    
          push()
              translate(pos.x,pos.y)
              rotate(this.body.angle)
              strokeWeight ("2")
              imageMode(CENTER);
              image(this.image,0,0,this.width,this.height);
            pop()
        }
       
        
    
    
    }
    
    
     

      
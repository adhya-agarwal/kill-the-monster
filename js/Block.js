class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.001,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

       

      }
      display(){
          var pos = this.body.position;
    
          push()
              translate(pos.x,pos.y)
              rotate(this.body.angle)
              strokeWeight ("2")
              stroke ("white")
              fill ("turquoise")
              rectMode(CENTER);
              rect (0, 0 , this.width, this.height)
            pop()
        }
       
        
    
    
    }
    
    
     

      
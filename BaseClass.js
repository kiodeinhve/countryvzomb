class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);

        if(this.image1){
          var rand = Math.round(random(1,4));
          console.log(rand);
          switch(rand){
           case 1:  image(this.image1, this.body.position.x, this.body.position.y, 50, 50);
           break;
           case 2:  image(this.image2, this.body.position.x, this.body.position.y, 50, 50);
           break;
           case 3:  image(this.image3, this.body.position.x, this.body.position.y, 50, 50);
           break;
           case 4:  image(this.image4, this.body.position.x, this.body.position.y, 50, 50);
           break;
           default: break;
          }
        }
        else{
          image(this.image, 0, 0, this.width, this.height);
        }

        pop();
      }
}
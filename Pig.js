class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,80,80);
    this.image1 = loadImage("assets/NPC/mummyZomb.png");
    this.image2 = loadImage("assets/NPC/BigZomb.png");
    this.image3 = loadImage("assets/NPC/normZomb.png")
    this.image = loadImage("assets/NPC/PirateZomb.png");
    this.Visiblity = 255;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};
class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("player.png");

    this.life1 = "yellow";
    this.life2 = "yellow";
    this.life3 = "yellow";

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(20);
    fill("yellow");
    text("Player", 280, 40);

    fill(this.life1);
    rect(180, 50, 70, 30);
    fill(this.life2);
    rect(250, 50, 70, 30);
    fill(this.life3);
    rect(320, 50, 70, 30);
    pop();
  }

  reduceLife(archerLife){
if(archerLife===2){
  this.life1="red"
}//life1

if(archerLife===1){
  this.life2="red"
}//life2

if(archerLife===0){
  this.life3="red"
}//life3

  }//function reduceLife(archerLife)

  

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}

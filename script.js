var jit = [];
var up = 200;
var side = 200;

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 30; i++){
  jit[i] = new JitterBug(i*10,i*10,i/3);
  }
}

function draw() {
 background(0);
 for (var i = 0; i < 25; i++){
 jit[i].move();
 jit[i].display();
 jit[i].collision();
   
 
   ellipse(up, side, 50,50);
 }
}

function keyPressed(){ 
  if (keyCode === UP_ARROW){ up += 2; 
       } else if(keyCode === DOWN_ARROW)
     { up -= 2; } 
}
  
function JitterBug(tempX, tempY, tempDiameter){
   this.x = tempX;
   this.y = tempY;
   this.diameter = tempDiameter;
   this.speed = 2.5;
   
  this.collision = function() {
    d= dist(this.x, this.y, up, side);
    print(d);
  }
  
   this.move = function(){
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
   };
   
   this.display = function(){  
   fill(random(0,255),random(0,255),random(0,255));
   ellipse(this.x, this.y, this.diameter, this.diameter);
   }
}

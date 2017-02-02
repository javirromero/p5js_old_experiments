function setup() {
  createCanvas(500, 500) ;
  
}

function draw() {
  background(0);
  noStroke();
  for (var i = 0; i < height; i += 20) {
    fill(242, 197, 187);
    rect(0, i, width, 10);
    fill(255, 255, 255);
    rect(251, 223, 192, height);
  }
  
 
}
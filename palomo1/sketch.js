//width of my center ellipse
var centerWidth = 100

//scope: alcance

function setup() {
  //camelCase
  //crea un lienzo donde dibujar
  //sintaxis createCanvas (dimHor, dimVer);




  createCanvas(840, 840);
  //background pinta el color del fndo
  //argumento (colores en escala de grises: 0 a 255... de más oscuro a más claro)
  // 3 argumentos: R,G,B
  background('#ff0066')

  frameRate()


}


function draw() {
  //drawMode de la triangle1
  //ellipse1
  stroke('#ffff99'); // hola esto 
  strokeWeight(498);
  fill(random(0), random(98), 76);
  //sintaxis: ellipse(posX, posY,width,height)
  triangle(500, 400, 50, 50);
  
  //drawMode de la triangle2
  //triangle2
  stroke(400, 98, 76);
  strokeWeight(random(60));
  fill('#99ffcc');
  triangle(width / 2, width / 2, centerWidth, centerWidth);

  var localVariable = 40;
  fill(0, 0, 200, random(64));
  ellipse(mouseX, mouseY, localVariable, localVariable);

  /*for (var i = 0; i < 255; i++) {
    fill(0, i, i);
    noStroke();
    ellipse(random(width), random(height), random(100), random(100));
  }*/

  /* if(mouseIsPressed) {
   background(255,0,0);
   } else {
     background(0,0,65);
   }*/
}

//contador de clicks
var clicks =0;

function mousePressed() {
  console.log("NUNUT");
  console.log(clicks);
  clicks=clicks+1;
  //clicks
}
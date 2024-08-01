let brushSize = 15;
let brushColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  brushColor = color(66, 135, 245); 
  background(400);
}

function draw() {
 
  if (mouseIsPressed) {
    
    stroke(brushColor);
    strokeWeight(brushSize);
   
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}


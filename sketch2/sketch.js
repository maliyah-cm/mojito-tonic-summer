//Cited Code used to help create the dashed lines in code lines 58-60.

//Title: Dashed line
//Author: aahyes
//Date: <date aquired> 4/26/2026
//Code version: p5.js 1.2.0
//Availability: https://editor.p5js.org/aahyes/full/DwvjDrMSz

//Title: dmd-interactive-student-work
//Author: Ava Lord
//Date: <date accessed> 4/26/2026
//Code version: unavailable --website didn't provide access to p5.js web editor code 
//Availability: https://lberdugo.github.io/dmd-interactive-student-work/lord_ava/

//Move jeep to reveal text
//Maliyah Miller

//variables
let jeep;
let palmw;
let font;

//always load images and fonts and music into preload so it's ready to go before js runs the code//

function preload() {
  jeep = loadImage("jeep.png");
  palmw = loadImage("palm-walk.png");
  font = loadFont("MojitoMainBold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //beach background shapes + setup//

  //Sky background
  background(220);
  fill("skyblue");
  rect(0, 0, windowWidth, windowHeight);

  //ocean block
  fill("blue");
  noStroke();
  rect(-1, 470, windowWidth);

  //sand block
  push();
  fill(249, 197, 41);
  stroke("white");
  rect(-1, 570, windowWidth);

  //road foundation
  fill(98, 98, 98);
  rect(-1, 640, windowWidth);

  //dashed road line
  push();
  fill("white");
  strokeWeight(2.5);
  drawingContext.setLineDash([50, 19]);
  line(-1, 763, windowWidth, 763);
  pop();

  //solid road line
  fill("white");
  strokeWeight(2);
  line(-1, 650, windowWidth, 650);
  pop();

  //poem text line
  textFont(font);
  fill("white");
  textSize(50);
  text("PALMEAS Y TRÓPICAS", 700, 566);

  //block-cover for poem line
  fill("blue");
  noStroke();
  rect(mouseX, 520, windowWidth, 59);

  //jeep image - move with mouseX
  imageMode(CENTER);
  image(jeep, mouseX, 480);

  //palm tree background
  image(palmw, 0, 103);
}

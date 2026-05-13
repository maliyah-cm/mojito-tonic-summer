//Cited Code to help create this p5.js sketch:

//Prompt(s): 1) How would I write this code to
//let me wrap my text so that "tranquilidad" is
//below "LUGAR DE ALEGRÍA"? Based on my figma
//sketch it should look like this.

//2) I want to integrate this wave effect from the example I just gave
//you to my own code, without having to drastically change the work
//I've already done. Can you show me, WITH COMMENTS in the code,
//how I would go about doing this in the most effiecient way possible?

//3) How do i make a wavy mirage effect to text in p5.js?

//AI tool: Claude, version Sonnet 4.6 & Google Gemini
//Portions of the code from AI: Lines 21, 31, & 46-52

//Wavy text visual interaction page
//Maliyah Miller

//variable(s)
let font;
let bodyFont;
let mask;

//always load images and fonts and music into preload so it's ready to go before js runs the code//

function preload() {
  font = loadFont("MojitoMainBlack.ttf");
  bodyFont = loadFont("ElmsSans-Bold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  mask = createGraphics(windowWidth, 690);

  //offscreen graphics buffer for the wave effect to take place later
  //in draw.
  mask.background("#FF4960");
  mask.fill("#FFED28");
  mask.textFont(font);
  mask.textSize(169);
  mask.textWrap(CHAR);
  mask.textAlign(CENTER, CENTER);
  mask.text(
    "LUGAR DE ALEGRÍA, TRANQUILIDAD.", width / 2 - 698, 297, 1430);
  
  push();
  mask.fill('white');
  mask.textFont(bodyFont);
  mask.textSize(27);
  mask.textAlign(CENTER, CENTER);
  mask.text("relax and just watch the waves",width / 2 - 698, 580, 1390);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // background('#FF4960');
  let waveScale = 0.4;
  let waveLevel = 3;
  let sliceH = 5;
  
  let ctx = drawingContext;
  let srcCanvas = mask.canvas;

  for (let y = 0; y < mask.height; y += sliceH) {
    let xOffset = sin(y * waveScale + frameCount * -0.02) * waveLevel;
    ctx.drawImage(srcCanvas, 0, y, width, sliceH, xOffset, y, width, sliceH);
    // image(mask.get(0, y, mask.width, 1), xOffset, y);
  }
}

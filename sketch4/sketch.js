//Cited code to correct p5.js errors in intial code lines
//Prompt(s): 1) This code is supposed have the images act like
//a stamp but they don't stay on screen when the mouse is clicked.
//This is what I've done so far, LEAVE COMMENTS in the code
//so I can learn, and can you use the variables I've established?

//AI tool: Claude, version Sonnet 4.6
//Portions of the code from AI: Lines 26, 36-37, 51-52, & 70-74

//calming stamps sketch
//Maliyah Miller

//variables
let font;
let bodyFont;

//stamp random - list of emoji images
let randomEmoji = ["conshe.png", "palme.png", "sola.png", "habiscu.png"];
let rEmoji = [];

//stamp variables
let sunshine;
let island;
let conch;
let habiscus;

let stamps = [];

function preload() {
  font = loadFont("MojitoMainBlack.ttf");
  bodyFont = loadFont("ElmsSans-Bold.ttf");
  //loading images in preload with each of it's variables
  habiscus = loadImage("conshe.png");
  conch = loadImage("palme.png");
  sunshine = loadImage("sola.png");
  island = loadImage("habiscu.png");

  for (let i = 0; i < randomEmoji.length; i++) {
    rEmoji[i] = loadImage(randomEmoji[i]);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  //page background
  fill("#00CDAD");
  rect(0, 0, windowWidth, windowHeight);

  imageMode(CENTER);
  for (let i = 0; i < stamps.length; i++) {
    image(stamps[i].img, stamps[i].x, stamps[i].y);
  }

  //poem text line & styling
  fill("white");
  textFont(font);
  textSize(70);
  textWrap(CHAR);
  textAlign(CENTER, CENTER);

  //poem line of text, off center slightly on purpose
  text(
    "LA LARGA ESPERA DE LAS VACACIONES Y EL DESCANSO ESTÁ LLEGANDO.", width / 2 - 550, height / 2, 1170);
  
  //comment text under poem line
  push();
  textFont(bodyFont);
  textSize(18)
  text("click around and collect momentos", width / 2 * 1.03, 587);
  pop(); 
  
  
}

function mousePressed() {
  imageMode(CENTER);
  let randomIndex = floor(random(rEmoji.length));
  let randomImg = rEmoji[randomIndex];

  stamps.push({
    img: randomImg,
    x: mouseX,
    y: mouseY,
  });
}

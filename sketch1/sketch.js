//ingredient class//
class Ingredient {
  constructor(img, x, y) {
    this.img = img;
    this.x = x; //current center of image X
    this.y = y; //current center of img Y
    this.dragging = false;
    this.offsetX = 0;
    this.offsetY = 0;

    //tracking to see if the individual ingredient has been dropped on the mojito
    this.dropped = false;
  }
   
  draw() {
    imageMode(CENTER);
    image(this.img, this.x, this.y);
  }
  
  //check mouse pressed code //
  checkPressed() {
    let halfW = this.img.width / 2;
    let halfH = this.img.height / 2;
    
    //this checks: did the user click land inside the individual IMAGE'S bounding box
    if (
      mouseX > this.x - halfW && mouseX < this.x + halfW &&
      mouseY > this.y - halfH && mouseY < this.y +halfH
    ) {
    
    this.dragging = true;
    this.offsetX = this.x - mouseX;
    this.offsetY = this.y - mouseY;
    } 
  }
  
  handleDrag() {
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }
  
  release() {
    this.dragging = false;
  }
}

//Create mojito & drag ingredients page
//Maliyah Miller

//variable(s)
let font;
let bodyFont;
let mojitoImg; //this is my drop target - where the ingredients land
let mojitoX, mojitoY;
let ingredients = []; //only my ingredients (6) live in this array
let glassDrop;

//drop zone variables for the target area of the target img center
const DROP_W = 880;
const DROP_H = 680;


//always load images and fonts and music into preload so it's ready to go before js runs the code//

function preload() {
  font = loadFont("MojitoMainBlack.ttf");
  bodyFont = loadFont("ElmsSans-Bold.ttf");
  mojitoImg = loadImage("mojito.png"); //img drop target
  glassDrop = loadSound("glassDrop.mp3");
  
  //ingredient(s) images
  cube = loadImage("cube.png");
  mint = loadImage("mint.png");
  rum = loadImage("rum.png");
  soda = loadImage("soda.png");
  sour = loadImage("sour.png");
  sugar = loadImage("sugar.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  mojitoX = width / 2;
  mojitoY = 475;
  
  //spacing for the ingredients on the sketch
  let imgs = [cube, mint, rum, soda, sour, sugar];
  for (let i = 0; i < imgs.length; i++) {
    let x = (i + 0.5) * (windowWidth / 6); //images have even-spaced cntrs
    let y = 135;
    ingredients.push(new Ingredient(imgs[i], x, y));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//check to see if a point's inside the mojito drop zone
function isOverMojito(cx, cy) {
  return (
    cx > mojitoX - DROP_W / 2 &&
    cx < mojitoX + DROP_W / 2 &&
    cy > mojitoY - DROP_H / 2 &&
    cy < mojitoY + DROP_H / 2);
}

//p5.js sketch code -- Everything coming together in the sketch! 
function draw() {
  //page background
  fill("#FFDF3F");
  rect(0, 0, windowWidth, windowHeight);
  
  //poem text line & styling
  fill("#FF004E");
  textFont(font);
  textSize(60);
  textAlign(CENTER, CENTER);
  //poem line of text
  text("MOJITO PARA LA PLAYA.", width / 2, 705);
  
  //comment text under poem line
  push();
  textFont(bodyFont);
  textSize(17)
  text("place the ingredients inside the cup", width / 2, 750);
  pop();
  
  //drawing the mojito target image
  imageMode (CENTER);
  image(mojitoImg, mojitoX, mojitoY);
  
  for(let ing of ingredients) {
    ing.draw();
    }
 }

 //mouse events
function mousePressed() {
  for (let ing of ingredients) {
    ing.checkPressed();
  }
}

function mouseDragged() {
  for (let ing of ingredients) {
    ing.handleDrag();
    }
  }  

function mouseReleased() {
  for (let ing of ingredients) {
    ing. release();

    //upon release, this checks if the ingredient's center is over the mojito
    if (isOverMojito(ing.x, ing.y) && !ing.dropped) {
      ing.dropped = true;
      glassDrop.stop();
      glassDrop.play();
    }
  }

  //checks if ALL 6 ingredients have been dropped onto the mojito
  let allDropped = ingredients.every(ing => ing.dropped);
  if (allDropped) {
    window.location.href = "https://maliyah-cm.github.io/mojito-tonic-summer/sketch2/index.html";
  }
}
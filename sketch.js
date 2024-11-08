//Data Cite: https://www.statista.com/statistics/202839/time-spent-playing-games-by-social-gamers-in-the-us/ 

//Title: WEEKLY GAMING HOURS
//name: Jaekob Gamboa

let img1, img2, img3, img4;
let img1Toggle = false, img2Toggle = false, img3Toggle = false, img4Toggle = false;

function preload() {
  // Load the images for UFO
  img1 = loadImage("UFO4.png");
  img2 = loadImage("UFO2.png");
  img3 = loadImage("UFO3.png");
  img4 = loadImage("UFO.png");

  // Load the images chart
  img1ToggleImage = loadImage("result1.png");
  img2ToggleImage = loadImage("result2.png");
  img3ToggleImage = loadImage("result3.png");
  img4ToggleImage = loadImage("result4.png");
  
  arcade= loadImage("arcade.png");
}

function setup() {
  let canvas = createCanvas(800, 1400);
  canvas.parent("data");
}

function draw() {
  background(0)

  // Display Light Chart
  if (img1Toggle) {
    image(img1ToggleImage, 30, 300, 300, 500);  // Display below img1
  }

  if (img2Toggle) {
    image(img2ToggleImage, 175, 300, 300, 500);  // Display below img2
  }

  if (img3Toggle) {
    image(img3ToggleImage, 330, 300, 300, 500);  // Display below img3
  }

  if (img4Toggle) {
    image(img4ToggleImage, 480, 300, 300, 500);  // Display below img4
  }

  // Display UFOs
  image(img1, 100, 250, 150, 150);
  image(img2, 250, 250, 150, 150);
  image(img3, 400, 250, 150, 150);
  image(img4, 550, 250, 150, 150);

  
  // Display arcade cab
  image(arcade,0,0,800,1400);
}

function mousePressed() {
  // Toggle visibility of the image below img1
}

function mousePressed() {
  // Toggle visibility for result1
  if (mouseX >= 105 && mouseX <= 245 && mouseY >= 285 && mouseY <= 370) {
    img1Toggle = !img1Toggle;
  }

  // Toggle visibility for result2
  if (mouseX >= 260 && mouseX <= 400 && mouseY >= 320 && mouseY <= 385) {
    img2Toggle = !img2Toggle;
  }

  // Toggle visibility for result3
  if (mouseX >= 400 && mouseX <= 545 && mouseY >= 290 && mouseY <= 380) {
    img3Toggle = !img3Toggle;
  }

  // Toggle visibility for result4
  if (mouseX >= 550 && mouseX <= 690 && mouseY >= 280 && mouseY <= 380) {
    img4Toggle = !img4Toggle;
  }
}

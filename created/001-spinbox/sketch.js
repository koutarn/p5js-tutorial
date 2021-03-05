function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  canvasSetup;
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight,WEBGL);
}

function draw(){
  background(255);
  for (let y = 0;y <= 2; y++) {
    for (let x = 0; x <= 2; x++) {
      noFill();
      stroke(255,147,206);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      box(200,200,200);
    }
  }
}

<<<<<<< HEAD
function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
}

function draw(){
  //背景色を設定
  background(0);

  let time = second();
  const fzbz = FizzBuzz(time);

  //1秒毎にFizzBuzzの結果を返す
  textSize(128);

  strokeWeight(12);
  stroke(51);

  fill('#white');
  text(time,300,300);

  fill('#fae');
  text(fzbz,random(400,420),random(400,420),);
}

function FizzBuzz(time) {
    return (time % 3 === 0 ? 'Fizz':'') + (time % 5 === 0 ? 'Buzz':'');
=======
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
>>>>>>> origin/master
}

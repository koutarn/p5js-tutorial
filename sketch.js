const canvasSizeX = 1280;
const canvasSizeY = 960;
const canvasColor = 'skyblue';

///only 1 call
function setup() {
  //キャンバスの作成
  createCanvas(canvasSizeY,canvasSizeY);

  //背景色の設定
  background(canvasColor);

  //塗りつぶし
  fill('red');

  //縁の色
  stroke('pink');

  circle(100,100,100);
  square(200,100,50);

}

function draw() {
  PushedMouse();
}

//クリックされたときに実行
function PushedMouse(){
  console.log('クリックされよ');

  //mouseButtonでどのボタンが押されたかを拾えるっぽい
  console.log(mouseButton);

  if (mouseButton === LEFT) {
    console.log('左クリック');

    //マウスの箇所に円を描く
    circle(mouseX,mouseY,10);
  }

  if (mouseButton === RIGHT) {
    console.log('右クリック');
    //マウスの箇所に円を描く
    square(mouseX,mouseY,30);
  }

}

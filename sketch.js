const canvasSizeX = 1280;
const canvasSizeY = 960;
const canvasColor = 'skyblue';

///only 1 call
function setup() {
  //$B%-%c%s%P%9$N:n@.(B
  createCanvas(canvasSizeY,canvasSizeY);

  //$BGX7J?'$N@_Dj(B
  background(canvasColor);

  //$BEI$j$D$V$7(B
  fill('red');

  //$B1o$N?'(B
  stroke('pink');

  circle(100,100,100);
  square(200,100,50);

}

function draw() {
  PushedMouse();
}

//$B%/%j%C%/$5$l$?$H$-$K<B9T(B
function PushedMouse(){
  console.log('$B%/%j%C%/$5$l$h(B');

  //mouseButton$B$G$I$N%\%?%s$,2!$5$l$?$+$r=&$($k$C$]$$(B
  console.log(mouseButton);

  if (mouseButton === LEFT) {
    console.log('$B:8%/%j%C%/(B');

    //$B%^%&%9$N2U=j$K1_$rIA$/(B
    circle(mouseX,mouseY,10);
  }

  if (mouseButton === RIGHT) {
    console.log('$B1&%/%j%C%/(B');
    //$B%^%&%9$N2U=j$K1_$rIA$/(B
    square(mouseX,mouseY,30);
  }

}

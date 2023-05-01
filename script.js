
var entry
var button
function setup()
{
  createCanvas(windowWidth,windowHeight);
  entry = createInput();
  entry.position(0,0);
  entry.size(100,100);
  textAlign(CENTER,CENTER);
  button = createButton('Send');
}

function draw()
{
  background(0);
  text(entry.value(),width/2,height/2)
}


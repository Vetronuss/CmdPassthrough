
var entry
var button
function setup()
{
  createCanvas(windowWidth,windowHeight);
  entry = createInput();
  entry.position(width/2-100,height/2-100);
  
  entry.size(200,100);
  textAlign(CENTER,CENTER);
  button = createButton('Send');
  button.position(width/2,height/2)
}

function draw()
{
  background(0);
  text(entry.value(),width/2,height/2)
}


var button1, button2, button3;
var textBox1;
var count; // integer

// console.log(i);
function setup(){
  button1 = createButton("點我");
  button1.mousePressed(plus);
  count = 0;
  button2 = createButton("0");
}
function plus(){
  count += 1;
}

function draw(){
frameRate(5);
  button2.value="hi"+count.toString();
  button2.html(count.toString());
}

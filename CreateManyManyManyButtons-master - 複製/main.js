var button1, button2, button3;
var textBox1;
var count; // integer

// console.log(i);
function setup(){
  console.log(document.body);
  button1 = createButton("點我");
  button1.mousePressed(plus);
  count = 0;
  // button2 = createButton("0");
  button2 = document.createElement("button");
  button2.innerHTML="hi";
  document.body.appendChild(button2);
  textBox1 = document.createElement("textarea");
  console.log(textBox1);
  textBox1.style.height="1000px";
  textBox1.rows="1";
  document.body.appendChild(textBox1);
}
function plus(){
  count += 1;

  // console.log("pn="+);
  button2.parentNode.removeChild(button2);
  // button2.dispose();
}

function draw(){
// frameRate(5);
  button2.innerHTML="hi"+count.toString();
  // button2.html(count.toString());
}

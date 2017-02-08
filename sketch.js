var EYE;
var EYE2;
var eyesound;
var x = 200;
var y = 200;
var v = 200;
var url;
var w = 100;
var it = "They're it!"
var yes = false
var ZZ

function preload() {
  EYE = loadImage("assets/EYE.png");
  EYE2 = loadImage("assets/EYE2.png");
 eyesound = loadSound("assets/YOULOSE.mp3");
 hsound = loadSound("assets/HAHA.mp3");
}
function setup() {
 createCanvas (windowWidth,windowHeight);
  imageMode(CENTER);
  //background(0, 255, 255);
  noCursor();
  //eyesound.play();
  fill(0);
  noStroke();
  url = getURL();
}





function draw() {
 background (0,255,255);
 fill(0,255,255);
 rect(0,0,500,100);
 fill(0);
 text(it,0,20);
 image(EYE, mouseX,mouseY, EYE.height/2, EYE.width/2);
 image(EYE2,x,y, EYE2.height/2, EYE2.width/2);
 x += random(-v,v);
 y += random(-v,v);
 if(x<0){
  x+=v;
 }
 if(y<0){
  y+=v;
 }
 if(x>windowWidth){
  x-=v;
 }
 if(y>windowHeight){
  y-=v;
 }
 
 if(dist(mouseX,mouseY,x,y) <= EYE.height/2){
  if(it=="They're it!"){
   it="You're it!";
   eyesound.play();
   ZZ + 1
  } else {
   it="They're it!";
   
  }
 
  text(url, w, height/1);
  x--;
 }
 if (keyIsPressed === true) {
  yes = true;
  hsound.play();
 }
 
 if(yes===true){
  text("NO KEYBOARD ALLOWED",100,100);
 }
}







//
//
//avoid the eye game
//
//
//
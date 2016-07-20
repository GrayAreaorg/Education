
var gui;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider =  new parameters();
  gui = new dat.GUI();
  initGui();
}

function draw() {
  background(slider.Red, slider.Green, slider.Blue);
}

var parameters = function(){
  this.Red = 150 ;
  this.Green = 150 ;
  this.Blue = 150;
}

var initGui = function() {
  var f2 = gui.addFolder('Colors');
  f2.add(slider, 'Red',0,255);
  f2.add(slider, 'Green',0,255);
  f2.add(slider, 'Blue',0,255);
};

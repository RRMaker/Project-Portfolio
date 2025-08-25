function preload(){
 img =  loadImage("owltoy.jpeg");
}
function setup() {
  canvas = createCanvas(280, 280);
  canvas.center();
  classifier = ml5.imageClassifier("MobileNet", modelLoaded);
  
}
function modelLoaded(){
  console.log("model is ready");
}
function draw(){
    image(img, 0, 0, 280, 280);
    classifier.classify(image, gotResult);
}


function gotResult(error, results){
  if(error){
console.log(error);
  }
  else{
    console.log(results);
    document.getElementById("result1").innerHTML = results[0].label;
  }
}
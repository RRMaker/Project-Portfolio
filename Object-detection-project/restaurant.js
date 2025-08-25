img4 = "";
status4 = "";
objects4 = [];
function back3(){
    window.location = "index.html";
}
function preload(){
    img4 = loadImage("restraunt.jpg");
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.position(450, 50);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status4").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(img4, 0, 0, 380, 380);
    
    if(status4 != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(img4, gotResult);
        for(i = 0; i < objects4.length; i++){
            document.getElementById("status4").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_objects4").innerHTML = "Number of Objects Detected Are = " + objects4.length;
            fill(r, g, b);
            stroke(r, g, b);
            noFill();
            percent = floor(objects4[i].confidence * 100);
            text(objects4[i].label + " " + percent + " %", objects4[i].x + 10, objects4[i].y + 15);
            rect(objects4[i].x, objects4[i].y, objects4[i].width, objects4[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model has loaded");
    status4 = true;
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects4 = results;
    }
}
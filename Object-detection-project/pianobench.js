img = "";
status = "";
objects = [];
function back(){
    window.location = "index.html";
}
function preload(){
    img = loadImage("pianobench.jpg");
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.position(450, 50);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(img, 0, 0, 380, 380);
    
    if(status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(img, gotResult);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected Are = " + objects.length;
            fill(r, g, b);
            stroke(r, g, b);
            noFill();
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + " %", objects[i].x + 10, objects[i].y + 15);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model has loaded");
    status = true;
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}
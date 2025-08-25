img2 = "";
status2 = "";
objects2 = [];
function back2(){
    window.location = "index.html";
}
function preload(){
    img2 = loadImage("bdais.jpg");
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.position(450, 50);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status2").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(img2, 0, 0, 380, 380);
    
    if(status2 != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(img2, gotResult);
        for(i = 0; i < objects2.length; i++){
            document.getElementById("status2").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_objects2").innerHTML = "Number of Objects Detected Are = " + objects2.length;
            fill(r, g, b);
            stroke(r, g, b);
            noFill();
            percent = floor(objects2[i].confidence * 100);
            text(objects2[i].label + " " + percent + " %", objects2[i].x + 10, objects2[i].y + 15);
            rect(objects2[i].x, objects2[i].y, objects2[i].width, objects2[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model has loaded");
    status2 = true;
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects2 = results;
    }
}
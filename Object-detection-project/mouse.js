img3 = "";
status3 = "";
objects3 = [];
function back3(){
    window.location = "index.html";
}
function preload(){
    img3 = loadImage("mousees.jpg");
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.position(450, 50);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status3").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(img3, 0, 0, 380, 380);
    
    if(status3 != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(img3, gotResult);
        for(i = 0; i < objects3.length; i++){
            document.getElementById("status3").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_objects3").innerHTML = "Number of Objects Detected Are = " + objects3.length;
            fill(r, g, b);
            stroke(r, g, b);
            noFill();
            percent = floor(objects3[i].confidence * 100);
            text(objects3[i].label + " " + percent + " %", objects3[i].x + 10, objects3[i].y + 15);
            rect(objects3[i].x, objects3[i].y, objects3[i].width, objects3[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model has loaded");
    status3 = true;
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects3 = results;
    }
}
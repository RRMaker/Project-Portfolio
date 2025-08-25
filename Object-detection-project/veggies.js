img5 = "";
status5 = "";
objects5 = [];
function back3(){
    window.location = "index.html";
}
function preload(){
    img5 = loadImage("restraunt.jpg");
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.position(450, 50);
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status5").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(img5, 0, 0, 380, 380);
    
    if(status5 != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(img5, gotResult);
        for(i = 0; i < objects5.length; i++){
            document.getElementById("status5").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_objects5").innerHTML = "Number of Objects Detected Are = " + objects5.length;
            fill(r, g, b);
            stroke(r, g, b);
            noFill();
            percent = floor(objects5[i].confidence * 100);
            text(objects5[i].label + " " + percent + " %", objects5[i].x + 10, objects5[i].y + 15);
            rect(objects5[i].x, objects5[i].y, objects5[i].width, objects5[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model has loaded");
    status5 = true;
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects5 = results;
    }
}
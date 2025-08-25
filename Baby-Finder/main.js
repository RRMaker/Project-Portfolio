img = "";
status = "";
objects = [];
song = "";
function preload(){
    song = loadSound("alarm.mp3");
}
function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(video, 0, 0, 380, 380);
    
    if(status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Detecting Objects";
            document.getElementById("status2").innerHTML = "Baby Found";
            fill(r, g, b);
            stroke(r, g, b);
            noFill();
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + " %", objects[i].x + 10, objects[i].y + 15);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    else{
        document.getElementById("status").innerHTML = "Baby Not Found";
    }
    if(status = "Baby Not Found"){
        song.play();
        song.loop();
    }
    else{
        status = "Baby Found";
        song.stop();
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
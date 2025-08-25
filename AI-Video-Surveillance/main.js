video = "";
status = "";
objects = [];
function preload(){
    video = createVideo("tom-jerry-video.mp4");
    video.hide();
}
function setup(){
    canvas = createCanvas(480, 350);
    canvas.center();
}
function draw(){
    image(video, 0, 0, 480, 350);
    if(status != ""){
        objectDetector.detect(video, gotResults);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected Are: " + objects.length;
            fill("#fc0303");
            stroke("#fc0303");
            noFill();
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model is ready");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}


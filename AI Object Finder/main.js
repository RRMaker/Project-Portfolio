video = "";
status = "";
objects = "";
objects_name = "";
speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
function preload(){

}
function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();
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
function draw(){
    image(video, 0, 0, 350, 350);

    if(status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResults);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Detecting Objects";
            fill(r, g, b);
            stroke(r, g, b);
            noFill();
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 10, objects[i].y + 15);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            if(objects[i].label == objects_name){
                document.getElementById("found").innerHTML = objects_name + " found";
                video.stop();
                objectDetector.detect(gotResults);
                synth = window.speechSynthesis;
                utterThis = new SpeechSynthesisUtterance(objects_name + " found");
                synth.speak(utterThis);
                }
            else{
                document.getElementById("found").innerHTML = objects_name + " not found";
            }
        }
    }
}
function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    objects_name = document.getElementById("input1").value;
}
function modelLoaded(){
    console.log("Model is ready");
    status = true;
}
function speak(){

}

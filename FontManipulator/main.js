difference = "";
function preload(){

}
function setup(){
   canvas = createCanvas(400, 400);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(500, 500);
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("Model is ready");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + " ,Nose Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + " ,Right Wrist X = " + rightWristX + " ,Difference = " + difference);
    }
}
function draw(){
    string = "Rohan";
    background("#6c6f8c");
    fill("#cfeb34");
    textSize(difference);
    text(string, 10, 300)
}
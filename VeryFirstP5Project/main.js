function preload(){

}
function setup(){
canvas = createCanvas(750, 500);
canvas.position(100, 250);
video = createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 95, 105, 550, 300);

fill("#00FF00");
stroke("#00FF00");
rect(50, 35, 650, 28);
rect(50, 435, 650, 28);
rect(35, 35, 28, 427);
rect(685, 35, 28, 427);
fill("#FF0000");
stroke("#FF0000");
circle(50, 50, 45);
circle(700, 50, 45);
circle(50, 450, 45);
circle(700, 450, 45);
}
function take_snapshot(){
save("portrait.png");
}
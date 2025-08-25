x = 0;
y = 0;
screen_width = 0;
screen_height = 0;

apple = "";
draw_apple = "";
speak_data = "";

to_number = "";


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
    apple = loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

 to_number = Number(content);

if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML = "Started drawing apple: " + content; 
  draw_apple = "set";
}
else{
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
}

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width, screen_height - 150);
 canvas.center();

}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1; i <= to_number; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak();
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

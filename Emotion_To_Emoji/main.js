//https://teachablemachine.withgoogle.com/models/l7gGaX4CZ/
Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:100
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '"+data_uri+"'>";

    });
}

console.log("ml5 version = ", ml5.version);


classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/l7gGaX4CZ/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model is ready");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is "+prediction_1;
    speak_data_2 = "The second prediction is "+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResults);
}
function gotResults(error, result){
if (error){
    console.log(error);
}
else{
    console.log(result);
    document.getElementById("result_emotion_name1").innerHTML = result[0].label;
    document.getElementById("result_emotion_name2").innerHTML = result[1].label;
    prediction_1 = result[0].label;
    prediction_2 = result[1].label;

    speak();

    if (result[0].label == "Happy"){
        document.getElementById("update_emoji1").innerHTML = "&#128512;";
    }
    if (result[0].label == "Sad"){
        document.getElementById("update_emoji1").innerHTML = "&#128532;";
    }
    if (result[0].label == "Angry"){
        document.getElementById("update_emoji1").innerHTML = "&#128545;";
    }


    if (result[1].label == "Happy"){
        document.getElementById("update_emoji2").innerHTML = "&#128512;";
    }
    if (result[1].label == "Sad"){
        document.getElementById("update_emoji2").innerHTML = "&#128532;";
    }
    if (result[1].label == "Angry"){
        document.getElementById("update_emoji2").innerHTML = "&#128545;";
    }
}
}
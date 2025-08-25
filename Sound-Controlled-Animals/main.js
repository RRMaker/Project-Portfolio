//https://teachablemachine.withgoogle.com/models/a5dNiqovY/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/a5dNiqovY/model.json",modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
    console.log("model is ready!");
}
function gotResults(error, results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerH[TML = "I can hear-"+results[0].label;

    document.getElementById("result_label").style.color = "rgb("+random_number_r + "," + random_number_g + "," + random_number_b + ")";

    if (results[0].label == "Barking"){=
        document.getElementById("animal_image").src = "dog.gif";
    }
    else if (results[0].label == "Meowing"){
        document.getElementById("animal_image").src = "cat.gif";
    }
    else if (results[0].label == "Mooing"){
        document.getElementById("animal_image").src = "cow.gif";
    }
    else{
        document.getElementById("animal_image").src = "lion.gif";
    }
}
}
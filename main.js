Webcam.set({
    width:340,
    height: 350,
    image_format: 'png',
    png_quality: 90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_photo(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="photo" src="'+ data_uri + '">';
    });
}

console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7oeD9qQEg/model.json',modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}

function identify_img(){
    console.log("inside identify function")
     img=document.getElementById("photo");
     classifier.classify(img, gotResult);
}

function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_obj").innerHTML=results[0].label;
    document.getElementById("result_accu").innerHTML=results[0].confidence.toFixed(3);
}
}
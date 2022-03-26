Webcam.set({
    width:350,
    height:300
});
Webcam.attach("camera");
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src="+data_uri+">";
    });
}
console.log("ml5 version=",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NJL64_GQ4/modal.json",modalloaded);
function modalloaded(){
    console.log("modal is loaded");
}
function check(){
    img=document.getElementById("image");
    classifier.classify(img,gotResult);

}
function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results)
    }
}
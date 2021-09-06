Webcam.set({
    width: 310 ,
    height:300 ,
    image_format: 'png',
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }
});

camera=document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='captured_img' src='  "+  data_uri+"'>";
    });
}
 
console.log("ml5 Version -"+ml5.version);
classyfier=ml5.imageClassifier('MobileNet',model_loaded);

function model_loaded(){
    console.log("Model Loaded");
}

function check(){
    img=document.getElementById("captured_img");
    classyfier.classify(img,got_result);
}

function got_result(error,results){
    if(error==true){
        console.error(error);
    }
    else{
        document.getElementById("object_name").innerHTML=results[0].label;
        console.log(results);
        
    }
}
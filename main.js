video='';
status='';
objects=[];

function preload(){
    video=createVideo('video.mp4');
    video.hide();
}

function draw(){
    image(video, 0,0, 480,350);
    if (status != ""){
        od.detect(video,gotResult);
        for(i=0 ; i<objects.length ; i++){
            document.getElementById("status").innerHTML="STATUS: objects detected";
            document.getElementById("no").innerHTML="No. of detected objects are: "+objects.length;
            fill("red");
            noFill();
            p=floor(objects[i].confidence * 100);
            text(objects[i].label + " "+p+"%", objects[i].x , objects[i].y);
            stroke("red");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
}

function setup(){
    canvas=createCanvas(480,350);
    canvas.center();
}

function start(){
    od=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML='STATUS: detecting objects';
}

function modelLoaded(){
    console.log('model loaded');
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error,results){
    if (error){
        console.log(error);
    }

    console.log(results);
    objects=results;

}
















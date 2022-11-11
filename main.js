noseX = 0;
noseY = 0;

function preload(){
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
    canvas = createCanvas(700,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(700,600);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPose);
}

function gotPose(results){
    if(results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x-25;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
    }
    }

    function modelLoaded(){
        console.log("PoseNet has been executed!"+" suiiiiiiiiiiiiiiiiiii");
        }
function draw(){
    image(video,0,0,700,600);
    image(mustache,noseX,noseY,50,50);
}

    function take_snapshot(){
        save("mustache.png")
    }

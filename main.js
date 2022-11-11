nose_x = 0;
nose_y = 0;
function preload(){}

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
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = "+nose_x);
        console.log("nose y = "+nose_y);
    }
    }

    function modelLoaded(){
        console.log("PoseNet has been executed!"+" suiiiiiiiiiiiiiiiiiii");
        }
function draw(){
    image(video,0,0,700,600);
}

    function take_snapshot(){
        save("mustache.png")
    }

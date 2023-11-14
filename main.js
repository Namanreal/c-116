noseX=0
noseY=0

function gotPosses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}
function preload(){
    clown_nose = loadimage('https://i.postimg.cc/pdRkL7D8/Untitled.jpg')
}
function setup(){
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300 , 300);
   video.hide();

   poseNet = ml5.poseNet(video , modelLoaded);
   poseNet.on('pose' , gotPosses);
}

function draw(){

    Image(video , 0 , 0 , 300 , 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX , noseY , 20);
    image(clown_nose , noseX , noseY , 30 , 30);
}

function modelLoaded(){
    console.log("PoseNet is Initialized")
}

function take_snapshot(){
    save('myFilterImage.jpg');
}
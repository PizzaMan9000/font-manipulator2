function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);
    video.position(300, 110);

    canvas = createCanvas(550,550);
    canvas.position(1000, 110);

    poseNet = ml5.poseNet(video, gotResults);
    poseNet.on('pose', gotPoses);
}

function gotResults() {
    console.log("Model loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}

function draw() {
    background('#41f092');
}
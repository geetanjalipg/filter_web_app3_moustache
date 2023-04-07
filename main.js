var nosex = 0;
var nosey = 0;


function preload() {
    Muse_img=loadImage("https://i.postimg.cc/qMZdQCVS/istockphoto-485318064-170667a-removebg-preview.png");

}
function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);



}
function modelloaded() {
    console.log("posenet is intialized");

}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);

        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;

        console.log("nose x= ",nosex," nose y=", nosey);

    }
}
function draw() {
    image(video, 0, 0, 500, 500);
    image(Muse_img,nosex-130,nosey,100,100);
}
function snapshot() {
    save("filter.png")
}

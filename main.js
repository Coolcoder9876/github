function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    rect(50, 90, 55, 350, 20);
    circle(75, 450, 80);
    circle(75, 90, 80);
////////////////////////////////////
    rect(550, 90, 55, 350, 20);
    circle(575, 90, 80);
    circle(575, 450, 80);
////////////////////////////////////
rect(75, 450, 500, 55, 20)
rect(75, 70, 500, 55, 20)
}

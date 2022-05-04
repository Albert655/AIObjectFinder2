status = ""

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(video, 0, 0, 380, 380);
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}
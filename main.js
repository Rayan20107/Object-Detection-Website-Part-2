var dogcatimage="";

var status=""

colourr=Math.floor(Math.random()*256);

colourg=Math.floor(Math.random()*256);

colourb=Math.floor(Math.random()*256);

function preload()
{
    dogcatimage=loadImage("dog_cat.jpg");
}

function draw()
{
    image(dogcatimage, 0, 0, 640, 420);
    fill(colourr, colourg, colourb);
    text("Dog", 120, 75);
    noFill();
    stroke(colourr, colourg, colourb);
    rect(110, 50, 250, 300);
    text("Cat", 300, 75);
    noFill()
    stroke(colourr, colourg, colourb);
    rect(290, 45, 300, 350)
}

function setup()
{
    canvas=createCanvas(640, 420);
    canvas.center();
    document.getElementById("status").innerHTML="Object detecting";
    objectdetector=ml5.objectDetector("cocossd", modelLoaded);
}

function modelLoaded()
{
    console.log("Model has been loaded");
    status=true;
    objectdetector.detect(dogcatimage, gotResults);
}

function gotResults(error, results)
{ 
    if (error) 
    {
        console.log(error)
    }

    else
    {
        console.log(results);
    }
}
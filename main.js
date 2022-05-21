canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

var lastPositionX, lastPositionY;
color="black";
widthOfLine=2;

var width = screen.width;

newWidth = screen.width - 70;
newHeight = screen.height - 300;

if (width < 992)
{
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}
function myTouchStart(e)
{
    console.log("myTouchStart");
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchMove", myTouchMove);
function myTouchMove(e)
{
    console.log("myTouchMove");
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthLine;

    console.log("Last position of x and y coordinates =");
    console.log("x =" + lastPositionX + "y =" + lastPositionY);
    ctx.moveTo(lastPositionX, lastPositionY);

    console.log("Current position of x and y coordinates = ");
    console.log("x =" + currentPositionOfTouchX + "y =" + currentPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();


    lastPositionOfX = currentPositionOfTouchX;
    lastPositionOfY = currentPositionOfTouchY;
}

 

function cleaeArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
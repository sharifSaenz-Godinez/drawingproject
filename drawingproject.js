var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');

/*
///sky
canvas.fillStyle = "blue";
canvas.fillRect(0, 00, 1500, 400);
//grass
canvas.fillStyle = "green";
canvas.fillRect(0, 400, 1500, 801);
*/



//main rect
canvas.fillStyle = "green";
canvas.fillRect(220, 200, 700, 301);

//roof
canvas.beginPath();
canvas.moveTo(190,200);
canvas.lineTo(550,100);
canvas.lineTo(950,200);
canvas.fill();

//door
canvas.fillStyle = "brown";
canvas.fillRect(510, 330, 101, 172);

canvas.fillStyle = "black";
canvas.fillRect(560, 330, 1, 172);

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(550, 400, 3, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(570, 400, 3, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

// windows
canvas.fillStyle = "blue";
canvas.fillRect(350, 360, 50, 100);

canvas.fillStyle = "blue";
canvas.fillRect(710, 360, 50, 100);

canvas.beginPath();
canvas.fillStyle = "blue";
canvas.arc(560, 200, 35, 0, 2*Math.PI);
canvas.stroke();
canvas.fill();

canvas.fillStyle = "white";
canvas.fillRect(372, 361, 5, 100);

canvas.fillStyle = "white";
canvas.fillRect(350, 403, 50, 5);

canvas.fillStyle = "white";
canvas.fillRect(733, 361, 5, 100);

canvas.fillStyle = "white";
canvas.fillRect(710, 403, 50, 5);

canvas.fillStyle = "white";
canvas.fillRect(557, 165, 5, 70);

canvas.fillStyle = "white";
canvas.fillRect(525, 200, 70, 5);

//garage
canvas.fillStyle = "brown";
canvas.fillRect(925, 250, 500, 250);

canvas.fillStyle = "white";
canvas.fillRect(950, 300, 440, 200);

canvas.fillStyle = "blue";
canvas.fillRect(960, 320, 40, 40);

canvas.fillStyle = "blue";
canvas.fillRect(1020, 320, 40, 40);

canvas.fillStyle = "blue";
canvas.fillRect(1080, 320, 40, 40);

canvas.fillStyle = "blue";
canvas.fillRect(1140, 320, 40, 40);

canvas.fillStyle = "blue";
canvas.fillRect(1200, 320, 40, 40);

canvas.fillStyle = "blue";
canvas.fillRect(1260, 320, 40, 40);

canvas.fillStyle = "blue";
canvas.fillRect(1320, 320, 40, 40);

canvas.fillStyle = "black";
canvas.fillRect(950, 315, 440, 4);

canvas.fillStyle = "black";
canvas.fillRect(950, 370, 440, 4);

canvas.fillStyle = "black";
canvas.fillRect(950, 400, 440, 4);

canvas.fillStyle = "black";
canvas.fillRect(950, 430, 440, 4);

canvas.fillStyle = "black";
canvas.fillRect(950, 460, 440, 4);

canvas.fillStyle = "black";
canvas.fillRect(950, 490, 440, 4);

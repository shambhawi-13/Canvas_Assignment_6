var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2, true);
ctx.fill();


ctx.moveTo(360, canvas.height / 2)
ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, Math.PI, false);


ctx.moveTo(360, 160);
ctx.arc(350, 160, 10, 0, Math.PI * 2, true);

ctx.moveTo(260, 160);
ctx.arc(250, 160, 10, 0, Math.PI * 2, true);


ctx.stroke();

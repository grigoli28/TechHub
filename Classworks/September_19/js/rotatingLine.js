let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let _lastTime = Date.now();
let _radius = 300;
let _angle = 0;


window.onload = function () {
    animate(canvas, ctx);
}


function animate(canvas, ctx) {

    let now = Date.now();
    let db = (now - _lastTime) / 1000.0;

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;


    ctx.lineWidth = 10;

    _angle += 120 * db;


    let rad = _angle * Math.PI / 180;
    let x1 = centerX + Math.cos(rad) * _radius;
    let y1 = centerY + Math.sin(rad) * _radius;

    let opprad = rad + Math.PI;
    let x2 = centerX - Math.cos(rad) * _radius;
    let y2 = centerY - Math.sin(rad) * _radius;


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = `rgb(${255 - Math.floor(Math.random() * 255)} , ${Math.floor(Math.random() * 255)}, ${255 * 255 / Math.floor(Math.random() * 255)})`;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    window.requestAnimationFrame(function () {
        animate(canvas, ctx);
    });

    // _lastTime = now;
}
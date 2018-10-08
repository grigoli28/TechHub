window.onload = function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    /*  
    const scores = [100, 40, 51, 78, 90, 85];

    const width = 50;
    let currentX = 0;
    let base = 200;


    scores.forEach((el) => {
        ctx.fillStyle = 'seagreen';
        let h = el;
        let y = canvas.height - h;

        ctx.fillRect(currentX, y, width, h);
        currentX += width + 10;


        ctx.fillStyle = 'grey';
        ctx.beginPath();
        ctx.arc(currentX - width + 15, y, 15, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();

        currentX += width + 10;
    });
    */





    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;


    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.quadraticCurveTo(50, 500, 700, 50);
    ctx.stroke();
    /* 
    ctx.font = '100px Helvetica Neue';
    ctx.fillText('NIKE', 120, 180);
    ctx.strokeText('NIKE', 120, 180);
    */





    roundedRect(ctx, 100, 20, 200, 200, 20);




}



function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);

    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);

    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);

    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = 'green';
    ctx.fill();
}
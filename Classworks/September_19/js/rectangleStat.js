window.onload = function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const scores = [100, 40, 51, 78, 90, 85];

    scores.reverse();
    const width = 50;
    let currentX = 0;

    ctx.translate(375, 200);
    ctx.rotate(1 * Math.PI);

    ctx.fillStyle = 'seagreen';
    scores.forEach((el) => {
        ctx.fillRect(currentX, 0, width, el);
        currentX += width + 10;
    });


    
}


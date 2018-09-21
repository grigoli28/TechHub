window.onload = function() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');
    let circleX = 190;
    let circleY = 190;
    const movement = 20;
    animate();

    document.addEventListener('keydown', keyPressed);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(circleX, circleY, 20, 0, 2 * Math.PI);
        ctx.fill();
    }

    function keyPressed(e) {
        switch (e.keyCode) {
            case 38:
                circleY -= movement;
                break;
            case 40:
                circleY += movement;
                break;
            case 37:
                circleX -= movement;
                break;
            case 39:
                circleX += movement;
                break;
        }
        animate();
    }
}
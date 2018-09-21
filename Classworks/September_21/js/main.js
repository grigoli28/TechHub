window.onload = () => {
    let canvas = document.getElementById('imageCanvas');
    let ctx = canvas.getContext('2d');

    /* 
    generateImage();

    function generateImage() {
        let height = canvas.height;
        let width = canvas.width;

        let pixels = ctx.createImageData(width, height);
        let centerX = width / 2;
        let centerY = height / 2;
        let currentPixelPos = 0;


        for (let y = 0; y < pixels.height; y++) { // rows
            for (let x = 0; x < pixels.width; x++) { // columns
                let xOffset = x - centerX;
                let yOffset = y - centerY;

                let d = Math.abs(xOffset) + Math.abs(yOffset);
                let t = Math.tan(d / 10);

                let r = t * 255;
                let g = 125 + t * 80;
                let b = 255 + t * 20;

                pixels.data[currentPixelPos++] = Math.max(0, Math.min(255, r));
                pixels.data[currentPixelPos++] = Math.max(0, Math.min(255, g));
                pixels.data[currentPixelPos++] = Math.max(0, Math.min(255, b));
                pixels.data[currentPixelPos++] = Math.random() * 1000;
            }
        }
        ctx.putImageData(pixels, 0, 0);
    }
    */





    /* 
    let borderColor = '#c8c8c8';
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    
    // Outer gradient
    ctx.beginPath();
    let gradient = ctx.createLinearGradient(centerX, 20, centerX, 200);
    gradient.addColorStop(0, '#fff');
    gradient.addColorStop(1, '#444');

    ctx.fillStyle = gradient;

    ctx.rect(20, 20, canvas.width - 40, canvas.height - 40);
    ctx.fill();
    ctx.strokeStyle = borderColor;
    ctx.stroke();
    */




    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    ctx.beginPath();
    let gradient = ctx.createRadialGradient(centerX, centerY / 1.2, 80, 100, 50, 40);
    gradient.addColorStop(0, 'black');
    gradient.addColorStop(1, 'red');

    ctx.fillStyle = gradient;
    ctx.arc(centerX, centerY / 1.2, 80, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

}
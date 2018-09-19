/* 
    ctx.getImageData(x, y, width, height)
    ctx.createImageData(width, height)
    ctx.putImageData(imagedata, dx, dy, x, y, width, height)
*/



window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let img = new Image();
    img.onload = function() {
        ctx.drawImage(img, 0, 0, 300, 300);
        grayScale();
    }
    img.src = '../pictures/html5_image.png';


    function grayScale() {
        let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = pixels.data;

        for (let i = 0; i < data.length; i += 4) {
            // console.log(`Red - ${data[i]}, Green - ${data[i + 1]}, Blue - ${data[i + 2]}`);
            const grey = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
            data[i] = grey;
            data[i + 1] = grey;
            data[i + 2] = grey;
        }

        ctx.putImageData(pixels, 0, 0);
    }
}
/* If you user Modernizr
    if (Modernizr.canvas) {
        //Supported code
    }
    else {
        //Unsupported code
    }
*/


/* HTML5 Canvas
    canvas.getContext('2d');
    context.fillStyle
    context.fillRect()
    context.rect()

    context.strokeStyle
    context.lineWidth
    context.beginPath()
    context.moveTo
    context.lineTo
    context.lineJoin = 'miter(defult) / bevel / round'
    context.lineCap = 'butt(default) / round / ... '
    context.closePath()
    context.stroke()

    context.font = '40pt/px Arial';
    context.fillText()
    context.strokeText()
    context.measureText(text).width

    drawImage(img, dx, dy, dw, dh)
    canvas.toDataURL()

*/

let canvas, context;
window.onload = function () {
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');

    //#region 
    /* Shape
    context.fillStyle = 'yellow';
    context.strokeStyle = 'black';
    // context.fillRect(0, 0, 200, 100);
    context.rect(0, 0, 200, 100);
    // context.fill();
    context.stroke();
    */





    /* Lines
    context.strokeStyle = 'red';
    context.fillStyle = 'blue';
    context.lineWidth = 10;
    context.beginPath();
    context.moveTo(150, 20);
    context.lineTo(75, 200);
    context.lineTo(225, 200);
    context.lineTo(150, 20);

    context.lineJoin = 'miter';
    context.lineCap = 'round';

    context.closePath();
    context.stroke();


    context.fill();
    */







    /* Text 
    context.strokeStyle = 'seagreen';
    context.fillStyle = 'salmon';

    let text = 'Hello Canvas!';

    context.font = '40pt Arial';
    context.fillText(text, 50, 50);
    context.strokeText(text, 50, 50);
    */






    /*  
    let fontSize = 10;

    for (let i = 5; i <= 25; i += 5) {
        let text = `Text! ${fontSize}`;
        context.font = `${fontSize}px Arial`;
        let x = context.measureText(text).width;
        context.fillText(text, 0, x);
        fontSize += 5;
    }
    */




    /*  
    context.font = '30px Arial';
    context.fillText('Some Text', 100, 50);
    context.save();

    context.translate(100, 250);
    context.rotate(-0.5 * Math.PI);
    
    let rText  = 'Rotated Text';
    context.fillText(rText, 0, 0);
    context.restore();

    let rWidth = context.measureText(rText).width;
    context.fillText('Text Width', 100, rWidth + 120);
    */
    //#endregion


    let img = new Image();
    img.onload = function () {
        drawImage(img);
    }


    img.src = '../pictures/html5_image.png';



}


function drawImage(img) {
    let destX = 10;
    let destY = 20;

    let destWidth = 212;
    let destHeight = 212;

    // drawImage(img, dx, dy, dw, dh)
    context.drawImage(img, destX, destY, destWidth, destHeight);
}


function showCanvasAsImage() {
    let dataUrl = canvas.toDataURL();
    window.open(dataUrl, 'Canvas As Image', 'width=300, height=300');
}
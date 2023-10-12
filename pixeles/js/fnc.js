const canvas = document.getElementById('canvas');
const canvasI = document.getElementById('canvasI');

const ctx = canvas.getContext('2d');
const ctxI = canvasI.getContext('2d');

const image = new Image();
image.onload = imagenCargada;
image.src = 'imgs/Puno.jpg';

function imagenCargada() {
    canvas.width = image.width;
    canvas.height = image.height;

    canvasI.width = image.width;
    canvasI.height = image.height;

    ctx.drawImage(image, 0, 0, image.width, image.height);

    // var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // var pixeles = imgData.data;
    // console.log(pixeles);
    
    // Colores(canvas)
    invertirImagen(canvas)
}
 function Colores(canvas) {
    var imgData = ctx.getImageData(0,0, canvas.width, canvas.height);
    var pixeles = imgData.data;

    for(let i=0; i<pixeles.length; i+=4) {
        R = pixeles[i];
        G = pixeles[i+1];
        B = pixeles[i+2];
        T = pixeles[i+3];

        gris = (R + G + B)/3
        
        // pixeles[i] = gris;
        // pixeles[i+1] = gris;
        // pixeles[i+2] = gris;

        pixeles[i] = R+100;
        pixeles[i+1] = G+100;
        pixeles[i+2] = B+100;
    }
    
    console.log(pixeles);

    ctx.putImageData(imgData, 0, 0);
 }

 function invertirImagen(canvas) {
    var imgData = ctx.getImageData(0,0, canvas.width, canvas.height);
    var imgDataI = ctx.getImageData(0,0, canvas.width, canvas.height);
    var pixeles = imgData.data;
    var pixelesI = imgDataI.data;
    
    let i=0;
    for(let p=pixeles.length; p>=0; p-=4) {
        pixelesI[i] = pixeles[p-4];
        pixelesI[i+1] = pixeles[p-3];
        pixelesI[i+2] = pixeles[p-2];
        i+=4;
    }

    ctxI.putImageData(imgDataI, 0, 0);
 }
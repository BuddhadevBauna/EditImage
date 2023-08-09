var horizontal = document.querySelector('.horizontal');
var count1 = 0;
horizontal.addEventListener('click',()=>{
    count1++;
    var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');
    if(count1%2!=0 && (count2%2==0 || count2==0)){
        canvas.classList.forEach(e =>{
            if(e!='canvas'){
                canvas.classList.remove(e);
            }
        })
        canvas.classList.add('horizontally-rotate');
    }else if((count1%2==0 || count1==0) && (count2%2==0 || count2==0)){
        canvas.classList.forEach(e =>{
            if(e!='canvas'){
                canvas.classList.remove(e);
            }
        })
        canvas.classList.add('original-360deg-rotate');
    }else if(count1%2!=0 && count2%2!=0){
        canvas.classList.forEach(e =>{
            if(e!='canvas'){
                canvas.classList.remove(e);
            }
        })
        canvas.classList.add('original-180deg-rotate');
    }else if((count1%2==0 || count1==0) && (count2%2!=0)){
        canvas.classList.forEach(e =>{
            if(e!='canvas'){
                canvas.classList.remove(e);
            }
        })
        canvas.classList.add('vertically-rotate');
    }
    // Translate and scale the context to mirror horizontally the canvas
    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    // Draw the mirrored image on the canvas
    ctx.drawImage(canvas, 0, 0);
    // Reset the transformation matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
});
var vertical = document.querySelector('.vertical');
var count2 = 0;
vertical.addEventListener('click',()=>{
    count2++;
    var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');
    if((count1%2==0 || count1==0) && (count2%2!=0)){
        canvas.classList.forEach(e =>{
            if(e!='canvas'){
                canvas.classList.remove(e);
            }
        })
        canvas.classList.add('vertically-rotate');
    }else if((count1%2==0 || count1==0) && (count2%2==0 || count2==0)){
        canvas.classList.forEach(e =>{
            if(e!='canvas'){
                canvas.classList.remove(e);
            }
        })
        canvas.classList.add('original-360deg-rotate');
    }else if(count1%2!=0 && count2%2!=0){
        canvas.classList.forEach(e =>{
            if(e!='canvas'){
                canvas.classList.remove(e);
            }
        })
        canvas.classList.add('original-180deg-rotate');
    }else if(count1%2!=0 && (count2%2==0 || count2==0)){
        canvas.classList.forEach(e =>{
            if(e!='canvas'){
                canvas.classList.remove(e);
            }
        })
        canvas.classList.add('horizontally-rotate');
    }
    // Translate and scale the context to mirror the canvas vertically
    ctx.scale(1, -1);
    ctx.drawImage(canvas, 0, -canvas.height);
    // Reset the transformation matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
});

function mirrorImage(image){
    var downloadButton=document.querySelector(".download-btn");
    downloadButton.addEventListener("click", mirror);
    function mirror(){
        var c = document.querySelector('canvas');
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width=image.width;
        canvas.height=image.height;
        if(c.classList.contains('original-360deg-rotate')){
            ctx.translate(image.width / 2, image.height / 2);
            ctx.rotate((Math.PI/180) * 360);
            ctx.drawImage(image, -0.5 * image.width, -0.5 * image.height);
        }else if(c.classList.contains('original-180deg-rotate')){
            ctx.translate(image.width / 2, image.height / 2);
            ctx.rotate((Math.PI/180) * 180);
            ctx.drawImage(image, -0.5 * image.width, -0.5 * image.height);
        }else if(c.classList.contains('horizontally-rotate')){
            ctx.translate(canvas.width, 0);
            ctx.scale(-1, 1);
            ctx.drawImage(image, 0, 0);
        }else if(c.classList.contains('vertically-rotate')){
            ctx.scale(1, -1);
            ctx.drawImage(image, 0, -canvas.height);
        }else{
            ctx.translate(image.width / 2, image.height / 2);
            ctx.rotate((Math.PI/180) * 360);
            ctx.drawImage(image, -0.5 * image.width, -0.5 * image.height);
        }
        Download(canvas);
    }
}
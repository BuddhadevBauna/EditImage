var downloadButton=document.querySelector(".download-btn");
var rightRotateAngle = document.querySelector(".right span#deg");
var LeftRotateAngle = document.querySelector(".left span#deg");

var rightRotate = document.querySelector(".right");
var deg=0;
rightRotate.addEventListener('click', ()=>{
    if(deg!=360){
        deg+=90;
    }else{
        deg=90;
    }
    if(LeftRotateAngle.hasAttribute('class')){
        LeftRotateAngle.removeAttribute('class');
    }
    rightRotateAngle.setAttribute('class','last-select');
    rightRotateAngle.innerHTML = deg;
    var canvas = document.querySelector("canvas");
    if(deg==90 || deg==270){
        canvas.style.maxWidth=canvas.height+"px";
        if(deg==90){
            canvas.style.transform="rotate(90deg)";
        }else{
            canvas.style.transform="rotate(270deg)";
        }
    }
    else if(deg==180|| deg==360){
        canvas.style.maxWidth=canvas.width+"px";
        if(deg==180){
            canvas.style.transform="rotate(180deg)";
        }else{
            canvas.style.transform="rotate(360deg)";
        }
    }
})
var LeftRotate = document.querySelector(".left")
LeftRotate.addEventListener('click', ()=>{
    if(deg==90){
        deg=360;
    }else if(deg == 0){
        deg=270;
    }
    else if(deg!=360){
        deg-=90;
    }
    else{
        deg=270;
    }
    if(rightRotateAngle.hasAttribute('class')){
        rightRotateAngle.removeAttribute('class');
    }
    LeftRotateAngle.setAttribute('class','last-select');
    LeftRotateAngle.innerHTML = deg;
    var canvas = document.querySelector("canvas");
    if(deg==90 || deg==270){
        canvas.style.maxWidth=canvas.height+"px";
        if(deg==90){
            canvas.style.transform="rotate(90deg)";
        }else{
            canvas.style.transform="rotate(270deg)";
        }
    }
    else if(deg==180 || deg==360){
        canvas.style.maxWidth=canvas.width+"px";
        if(deg==180){
            canvas.style.transform="rotate(180deg)";
        }else{
            canvas.style.transform="rotate(360deg)";
        }
    }
})

function RotateImage(image){
    downloadButton.addEventListener("click", rotate);
    function rotate(){
        var lastSelect = document.querySelector('.last-select');
        var  canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        if(lastSelect == null){
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((Math.PI/180) * 360);
        }else if(lastSelect.innerHTML == 90 || lastSelect.innerHTML == 270){
            canvas.width = image.naturalHeight;
            canvas.height = image.naturalWidth;
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((Math.PI/180) * lastSelect.innerHTML);
        }else if(lastSelect.innerHTML == 180 || lastSelect.innerHTML == 360){
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((Math.PI/180) * lastSelect.innerHTML);
        }
        ctx.drawImage(image, -0.5 * image.width, -0.5 * image.height);
        Download(canvas);
    }
}
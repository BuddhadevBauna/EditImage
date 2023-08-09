var widthInput = document.querySelector(".img-width input"),
heightInput = document.querySelector(".img-height input"),
ratioInput = document.querySelector(".aspectRatio input")
downloadButton = document.querySelector(".download-btn"),
errorMessege = document.querySelector('#setting small');
var ogImageRatio;
function ImageSizeChange(image){
    widthInput.value = image.naturalWidth;
	heightInput.value = image.naturalHeight;
	ogImageRatio = image.naturalWidth / image.naturalHeight;
    downloadButton.addEventListener("click", resize);
    function resize(){
        var  canvas = document.createElement("canvas");
        if(widthInput.value<1 || widthInput.value>15000 || heightInput.value<1 || heightInput.value>15000){
            errorMessege.setAttribute('class','visibility');
        }else{
            canvas.width = widthInput.value;
            canvas.height = heightInput.value;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            Download(canvas);
            errorMessege.removeAttribute('class','visibility');
        } 
    }
}

widthInput.addEventListener('keyup', ()=>{
    var height = ratioInput.checked ? widthInput.value / ogImageRatio : heightInput.value;
    heightInput.value = Math.floor(height);
});
heightInput.addEventListener("keyup", ()=>{
    var width = ratioInput.checked ? heightInput.value * ogImageRatio : widthInput.value;
    widthInput.value = Math.floor(width);
});

widthInput.addEventListener('click', ()=>{
	var height = ratioInput.checked ? widthInput.value / ogImageRatio : heightInput.value;
	heightInput.value = Math.floor(height);
});
heightInput.addEventListener("click", ()=>{
	var width = ratioInput.checked ? heightInput.value * ogImageRatio : widthInput.value;
	widthInput.value = Math.floor(width);
});
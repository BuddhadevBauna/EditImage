var downloadButton = document.querySelector(".download-btn");
function compress(image){
    downloadButton.addEventListener("click", ()=>{
        var  canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        var a = document.createElement("a");
        a.href = canvas.toDataURL("image/jpeg", 0.72);
	    var fileNameWithExtension = fileInput.files[0].name;
	    var fileNameWithOutExtension = fileNameWithExtension.substring(0,fileNameWithExtension.lastIndexOf("."));
	    a.download =  fileNameWithOutExtension+".jpeg";
	    a.click();
    });
}
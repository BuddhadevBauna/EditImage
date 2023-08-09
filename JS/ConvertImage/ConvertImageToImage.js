var downloadButton = document.querySelector(".download-btn"),
select = document.querySelector(".setting-content select");
var format='png';
select.addEventListener('change',()=>{
    format = select.options[select.selectedIndex].value;
});
function convertIntoImage(image){
    downloadButton.addEventListener("click", ()=>{
        var  canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        var a = document.createElement("a");
        a.href = canvas.toDataURL('image/'+format);
        var fileNameWithExtension = fileInput.files[0].name;
	    var fileNameWithOutExtension = fileNameWithExtension.substring(0,fileNameWithExtension.lastIndexOf("."));
	    a.download =  fileNameWithOutExtension+"."+format;
	    a.click();
    });
}
var downloadButton = document.querySelector(".download-btn");
function convertIntoPdf(image){
    downloadButton.addEventListener("click", ()=>{
        var fileNameWithExtension = fileInput.files[0].name;
	    var fileNameWithOutExtension = fileNameWithExtension.substring(0,fileNameWithExtension.lastIndexOf("."));
        var doc = new jsPDF({
            orientation: image.width > image.height ? "l" : "p",
            unit: 'px',
            format: [image.width,image.height]
        });
        var ogImageRatio = image.width / image.height;
        var scaleFactor = doc.internal.pageSize.width / image.width;
        doc.addImage(image, 0, 0 , scaleFactor * image.width, scaleFactor * image.height);
        doc.save(fileNameWithOutExtension+".pdf");
    });
} 
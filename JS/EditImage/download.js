function Download(canvas){
	var fileNameWithExtension = fileInput.files[0].name;
	var fileNameWithOutExtension = fileNameWithExtension.substring(0,fileNameWithExtension.lastIndexOf("."));
	var extesion = fileNameWithExtension.substring(fileNameWithExtension.lastIndexOf(".")+1);
    var a = document.createElement("a");
	a.href = canvas.toDataURL("image/"+extesion,1.0);
	a.download =  fileNameWithOutExtension+"."+extesion;
	a.click();
}
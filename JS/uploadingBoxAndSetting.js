var uploadBox=document.querySelector(".upload-box");
var icon=uploadBox.querySelector("i");
firstText=uploadBox.querySelector(".first");
var file;
var button=uploadBox.querySelector(".button");
var fileInput=uploadBox.querySelector("input");
/*---------------Drag & Drop element-----------------*/
// When file is inside the uploadBox
uploadBox.addEventListener('dragover', function(event){
    event.preventDefault();
    firstText.innerHTML="Release to Upload";
    uploadBox.classList.add("active");
});
// when files leavs from uploadbox
uploadBox.ondragleave = ()=>{
    firstText.innerHTML="Drag & Drop";
    uploadBox.classList.remove("active");
};
// when file is drop in upload box
uploadBox.addEventListener('drop',(event)=>{
    event.preventDefault();
    file=event.dataTransfer.files[0];
    displayFile(file);
});
/*--------------By browse upload image---------------*/
/*----icon----*/
icon.addEventListener("click", function (){
    fileInput.click();
});
icon.addEventListener("mouseover", function (){
    uploadBox.classList.add("active");
});
icon.addEventListener("mouseleave", function (){
    uploadBox.classList.remove("active");
});
/*-----button------*/
button.addEventListener("click", function (){
    fileInput.click();
});
button.addEventListener("mouseover", function (){
    uploadBox.classList.add("active");
});
button.addEventListener("mouseleave", function (){
    uploadBox.classList.remove("active");
});
//When Browse
fileInput.addEventListener("change",(event)=>{
    file=event.target.files[0];
    /*--------or-------*/
    // var file=this.files[0];
    displayFile(file);
});
/*-----------------Display File---------------*/
var wrapper=document.querySelector('.wrapper');
function displayFile(file){
    var fileType=file.type;
    var validExtension=['image/jpeg','image/png','image/jpg','image/gif'];
    if(validExtension.includes(fileType)){
        /*Hide all content of the wrapper class*/
        wrapper.innerHTML="";

        //add and remove class
        document.querySelector("#main").classList.add("main-container");
        document.querySelector('.main-container').removeAttribute('id');
        document.querySelector(".wrapper").classList.add("container");
        document.querySelector(".container").classList.remove("wrapper");

        /*Create image tag*/
        var image=document.createElement("img");
        /*or---->*/
        // var image = new Image();

        //Get uploading file URL and set on canvas and visible the canvas
        var fileURL=URL.createObjectURL(file);
        image.src=fileURL;
        image.addEventListener("load", function reSize(e){
            var canvas=document.createElement("canvas");
            if(e.target.width>530){
                const maxWidth=530;
                canvas.width=maxWidth;
                var ratio=maxWidth/e.target.width;
                canvas.height=e.target.height*ratio;
            }
            else{
                canvas.width=e.target.width;
                canvas.height=e.target.height;
            }
            if(canvas.height>300){
                const maxHeight=300;
                canvas.height=maxHeight;
                var ratio1=maxHeight/e.target.height;
                canvas.width=e.target.width*ratio1;
            }
            var context=canvas.getContext('2d');
            context.drawImage(e.target,0,0,canvas.width,canvas.height);
            document.querySelector(".container").appendChild(canvas);
            document.querySelector('#setting').setAttribute('class' , 'visible');
            document.querySelector('#button').setAttribute('class' , 'visible1');
            document.getElementById('uploading-box').className='change-uploading-box';
            canvas.id='responsive';
            canvas.className ='canvas';
            canvas.style.maxWidth=(canvas.width/16)+"rem";
            
            //Image size change
            if(document.querySelector("#setting h1").innerHTML=='resize image'){
                ImageSizeChange(e.target);
            }
            //Image Rotate
            else if(document.querySelector("#setting h1").innerHTML=='rotate image'){
                RotateImage(e.target);
            }
            //Image Compress
            else if(document.querySelector("#setting h1").innerHTML=='compress image'){
                compress(e.target);
            }
            //ConvertImageToImage
            else if(document.querySelector("#setting h1").innerHTML=='ConvertImageToImage'){
                URL.revokeObjectURL(image.src);
                convertIntoImage(e.target);
            }
            //ConvertImageToPdf
            else if(document.querySelector("#setting h1").innerHTML=='ConvertImageToPdf'){
                URL.revokeObjectURL(image.src);//free memory
                convertIntoPdf(e.target);
            }
            //mirror image
            else if(document.querySelector("#setting h1").innerHTML=='mirror image'){
                mirrorImage(e.target);
            }
        });
    }
    else{
        document.querySelector('.wrapper small').style.display = 'initial';
        alert('Please upload mentioned image format.');
    }
};
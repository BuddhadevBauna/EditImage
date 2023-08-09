var form = document.querySelector('form'),
username = document.querySelector('#name'),
useremail = document.querySelector('#email'),
usermessage = document.querySelector('#message');
var arr=[username,useremail,usermessage];

arr.forEach(element => {
  element.addEventListener('keydown',(e)=>{
    if(e.keyCode === 13){
      if(element.parentElement.nextElementSibling.querySelector('input')){
        element.parentElement.nextElementSibling.querySelector('input').focus();
      }
      else if(element.parentElement.nextElementSibling.querySelector('textarea')){
        element.parentElement.nextElementSibling.querySelector('textarea').focus();
      }
      else{
        document.querySelector(".message-btn").click();
      }
      e.preventDefault();
    }
  })
});

/*-----------------Form validation--------------------------*/
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  validate(e);
});

//Defining validate function
function validate(){
  /* --------------------------user name validation------------------------ */
  let userNameValue = document.querySelector('#name').value;
  var correctWay = /^[A-Za-z .]+$/;
  let totalBlankSpace=0;
  for(var i=0;i<userNameValue.length;i++){
    if(userNameValue.charAt(i) === " "){
      totalBlankSpace++;
    }
  }
  if(userNameValue.length == 0){
    setErrorMessage(username,'Name can not be blank.');
  }else if(userNameValue.charAt(0) === " "){
    setErrorMessage(username,'Name first character can not be blank.');
  }else if(userNameValue.length <= 2){
    setErrorMessage(username,'Number of character of the name atleast three.');
  }else if(userNameValue.charAt(userNameValue.length-1) == " "){
    setErrorMessage(username,'Name last character can not blank space.');
  }else if(totalBlankSpace > 3){
    setErrorMessage(username,'Name can not contain more than three blank space.');
  }else if(userNameValue.indexOf("  ") != -1){
    setErrorMessage(username,'Name can not contain extra space.');
  }else if(userNameValue.length>35){
    setErrorMessage(username,'Name can not contain more than 35 character.');
  }else if(!userNameValue.match(correctWay)){
    setErrorMessage(username,'Name can not contain spacial character exept blank space and . character.');
  }
  else{
    setSuccessMessage(username);
  }
  /* --------------------------user email validation-------------------------------- */
  let userEmailValue = document.querySelector('#email').value;
  let l=userEmailValue.length;
  var totalAtSymbol=0;
  for(var i=0;i<l;i++){
    if(userEmailValue.charAt(i) === '@'){
      totalAtSymbol++;
    }
  }
  if(userEmailValue.length == 0){
    setErrorMessage(useremail,'Email can not be blank.');
  }
  else if((userEmailValue.charCodeAt(0)>=32  && userEmailValue.charCodeAt(0)<=47) || 
  (userEmailValue.charCodeAt(0)>=58  && userEmailValue.charCodeAt(0)<=64) ||
  (userEmailValue.charCodeAt(0)>=91  && userEmailValue.charCodeAt(0)<=96) ||
  (userEmailValue.charCodeAt(0)>=123  && userEmailValue.charCodeAt(0)<=126)){
    setErrorMessage(useremail,'Email first character can not be spacial character.');
  }
  else if((userEmailValue.charCodeAt(l-1)>=32  && userEmailValue.charCodeAt(l-1)<=47) || 
  (userEmailValue.charCodeAt(l-1)>=58  && userEmailValue.charCodeAt(l-1)<=64) ||
  (userEmailValue.charCodeAt(l-1)>=91  && userEmailValue.charCodeAt(l-1)<=96) ||
  (userEmailValue.charCodeAt(l-1)>=123  && userEmailValue.charCodeAt(l-1)<=126)){
    setErrorMessage(useremail,'Email last character can not be spacial character.');
  } 
  else if(totalAtSymbol>1){
    setErrorMessage(useremail,'Email can not contain more than one @ symbol.');
  }
  else if(l>65){
    setErrorMessage(useremail,'Email can not contain more than 65 character.')
  }
  else if(userEmailValue.indexOf('@') == -1){
    setErrorMessage(useremail,"Please include an" + " '"+"@"+"' " + "in the email address. " +"'"+userEmailValue+"' is missing an" + " '"+"@"+"' . ");
  }
  else if(!isEmail(userEmailValue)){
    setErrorMessage(useremail,'Not a valid Email.');
  }
  else{
    setSuccessMessage(useremail);
  }
  /* --------------------------user message validation-------------------------------- */
  let userMessageValue = document.querySelector('#message').value;
  if(userMessageValue.length == 0 && usermessage.keyCode== undefined){
    setErrorMessage(usermessage,'Message can not be blank.');
  }else if(userMessageValue.charAt(0) === " "){
    setErrorMessage(usermessage,'Message first character can not be blank.');
  }else if(userMessageValue.charAt(userMessageValue.length-1) == " "){
    setErrorMessage(usermessage,'Message last character can not blank space.');
  }
  else if(userMessageValue.length<10){
    setErrorMessage(usermessage,'Number of character in message atleast 10.');
  }
  else if(userMessageValue.indexOf("  ") != -1){
    setErrorMessage(usermessage,'Message can not contain extra space.');
  }else if(userMessageValue.length>100){
    setErrorMessage(usermessage,'Message can not contain more than 100 character.');
  }
  else{
    setSuccessMessage(usermessage);
  }
  // Submit mail and message show to the user
  let formContainer = document.querySelectorAll('.form-container');
  var count = formContainer.length;
  var successRate = 0;
  for(var i=0;i<formContainer.length;i++){
    if(formContainer[i].classList.contains('success')){
      successRate++;
    }
  }
  submitMailAndSuccessMessage(successRate,count);
}
/* -----------------------More Email Validation-----------------------------*/
function isEmail(emailVal){
  var atSymbol = emailVal.indexOf('@');
  var dot = emailVal.lastIndexOf(".");
  if(dot <= atSymbol+2){
    return false;
  }
  if(dot != emailVal.length-4 && dot != emailVal.length-3){
    return false;
  }
  return true;
}



//defining setErrorMessage function
function setErrorMessage(input,errormsg){
  const formContainer = input.parentElement;
  const small = formContainer.querySelector('small');
  formContainer.className='form-container error';
  small.innerText = errormsg;
}




//defining setSuccessMessage function
function setSuccessMessage(input){
  const formContainer = input.parentElement;
  formContainer.className='form-container success';
}




//defining successMessage function
function submitMailAndSuccessMessage(sRate,count){
  if(sRate==count){ 
    Mail();
    Swal.fire(
      "Welcome!",
      "Message send successfully!",
      "success"
    )
    form.reset();
    var formContainer=document.querySelectorAll('.form-container');
    formContainer.forEach(container =>{
      container.classList.remove('success');
    })
  }
}


function Mail(){
  let name=document.querySelector('#name').value,
  email =document.querySelector('#email').value,
  message =document.querySelector('#message').value;
  Email.send({
    SecureToken : "814e6e02-affa-4ba9-8c13-2617912f0746",
    To : 'baunabuddhadev2021@gmail.com',
    From : "baunabuddhadev2021@gmail.com",
    Subject : "Mail From Contact Form...",
    Body : "User Name: "+ name+ "<br/>User Email: "+ email +"<br/>User Message: "+ message,
  })
}
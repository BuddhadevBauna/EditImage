var contactForm = document.getElementById('contact-form');
var featureSection = document.getElementById('features');
var userName = document.getElementById('name');
var userEmail = document.getElementById('email');
var userMessage = document.getElementById('message');
document.querySelector('.messege').addEventListener('click',(e)=>{
    userName.value='';
    userEmail.value='';
    userMessage.value='';
})
var sideBar=document.querySelector(".sidebar");
var firstMenu=document.querySelector(".first-menu");
var firstMenuIcon=firstMenu.querySelector('i');
var firstListItem=sideBar.querySelector(".first");
var secondMenu=document.querySelector(".second-menu");
var secondMenuIcon=secondMenu.querySelector('i');
var secondListItem=sideBar.querySelector(".second");
var x = window.matchMedia("(min-width: 901px)");
firstMenu.addEventListener("click",(e)=>{
    firstMenu.classList.toggle("change-color");
    secondMenu.classList.remove("change-color");
    firstListItem.classList.toggle("show");
    if(x.matches){
        secondListItem.classList.remove("show");

        // toggle caret icon
        if(firstMenuIcon.classList.contains('fa-caret-up')){
            firstMenuIcon.classList.replace('fa-caret-up','fa-caret-down');
        }
        else if(firstMenuIcon.classList.contains('fa-caret-down')){
            firstMenuIcon.classList.replace('fa-caret-down','fa-caret-up');
        }
        if(secondMenuIcon.classList.contains('fa-caret-up')){
            secondMenuIcon.classList.replace('fa-caret-up','fa-caret-down');
        }
    }else{
        if(firstMenuIcon.classList.contains('fa-caret-up')){
            firstMenuIcon.classList.replace('fa-caret-up','fa-caret-down');
        }
        else if(firstMenuIcon.classList.contains('fa-caret-down')){
            firstMenuIcon.classList.replace('fa-caret-down','fa-caret-up');
        }
    }
    e.stopPropagation();
});
secondMenu.addEventListener("click",(e)=>{
    secondMenu.classList.toggle("change-color");
    firstMenu.classList.remove("change-color");
    secondListItem.classList.toggle("show");
    if (x.matches){
        firstListItem.classList.remove("show");

        // toggle caret icon
        if(secondMenuIcon.classList.contains('fa-caret-up')){
            secondMenuIcon.classList.replace('fa-caret-up','fa-caret-down');
        }
        else if(secondMenuIcon.classList.contains('fa-caret-down')){
            secondMenuIcon.classList.replace('fa-caret-down','fa-caret-up');
        }
        if(firstMenuIcon.classList.contains('fa-caret-up')){
            firstMenuIcon.classList.replace('fa-caret-up','fa-caret-down');
        }
    }else{
        if(secondMenuIcon.classList.contains('fa-caret-up')){
            secondMenuIcon.classList.replace('fa-caret-up','fa-caret-down');
        }
        else if(secondMenuIcon.classList.contains('fa-caret-down')){
            secondMenuIcon.classList.replace('fa-caret-down','fa-caret-up');
        }
    }
    e.stopPropagation();
});
var menuIcon=document.querySelector(".menu-icon");
menuIcon.addEventListener('click',(e)=>{
    sideBar.classList.toggle('sidebarGo');
    e.stopPropagation();
});
document.addEventListener('click',(e)=>{
    if(firstListItem.classList.contains('show')){
        firstListItem.classList.remove('show');
    }
    if(secondListItem.classList.contains('show')){
        secondListItem.classList.remove('show');
    }
    if(firstMenu.classList.contains('change-color')){
        firstMenu.classList.remove('change-color');
    }
    if(secondMenu.classList.contains('change-color')){
        secondMenu.classList.remove('change-color');
    }
    if(firstMenuIcon.classList.contains('fa-caret-up')){
        firstMenuIcon.classList.replace('fa-caret-up','fa-caret-down');
    }
    if(secondMenuIcon.classList.contains('fa-caret-up')){
        secondMenuIcon.classList.replace('fa-caret-up','fa-caret-down');
    }
    if(!sideBar.classList.contains('sidebarGo')){
        sideBar.classList.add('sidebarGo'); 
    }
});
document.addEventListener('scroll',()=>{
    if(!sideBar.classList.contains('sidebarGo')){
        sideBar.classList.add('sidebarGo');
    }
});
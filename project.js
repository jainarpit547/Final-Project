var getQuote1 = document.getElementById('info-wrapper');
var getQuote2 = document.getElementById('button');
var overLay = document.getElementById('overlay');
var sideBar = document.getElementById('sidebar');
var cross = document.getElementById('cross');
var getQuote3= document.getElementById('color-wrapper-button');
var sidePop= document.getElementById('side-bar');
var link=document.getElementById('link');
var infoWrapper=document.getElementById('info-wrapper1');

cross.onclick= function(){
    sideBar.style.display="none";
    overLay.style.display="none";
}
overLay.onclick=function(){
    sideBar.style.display="none";
    overLay.style.display="none";
    link.style.display="none";
}

getQuote1.onclick=function(){
    sideBar.style.display="block";
    overLay.style.display="block";
    
}
getQuote2.onclick=function(){
    sideBar.style.display="block";
    overLay.style.display="block";
}

getQuote3.onclick=function(){
    sideBar.style.display="block";
    overLay.style.display="block";
}


sidePop.onclick=function(){
    overLay.style.display="block";
    link.style.display="block";
}

infoWrapper.onclick=function(){
    link.style.display="none";
    sideBar.style.display="block";
    overLay.style.display="block";
}
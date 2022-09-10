<<<<<<< HEAD
﻿const menu = document.getElementById('mobile-button');
const close = document.getElementById('close');
const nav = document.querySelector('.navbar-list')

const navBG = document.querySelector("nav");

if (menu) {
    menu.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

window.onscroll = () => {
    if(window.scrollY >= 100) {
        navBG.classList.add('nav-active');
    } else {
        navBG.classList.remove('nav-active');
    }
}
// 
var mainImg = document.querySelector(".main-img");
var smallerImg = document.getElementsByClassName("smaller-img");

for(var img of smallerImg) {
    img.addEventListener("click", function(){
        mainImg.src = this.src;
    });
}
// 
const toProduct = document.getElementsByClassName("to-product");
let imgUrl;

for(var toProd of toProduct) {
    toProd.addEventListener('click', function(){
        imgUrl = this.getElementsByTagName('img')[0];
        imgUrl = imgUrl.src;
        localStorage.setItem("imgUrlValue", imgUrl);
        window.location.href='product.html';
    })
}

document.addEventListener('DOMContentLoaded', function() {
    if(!mainImg) {
        return
    } else {
        mainImg.src = localStorage.getItem("imgUrlValue")
    }
=======
﻿const menu = document.getElementById('mobile-button');
const close = document.getElementById('close');
const nav = document.querySelector('.navbar-list')

const navBG = document.querySelector("nav");

if (menu) {
    menu.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

window.onscroll = () => {
    if(window.scrollY >= 100) {
        navBG.classList.add('nav-active');
    } else {
        navBG.classList.remove('nav-active');
    }
}
// 
var mainImg = document.querySelector(".main-img");
var smallerImg = document.getElementsByClassName("smaller-img");

for(var img of smallerImg) {
    img.addEventListener("click", function(){
        mainImg.src = this.src;
    });
}
// 
const toProduct = document.getElementsByClassName("to-product");
let imgUrl;

for(var toProd of toProduct) {
    toProd.addEventListener('click', function(){
        imgUrl = this.getElementsByTagName('img')[0];
        imgUrl = imgUrl.src;
        localStorage.setItem("imgUrlValue", imgUrl);
        window.location.href='product.html';
    })
}

document.addEventListener('DOMContentLoaded', function() {
    if(!mainImg) {
        return
    } else {
        mainImg.src = localStorage.getItem("imgUrlValue")
    }
>>>>>>> 38e57acdd65c11df6c9471d0c5d73e7859fd3400
})
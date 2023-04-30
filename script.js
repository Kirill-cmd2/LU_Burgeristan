'use strict';


var data1 = 0;
var data2 = 0;
var data3 = 0;
var data4 = 0;
var total = 0;

function increment1() {
    data1 = data1 + 1;
    document.getElementById("counter1").innerText = data1;
}

function decrement1() {
    data1 = data1 - 1;
    if(data1 < 0){
        data1 = 0;
    }
    else{
        document.getElementById("counter1").innerText = data1;
    }
}


function increment2() {
    data2 = data2 + 1;
    document.getElementById("counter2").innerText = data2;
}

function decrement2() {
    data2 = data2 - 1;
    if(data2 < 0){
        data2 = 0;
    }
    else{
        document.getElementById("counter2").innerText = data2;
    }
}


function increment3() {
    data3 = data3 + 1;
    document.getElementById("counter3").innerText = data3;
}

function decrement3() {
    data3 = data3 - 1;
    if(data3 < 0){
        data3 = 0;
    }
    else{
        document.getElementById("counter3").innerText = data3;
    }
}

function increment4() {
    data4 = data4 + 1;
    document.getElementById("counter4").innerText = data4;
}

function decrement4() {
    data4 = data4 - 1;
    if(data4 < 0){
        data4 = 0;
    }
    else{
        document.getElementById("counter4").innerText = data4;
    }
}

function buying(){
    total = data1*90 + data2*100 + data3*69 + data4*89;
    document.getElementById("counter1").innerText = 0;
    document.getElementById("counter2").innerText = 0;
    document.getElementById("counter3").innerText = 0;
    document.getElementById("counter4").innerText = 0;

    if(total==0){
        document.getElementById("displaytext").innerHTML = "You have no pizza in basket"
    }
    else{
        document.getElementById("displaytext").innerHTML = "Thank you for your purchase! Your payment is "+total+" thousand sums"
    }

    data1 = 0;
    data2 = 0;
    data3 = 0;
    data4 = 0;
    total = 0;
}

const addEventOnElements = function (elem, type, callback) {
  for (let i = 0, len = elem.length; i < len; i++) {
    elem[i].addEventListener(type, callback);
  }
}

const loadingElement = document.querySelector("[data-loading-container]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.add("loaded");
});

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNavbar);

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 200 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", headerActive);

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
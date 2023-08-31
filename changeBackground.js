let body = document.querySelector("body");
let colors = ["rgb(128,0,0)", "rgb(170,110,40)", "rgb(0,128,128)", "rgb(128,128,128)", "rgb(145,30,180)", "rgb(255,255,25)", "rgb(60,180,75)", "rgb(128,128,0)", "rgb(0,130,200)", "rgb(220,190,255)", "rgb(230,25,75)"];
let color;
setInterval(function() {
    color = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[color];
}, 300);
const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx=canvas.getContext("2d");

let snow = new Snow(canvas.width,canvas.height);
snow.start();

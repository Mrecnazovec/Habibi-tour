let container = document.querySelector(".container");
let pos_blue_box = document.querySelector(".pos_blue_box");

let margin = window.getComputedStyle(container).marginLeft;
console.log(margin);
// margin = margin.slice(0, 3);
margin = margin.replace('px','');
margin = Number(margin) + 12;
console.log(margin);

pos_blue_box.style.left = margin + "px";


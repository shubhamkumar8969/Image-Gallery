const images=document.querySelectorAll(".gallery img");
const lightbox=document.querySelector(".lightbox");
const lightImg=document.getElementById("lightImg");

let current=0;

images.forEach((img,index)=>{

img.onclick=()=>{

current=index;

lightbox.style.display="flex";

lightImg.src=img.src;

}

});

document.getElementById("close").onclick=()=>{

lightbox.style.display="none";

}

document.getElementById("next").onclick=()=>{

current++;

if(current>=images.length)
current=0;

lightImg.src=images[current].src;

}

document.getElementById("prev").onclick=()=>{

current--;

if(current<0)
current=images.length-1;

lightImg.src=images[current].src;

}

const filters=document.querySelectorAll(".filter");

filters.forEach(btn=>{

btn.onclick=()=>{

document.querySelector(".active").classList.remove("active");

btn.classList.add("active");

let value=btn.dataset.filter;

document.querySelectorAll(".image").forEach(card=>{

if(value=="all"||card.classList.contains(value))
card.style.display="block";
else
card.style.display="none";

});

}

});

document.getElementById("search").onkeyup=function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".image").forEach(card=>{

if(card.className.toLowerCase().includes(value))
card.style.display="block";
else
card.style.display="none";

});

}

document.getElementById("themeBtn").onclick=()=>{

document.body.classList.toggle("dark");

}
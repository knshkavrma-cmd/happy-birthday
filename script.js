// =============================
// LOADER
// =============================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2500);
});

// =============================
// TYPEWRITER EFFECT
// =============================

const text = "Happy Birthday, Vaibhav ❤️";

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("typewriter").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 120);

    }

}

typeWriter();

// =============================
// FLOATING HEARTS
// =============================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 400);

// =============================
// BUTTON SCROLL
// =============================

document.getElementById("openBtn").addEventListener("click", () => {

    document.getElementById("story").scrollIntoView({

        behavior: "smooth"

    });

});

// =============================
// MUSIC
// =============================

const music = document.getElementById("bgMusic");

document.body.addEventListener("click", () => {

    music.play();

}, { once: true });

// =============================
// BLOW CANDLE
// =============================

document.getElementById("blowBtn").addEventListener("click", () => {

    const flame = document.querySelector(".candle::after");

    document.querySelector(".candle").style.opacity = ".7";

    alert("✨ Make a wish... Happy Birthday! 🎂❤️");

});

// =============================
// IMAGE ZOOM
// =============================

const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

    img.addEventListener("click", () => {

        img.classList.toggle("zoom");

    });

});

// =============================
// SCROLL ANIMATION
// =============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(70px)";

    card.style.transition=".8s";

    observer.observe(card);

});

// STARS

for(let i=0;i<150;i++){

const star=document.createElement("div");

star.classList.add("star");

star.style.width=Math.random()*3+"px";

star.style.height=star.style.width;

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=
Math.random()*3+1+"s";

document.body.appendChild(star);

}

// LIGHTBOX

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

document.getElementById("closeLightbox")
.addEventListener("click",()=>{

lightbox.style.display="none";

});

// ENVELOPE

document.getElementById("envelope")
.addEventListener("click",()=>{

document.getElementById("envelope")
.classList.toggle("open");

});

// GIFT BOX

document.getElementById("giftBox")
.addEventListener("click",()=>{

document.getElementById("giftMessage")
.classList.add("show");

});

// =============================
// SHOOTING STARS
// =============================

function shootingStar(){

const star=document.createElement("div");

star.classList.add("shooting-star");

star.style.top=Math.random()*30+"vh";

star.style.left="100vw";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2000);

}

setInterval(shootingStar,6000);

// =============================
// CANDLE
// =============================

document.getElementById("blowBtn")
.addEventListener("click",()=>{

document.querySelector(".flame")
.classList.add("off");

confetti();

});

// =============================
// CONFETTI
// =============================

function confetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.innerHTML="🎉";

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize=(15+Math.random()*20)+"px";

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

},20);

setTimeout(()=>{

c.remove();

},4200);

}

}

// =============================
// FINAL MESSAGE
// =============================

window.addEventListener("scroll",()=>{

const ending=document.getElementById("ending");

const rect=ending.getBoundingClientRect();

if(rect.top<window.innerHeight-150){

ending.style.opacity="1";

ending.style.transform="translateY(0)";

}

});

// Nickname animation

const nicknames = document.querySelectorAll(".nickname");

const nicknameObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate(

[
{opacity:0,transform:"translateY(50px)"},
{opacity:1,transform:"translateY(0)"}
],

{
duration:700,
fill:"forwards"
}

);

}

});

});

nicknames.forEach(name=>{

name.style.opacity="0";

nicknameObserver.observe(name);

});
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const question=document.getElementById("question");
const result=document.getElementById("result");
const card=document.getElementById("card");

/* YES NO LOGIC */
let yesScale=1;
let noScale=1;

function moveNo(){
    const x=Math.random()*300-150;
    const y=Math.random()*300-150;

    noBtn.style.transform=`translate(${x}px,${y}px) scale(${noScale})`;

    noScale-=0.15;
    if(noScale<=0){
        noBtn.style.display="none";
    }

    yesScale+=0.15;
    yesBtn.style.transform=`scale(${yesScale})`;
}

noBtn.addEventListener("mouseenter",moveNo);
noBtn.addEventListener("click",moveNo);

yesBtn.onclick=()=>{
    question.style.display="none";
    result.style.display="block";
    card.classList.add("result-mode");
};

/* LOVE + FLOWER RAIN */
const items=["💖","💗","💓","💞","💕","❤️","🌸","🌹","🌺","💐"];

function createRain(){
    const el=document.createElement("div");
    el.classList.add("item");
    el.innerText=items[Math.floor(Math.random()*items.length)];

    el.style.left=Math.random()*100+"vw";
    el.style.fontSize=(20+Math.random()*25)+"px";
    el.style.animationDuration=(3+Math.random()*3)+"s";

    document.body.appendChild(el);

    setTimeout(()=>{el.remove();},6000);
}

setInterval(createRain,250);
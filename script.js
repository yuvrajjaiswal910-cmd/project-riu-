/* ==========================================
   PROJECT RIU ❤️
   SCRIPT.JS - PART 1
========================================== */

// ===== ELEMENTS =====

const loadingScreen = document.getElementById("loading-screen");

const phases = document.querySelectorAll(".phase");

const phase1 = document.getElementById("phase1");
const introScreen = document.getElementById("intro-screen");
const phase2 = document.getElementById("phase2");

const startJourney = document.getElementById("startJourney");

const transitionOverlay = document.getElementById("transitionOverlay");

const toast = document.getElementById("toastMessage");

// ===== CURRENT PHASE =====

let currentPhase = phase1;

// ===== SHOW PHASE FUNCTION =====

function showPhase(nextPhase){

    phases.forEach(phase=>{
        phase.classList.remove("active");
    });

    transitionOverlay.style.opacity = "1";

    setTimeout(()=>{

        nextPhase.classList.add("active");

        currentPhase = nextPhase;

        transitionOverlay.style.opacity = "0";

    },500);

}

transitionOverlay.style.opacity="1";

setTimeout(()=>{

nextPhase.classList.add("active");

currentPhase=nextPhase;

transitionOverlay.style.opacity="0";

},500);

}

transitionOverlay.style.opacity = "1";

setTimeout(()=>{

nextPhase.classList.add("active");

currentPhase = nextPhase;

transitionOverlay.style.opacity = "0";

},500);

}

// ===== TOAST FUNCTION =====

function showToast(message){

toast.innerText = message;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2200);

}

// ===== LOADING =====

window.addEventListener("load",()=>{

setTimeout(()=>{

loadingScreen.style.display="none";

},2500);

});

// ===== PHASE 1 =====

phase1.addEventListener("click",()=>{

showPhase(introScreen);

});

// ===== START BUTTON =====

startJourney.addEventListener("click",(e)=>{

e.stopPropagation();

showToast("Our journey begins... ❤️");

setTimeout(()=>{

showPhase(phase2);

},800);

});
/* ==========================================
   PROJECT RIU ❤️
   SCRIPT.JS - PART 2
========================================== */

// ===== LOCK ELEMENTS =====

const heartLock = document.getElementById("heartLock");
const keypadBox = document.getElementById("keypadBox");
const hintPopup = document.getElementById("hintPopup");
const wrongMessage = document.getElementById("wrongMessage");
const magicKeyScene = document.getElementById("magicKeyScene");
const magicKey = document.getElementById("magicKey");
const pinInput = document.getElementById("pinInput");

const keys = document.querySelectorAll(".key");
const unlockBtn = document.getElementById("unlockBtn");

let enteredPin = "";
let attempts = 0;

// ===== OPEN KEYPAD =====

heartLock.addEventListener("click",()=>{

heartLock.style.pointerEvents="none";

keypadBox.style.display="block";

setTimeout(()=>{

hintPopup.style.display="block";

},5000);

});

// ===== KEYPAD =====

keys.forEach(key=>{

key.addEventListener("click",()=>{

const value = key.innerText;

if(value==="⌫"){

enteredPin=enteredPin.slice(0,-1);

pinInput.value=enteredPin;

return;

}

if(enteredPin.length>=4) return;

enteredPin+=value;

pinInput.value=enteredPin;

});

});

// ===== UNLOCK =====

unlockBtn.addEventListener("click",()=>{

attempts++;

wrongMessage.style.display="block";

const msgs=[

"Nope... ❤️",

"Still locked... 👀",

"Almost... ✨"

];

wrongMessage.innerText=msgs[Math.min(attempts-1,2)];

if(attempts>=3){

wrongMessage.style.display="none";

keypadBox.style.display="none";

magicKeyScene.style.display="block";

showToast("The real key has appeared ❤️");

}

enteredPin="";

pinInput.value="";

});

// ===== MAGIC KEY =====

magicKey.addEventListener("click",()=>{

magicKey.style.transition="1.2s ease";

magicKey.style.transform="translateY(-120px) scale(.7)";

magicKey.style.opacity=".4";

heartLock.style.transform="scale(1.15)";
heartLock.style.transition=".6s";

showToast("Unlocked with love ❤️");

setTimeout(()=>{

showPhase(document.getElementById("phase3"));

},1300);

});
/* ==========================================
   PROJECT RIU ❤️
   SCRIPT.JS - PART 3
========================================== */

// ===== GAME ELEMENTS =====

const startGame = document.getElementById("startGame");
const gameArea = document.getElementById("gameArea");
const gameComplete = document.getElementById("gameComplete");
const heartScore = document.getElementById("heartScore");
const toLetter = document.getElementById("toLetter");

let score = 0;
let gameRunning = false;
let heartInterval;

// ===== CREATE HEART =====

function createHeart(){

if(!gameRunning) return;

const heart = document.createElement("div");

heart.className = "falling-heart";

heart.innerHTML = "❤️";

heart.style.left = Math.random()*80 + "%";

heart.style.animationDuration =
(2 + Math.random()*2) + "s";

gameArea.appendChild(heart);

// CLICK HEART

heart.addEventListener("click",()=>{

if(!gameRunning) return;

score++;

heartScore.innerText = score;

heart.remove();

if(score >= 10){

finishGame();

}

});

// REMOVE HEART

heart.addEventListener("animationend",()=>{

heart.remove();

});

}

// ===== START GAME =====

startGame.addEventListener("click",()=>{

startGame.style.display = "none";

score = 0;

heartScore.innerText = "0";

gameRunning = true;

heartInterval = setInterval(createHeart,700);

showToast("Catch my heart... ❤️");

});

// ===== FINISH =====

function finishGame(){

gameRunning = false;

clearInterval(heartInterval);

showToast("You caught every heart ❤️");

setTimeout(()=>{

gameComplete.style.display = "block";

},800);

}

// ===== NEXT =====

toLetter.addEventListener("click",()=>{

showPhase(document.getElementById("phase4"));

});
/* ==========================================
   PROJECT RIU ❤️
   SCRIPT.JS - PART 4
========================================== */

// ===== LETTER ELEMENTS =====

const envelope = document.getElementById("envelope");
const envelopeBox = document.getElementById("envelopeBox");
const letterContainer = document.getElementById("letterContainer");
const letterLines = document.querySelectorAll(".letterLine");
const continueEnding = document.getElementById("continueEnding");

const yesBtn = document.getElementById("yesBtn");
const absolutelyBtn = document.getElementById("absolutelyBtn");
const finalMessage = document.getElementById("finalMessage");

// ===== OPEN LETTER =====

envelope.addEventListener("click",()=>{

envelope.style.pointerEvents="none";

envelope.style.transform="scale(.8) rotate(-8deg)";
envelope.style.opacity=".2";

setTimeout(()=>{

envelopeBox.style.display="none";
letterContainer.style.display="block";

revealLetter();

},500);

});

// ===== REVEAL LINES =====

function revealLetter(){

letterLines.forEach((line,index)=>{

setTimeout(()=>{

line.style.opacity="1";

},index*700);

});

}

// ===== CONTINUE =====

continueEnding.addEventListener("click",()=>{

showPhase(document.getElementById("phase5"));

});

// ===== FINAL MESSAGE =====

function showFinalLove(){

finalMessage.style.display="block";

showToast("You made me the happiest person ❤️");

}

// ===== YES =====

yesBtn.addEventListener("click",()=>{

showFinalLove();

});

// ===== ABSOLUTELY =====

absolutelyBtn.addEventListener("click",()=>{

showFinalLove();

});
/* ==========================================
   PROJECT RIU ❤️
   SCRIPT.JS - PART 5 (FINAL)
========================================== */

// ===== BACKGROUND GENERATOR =====

const starsLayer = document.getElementById("stars");
const heartsLayer = document.getElementById("hearts");
const petalsLayer = document.getElementById("petals");
const sparklesLayer = document.getElementById("sparkles");

// ---------- STARS ----------

for(let i=0;i<80;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*5+"s";

starsLayer.appendChild(star);

}

// ---------- HEARTS ----------

setInterval(()=>{

const heart=document.createElement("div");

heart.className="bgHeart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(12+Math.random()*18)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

heartsLayer.appendChild(heart);

setTimeout(()=>heart.remove(),12000);

},900);

// ---------- PETALS ----------

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=(8+Math.random()*4)+"s";

petalsLayer.appendChild(petal);

setTimeout(()=>petal.remove(),13000);

},1800);

// ---------- SPARKLES ----------

setInterval(()=>{

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.innerHTML="✨";

sparkle.style.left=Math.random()*100+"%";
sparkle.style.top=Math.random()*100+"%";

sparklesLayer.appendChild(sparkle);

setTimeout(()=>sparkle.remove(),2500);

},1000);

// ===== FINAL BUTTON EFFECT =====

function celebrate(){

showToast("I Love You So Much ❤️");

document.body.style.overflow="hidden";

}

yesBtn.addEventListener("click",celebrate);

absolutelyBtn.addEventListener("click",celebrate);

console.log("❤️ Project Riu Loaded Successfully ❤️");
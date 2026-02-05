const alternatives = [
    {text:"UwU", images:"snoopy2.gif"},
    {text:"what", images:"snoopy3.gif"},
    {text:"WHY", images:"bakudeku.gif"},
    {text:"CLAIRE NO??", images:"haikyuu.gif"},
    {text:"PLEASE CLAIRE BE MY VALENTINE", images:"chopper2.gif"}
];
const ohyes = {text:"Sabía que aceptarías", images:"images/cat-yes.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    launchConfetti(); // 🎉💗

    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.classList.add("playing");
    btn.textContent = "⏸️";
  } else {
    music.pause();
    btn.classList.remove("playing");
    btn.textContent = "🎵";
  }
});

document.querySelector(".button").addEventListener("click", () => {
  document.getElementById("yes-text").style.display = "block";
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'SÍ'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});

const noBtn = document.querySelector(".button__negative");

let moveCount = 0;
const maxMoves = 3;


const originalPosition = {
  position: noBtn.style.position,
  left: noBtn.style.left,
  top: noBtn.style.top
};

noBtn.addEventListener("mouseover", () => {
  if (moveCount < maxMoves) {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
    moveCount++;
  } else if (moveCount === maxMoves) {
    
    noBtn.style.position = originalPosition.position || "static";
    noBtn.style.left = originalPosition.left || "";
    noBtn.style.top = originalPosition.top || "";
    moveCount++; 
  }
});

function launchConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

    const pinkShades = ["#ff69b4", "#ffb6c1", "#ffc0cb", "#ff85a2"];
    confetti.style.backgroundColor =
      pinkShades[Math.floor(Math.random() * pinkShades.length)];

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}



const size = Math.random() * 8 + 8;
confetti.style.width = size + "px";
confetti.style.height = size + "px";

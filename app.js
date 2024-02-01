let timer = 60;
let score = 0;
let hitrn;
let time;

function createBubble() {
  let clutter = "";
  for (let i = 1; i <= 200; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}


function newHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}


function runTimer() {
  time = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(time);
      document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER, Your final Score is ${score}</h1>`;
    }
  }, 1000);
}


document.querySelector("#pbtm").addEventListener("click", function (e) {
  let number = Number(e.target.textContent);
  if (number === hitrn) {
    increaseScore();
    createBubble();
    newHit();
  }
});

document.querySelector("#sbtn").addEventListener("click", function(){
  createBubble();
  runTimer();
  newHit();
})

document.querySelector("#nbtn").addEventListener("click", function(){
    location.reload();
    // event.preventDefault();
})

// createBubble();
// runTimer();
// newHit();
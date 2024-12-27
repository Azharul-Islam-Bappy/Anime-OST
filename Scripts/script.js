// getting DOM Elements
const playBtn = document.querySelector("#play-btn");
const options = document.querySelectorAll(".option");
const timer = document.querySelector("#timer");
const score = document.querySelector("#score");
const restartBtn = document.querySelector("#restart-btn");
let currentIndex = 0;
let scoreMark = 0;


// add options and song clip
function loadQuestion(index) {
  if (clipsData && clipsData.length > 0) {
    const currentClip = clipsData[index];
    playBtn.addEventListener("click",() => playAudio(currentClip.clip) );
    options.forEach((btn, i) => {
      btn.textContent = currentClip.options[i];
      btn.onclick = () => {
        checkAnswer(btn.textContent, currentClip.correct);
      }
    });
    
  }
}

// play audio 
function playAudio(audioFile) {
  const audio = new Audio(`${audioFile}`);
  audio.play();
}

// checks answer 
function checkAnswer(selected, correctAns) {
  if (selected === correctAns) {
    alert(`${selected} is correct answer`);
    scoreMark++;
    score.textContent = `Score: ${scoreMark}`;
  }
  else {
    alert(`WRONG!! Correct answer is ${correctAns}`);
  }
  currentIndex++
  if (currentIndex < clipsData.length) {
    loadQuestion(currentIndex);
  }
  else{
    alert('Game Over!');
  }
}

// Start the game once the data gets fetched
setTimeout(function() {
  if (clipsData.length > 0) {
    loadQuestion(currentIndex);
  }
}, 1000);
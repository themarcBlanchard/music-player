const playBtn = document.getElementById("play");
const audio = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Check if playing
let isPlaying = false;

// Play 
function playSong(){
    isPlaying = true;
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
    audio.play();
}

// Pause
function pauseSong(){
    isPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "Play");
    audio.pause();
}

// Event Listeners
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));




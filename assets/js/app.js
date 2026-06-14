/* ==========================================
   ELEMENTS
========================================== */

const screens = document.querySelectorAll(".screen");

const passwordInput =
document.getElementById("passwordInput");

const passwordBtn =
document.getElementById("passwordBtn");

const passwordMessage =
document.getElementById("passwordMessage");

const bgMusic =
document.getElementById("bgMusic");

const birthdayVideo =
document.getElementById("birthdayVideo");

const restartBtn =
document.getElementById("restartBtn");

/* ==========================================
   PASSWORD
========================================== */

passwordBtn.addEventListener("click", () => {

    const password =
    passwordInput.value.trim();

    if(password === "09102023"){

        passwordMessage.innerHTML =
        "❤️ Aku tahu kamu masih mengingatnya";

        setTimeout(() => {

            showScreen("screen-welcome");

        },1500);

    }else{

        passwordMessage.innerHTML =
        "😝 Hmm... coba ingat lagi hari pertama cerita kita dimulai";

    }

});

/* ==========================================
   SCREEN NAVIGATION
========================================== */

function showScreen(id){

    screens.forEach(screen => {

        screen.classList.remove("active");

    });

    document
    .getElementById(id)
    .classList.add("active");

    if(id === "screen-final"){

        launchConfetti();

    }

}

document
.querySelectorAll(".next-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        const next =
        button.dataset.next;

        showScreen(next);

        if(next === "screen-countdown"){

            startMusic();

        }

        if(next === "screen-letter"){

            startTypewriter();

        }

    });

});

/* ==========================================
   MUSIC
========================================== */

function startMusic(){

    bgMusic.volume = 0.5;

    bgMusic.play()
    .catch(() => {

        console.log(
        "Autoplay blocked");

    });

}

/* ==========================================
   COUNTDOWN
========================================== */

const targetDate =
new Date(
"June 15, 2026 00:00:00"
).getTime();

function updateCountdown(){

    const now =
    new Date().getTime();

    const distance =
    targetDate - now;

    const days =
    Math.floor(
    distance /
    (1000*60*60*24));

    const hours =
    Math.floor(
    (distance %
    (1000*60*60*24))
    /
    (1000*60*60));

    const minutes =
    Math.floor(
    (distance %
    (1000*60*60))
    /
    (1000*60));

    const seconds =
    Math.floor(
    (distance %
    (1000*60))
    /
    1000);

    if(distance > 0){

        document
        .getElementById("days")
        .innerText = days;

        document
        .getElementById("hours")
        .innerText = hours;

        document
        .getElementById("minutes")
        .innerText = minutes;

        document
        .getElementById("seconds")
        .innerText = seconds;

    }else{

        document
        .getElementById("birthdayMessage")
        .innerHTML =
        "🎉 Selamat Ulang Tahun Sayang ❤️";

    }

}

setInterval(
updateCountdown,
1000
);

/* ==========================================
   MEMORIES SLIDER
========================================== */

const slides =
document.querySelectorAll(".slide");

const nextSlideBtn =
document.getElementById("nextSlide");

const prevSlideBtn =
document.getElementById("prevSlide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove(
        "active-slide");

    });

    slides[index]
    .classList.add(
    "active-slide");

}

if(nextSlideBtn){

    nextSlideBtn
    .addEventListener(
    "click",
    () => {

        currentSlide++;

        if(
        currentSlide >=
        slides.length
        ){

            currentSlide = 0;
        }

        showSlide(
        currentSlide);

    });

}

if(prevSlideBtn){

    prevSlideBtn
    .addEventListener(
    "click",
    () => {

        currentSlide--;

        if(
        currentSlide < 0
        ){

            currentSlide =
            slides.length - 1;
        }

        showSlide(
        currentSlide);

    });

}

/* ==========================================
   TYPEWRITER
========================================== */

const typewriterText =
document.getElementById(
"typewriterText");

const letter = `

Hai Sayang ❤️
Hari ini adalah hari yang sangat spesial.
Aku ingin mengucapkan terima kasih
karena sudah menjadi bagian dari hidupku.
Terima kasih untuk semua tawa,
cerita, dan perjuangan yang sudah kita lewati bersama.

Mungkin aku tidak sempurna.
Mungkin aku masih banyak kurangnya.

Tetapi satu hal yang pasti,
aku selalu berusaha menjadi seseorang
yang pantas untukmu.

Semoga di usia yang baru ini,
semua impianmu perlahan menjadi kenyataan.

Aku bangga padamu.

Aku sayang kamu ❤️

`;

let typingStarted = false;

function startTypewriter(){

    if(typingStarted) return;

    typingStarted = true;

    let i = 0;

    function typing(){

        if(i < letter.length){

            typewriterText.innerHTML +=
            letter.charAt(i);

            i++;

            setTimeout(
            typing,
            40);

        }

    }

    typing();

}

/* ==========================================
   VIDEO CONTROL
========================================== */

const videoNextBtn =
document.getElementById(
"videoNextBtn");

if(birthdayVideo){

    birthdayVideo
    .addEventListener(
    "play",
    () => {

        bgMusic.pause();

    });

    birthdayVideo
    .addEventListener(
    "ended",
    () => {

        bgMusic.play();

        videoNextBtn
        .classList.add(
        "show");

    });

}

if(videoNextBtn){

    videoNextBtn
    .addEventListener(
    "click",
    () => {

        showScreen(
        "screen-future");

    });

}

/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart(){

    const heart =
    document.createElement(
    "div");

    heart.classList.add(
    "heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() * 100 + "%";

    heart.style.fontSize =
    (Math.random() * 20 + 15)
    + "px";

    document
    .getElementById(
    "hearts-container")
    .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    },8000);

}

setInterval(
createHeart,
1200
);

/* ==========================================
   CONFETTI
========================================== */

function launchConfetti(){

    confetti({

        particleCount: 250,

        spread: 180,

        origin: {

            y: 0.6

        }

    });

}

/* ==========================================
   RESTART JOURNEY
========================================== */

if(restartBtn){

    restartBtn
    .addEventListener(
    "click",
    () => {

        location.reload();

    });

}

/* ==========================================
   SWIPE SUPPORT MOBILE
========================================== */

let touchStartX = 0;
let touchEndX = 0;

const slider =
document.querySelector(".slider");

if(slider){

    slider.addEventListener(
    "touchstart",
    e => {

        touchStartX =
        e.changedTouches[0]
        .screenX;

    });

    slider.addEventListener(
    "touchend",
    e => {

        touchEndX =
        e.changedTouches[0]
        .screenX;

        if(
        touchEndX <
        touchStartX - 50
        ){

            currentSlide++;

            if(
            currentSlide >=
            slides.length
            ){

                currentSlide = 0;
            }

            showSlide(
            currentSlide);

        }

        if(
        touchEndX >
        touchStartX + 50
        ){

            currentSlide--;

            if(
            currentSlide < 0
            ){

                currentSlide =
                slides.length - 1;
            }

            showSlide(
            currentSlide);

        }

    });

}

/* ==========================================
   START
========================================== */

updateCountdown();
showSlide(0);

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document
        .getElementById("loading-screen")
        .style.opacity="0";

        setTimeout(()=>{

            document
            .getElementById("loading-screen")
            .style.display="none";

        },1000);

    },2500);

});
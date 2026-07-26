const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const wishButton = document.getElementById("wish-btn");

const message = document.getElementById("message");
const card = document.getElementById("birthday-card");
const desktop = document.querySelector(".desktop");
const buttons = document.querySelector(".buttons");
const letterOverlay = document.getElementById("letter-overlay");
const closeLetter = document.getElementById("close-letter");
const cakeIcon = document.getElementById("cake");
const starIcon = document.getElementById("star");

const littleWindow = document.getElementById("littlethings-window");

const blue1 = document.getElementById("blue1");
const blue2 = document.getElementById("blue2");
const blue3 = document.getElementById("blue3");

const page1 = document.getElementById("little-page1");
const page2 = document.getElementById("little-page2");
const page3 = document.getElementById("little-page3");

const close1 = document.getElementById("close1");
const close2 = document.getElementById("close2");
const close3 = document.getElementById("close3");
let lastSparkle = 0; 

const nyota = document.getElementById("nyota");
const bubble = document.getElementById("nyota-bubble"); 

function nyotaTalk(text, image){

    nyota.style.opacity = "1";
    bubble.style.opacity = "1";
    bubble.textContent = text;
    nyota.src = "images/characters/" + image;

    clearTimeout(window.nyotaTimer);

    window.nyotaTimer = setTimeout(function(){

       nyota.style.opacity = "0";
        bubble.style.opacity = "0";

    },7000);
}

yesButton.onclick = function () {

    buttons.style.display = "none";

    message.innerHTML =` 
        <h2>Happy Birthday 💙</h2>

        <p>
            I have something for you...
            <br><br>
            But first,
            <br>
            make a wish.
        </p>
    `;

    setTimeout(function () {
        wishButton.style.display = "block";
    }, 2000);

};

wishButton.onclick = function () {

    card.classList.add("fold-away");

    setTimeout(function () {

        card.style.display = "none";
        desktop.style.display = "block";

        setTimeout(function(){

        nyota.style.opacity = "1";

        bubble.style.opacity = "1";

        bubble.style.transform =
       "translateY(0) scale(1)";

        },700);;

        setTimeout(function(){

        nyota.style.opacity = "1";

        },700);
        setTimeout(function(){

        bubble.style.opacity = "0";

        bubble.style.transform =
        "translateY(10px) scale(.95)";

        nyota.style.opacity = "0";

        },10700);

        const icons = document.querySelectorAll(".icon");

        icons.forEach((icon, index) => {

            setTimeout(function () {

                icon.classList.add("show");

            }, index * 80);

        });

    }, 1200);

};

noButton.onclick = function () {

    buttons.style.display = "none";

    message.innerHTML = `
        <p>
            Then I'll wait for you. 🌊
            <br><br>
            Come back when you're 22.
        </p>
    `;

};

document.addEventListener("mousemove", function(e){

    const now = Date.now();

    if(now - lastSparkle < 60){
        return;
    }

    lastSparkle = now;

    const sparkle = document.createElement("div");
    const colors = [
    "#ffffff",   // white
    "#dff6ff",   // icy blue
    "#b8e8ff",   // light ocean blue
    "#fff7c2"    // warm sunlight
   ];

    const color = colors[Math.floor(Math.random() * colors.length)];

    sparkle.style.setProperty("--sparkle-color", color);
    const size = Math.random() * 6 + 8;

    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";

    sparkle.className = "sparkle";

    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    document.body.appendChild(sparkle);

    setTimeout(function(){

        sparkle.remove();

    },400);

});

const cloud = document.getElementById("cloud");

cloud.addEventListener("click", function(){
    

    for(let i = 0; i < 100; i++){

        setTimeout(function(){

            const star = document.createElement("img");

            if (Math.random() < 0.7) {

            const randomNumber = Math.floor(Math.random() * 9) + 1;

            star.src = `images/decorations/star${randomNumber}.png`;

            } else {

            star.src = "images/decorations/sparkle2.gif";

            }

            star.className = "rain-star";

            const cloudRect = cloud.getBoundingClientRect();

            const startX =
            cloudRect.left + Math.random() * cloudRect.width;

            const startY =
            cloudRect.bottom - 15;

            star.style.left = startX + "px";
            star.style.top = startY + "px";

            const xMove = (Math.random() - 0.5) * 360;
            const rotate = (Math.random() - 0.5) * 540;

            star.style.setProperty("--xMove", xMove + "px");
            star.style.setProperty("--rotate", rotate + "deg");

            document.body.appendChild(star);

            setTimeout(function(){

                star.remove();

            },2200);

        }, i * 40);

    }

});
cakeIcon.onclick = function(){

    letterOverlay.classList.add("show");

    desktop.classList.add("blur");

}

closeLetter.onclick = function(){

    letterOverlay.classList.remove("show");

    desktop.classList.remove("blur");

    nyotaTalk(
        "have u tried clicking on the cloud yet?",
        "nyota1.png"
    );
}

const stickyContainer = document.getElementById("sticky-notes");

const pinkNote = document.querySelector(".pink");
const blueNote = document.querySelector(".blue");

let showingPink = true;

stickyContainer.addEventListener("click", function(){

    const visibleNote = showingPink ? pinkNote : blueNote;

    visibleNote.classList.add("change");

    setTimeout(function(){

        visibleNote.classList.remove("change");

    },300);

    nyotaTalk(
        "it is impressive that u found that one..", 
        "nyota3.png"

    );

    if(showingPink){

        pinkNote.style.display = "none";
        blueNote.style.display = "block";

    }else{

        blueNote.style.display = "none";
        pinkNote.style.display = "block";

    }

    showingPink = !showingPink;

});

const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

let playing = false;

musicBtn.onclick = function(){

    if(playing){

        music.pause();

        musicBtn.textContent = "▶";

    }else{

        music.play();

        musicBtn.textContent = "❚❚";

    }

    playing = !playing;

};
document.addEventListener("click", function(){

    music.play();

},{once:true});
starIcon.onclick = function(){

    desktop.classList.add("blur");

    littleWindow.classList.add("show");

}

blue1.onclick = function(){

    littleWindow.classList.remove("show");

    page1.classList.add("show");

}

blue2.onclick = function(){

    littleWindow.classList.remove("show");

    page2.classList.add("show");

}

blue3.onclick = function(){

    littleWindow.classList.remove("show");

    page3.classList.add("show");

}
close1.onclick = function(){

    page1.classList.remove("show");

    desktop.classList.remove("blur");

}

close2.onclick = function(){

    page2.classList.remove("show");

    desktop.classList.remove("blur");

}

close3.onclick = function(){

    page3.classList.remove("show");

    desktop.classList.remove("blur");

}
const futureIcon = document.getElementById("cat");

const futureWindow = document.getElementById("future-window");

const closeFuture = document.getElementById("close-future");

futureIcon.onclick = function(){

    desktop.classList.add("blur");

    futureWindow.classList.add("show");

}

closeFuture.onclick = function(){

    futureWindow.classList.remove("show");

    desktop.classList.remove("blur");

    nyotaTalk(
        "90-year-old chess tournament when?",
        "nyota2.png"
    );

}

const fishIcon = document.getElementById("fish");

const friendshipWindow = document.getElementById("friendship-window");

const closeFriendship = document.getElementById("close-friendship");

fishIcon.onclick = function(){

    desktop.classList.add("blur");

    friendshipWindow.classList.add("show");

}

closeFriendship.onclick = function(){

    friendshipWindow.classList.remove("show");

    desktop.classList.remove("blur");
    nyotaTalk(
        "will u promis me to stay my friend for the next 9years?",
        "nyota6.png"
        );

}
const pages = document.querySelectorAll(".friend-page");

const nextFriend = document.getElementById("next-friend");

let currentPage = 0;

nextFriend.onclick = function(){

    pages[currentPage].classList.remove("active");

    currentPage++;

    if(currentPage >= pages.length){

        currentPage = 0;

    }

    pages[currentPage].classList.add("active");

}

const diaryIcon = document.getElementById("candy");

const diaryWindow = document.getElementById("diary-window");

const closeDiary = document.getElementById("close-diary");

diaryIcon.onclick = function(){

    diaryWindow.classList.add("show");

    desktop.classList.add("blur");

}

closeDiary.onclick = function(){

    diaryWindow.classList.remove("show");

    desktop.classList.remove("blur");

    nyotaTalk(
        "hehe... i probably wasn't supposed to let u read this one.",
        "nyota4.png"
    );

}

const spreads = document.querySelectorAll(".diary-spread");
const nextDiary = document.getElementById("next-diary");

let currentDiaryPage = 0;

nextDiary.onclick = function(){

    spreads[currentDiaryPage].classList.remove("active");

    currentDiaryPage++;

    if(currentDiaryPage >= spreads.length){
        currentDiaryPage = 0;
    }

    spreads[currentDiaryPage].classList.add("active");

}

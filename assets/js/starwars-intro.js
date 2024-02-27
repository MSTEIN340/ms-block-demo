
//document.addEventListener("DOMContentLoaded", animationend_listener);
let ani1;
let ani2;

function animationend_listener() {
    const contentDiv = document.getElementById('content');
    const introstop = document.getElementById('intro-stop');
    console.log("Animation listener");
    if (contentDiv) {
        contentDiv.addEventListener('animationend', handleAnimationEnd );
        const obiwan = document.getElementById('droids');
         ani1 = setTimeout(function() {
            console.log("World");
            obiwan.style.opacity = 1;
        }, 51000);
         ani2 = setTimeout(function() {
            console.log("World");
            const obiwan = document.getElementById('droids');
            const brassPlates = document.getElementById('brassPlates');
            const Intro = document.getElementById('IntroBackground');
             const introstop = document.getElementById('intro-stop');
            obiwan.style.opacity = 0;
            Intro.style.opacity = 0;
            brassPlates.style.opacity = 1;
            instrostop.style.opacity = 0;
        }, 57000);
        const introstop = document.getElementById('intro-stop');
        if (introstop) {
            introstop.addEventListener('click', handleStopClick);
            console.log("CLICK LISTENER ADDED");
        }else{
            console.log("CLICK LISTENER NOT ADDED");
        }


    }
}

function handleAnimationEnd() {

}

function handleStopClick() {
    const obiwan = document.getElementById('droids');
    const brassPlates = document.getElementById('brassPlates');
    const Intro = document.getElementById('IntroBackground');
    const introstop = document.getElementById('intro-stop');
    obiwan.style.opacity = 0;
    Intro.style.opacity = 0;
    brassPlates.style.opacity = 1;
    introstop.style.opacity = 0;
}
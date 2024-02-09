function animationend_listener() {
    const contentDiv = document.getElementById('content');
    console.log("Animation listener");
    if (contentDiv) {
        contentDiv.addEventListener('animationend', handleAnimationEnd );
        const obiwan = document.getElementById('droids');
        setTimeout(function() {
            console.log("World");
            obiwan.style.opacity = 1;
        }, 50000);
    }
}

function handleAnimationEnd() {
    setTimeout(function() {
        console.log("World");
        const obiwan = document.getElementById('droids');
        obiwan.style.opacity = 0;
    }, 2000);
    setTimeout(function() {
        console.log("Animation End");
        const brassPlates = document.getElementById('brassPlates');
        brassPlates.style.opacity = 1;
    }, 2500);

}
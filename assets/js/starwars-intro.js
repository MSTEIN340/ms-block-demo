
//document.addEventListener("DOMContentLoaded", animationend_listener);
let ani1;
let ani2;

function animationend_listener() {

    const contentDiv = document.getElementById('content');
    //  const introstop = document.getElementById('intro-stop');
    //  console.log("Animation listener");
    if (contentDiv) {
        contentDiv.addEventListener('animationend', handleAnimationEnd );
        const obiwan = document.getElementById('droids');
         ani1 = setTimeout(function() {
           // console.log("World");
            obiwan.style.opacity = 1;
        }, 51000);
         ani2 = setTimeout(function() {
         //   console.log("World");
            const obiwan = document.getElementById('droids');
            const brassPlates = document.getElementById('brassPlates');
            const Intro = document.getElementById('IntroBackground');
             const introstop = document.getElementById('intro-stop');
            obiwan.style.opacity = 0;
            Intro.style.opacity = 0;
            brassPlates.style.opacity = 1;
            introstop.style.opacity = 0;
            handleStopClick();
        }, 57000);
        const introstop = document.getElementById('intro-stop');
        if (introstop) {
            introstop.addEventListener('click', handleStopClick);
          //  console.log("CLICK LISTENER ADDED");
        }else{
           // console.log("CLICK LISTENER NOT ADDED");
        }
    }
    if(hasTenMinutesElapsed()) {

    }else{
        handleStopClick();
    }
}

function handleAnimationEnd() {
    handleStopClick();
}

function handleStopClick() {
    document.getElementById('IntroBackground').style.display = 'none';
    const obiwan = document.getElementById('droids');
    const brassPlates = document.getElementById('brassPlates');
    const Intro = document.getElementById('IntroBackground');
    const introstop = document.getElementById('intro-stop');
    obiwan.style.opacity = 0;
    Intro.style.opacity = 0;
    brassPlates.style.opacity = 1;
    introstop.style.opacity = 0;
    setMyPostBox(1825);
}

// Function to store the current date and time in local storage
function storeCurrentDateTime() {
    const currentDateTime = new Date().toISOString();
    localStorage.setItem('storedDateTime', currentDateTime);
    console.log('Current date and time stored.');
}

// Function to check if 10 minutes have elapsed since the stored date and time
function hasTenMinutesElapsed() {
    const storedDateTime = localStorage.getItem('storedDateTime');
    if (!storedDateTime) {
        console.log('No stored date and time found.');
        storeCurrentDateTime();
        return true;
    }
    const currentTime = new Date();
    const timeDifference = currentTime - new Date(storedDateTime); // Difference in milliseconds
    const minutesDifference = timeDifference / 60000; // Convert milliseconds to minutes

    if (minutesDifference >= 10) {
        console.log('More than 10 minutes have elapsed.');
        storeCurrentDateTime();
        return true;
    } else {
        console.log('Less than 10 minutes have elapsed.');
        return false;
    }
}
/*
// Usage
storeCurrentDateTime(); // Call this function to store the current date and time
// ... wait for some time ...
const elapsed = hasTenMinutesElapsed(); // Call this function to check if 10 minutes have passed
console.log('Has 10 minutes elapsed?', elapsed);


 */
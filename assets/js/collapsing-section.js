document.addEventListener("DOMContentLoaded", setEventListener);

function setEventListener(event) {
    let contentsid = "";
    let imageid = "";
    const clickedButtonId = event.target.id;
   // console.log('Clicked button ID:', clickedButtonId);

    document.querySelectorAll('[id^="CS-button"]').forEach(button => {
      //  console.log('Event Listener added');
        button.addEventListener('click', () => {
          //  console.log('Button clicked:', button.id);
            // Your event handling logic...
            contentsid = button.id.replace('CS-button', 'CS-contents');
            imageid = button.id.replace('CS-button', 'CS-btnimg');
            if (document.getElementById(contentsid).style.display === 'none') {
                document.getElementById(contentsid).style.display = 'block';
                document.getElementById(imageid).src = "https://www.MichaelAStein.com/wp-content/plugins/ms-block-demo/src/blocks/CollapsingSection/images/down.png";
            } else {
                document.getElementById(contentsid).style.display = 'none';
                document.getElementById(imageid).src = "https://www.MichaelAStein.com/wp-content/plugins/ms-block-demo/src/blocks/CollapsingSection/images/up.png";
            }
        });
    });
}


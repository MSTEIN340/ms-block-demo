

function CSBclick(collapsed) {
    // Toggle the collapsed state or handle the event based on the collapsed argument
    // this.setState({ collapsed: !collapsed });
    console.log("Button Clicked");
};

function setEventListener(event)  {
    let contentsid = "";
    let imageid = "";
    const clickedButtonId = event.target.id;
    console.log('Clicked button ID:', clickedButtonId);

        document.querySelectorAll('[id^="CS-button"]').forEach(button => {
            console.log('Event Listener added');
            button.addEventListener('click', () => {
                console.log('Button clicked:', button.id);
                // Your event handling logic...
                contentsid =  button.id.replace('CS-button', 'CS-contents');
                imageid = button.id.replace('CS-button', 'CS-btnimg');
                if(document.getElementById(contentsid).style.display === 'none') {
                    document.getElementById(contentsid).style.display = 'contents';
                    document.getElementById(imageid).src = "https://www.MichaelAStein.com/wp-content/plugins/ms-block-demo/src/blocks/CollapsingSection/images/down.png";

                }else {
                    document.getElementById(contentsid).style.display = 'none';
                    document.getElementById(imageid).src = "https://www.MichaelAStein.com/wp-content/plugins/ms-block-demo/src/blocks/CollapsingSection/images/up.png";
                }


            });
      });

    /*
    const CSbutton = document.getElementById('CS-button');
    CSbutton.addEventListener('click', (e) => {
        console.log('Event Listener Button clicked!');
        // Your logic here
    });

     */
}


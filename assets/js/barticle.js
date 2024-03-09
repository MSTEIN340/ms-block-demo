document.addEventListener('DOMContentLoaded', function () {
   // console.log("Barticle event listener added");
    // Use a class or ID to target the divs. For this example, we'll add a class name 'barticle-link-div' to the div
    const clickableDivs = document.querySelectorAll('.barticle-link-div');

    clickableDivs.forEach(function(div) {
        div.addEventListener('click', function() {
            //console.log("Clicked");
            // Assuming the URL to navigate to is stored in a data attribute 'data-link'
            const url = this.getAttribute('data-link');
          //  console.log("Clicked", url);
            if (url) {
                window.location.href = url;
            }
        });
    });
});
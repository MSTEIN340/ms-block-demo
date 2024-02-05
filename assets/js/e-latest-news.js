function LoadLatestNews() {
    console.log("LoadLatestNews");
    var xhr = new XMLHttpRequest();
    xhr.open('POST', myBlockData.ajax_url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');


    xhr.onload = function() {
        if (this.status >= 200 && this.status < 400) {

            var response = JSON.parse(this.response);
            var htmlContent = response.data;

            var newsDiv = document.getElementById('ms_latest_news');
            if (newsDiv) {
                newsDiv.innerHTML = htmlContent; // Assuming response is the HTML content you want to insert
               // console.log(htmlContent);
            }

        } else {

            console.error("Server reached, but it returned an error");
        }
    };

    // Handling errors
    xhr.onerror = function() {
        // There was a connection error of some sort
        console.error("Failed to send request");
    };

    // Sending the request
    xhr.send('action=get_post_details_ajax&nonce=' + myBlockData.nonce);
}
function submitForm() {
    // Get form data
    console.log( "Form Submitted");
    var formData = {
        firstName: document.getElementById('CT_1').value,
        lastName: document.getElementById('CT_2').value,
        email: document.getElementById('CT_3').value,
        subject: document.getElementById('CT_4').value,
        message: document.getElementById('CT_5').value,
        contractWork: document.getElementById('CT_6').checked,
        fullTime: document.getElementById('CT_7').checked,
        suffolkCounty: document.getElementById('CT_8').checked,
        remote: document.getElementById('CT_9').checked
    };

    // Clean data to prevent SQL injection
    for (var key in formData) {
        if (typeof formData[key] === 'string') {
            formData[key] = formData[key].replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
    }

    // Convert data to JSON
    var jsonFormData = JSON.stringify(formData);

    // Send data to WordPress AJAX
    fetch('/wp-admin/admin-ajax.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'action=contact_form_submission&data=' + encodeURIComponent(jsonFormData)
    })
        .then(response => response.text())
        .then(response => {
            // Clear form fields
            console.log("Response: ", response);
            document.getElementById('CT_1').value = '';
            document.getElementById('CT_2').value = '';
            document.getElementById('CT_3').value = '';
            document.getElementById('CT_4').value = '';
            document.getElementById('CT_5').value = '';
            document.getElementById('CT_6').checked = false;
            document.getElementById('CT_7').checked = false;
            document.getElementById('CT_8').checked = false;
            document.getElementById('CT_9').checked = false;
            console.log( "Message Succeeded.");
            // Show success message
            var messageElement = document.getElementById('messageSentNotification');
            messageElement.style.display = 'block';
            setTimeout(function() {
                messageElement.style.display = 'none';
            }, 3000);
        })
        .catch(error => console.error('Error:', error));
}

<?php



function handle_contact_form_submission() {
    // Check if data is set
    if (isset($_POST['data'])) {
        // Decode the JSON data
        $data = json_decode(stripslashes($_POST['data']), true);

        // Extract the data
        $firstName = sanitize_text_field($data['firstName']);
        $lastName = sanitize_text_field($data['lastName']);
        $email = sanitize_email($data['email']);
        $subject = sanitize_text_field($data['subject']);
        $message = sanitize_textarea_field($data['message']);
        $contractWork = sanitize_text_field($data['contractWork']);
        $fullTime = sanitize_text_field($data['fullTime']);
        $suffolkCounty = sanitize_text_field($data['suffolkCounty']);
        $remote = sanitize_text_field($data['remote']);

        // Construct the email content
        $email_content = "First Name: $firstName\n";
        $email_content .= "Last Name: $lastName\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Subject: $subject\n";
        $email_content .= "Message: $message\n";
        $email_content .= "Contract Work: " . ($contractWork ? 'Yes' : 'No') . "\n";
        $email_content .= "Full Time Employment: " . ($fullTime ? 'Yes' : 'No') . "\n";
        $email_content .= "Suffolk County, NY: " . ($suffolkCounty ? 'Yes' : 'No') . "\n";
        $email_content .= "Remote: " . ($remote ? 'Yes' : 'No') . "\n";

        // Set the recipient and sender email addresses
        $to = 'mstein.software@gmail.com'; // Replace with the recipient email address
        $headers = array('Content-Type: text/plain; charset=UTF-8');
        $headers = 'From: MichaelAStein.com <wordpress@archangel-media.com>';
        // Send the email using wp_mail()
        if (wp_mail($to, $subject, $email_content, $headers)) {
            echo 'Success';
        } else {
            echo 'Failed';
        }
    } else {
        echo 'No data received';
    }

    wp_die(); // this is required to terminate immediately and return a proper response
}
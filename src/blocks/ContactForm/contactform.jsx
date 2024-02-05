import { Component } from 'react';



// this class operates as the main class that operates the application.

class ContactForm extends Component {
    /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
    state = {

    };

    scrollMeDiv= null;

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        console.log("Did Mount");
    }
    componentWillUnmount() {
        // Get the div element from the ref
    }
    render() {
        console.log("Render Contact Form");
        return (
            <>
                <div className="contact_form-container">
                    <h2>Contact Form</h2>

                    <div className="contact_form-row">

                        <div className="contact_form-group half-width">
                            <input type="text" placeholder=" " id="CT_1"/>
                            <label htmlFor="CT_1">First Name</label>
                        </div>


                        <div className="contact_form-group half-width">
                            <input type="text" placeholder=" " id="CT_2"/>
                            <label htmlFor="CT_2">Last Name</label>
                        </div>
                    </div>


                    <div className="contact_form-group">
                        <input type="email" placeholder=" " id="CT_3"/>
                        <label htmlFor="CT_3">Sender's Email</label>
                    </div>


                    <div className="contact_form-group">
                        <input type="text" placeholder=" " id="CT_4"/>
                        <label htmlFor="CT_4">Subject Line</label>
                    </div>


                    <div className="contact_form-group">
                        <textarea placeholder=" " id="CT_5"></textarea>
                        <label htmlFor="CT_5">Message Body</label>
                    </div>


                    <div className="contact_checkbox-group">
                        <input type="checkbox" id="CT_6"/>
                        <label htmlFor="CT_6">Contract Work</label>
                        <input type="checkbox" id="CT_7"/>
                        <label htmlFor="CT_7">Full Time Employment</label>
                    </div>


                    <div className="contact_checkbox-group">
                        <input type="checkbox" id="CT_8"/>
                        <label htmlFor="CT_8">Suffolk County, NY</label>
                        <input type="checkbox" id="CT_9"/>
                        <label htmlFor="CT_9">Remote</label>
                    </div>
                    <button className="contact_submit-button" type="button" onClick="submitForm()">SEND</button>
                    <div id="messageSentNotification" style={{display: 'none'}}>Message Sent!</div>

                </div>
            </>
        )
    }
}

export default ContactForm;





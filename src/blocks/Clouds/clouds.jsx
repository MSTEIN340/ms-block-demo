import { Component } from 'react';



// this class operates as the main class that operates the application.

class Clouds extends Component {
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
        console.log("Render Clouds");
        return (
            <div className="backg">
                <div id="foglayer_01" className="fog">
                    <div className="image01"></div>
                    <div className="image02"></div>
                </div>
                <div id="foglayer_02" className="fog">
                    <div className="image01"></div>
                    <div className="image02"></div>
                </div>
                <div id="foglayer_03" className="fog">
                    <div className="image01"></div>
                    <div className="image02"></div>
                </div>
            </div>
        )
    }
}

export default Clouds;





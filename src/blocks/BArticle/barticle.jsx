import { Component } from 'react';



// this class operates as the main class that operates the application.

class Boots extends Component {
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
        console.log("Render Boots");
        return (
                <footer className="aa_footer2">
                    Copyright &copy; 2023
                </footer>
        )
    }
}

export default Boots;





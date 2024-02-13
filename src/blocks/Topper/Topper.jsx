import { Component } from 'react';

// this class operates as the main class that operates the application.

class HaloHeader extends Component {
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
        console.log("Render HaloHeader");
        return (
            <>
                    <header className="aa_header-outer">
                        <div className="aa_header-inner boom2"  id="stack1xy" >
                            <span className={"center aa_font1"}><img className={"hAngel"} src={"https://www.archangel-media.com/wp-content/uploads/2023/11/Archangel-Favicon-small.png"} />
                            <span className={"hUp"}>RCHANGEL MEDIA DEVELOPMENT</span></span>
                            <span className={"center aa_font2"}>{this.state.inner}</span>
                        </div>
                    </header>
            </>
        )
    }
}
export default HaloHeader;





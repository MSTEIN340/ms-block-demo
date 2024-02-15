import { Component } from 'react';
// this class operates as the main class that operates the application.

class CollapsingSection extends Component {
    /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */

    scrollMeDiv= null;

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            id: props.id,
            collapsed: props.attributes.collapsed,
        }
    }

    componentDidMount() {
        console.log("Did Mount");
    }
    componentWillUnmount() {
        // Get the div element from the ref
    }



    render() {
        console.log("Render CollapsingSection");
        return (
            <div className="CS-section">
                <div className={"CS-title"}>
                    {this.state.title}
                    <span id={"CS-button"+this.state.id} className={"CS-button"} >
                            <img id={"CS-btnimg"+this.state.id}
                                 className={"CS-btnimg"}
                                 src={"https://www.MichaelAStein.com/wp-content/plugins/ms-block-demo/src/blocks/CollapsingSection/images/down.png"}
                                 alt={"down"}/>
                        </span>
                </div>
                <div id={"CS-contents"+this.state.id} className={"CS-contents"}>
                    {this.props.children}
                </div>
                <script>
                   document.addEventListener("DOMContentLoaded", setEventListener);
                    console.log("script executed");
                </script>
            </div>
        )
    }
}

export default CollapsingSection;





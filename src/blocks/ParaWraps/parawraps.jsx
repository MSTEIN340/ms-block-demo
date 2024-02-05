import { Component } from 'react';

// this class operates as the main class that operates the application.

class ParaWraps extends Component {
    /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
    state = {

    };

    scrollMeDiv= null;

    constructor(props) {
        super(props);
        this.state.itemno = this.props.itemno;
        this.state.partno = this.props.partno;
        this.state.inner = this.props.inner;
        // Initialize scrollMeDiv as a class property
        this.scrollMeRef = React.createRef();
    }

    componentDidMount() {
        const scrollMeDiv = this.scrollMeRef.current;

        if (scrollMeDiv) {
            // Add the scroll event listener
            scrollMeDiv.addEventListener('scroll', this.handleScroll);
        }
        console.log("Did Mount");
    }
    componentWillUnmount() {
        // Get the div element from the ref
        const scrollMeDiv = this.scrollMeRef.current;

        if (scrollMeDiv) {
            // Remove the scroll event listener
            scrollMeDiv.removeEventListener('scroll', this.handleScroll);
        }
    }

    handleScroll(event) {
        console.log('Scrolled!', event);

        const { scrollTop, scrollLeft } = event.target;
        console.log('Scroll position:', { scrollTop, scrollLeft });
    }

    render() {
        console.log("Render HaloHeader");

        return (
            <>
                    <header className="aa_header-outer">
                        <div className="aa_header-inner boom2"  id="stack1xyH" >
                            <span className={"center aa_font1"}><img className={"hAngel"} src={"https://www.archangel-media.com/wp-content/uploads/2023/11/Archangel-Favicon-small.png"} />
                            <span className={"hUp"}>RCHANGEL MEDIA DEVELOPMENT</span></span>
                            <span className={"center aa_font2"}>{this.state.inner}</span>
                        </div>
                    </header>

            </>
        )
    }



}

export default ParaWraps;





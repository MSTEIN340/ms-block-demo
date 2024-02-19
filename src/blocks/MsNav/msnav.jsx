import { Component } from 'react';
// this class operates as the main class that operates the application.

class MsNav extends Component {
    /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */


    scrollMeDiv= null;

    constructor(props) {
        super(props);
        this.state = { /*
            title: props.attributes.title,
            postID: props.postID,
            author: props.attributes.author,
            date: this.formatDateToLongForm(props.attributes.date),
            borderColor: props.attributes.borderColor,
            textColor: props.attributes.textColor,
            backgroundColor: props.attributes.backgroundColor,
            link: props.attributes.link,
            opacity: props.attributes.opacity, */
        }
    }
    componentDidMount() {
      //   console.log("Did Mount");
    }
    componentWillUnmount() {
        // Get the div element from the ref

    }
    render() {
        console.log("Render MsNav");
        return (
            <nav className={"MsNav"}>
                <ul>
                    <li><a href="http://localhost/MichaelAStein/">Home</a></li>
                    <li><a href="./whats-new/">What's New?</a></li>
                    <li><a href="./extended-resume/">Resume</a></li>
                    <li><a href="./my-requirements/">Requirements</a></li>
                    <li><a href="./contact/">Contact</a></li>
                    <li><a href="./about/">About</a></li>
                </ul>
            </nav>
        )
    }
}

export default MsNav;


/*
Submenu
       return (
            <nav className={"MyNav"}>
                <ul>
                    <li><a href="https://www.archangel-media.com/">HOME</a></li>
                    <li className="submenu">
                        <a href="./products/">PRODUCTS</a>
                        <ul>
                            <li><a href="./products/themes/">THEMES</a></li>
                            <li><a href="./products/plugins/">PLUGINS</a></li>
                            <li><a href="./products/web-development/">WEB DEVELOPMENT</a></li>
                            <li><a href="./products/web-hosting/">WEB HOSTING</a></li>
                        </ul>
                    </li>
                    <li><a href="./contact-us/">CONTACT</a></li>
                    <li><a href="./about-archangel/">ABOUT</a></li>
                </ul>
            </nav>
        )

 */


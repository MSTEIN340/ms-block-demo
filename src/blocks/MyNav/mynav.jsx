import { Component } from 'react';
// this class operates as the main class that operates the application.

class MyNav extends Component {
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
        console.log("Render MyNav");
        return (
            <nav className={"MyNav"}>
                <ul>
                    <li><a href="https://www.archangel-media.com/">HOME</a></li>
                    <li><a href="./products/">PRODUCTS</a></li>
                    <li><a href="./contact-us/">CONTACT</a></li>
                    <li><a href="./about-archangel/">ABOUT</a></li>
                </ul>
            </nav>
        )
    }
}

export default MyNav;


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


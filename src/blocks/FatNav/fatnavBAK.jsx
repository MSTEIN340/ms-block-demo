import { Component } from 'react';

// this class operates as the main class that operates the application.

class FatNav extends Component {
    /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
    state = {

    };

    scrollMeDiv= null;

    constructor(props) {
        super(props);
        this.state.itemno = this.props.itemno;
        this.state.partno = this.props.partno;
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
        console.log("Render FatNav");
        return (
            <>
            <nav id="navMenu" className={"fatnav"}>
                    <ul>
                        <li className="sm2" ><a onMouseOver='setMe1(event, "WORDPRESS")' href="./"><span className="dashicons dashicons-wordpress"></span> WORDPRESS</a>
                            <ul className={"sm1"}>
                                <li className="sm3"><a  onMouseEnter='setMe2(event, "THEMESa")' href="./"><span className="dashicons dashicons-wordpress"></span> THEMES</a>
                                    <ul className={"sm3b"}>
                                        <li><a onMouseEnter='setMe2(event, "ARCHANGEL 2023")' href="./products/themes/">ARCHANGEL 2023</a><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/12/Archangel-2023.jpg"  alt="test image"/></li>
                                    </ul>
                                </li>
                                <li className="sm3"><a  onMouseEnter='setMe2(event, "PLUGINS")'  href="./"><span className="dashicons dashicons-wordpress"></span> PLUGINS</a>
                                    <ul className={"sm3b"}>
                                        <li><a  onMouseEnter='setMe2(event, "DATASET-V2")'  href="./products/themes/">DATASET-V2</a><div><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/12/Archangel-2023.jpg"  alt="test image"/></div></li>
                                        <li><a  onMouseEnter='setMe2(event, "TONTO-SMS")' href="./products/plugins/">TONTO-SMS</a><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/10/archangel-dataset3.jpg"  alt="test image"/></li>
                                        <li><a  onMouseEnter='setMe2(event, "EYE-P")' href="./products/plugins/">EYE-P</a><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/12/TontoSMS-e1701801636318.jpg"  alt="test image"/></li>
                                        <li><a  onMouseEnter='setMe2(event, "MS-BLOCK-DEMO")' href="./products/web-development/">MS-BLOCK-DEMO</a><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/11/Eye-P-small.png"  alt="test image"/></li>
                                  </ul>
                                </li>

                                <li><a onMouseEnter='setMe2(event, "WIDGETS")' href="./products/plugins/">WIDGETS</a><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/12/TontoSMS-e1701801636318.jpg"  alt="test image"/></li>
                                <li><a onMouseEnter='setMe2(event, "CUSTOM BLOCKS")' href="./products/web-development/">CUSTOM BLOCKS</a><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/11/Eye-P-small.png"  alt="test image"/></li>
                                <li><a onMouseEnter='setMe2(event, "MULTI-SITE")' href="./products/web-hosting/">MULTI-SITE</a><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/10/archangel-dataset3.jpg"  alt="test image"/></li>
                                <li ><a onMouseEnter='setMe2(event, "BUDDYPRESS")' href="./products/web-hosting/">BUDDYPRESS</a><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/10/archangel-dataset3.jpg"  alt="test image"/></li>
                            </ul>
                        </li>
                        <li ><a  onMouseOver='setMe2(event, "WEB DEVELOPMENT")' href="./products/web-development/">WEB DEVELOPMENT</a></li>

                        <li className="sm2" >
                            <a  onMouseOver='setMe2(event, "ERP/ENTERPRISE")' href="./products/enterprise-and-erp-development/">ERP/ENTERPRISE</a>
                            <ul className={"sm1"}>
                                <li><a onMouseEnter='setMe2(event, "BUDDYPRESS")' href="./products/themes/">ERP</a><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/12/Archangel-2023.jpg"  alt="test image"/></li>
                                <li><a onMouseEnter='setMe2(event, "BUDDYPRESS")' href="./products/themes/">DATASET-V2</a><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/10/archangel-dataset3.jpg"  alt="test image"/></li>
                                <li><a onMouseEnter='setMe2(event, "BUDDYPRESS")' href="./products/plugins/">TONTO SMS</a><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/12/TontoSMS-e1701801636318.jpg"  alt="test image"/></li>
                                <li><a onMouseEnter='setMe2(event, "BUDDYPRESS")' href="./products/web-development/">EYE-P</a><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/11/Eye-P-small.png"  alt="test image"/></li>
                                <li><a onMouseEnter='setMe2(event, "BUDDYPRESS")' href="./products/web-hosting/">BLOCK DEMO</a><img className={"mImg"} src="https://www.archangel-media.com/wp-content/uploads/2023/10/archangel-dataset3.jpg"  alt="test image"/></li>
                            </ul>
                        </li>
                        <li><a onMouseOver='setMe2(event, "BUSINESS INTEL")' href="./products/business-intelligence/">BUSINESS INTEL</a></li>
                        <li><a  onMouseOver='setMe2(event, "HOSTING")' href="./products/web-hosting/">HOSTING</a></li>
                    </ul>
                <span className={"nBak"}><span className={"mRight"} id={"mRight"}>Hello</span> </span>
            </nav>

            </>
        )
    }
}

export default FatNav;





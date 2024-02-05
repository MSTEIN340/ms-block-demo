import { Component } from 'react';
// this class operates as the main class that operates the application.

class OurTeam extends Component {
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
        console.log("Render OurTeam");
        return (
                <div id="OurTeam" className={"lower_stack"}>
                    <div className={"outer-team"}>
                        <span className="span-tf">
                            <he3>Our Awesome Team</he3>
                            <p className="aa_font6 m80b">Not just a team, but the dream team. Sporting a full array of complementary skills, we’ve coupled all the classic foundations for multi-stack application development with all of the latest technologies.</p>
                        </span>
                        <span className={"aa-span-tc"}>
                            <span className={"aa-span-td"}>
                                <span className={"col-t m30 cardt"}>
                                    <div className="cardt__side cardt__side--front">

                                        <span className={"top_color aa_color1"}>

                                        </span>
                                        <table className={"c1b"}>
                                            <tr>
                                                <td>
                                                    <span >
                                                      <img className={"icon-team"} src="https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/cropped-MyNet2-2-150x150.jpg" alt="some text" />
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className={"aa_font8"}>Michael Stein</div>
                                                    <div className={"aa_font8"}>Co-founder & CEO <br/> Sr. Programmer, Developer</div>
                                                </td>
                                            </tr>
                                                <tr>
                                                <td>
                                                    <p className="aa_font7">Programmer since 1983 VB/VBA, JavaScript, ReactJS, PHP, C/C++, HTML, CSS, SASS, SQL, Agile, Scrum</p>
                                                </td>
                                            </tr>
                                      </table>
                                    </div>
                                    <div className={"cardt__side cardt__side--back cardt__bcolor1"}>
                                        <div className={"aa-media "}>ARCHANGEL MEDIA</div>
                                        <span >
                                          <img className={"icon-team2"} src="https://www.archangel-media.com/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/ms-back1c.png" alt="some text" />
                                            <a href="https://www.linkedin.com/in/michael-stein-8965759"><img className={"aa-social"} src="https://www.archangel-media.com/wp-content/uploads/2023/12/linkedin-logo.png" alt="some text" /></a>
                                            <a href="https://www.michaelastein.com"><span className={"michaelstein"}><u>www.MichaelAStein.com</u></span></a>
                                            <a href="https://github.com/MSTEIN340"><img className={"aa-social2"} src="https://www.archangel-media.com/wp-content/uploads/2023/12/GitHub.png" alt="some text" /></a>
                                       </span>




                                    </div>
                                </span>

                                <span className={"col-t m30 cardt"}>
                                    <div className="cardt__side cardt__side--front">
                                        <span className={"top_color aa_color2"}>

                                        </span>

                                        <table className={"c1b"}>

                                            <tr>
                                                <td>
                                                    <span>
                                                        <img className={"icon-team"} src="https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/cropped-cropped-andrew.jpg" alt="some text" />
                                                  </span>
                                               </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className={"aa_font8"}>Andrew Stein</div>
                                                    <div className={"aa_font8"}>Co-founder & President <br/>Software Engineer, Developer</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="aa_font7">“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.”</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className={"cardt__side cardt__side--back cardt__bcolor2"}>
                                        Back
                                    </div>
                                </span>

                            </span>
                        </span>
                    </div>
                </div>
        )
    }



}

export default OurTeam;





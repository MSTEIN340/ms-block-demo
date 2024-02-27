import { Component } from 'react';
import soop2 from './index.js'
import GridBlock from '../grid-block/GridBlock.jsx'
import StarWars_Intro from '../starwars-intro/StarWars-Intro.jsx'
import {InnerBlocks} from "@wordpress/block-editor";
import MsNav from "../MsNav/msnav";
// this class operates as the main class that operates the application.

class MsHk extends Component {
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
    soop2(){
        console.log("This is outside the class");
    }
    render() {
        let more="<More>";

        console.log("Render mscv");
        const dinput = (input) => {
            if (input === '=') {
                this.setState({confirm: this.state.confirm + 1});
            }else{
                if (this.state.confirm > 0) this.setState({confirm: 0});
            }
            console.log("Confirm = " + this.state.confirm);
            this.state.lastInput = input;
            this.setState({input: input})
        }
        const cancel = ()=>{ this.setState({confirm: 0})}
        const confirm = ()=>{ this.setState({confirm: (-99)})}
        var d = new Date();
        var NoTimeDate = (d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear();
        return (
            <>
                <div className="ms-image-background ms-bki">
                    <img className="background-me3" src="https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/ms-hongkong/img/regal2c.png"  alt={"tt"}/>

                </div>
                <StarWars_Intro />
                <div className="wrapper" id="scrollMe" ref={this.scrollMeRef} >
                    <GridBlock/>
                    <div className="fit">
                        <img id="arm"
                             src="https://www.MichaelAStein.com/wp-content/plugins/ms-block-demo/src/blocks/ms-hongkong/img/arm.png"
                             className="arm" alt="f"/>
                        <img
                            src="https://www.MichaelAStein.com/wp-content/plugins/ms-block-demo/src/blocks/ms-hongkong/img/MeNo-armc.png"
                            className="noarm" alt="f"/>
                    </div>

                    <header className="ms_header-outer">

                        <div className="ms_header-inner fade-in" id="stack1xy">
                            <img
                                className={"hMichael"}
                                src={"https://www.MichaelAStein.com/wp-content/uploads/2023/10/cropped-favicon2-150x150.png"}
                                alt={"Favicon"}/>

                            <a className={"hMichael2"} href={"https://www.MichaelAStein.com/"}>
                                <span className={"ce2 aa_font1ms"}>Michael A. Stein </span>
                            </a>
                            <span className={"aa_font2 w50"}><MsNav /></span>
                        </div>

                    </header>
                    <span className={"shorter_view"}>
                        <div className="header2">
                            <div id="cv" className={"bdev visible"}>
                                <div className="silver-font">
                                    <span className="grad-text outline-text">Curriculum Vitae</span>
                                    <span className="grad-text" data-text="Curriculum Vitae">Curriculum Vitae</span>
                                </div>
                            </div>
                            <div id="wd" className={"bdev invisible"}>
                                <span className="ms-di2 dashicons dashicons-cover-image"></span>
                                <span className="silver-font">
                                        <span className="grad-text outline-text">Web Developer</span>
                                        <span className="grad-text" data-text="Web Developer">Web Developer</span>
                                </span>
                            </div>
                            <div id="db" className={"bdev invisible"}>
                                <span className="ms-di2 dashicons dashicons-database-add"></span>
                                <span className="silver-font">
                                        <span className="grad-text outline-text">Database Developer</span>
                                        <span className="grad-text"
                                              data-text="Database Developer">Database Developer</span>
                                </span>
                            </div>
                            <div id="bi" className={"bdev invisible"}>
                                <span className="ms-di2 dashicons dashicons-welcome-learn-more"></span>
                                <span className="silver-font">
                                        <span className="grad-text outline-text">Business Intelligence</span>
                                        <span className="grad-text" data-text="Business Intelligence">Business Intelligence</span>
                                </span>
                            </div>
                            <div id="erp" className={"bdev invisible"}>
                                <span className="ms-di2 dashicons dashicons-clipboard"></span>
                                <span className="silver-font">
                                        <span className="grad-text outline-text">Enterprise Resource Planning</span>
                                        <span className="grad-text" data-text="Enterprise Resource Planning">Enterprise Resource Planning</span>
                                </span>
                            </div>

                            <div id="brassPlates" className={"ms-forward brassPlates"}>
                                <span className={"ms-col-a "}>
                                    <a href={"#"} onClick="ShowTitle('wd')">
                                        <div className=" big_btn">
                                            <table className={"c1hk"}>
                                                <tr>
                                                    <td>
                                                        <span className="ms-di1 dashicons dashicons-cover-image"></span>
                                                        <span className={"ms_font5"}>&nbsp;Web Developer</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="ms_font6">WordPress, HTML, CSS, SASS, Javascript, ReactJS, BootStrap, Agile/Scrum, PHP, REST, API's, C/C++ ...</p>
                                                    </td>
                                                </tr>
                                            </table>
                                            <span className={"more1"}>{more}</span>
                                        </div>
                                    </a>

                                </span>

                                <span className={"ms-col-a "}>
                                    <a href={"#"} onClick="ShowTitle('db')">
                                        <div className=" big_btn">
                                            <table className={"c1hk"}>
                                                <tr>
                                                    <td>
                                                        <span
                                                            className="ms-di1 dashicons dashicons-database-add"></span>
                                                        <span className={"ms_font5"}>&nbsp;Database Developer</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="ms_font6">MS SqlServer, T-SQL, Oracle, PostgreSql, MySQL, MariaDB, NoSQL, Mongo, Stored Procedures, Triggers, advanced Queries, ETL, SSIS.</p>
                                                    </td>
                                                </tr>
                                            </table>
                                            <span className={"more1"}>{more}</span>
                                        </div>
                                    </a>
                                </span>

                                <span className="ms-col-a ">
                                    <a href={"#"} onClick="ShowTitle('bi')">
                                    <div className=" big_btn">
                                        <table className="c1hk">
                                            <tr>
                                                <td>
                                                    <span
                                                        className="ms-di1 dashicons dashicons-welcome-learn-more"></span>
                                                    <span className={"ms_font5"}>&nbsp;Business Intelligence</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <p className="ms_font6"> Excel Master, VBA, SQL, Power BI, GAAP, DAX, NOI Analysis, Expense and Lease Audits, ROI, Tax Analysis. </p>
                                                </td>
                                            </tr>
                                        </table>
                                            <span className={"more1"}>{more}</span>
                                    </div>
                                    </a>
                                </span>
                                <span className="ms-col-a">
                                    <a href={"#"} onClick="ShowTitle('erp')">
                                        <div className="big_btn">
                                            <table className="c1hk">
                                                <tr>
                                                    <td>
                                                        <span className="ms-di1 dashicons dashicons-clipboard"></span>
                                                        <span
                                                            className={"ms_font5"}>&nbsp;Enterprise Resource Planning</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <p className="ms_font6">Operations, production, Inventory control, Purchasing, Supply Chain, Sales, Order and Customer management, HR, Marketing, Engineering, Business Intelligence, Accounting and Sales Tax.</p>
                                                    </td>
                                                </tr>
                                            </table>
                                            <span className={"more1"}>{more}</span>
                                        </div>
                                    </a>
                                </span>
                        </div>







                        </div>
                     </span>
                    <script>
                        console.log("I'm here!!");
                        const scrollMeDiv = document.getElementById("scrollMe");
                        console.log(scrollMeDiv);
                        scrollMeDiv ? scrollMeDiv.addEventListener('scroll', ms_handleScroll) : console.log("Failed to
                        get Inside Conditional");
                        scrollMeDiv ? scrollMeDiv.addEventListener('mousemove', ms_mouseMove) : console.log("Failed to
                        get Inside Conditional");
                        console.log("Did Mount");
                    </script>
                </div>
            </>
        )
    }
}


export default MsHk;

function onScroll2() {
    console.log("This is outside the class");
}



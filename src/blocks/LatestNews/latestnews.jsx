import { Component } from 'react';
import SnapShot from './snapshot.jsx'
//import { updateArray } from "../../../assets/js/fat-nav-data.js";
import { multidimensionalArray } from "../../../assets/js/fat-nav-data.js";
//updateArray();
// this class operates as the main class that operates the application.

class LatestNews extends Component {
    /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
    state = {

    };

    scrollMeDiv= null;

    constructor(props) {

        super(props);

    }

    componentDidMount() {

        console.log("Did Mount");
        console.log("Event Listener Added");
      //  document.addEventListener('DOMContentLoaded', LoadLatestNews);
        LoadLatestNews();
    }
    componentWillUnmount() {

    }

    handleScroll(event) {
        console.log('Scrolled!', event);

        const { scrollTop, scrollLeft } = event.target;
        console.log('Scroll position:', { scrollTop, scrollLeft });
    }

    render() {
       // updateArray();
        console.log("Render Latest News");

        // contents("hello");
        // console.log(multidimensionalArray["WORDPRESS"][2]);
        /*
        Populate:
            1) Menu Item
            2) Image Name and path
            3) Title
            4) link to page.
            5) Content.

        Send SetMe2 with it('s complete slice. 1 Variable. indexed by the menu item name)
        */


        return (
            <>
                <div id={"ms_latest_news"}>
                    <h2>Latest News</h2>
                    <p>Something new is always going on at Archangel Media. Keep up with our latest releases here,
                        and</p>
                    <p>sign up for our newsletter below. Stay part of our family, and spread the Wings of Freedom! </p>
                </div>
            </>
        )
    }
}

export default LatestNews;

// Modification of the above table will also require modification of the
// setMe2 Function in home--1.js

// Endpoint Links need to be updated


/*
        <>
            <nav id="navMenu" className="fatnav">
                <ul className="lineme">
                        <li className="sm2 b2">
                            <a onMouseOver='setMe2(event, "WORDPRESS")' href={multidimensionalArray["WORDPRESS"][3]}><span className="dashicons dashicons-wordpress"></span> WORDPRESS</a>
                            <ul className="hover-effect-list">
                                <li className="sm3">
                                    <a onMouseEnter='setMe2(event, "THEMES")' href={multidimensionalArray["THEMES"][3]}><span className="dashicons dashicons-wordpress"></span> THEMES</a>
                                    <ul className="sm3b">
                                        <li>
                                            <a onMouseEnter='setMe2(event, "ARCHANGEL 2023")' href={multidimensionalArray["ARCHANGEL 2023"][3]}>ARCHANGEL 2023</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sm3">
                                    <a onMouseEnter='setMe2(event, "PLUGINS")' href={multidimensionalArray["PLUGINS"][3]}><span className="dashicons dashicons-wordpress"></span> PLUGINS</a>
                                    <ul className="sm3b">
                                        <li><a onMouseEnter='setMe2(event, "DATASET-V2")' href={multidimensionalArray["DATASET-V2"][3]}>DATASET-V2</a></li>
                                        <li><a onMouseEnter='setMe2(event, "TONTO-SMS")' href={multidimensionalArray["TONTO-SMS"][3]}>TONTO-SMS</a></li>
                                        <li><a onMouseEnter='setMe2(event, "EYE-P")' href={multidimensionalArray["EYE-P"][3]}>EYE-P</a></li>
                                        <li><a onMouseEnter='setMe2(event, "MS-BLOCK-DEMO")' href={multidimensionalArray["MS-BLOCK-DEMO"][3]}>MS-BLOCK-DEMO</a></li>
                                    </ul>
                                </li>
                                <li><a onMouseEnter='setMe2(event, "WIDGETS")' href={multidimensionalArray["WIDGETS"][3]}>WIDGETS</a></li>
                                <li><a onMouseEnter='setMe2(event, "CUSTOM BLOCKS")' href={multidimensionalArray["CUSTOM BLOCKS"][3]}>CUSTOM BLOCKS</a></li>
                                <li><a onMouseEnter='setMe2(event, "WOOCOMMERCE")' href={multidimensionalArray["WOOCOMMERCE"][3]}>WOOCOMMERCE</a></li>
                                <li><a onMouseEnter='setMe2(event, "MULTI-SITE")' href={multidimensionalArray["MULTI-SITE"][3]}>MULTI-SITE</a></li>
                                <li><a onMouseEnter='setMe2(event, "BUDDYPRESS")' href={multidimensionalArray["BUDDYPRESS"][3]}>BUDDYPRESS</a></li>
                            </ul>
                        </li>
                        <li className="sm2 b2">
                            <a onMouseOver='setMe2(event, "WEB DEVELOPMENT")' href={multidimensionalArray["WEB DEVELOPMENT"][3]}>WEB DEVELOPMENT</a>
                            <ul className="hover-effect-list">
                                <li><a onMouseOver='setMe2(event, "WEB SITES")' href={multidimensionalArray["WEB SITES"][3]}>WEB SITES</a></li>
                                <li><a onMouseEnter='setMe2(event, "WEB APPLICATIONS")' href={multidimensionalArray["WEB APPLICATIONS"][3]}>WEB APPLICATIONS</a></li>
                                <li><a onMouseEnter='setMe2(event, "MOBILE")' href={multidimensionalArray["MOBILE"][3]}>MOBILE APPS</a></li>
                                <li><a onMouseEnter='setMe2(event, "E-COMMERCE")' href={multidimensionalArray["E-COMMERCE"][3]}>E-COMMERCE</a></li>
                                <li><a onMouseEnter='setMe2(event, "API")' href={multidimensionalArray["API"][3]}>API DEV & INTEGRATION</a></li>
                                <li><a onMouseEnter='setMe2(event, "BACK END AUTOMATION")' href={multidimensionalArray["BACK END AUTOMATION"][3]}>BACK END AUTOMATION</a></li>
                            </ul>
                        </li>
                        <li className="sm2 b2">
                            <a onMouseOver='setMe2(event, "ERPENTERPRISE")' href={multidimensionalArray["ERPENTERPRISE"][3]}>ERP/ENTERPRISE</a>
                            <ul className="hover-effect-list">
                                <li><a onMouseOver='setMe2(event, "ACCOUNTING")' href={multidimensionalArray["ACCOUNTING"][3]}>ACCOUNTING</a></li>
                                <li><a onMouseEnter='setMe2(event, "CUSTOMER MANAGEMENT")' href={multidimensionalArray["CUSTOMER MANAGEMENT"][3]}>CUSTOMER MANAGEMENT</a></li>
                                <li><a onMouseEnter='setMe2(event, "SALES")' href={multidimensionalArray["SALES"][3]}>SALES AND ORDERS</a></li>
                                <li><a onMouseEnter='setMe2(event, "PURCHASING")' href={multidimensionalArray["PURCHASING"][3]}>PURCHASING</a></li>
                                <li><a onMouseEnter='setMe2(event, "INVENTORY")' href={multidimensionalArray["INVENTORY"][3]}>INVENTORY</a></li>
                                <li><a onMouseEnter='setMe2(event, "BOM")' href={multidimensionalArray["BOM"][3]}>BILL OF MATERIALS</a></li>
                                <li><a onMouseEnter='setMe2(event, "SALES TAX")' href={multidimensionalArray["SALES TAX"][3]}>SALES TAX</a></li>
                            </ul>
                        </li>
                        <li className="sm2 b2">
                            <a onMouseOver='setMe2(event, "BUSINESS INTEL")' href={multidimensionalArray["BUSINESS INTEL"][3]}>BUSINESS INTEL</a>
                            <ul className="hover-effect-list">
                                <li><a onMouseOver='setMe2(event, "POWER BI")' href={multidimensionalArray["POWER BI"][3]}>POWER BI</a></li>
                                <li><a onMouseEnter='setMe2(event, "EXCEL")' href={multidimensionalArray["EXCEL"][3]}>EXPERT LEVEL EXCEL</a></li>
                                <li><a onMouseEnter='setMe2(event, "SQL/MONGO")' href={multidimensionalArray["SQL/MONGO"][3]}>ADVANCED SQL/MONGO</a></li>
                                <li><a onMouseEnter='setMe2(event, "INCOME/EXPENSES")' href={multidimensionalArray["INCOME/EXPENSES"][3]}>INCOME/EXPENSES</a></li>
                                <li><a onMouseEnter='setMe2(event, "KPI ANALYSIS")' href={multidimensionalArray["KPI ANALYSIS"][3]}>KPI ANALYSIS</a></li>
                            </ul>
                        </li>
                        <li className="sm2 b2">
                            <a onMouseOver='setMe2(event, "HOSTING")' href={multidimensionalArray["HOSTING"][3]}>HOSTING</a>
                            <ul className="hover-effect-list">
                                <li><a onMouseOver='setMe2(event, "WEB HOSTING")' href={multidimensionalArray["WEB HOSTING"][3]}>WEB HOSTING</a></li>
                                <li><a onMouseEnter='setMe2(event, "MINECRAFT")' href={multidimensionalArray["MINECRAFT"][3]}>MINECRAFT SERVERS</a></li>
                            </ul>
                        </li>
                    </ul>
                    <span className="nBak"><span className="mRight" id="mRight"></span></span>
                </nav>

            </>
 */
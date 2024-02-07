import { Component } from 'react';

// this class operates as the main class that operates the application.

class Symbi extends Component {
    /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */

    constructor(props) {
        super(props);
        this.state = {
            box: 0,
            // status is on ... or it's not.
            display: props.status.toLowerCase() === "on" ? "contents" : "none"
        }


        // Initialize scrollMeDiv as a class property
       // this.scrollMeRef = React.createRef();

    }

    componentDidMount() {

        console.log("Symbi Did Mount");
    }
    componentWillUnmount() {
        // Get the div element from the ref
    }


    render() {
        console.log("Render Symbi");

        return (
            <div id="SymbiWrapper" style={{display: this.state.display}}>
                <div id={"Dagwood"} className={"cell symbi symbi__1"}>
                    <div>Michael</div>
                    <div>
                        <img className={"sy-icon-h2"}
                             src="https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/ms-hongkong/img/Dagwood.jpg"
                             alt="Dagwood"/>
                    </div>
                    <div className={"ms_font3"}>Business Intelligence</div>
                </div>
                <div id={"Samantha"} className={"cell symbi symbi__2"}>
                    <div>Samantha</div>
                    <div>
                        <img className={"sy-icon-h2"}
                             src="https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/ms-hongkong/img/Summer.jpg"
                             alt="Samantha"/>
                    </div>
                    <div className={"ms_font3"}>Accounting</div>
                </div>
                <div id={"Jonas"} className={"cell symbi symbi__3"}>
                    <div>Jonas</div>
                    <div>
                        <img className={"sy-icon-h2"}
                             src="https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/ms-hongkong/img/Jonas.jpg"
                             alt="Jonas"/>
                    </div>
                    <div className={"ms_font3"}>Engineering</div>
                </div>
                <div id={"Manny"} className={"cell symbi symbi__4"}>
                    <div>Manny</div>
                    <div>
                        <img className={"sy-icon-h2"}
                             src="https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/ms-hongkong/img/Manny.jpg"
                             alt="Manny"/>
                    </div>
                    <div className={"ms_font3"}>Manufacturing</div>
                </div>
                <div id={"Pepe"} className={"cell symbi symbi__5"}>
                    <div>Pepe</div>
                    <div>
                        <img className={"sy-icon-h2"}
                             src="https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/ms-hongkong/img/pepe.jpg"
                             alt="Pepe"/>
                    </div>
                    <div className={"ms_font3"}>Shipping and Logistics</div>
                </div>
                <div id={"Cathy"} className={"cell symbi symbi__6"}>
                    <div>Cathy</div>
                    <div>
                        <img className={"sy-icon-h2"}
                             src="https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/ms-hongkong/img/cathy.jpg"
                             alt="Cathy"/>
                    </div>
                    <div className={"ms_font3"}>Human Resources</div>
                </div>

                <div id={"Sally"} className={"cell symbi symbi__7"}>
                    <div>Sally</div>
                    <div>
                        <img className={"sy-icon-h2"}
                             src="https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/ms-hongkong/img/Sally2b.jpg"
                             alt="Sally"/>
                    </div>
                    <div className={"ms_font3"}>Sales Management</div>
                </div>
                <div id={"Margo"} className={"cell symbi symbi__8"}>
                    <div>Margo</div>
                    <div>
                        <img className={"sy-icon-h2"}
                             src="https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/ms-hongkong/img/Margo3.jpg"
                             alt="Margo"/>
                    </div>
                    <div className={"ms_font3"}>Order Management</div>
                </div>

                <div className={"cell2 bi-1"}>ERP System</div>
                <div className={"cell2 bi-2"}>MS Excel</div>
                <div className={"cell2 bi-3"}>Power BI</div>
                <div className={"cell2 bi-4"}>Tableau</div>
                <div className={"cell2 bi-5"}>Crystal Reports</div>
                <div className={"cell2 bi-6"}>Sage BI</div>

                <div className={"cell2 ac-1"}>General Ledger</div>
                <div className={"cell2 ac-2"}>Accounts Receivable</div>
                <div className={"cell2 ac-3"}>Accounts Payable</div>
                <div className={"cell2 ac-4"}>Banking</div>
                <div className={"cell2 ac-5"}>Sales Tax</div>

                <div className={"cell2 en-1"}>Drawings</div>
                <div className={"cell2 en-2"}>Bills of Materials</div>
                <div className={"cell2 en-3"}>Product Testing</div>

                <div className={"cell2 ma-1"}>Inventory</div>
                <div className={"cell2 ma-2"}>Purchasing</div>
                <div className={"cell2 ma-3"}>Suppliers</div>
                <div className={"cell2 ma-4"}>Scheduling</div>
                <div className={"cell2 ma-5"}>Inside Process</div>
                <div className={"cell2 ma-6"}>Outside Process</div>

                <div className={"cell2 ma-7"}>Warehouse</div>
                <div className={"cell2 ma-8"}>Inventory</div>
                <div className={"cell2 ma-9"}>Receiving</div>

                <div className={"cell2 sh-1"}>Pickup Scheduling</div>
                <div className={"cell2 sh-2"}>Carriers</div>
                <div className={"cell2 sh-3"}>Rates</div>
                <div className={"cell2 sh-4"}>Staging</div>
                <div className={"cell2 sh-5"}>Weights</div>
                <div className={"cell2 sh-6"}>Dimensions</div>
                <div className={"cell2 sh-7"}>Customs</div>
                <div className={"cell2 sh-8"}>Picking & Packing</div>
                <div className={"cell2 sh-9"}>Tracking</div>

                <div className={"cell2 hr-1"}>Staffing</div>
                <div className={"cell2 hr-2"}>Time Clock</div>
                <div className={"cell2 hr-3"}>Vacation/Sick time</div>
                <div className={"cell2 hr-4"}>Payroll</div>
                <div className={"cell2 hr-5"}>Benefits</div>
                <div className={"cell2 hr-6"}>Labor Compliance</div>

                <div className={"cell2 sa-1"}>Marketing</div>
                <div className={"cell2 sa-2"}>Budgeting</div>
                <div className={"cell2 sa-3"}>Salespeople</div>
                <div className={"cell2 sa-4"}>Commissions</div>
                <div className={"cell2 sa-5"}>Prospects</div>
                <div className={"cell2 sa-6"}>Opportunities</div>
                <div className={"cell2 sa-7"}>Quotes/RFP's</div>
                <div className={"cell2 sa-8"}>Customers</div>

                <div className={"cell2 om-1"}>Orders</div>
                <div className={"cell2 om-2"}>Customer Service</div>
                <div className={"cell2 om-3"}>Availability</div>
                <div className={"cell2 om-4"}>Confirmation</div>
                <div className={"cell2 om-5"}>Scheduling</div>
                <div className={"cell2 om-6"}>Customer Service</div>
                <div className={"cell2 om-7"}>Invoicing</div>

                {/*
                <div id="symbi" className={"symbi"}>
                    <div id="symbi-sub" className={"cell pos1" }  onClick="FlowElement('abc')">
                        Symbi
                    </div>
                </div>
                */
                }
            </div>
        )
    }
}

export default Symbi;


/*
                <div id={"Excel"} className={"cell"}>Excel</div>
                <div id={"PowerBI"} className={"cell"}>Power BI</div>
                <div id={"Tableau"} className={"cell"}>Tableau</div>
                <div id={"SAP"} className={"cell"}>SAP</div>
                <div id={"Crystal"} className={"cell"}>Crystal Reports</div>
                <div id={"Sage"} className={"cell"}>Sage BI</div>
 */


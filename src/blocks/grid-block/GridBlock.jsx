import React, { Component } from 'react';
import Symbi from "../symbiosis/Symbi";
import { createRoot } from "react-dom";

class GridBlock extends Component {
    /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
    state = {

    };

    constructor(props) {
        super(props);
        this.state.itemno = this.props.itemno;
        this.state.partno = this.props.partno;
        this.state.box = 0;
    }

    componentDidMount() {
        console.log("GridBlock Did Mount");
    }
    componentWillUnmount() {
    }


    render() {
        console.log("Render GridBlock");
        return (
            <>
                <div id="ms-gb" className={"gridBlock"}>
                    {/*
                    <div id="abc" className={"cell pos1" }  onClick="FlowElement('abc')">
                        Box {this.state.box}
                    </div>
                    */}
                    <Symbi
                        status={"on"}
                    />

                </div>
            </>
            )
    }
}


export default GridBlock;



function FlowElement2(a) {
    let symbi = <Symbi />;
    let parentDiv = document.getElementById("ms-gb");
    createRoot(parentDiv).render(symbi)
}

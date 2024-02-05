// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// import { Component } from 'react';

// import Symbi from '../../src/blocks/symbiosis/Symbi.jsx'

//import {createRoot} from "react-dom";
//import Symbi from "../../src/blocks/symbiosis/Symbi";

function FlowElement(a) {
    console.log("Clicked");
    let newDiv = document.createElement("div");
    newDiv.innerHTML = 'FrontEnd/UI/UX';
    newDiv.id = "2-3";

    // in the below class lost pos1 contains position info. This would be replaced by the new class below it.
    newDiv.className = "cell pos1"

    // this becomes a class unless we need parameters..
    newDiv.style.gridColumn = '4 / span 18';
    newDiv.style.gridRow = '14';

    // I think this should be on the parent.
    newDiv.style.gridGap = '5px';

    newDiv.style.borderRadius = '10px';
    newDiv.style.textAlign = 'center';
    newDiv.style.overflowX = 'hidden';
    newDiv.style.whiteSpace = 'nowrap';
    newDiv.style.backgroundColor = 'rgba(255, 255, 255, .8)';
    newDiv.style.color = 'rgba(0, 0, 0, 1)';


    let parentDiv = document.getElementById("ms-gb");
    parentDiv.appendChild(newDiv);
}

function FlowElement3(a) {
    let symbi = '<Symbi />';
    let parentDiv = document.getElementById("ms-gb");
    createRoot(parentDiv).render(symbi)
}
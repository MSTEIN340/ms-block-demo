/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/fat-nav-data.js":
/*!***********************************!*\
  !*** ./assets/js/fat-nav-data.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   multidimensionalArray: function() { return /* binding */ multidimensionalArray; },
/* harmony export */   updateArray: function() { return /* binding */ updateArray; }
/* harmony export */ });
/*
1) Menu Item
2) Post ID
2) Image Name and path
3) Title
4) link to page.
5) Content.
*/
let multidimensionalArray = {
  "WORDPRESS": ["1798", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "THEMES": ["1185", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  // there are 3 of these
  "PLUGINS": ["1772", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  // Needs Refresh
  "ARCHANGEL 2023": ["1808", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "DATASET-V2": ["1036", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "TONTO-SMS": ["1201", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "EYE-P": ["1811", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "MS-BLOCK-DEMO": ["1813", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "WIDGETS": ["1181", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "CUSTOM BLOCKS": ["1179", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "WOOCOMMERCE": ["1815", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "MULTI-SITE": ["1787", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "BUDDYPRESS": ["1778", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "WEB DEVELOPMENT": ["1817", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "WEB SITES": ["1819", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "WEB APPLICATIONS": ["1782", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "MOBILE": ["1822", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "E-COMMERCE": ["1774", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "API": ["1780", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "BACK END AUTOMATION": ["1789", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "ERPENTERPRISE": ["1785", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "ACCOUNTING": ["1824", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "CUSTOMER MANAGEMENT": ["1826", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "SALES": ["1828", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "PURCHASING": ["1830", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "INVENTORY": ["1832", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "BOM": ["1834", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "SALES TAX": ["1836", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "BUSINESS INTEL": ["1795", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "POWER BI": ["1838", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "EXCEL": ["1841", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "SQL/MONGO": ["1843", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "INCOME/EXPENSES": ["1845", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "KPI ANALYSIS": ["1847", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "HOSTING": ["1849", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "WEB HOSTING": ["1851", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"],
  "MINECRAFT": ["1853", "IMAGE_PATH", "TITLE", "POST_URL", "CONTENT"]
};
function updateArray() {
  console.log("I am updating the array contents from posts.");
  console.log("mda", multidimensionalArray);
  const arr = Array.from(multidimensionalArray);
  let firstSubElements = [];
  for (let key in multidimensionalArray) {
    if (multidimensionalArray.hasOwnProperty(key)) {
      firstSubElements.push(multidimensionalArray[key][0]);
      setContentValue(multidimensionalArray, key, multidimensionalArray[key][0]);
    }
  }
  console.log(firstSubElements);
}
function elementUpdatex(item, index, arr) {
  console.log("Item = ", item);
}
function setContentValue(array, referenceValue, POST_ID) {
  fetchPostById(POST_ID).then(UID => {
    //   console.log("i",UID.featuredImageUrl);
    //   console.log("p",UID.post.title.rendered);
    //   console.log("p",UID);
    array[referenceValue][1] = UID.featuredImageUrl;
    array[referenceValue][2] = UID.post.title.rendered;
    array[referenceValue][3] = UID.post.link;
    array[referenceValue][4] = UID.post.content.rendered;
    // console.log("a",array[referenceValue][4]);
  });
  // console.log( array["WORDPRESS"]);
  // const subArray = array.find(sub => sub[0] === referenceValue);
  if (true) {
    //      subArray[3] = newValue;
    return true; // Indicates the operation was successful.
  }

  return false; // Indicates no matching sub-array was found.
}

async function fetchPostById(postId) {
  const domain = 'https://www.archangel-media.com';
  //  const domain = 'https://www.archangel-media.com/';
  const postUrl = `${domain}/wp-json/wp/v2/pages/${postId}`;
  try {
    const postResponse = await fetch(postUrl);
    if (!postResponse.ok) {
      throw new Error(`HTTP error! Status: ${postResponse.status}`);
    }
    const post = await postResponse.json();
    if (post.featured_media) {
      // Check if there's a featured image
      const mediaUrl = `${domain}/wp-json/wp/v2/media/${post.featured_media}`;
      const mediaResponse = await fetch(mediaUrl);
      if (!mediaResponse.ok) {
        throw new Error(`HTTP error! Status: ${mediaResponse.status}`);
      }
      const media = await mediaResponse.json();
      return {
        post,
        featuredImageUrl: media.source_url
      };
    }
    return {
      post,
      featuredImageUrl: null
    };
  } catch (error) {
    console.error('Error fetching post:', error);
  }
}



/***/ }),

/***/ "./src/blocks/ContactForm/contactform.jsx":
/*!************************************************!*\
  !*** ./src/blocks/ContactForm/contactform.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



// this class operates as the main class that operates the application.

class ContactForm extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
  state = {};
  scrollMeDiv = null;
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
    console.log("Render Contact Form");
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "contact_form-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Contact Form"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "contact_form-row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "contact_form-group half-width"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: " ",
      id: "CT_1"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "CT_1"
    }, "First Name")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "contact_form-group half-width"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: " ",
      id: "CT_2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "CT_2"
    }, "Last Name"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "contact_form-group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "email",
      placeholder: " ",
      id: "CT_3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "CT_3"
    }, "Sender's Email")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "contact_form-group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: " ",
      id: "CT_4"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "CT_4"
    }, "Subject Line")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "contact_form-group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
      placeholder: " ",
      id: "CT_5"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "CT_5"
    }, "Message Body")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "contact_checkbox-group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      id: "CT_6"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "CT_6"
    }, "Contract Work"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      id: "CT_7"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "CT_7"
    }, "Full Time Employment")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "contact_checkbox-group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      id: "CT_8"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "CT_8"
    }, "Suffolk County, NY"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      id: "CT_9"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "CT_9"
    }, "Remote")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "contact_submit-button",
      type: "button",
      onClick: "submitForm()"
    }, "SEND"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "messageSentNotification",
      style: {
        display: 'none'
      }
    }, "Message Sent!")));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./src/blocks/LatestNews/latestnews.jsx":
/*!**********************************************!*\
  !*** ./src/blocks/LatestNews/latestnews.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _snapshot_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./snapshot.jsx */ "./src/blocks/LatestNews/snapshot.jsx");
/* harmony import */ var _assets_js_fat_nav_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/js/fat-nav-data.js */ "./assets/js/fat-nav-data.js");



//import { updateArray } from "../../../assets/js/fat-nav-data.js";

//updateArray();
// this class operates as the main class that operates the application.

class LatestNews extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
  state = {};
  scrollMeDiv = null;
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("Did Mount");
    console.log("Event Listener Added");
    //  document.addEventListener('DOMContentLoaded', LoadLatestNews);
    LoadLatestNews();
  }
  componentWillUnmount() {}
  handleScroll(event) {
    console.log('Scrolled!', event);
    const {
      scrollTop,
      scrollLeft
    } = event.target;
    console.log('Scroll position:', {
      scrollTop,
      scrollLeft
    });
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

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "ms_latest_news"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Latest News"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Something new is always going on at Archangel Media. Keep up with our latest releases here, and"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "sign up for our newsletter below. Stay part of our family, and spread the Wings of Freedom! ")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("script", null, "document.addEventListener('DOMContentLoaded', LoadLatestNews );"));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (LatestNews);

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

/***/ }),

/***/ "./src/blocks/LatestNews/snapshot.jsx":
/*!********************************************!*\
  !*** ./src/blocks/LatestNews/snapshot.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



// this class operates as the main class that operates the application.

class SnapShot extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
  state = {};
  scrollMeDiv = null;
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
    const {
      scrollTop,
      scrollLeft
    } = event.target;
    console.log('Scroll position:', {
      scrollTop,
      scrollLeft
    });
  }
  render() {
    console.log("Render SnapShot");
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "mImg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.archangel-media.com/wp-content/uploads/2023/11/Eye-P-small.png",
      alt: "test image"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Some text about this picture")));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (SnapShot);

// Modification of the above table will also require modification of the
// setMe2 Function in home--1.js

// Endpoint Links need to be updated

/***/ }),

/***/ "./src/blocks/MyNav/mynav.jsx":
/*!************************************!*\
  !*** ./src/blocks/MyNav/mynav.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// this class operates as the main class that operates the application.

class MyNav extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
  state = {};
  scrollMeDiv = null;
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
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
      className: "MyNav"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.archangel-media.com/"
    }, "HOME")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "./products/"
    }, "PRODUCTS")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "./contact-us/"
    }, "CONTACT")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "./about-archangel/"
    }, "ABOUT"))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (MyNav);

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

/***/ }),

/***/ "./src/blocks/OurTeam/ourteam.jsx":
/*!****************************************!*\
  !*** ./src/blocks/OurTeam/ourteam.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// this class operates as the main class that operates the application.

class OurTeam extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
  state = {};
  scrollMeDiv = null;
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
    const {
      scrollTop,
      scrollLeft
    } = event.target;
    console.log('Scroll position:', {
      scrollTop,
      scrollLeft
    });
  }
  render() {
    console.log("Render OurTeam");
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "OurTeam",
      className: "lower_stack"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "outer-team"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "span-tf"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("he3", null, "Our Awesome Team"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "aa_font6 m80b"
    }, "Not just a team, but the dream team. Sporting a full array of complementary skills, we\u2019ve coupled all the classic foundations for multi-stack application development with all of the latest technologies.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "aa-span-tc"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "aa-span-td"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "col-t m30 cardt"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardt__side cardt__side--front"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "top_color aa_color1"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "c1b"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-team",
      src: "https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/cropped-MyNet2-2-150x150.jpg",
      alt: "some text"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa_font8"
    }, "Michael Stein"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa_font8"
    }, "Co-founder & CEO ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), " Sr. Programmer, Developer"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "aa_font7"
    }, "Programmer since 1983 VB/VBA, JavaScript, ReactJS, PHP, C/C++, HTML, CSS, SASS, SQL, Agile, Scrum"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardt__side cardt__side--back cardt__bcolor1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa-media "
    }, "ARCHANGEL MEDIA"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-team2",
      src: "https://www.archangel-media.com/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/ms-back1c.png",
      alt: "some text"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.linkedin.com/in/michael-stein-8965759"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "aa-social",
      src: "https://www.archangel-media.com/wp-content/uploads/2023/12/linkedin-logo.png",
      alt: "some text"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.michaelastein.com"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "michaelstein"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("u", null, "www.MichaelAStein.com"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://github.com/MSTEIN340"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "aa-social2",
      src: "https://www.archangel-media.com/wp-content/uploads/2023/12/GitHub.png",
      alt: "some text"
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "col-t m30 cardt"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardt__side cardt__side--front"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "top_color aa_color2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "c1b"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-team",
      src: "https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/cropped-cropped-andrew.jpg",
      alt: "some text"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa_font8"
    }, "Andrew Stein"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa_font8"
    }, "Co-founder & President ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "Software Engineer, Developer"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "aa_font7"
    }, "\u201CLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.\u201D"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardt__side cardt__side--back cardt__bcolor2"
    }, "Back"))))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (OurTeam);

/***/ }),

/***/ "./src/blocks/halo/halo.jsx":
/*!**********************************!*\
  !*** ./src/blocks/halo/halo.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



// this class operates as the main class that operates the application.

class HaloHeader extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
  state = {};
  scrollMeDiv = null;
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
    console.log("Render HaloHeader");
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
      className: "aa_header-outer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa_header-inner boom2",
      id: "stack1xyH"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "center aa_font1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "hAngel",
      src: "https://www.archangel-media.com/wp-content/uploads/2023/11/Archangel-Favicon-small.png"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "hUp"
    }, "RCHANGEL MEDIA DEVELOPMENT")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "center aa_font2"
    }, this.state.inner))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (HaloHeader);

/***/ }),

/***/ "./src/blocks/home--1/home--1.jsx":
/*!****************************************!*\
  !*** ./src/blocks/home--1/home--1.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyNav_mynav_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MyNav/mynav.jsx */ "./src/blocks/MyNav/mynav.jsx");
/* harmony import */ var _OurTeam_ourteam_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../OurTeam/ourteam.jsx */ "./src/blocks/OurTeam/ourteam.jsx");
/* harmony import */ var _LatestNews_latestnews_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LatestNews/latestnews.jsx */ "./src/blocks/LatestNews/latestnews.jsx");
/* harmony import */ var _ContactForm_contactform_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ContactForm/contactform.jsx */ "./src/blocks/ContactForm/contactform.jsx");
/* harmony import */ var _halo_halo_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../halo/halo.jsx */ "./src/blocks/halo/halo.jsx");
/* harmony import */ var _wp_includes_js_codemirror_csslint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../wp-includes/js/codemirror/csslint */ "../../../wp-includes/js/codemirror/csslint.js");
/* harmony import */ var _wp_includes_js_codemirror_csslint__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wp_includes_js_codemirror_csslint__WEBPACK_IMPORTED_MODULE_7__);









// this class operates as the main class that operates the application.

class Home1 extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
  state = {};
  scrollMeDiv = null;
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
    const {
      scrollTop,
      scrollLeft
    } = event.target;
    console.log('Scroll position:', {
      scrollTop,
      scrollLeft
    });
  }
  render() {
    console.log("Render Home1");
    const dinput = input => {
      if (input === '=') {
        this.setState({
          confirm: this.state.confirm + 1
        });
      } else {
        if (this.state.confirm > 0) this.setState({
          confirm: 0
        });
      }
      console.log("Confirm = " + this.state.confirm);
      this.state.lastInput = input;
      this.setState({
        input: input
      });
    };
    const cancel = () => {
      this.setState({
        confirm: 0
      });
    };
    const confirm = () => {
      this.setState({
        confirm: -99
      });
    };
    var d = new Date();
    var NoTimeDate = d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-background bki"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "overlay3"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wrapper",
      id: "scrollMe"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
      className: "aa_header-outer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa_header-inner fade-in",
      id: "stack1xy"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa_font1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "center"
    }, "ARCHANGEL MEDIA DEVELOPMENT"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "centerdiv aa_font2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyNav_mynav_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "Freedom",
      className: "centerx"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("wid", {
      className: "freedom"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "aa_font3"
    }, "FREEDOM LIMITED ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "aa_yellow"
    }, "ONLY")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "aa_font4"
    }, "By your ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "aa_yellow"
    }, " Imagination!")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "Fbuttons"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.archangel-media.com/getting-started/",
      className: "btn2 freedom-btn1"
    }, "GET STARTED TODAY"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.archangel-media.com/about-archangel/"
    }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "btn2 freedom-btn2"
    }, "LEARN MORE")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "btn2a"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "a",
      href: "https://wordpress.org/about/"
    }, "Democratize Publishing ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-wordpress"
    }), " Wordpress.Org")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "WebCards",
      className: "forward"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "topfloat3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/Top-float3.png",
      alt: "bk1"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa-span-d"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "aa-col-a cardf"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardf__side cardf__side--front"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "c1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "icon-h  icon-hc1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      className: "icon-h1",
      fill: "#fff",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      id: "imagex",
      viewBox: "0 0 1920 1896.0833"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M640 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448H256v-192l320-320 160 160 512-512zm96-704H160q-13 0-22.5 9.5T128 288v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5V288q0-13-9.5-22.5T1760 256zm160 32v1216q0 66-47 113t-113 47H160q-66 0-113-47T0 1504V288q0-66 47-113t113-47h1600q66 0 113 47t47 113z"
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "aa_font5"
    }, "Themes"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "aa_font6"
    }, "A Custom WordPress theme or a custom WooCommerce theme (if you have an online store), will be distinct from those of your competitors, since it has its own unique design that showcases your business, and that contributes to better brand recognition, customer engagement, and, consequently, better sales."))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardf__side cardf__side--back"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa-media "
    }, "ARCHANGEL 2023"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-team2",
      src: "https://www.archangel-media.com/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/Archangel-2023.jpg",
      alt: "some text"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa-media "
    }, "Full Site Block Editing"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "aa-col-a cardf"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardf__side cardf__side--front"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "c1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "icon-h icon-hc2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      className: "icon-h1",
      fill: "#fff",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      id: "cogs",
      viewBox: "0 0 1920 1896.0833"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M896 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5T1536 512t90.5-37.5T1664 384zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5T999 1423q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24H547q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5T0 987V802q0-10 7-19.5T23 772l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31V314q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z"
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "aa_font5"
    }, "Widgets"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "aa_font6"
    }, "WordPress Widgets are blocks of code \u2014 static, dynamic, or a combination of both \u2014 which can be added to any specific area of your WordPress site. There are many built-in widgets in WordPress \u2014 such as tag cloud and categories \u2014 but Archangel Media produces a host of specialize widgets designed to deliver dynamic user experiences."))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardf__side cardf__side--back"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa-media "
    }, "ARCHANGEL 2023"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-team2",
      src: "https://www.archangel-media.com/wp-content/uploads/2023/12/widgets-small.jpg",
      alt: "some text"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa-media "
    }, "Full Site Block Editing"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa-col-a cardf"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardf__side cardf__side--front"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "c1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "icon-h icon-hc3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      className: "icon-h1",
      fill: "#fff",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      id: "plug",
      viewBox: "0 0 1792 1896.0833"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M1755 453q37 38 37 90.5t-37 90.5l-401 400 150 150-160 160q-163 163-389.5 186.5T543 1430l-362 362H0v-181l362-362q-124-185-100.5-411.5T448 448l160-160 150 150 400-401q38-37 91-37t90 37 37 90.5-37 90.5L939 619l234 234 401-400q38-37 91-37t90 37z"
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "aa_font5"
    }, "Plugins"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "aa_font6"
    }, "A plugin is a software add-on that is installed on a program, enhancing its capabilities. Archangel is in the business of making powerful utilities in simple plugin packages. The real power behind our whole suite of products is the PDO-DataSet plugin, which forms the basis for all of our products to communicate seemlessly with one another."))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardf__side cardf__side--back"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa-media "
    }, "ARCHANGEL 2023"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-team2",
      src: "https://www.archangel-media.com/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/archangeldataset3.jpg",
      alt: "Archangel dataset"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa-media "
    }, "Full Site Block Editing"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa-col-a cardf"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardf__side cardf__side--front"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "c1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "icon-h  icon-hc4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      className: "icon-h1",
      fill: "#fff",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      id: "users",
      viewBox: "0 0 1920 1896.0833"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M593 896q-162 5-265 128H194q-82 0-138-40.5T0 865q0-353 124-353 6 0 43.5 21t97.5 42.5T384 597q67 0 133-23-5 37-5 66 0 139 81 256zm1071 637q0 120-73 189.5t-194 69.5H523q-121 0-194-69.5T256 1533q0-53 3.5-103.5t14-109T300 1212t43-97.5 62-81 85.5-53.5T602 960q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zM640 256q0 106-75 181t-181 75-181-75-75-181 75-181T384 0t181 75 75 181zm704 384q0 159-112.5 271.5T960 1024 688.5 911.5 576 640t112.5-271.5T960 256t271.5 112.5T1344 640zm576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zm-128-609q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z"
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "aa_font5"
    }, "More !"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "aa_font6"
    }, "The cutting edge does not leave the road with WordPress. Our team are experts at applications for desktops and apps for Android and Apple. We have a collection of secure communications tools that keep your conversations private. That\u2019s hard to say these days, when everyone is listeining in on all your favorite chat apps. Just say no to invasion of privacy."))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cardf__side cardf__side--back"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa-media "
    }, "ARCHANGEL 2023"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-team2",
      src: "https://www.archangel-media.com/wp-content/uploads/2023/12/Cell-phone-small.jpg",
      alt: "Archangel dataset"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa-media "
    }, "Full Site Block Editing"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "new_theme"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "brand_new"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "exp"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("he6", null, "EXPERIENCE AND INNOVATION")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("he3", null, "Brand new WordPress theme ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "unlimited"
    }, " with unlimited power"), " and customization possibilities")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "txt_desc"
    }, "How to choose a theme? What is the right pick for you? Which one of the 12 website styles fits your need ? We can dial the flare in a direction that is Professional with Pizazz!                                "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.archangel-media.com/12-popular-types-of-websites/"
    }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "btn2 get_started"
    }, "GET STARTED NOW")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "NewThemeImages",
      className: "image-stack"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-stack__item eximg1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.archangel-media.com/wp-content/uploads/2023/12/website-wireframe-cropped.jpg",
      alt: "some text"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-stack__item eximg2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.archangel-media.com/wp-content/uploads/2023/12/launcher-create-project.jpg",
      alt: "some text"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-stack__item eximg3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.archangel-media.com/wp-content/uploads/2023/12/RYALE.jpg",
      alt: "some text"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "best1",
      className: "image-stack"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-stack__item best1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.archangel-media.com/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/Sleeves.jpg",
      alt: "some text"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "best1txt"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("he3", null, "Understanding the need unlocks the solution.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "txt_desc"
    }, "We have a foundation in sitting with business owners, department heads, doctors, lawyers, bankers and realtors. We have specialized in custom and proprietary solutions specifically tailored to be force multipliers to your greatest strengths, and provide support and backup for the places that need some extra kindness.                             "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.archangel-media.com/understanding-the-need/"
    }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "btn2 learn_more"
    }, "LEARN MORE")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "best2",
      className: "image-stack"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-stack__item best2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.archangel-media.com/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/Data-Analyst-Do_Blog.jpg",
      alt: "some text"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "best2txt"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("he3", null, "Data Drives the Dream")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "txt_desc"
    }, "While everyone loves a stylish front end, it\u2019s our goal to design Office Productivity tools that deliver. Whatever you integration need, whether it is SQL or Mongo, we are the data gurus. It takes a lot more than just to be able retrieve your records. There\u2019s a touch of art, and a heavy background in financial analysis and business intelligence that makes your data come alive.", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "We deliver data from your site, to your business, to you and help you analyze and tune your conversions."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.archangel-media.com/data-drives-the-dream/"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "btn2 learn_more"
    }, "LEARN MORE")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "MyCoolProjects"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cool_projects"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.archangel-media.com/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/archangeldataset3.jpg",
      alt: "Descriptive Text"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "overlay"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "cooltext"
    }, "Archangel Dataset-V2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.archangel-media.com/products/plugins/archangel-dataset-v2/"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "btn2"
    }, "Learn More")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.archangel-media.com/wp-content/uploads/2023/12/TontoSMS-e1701801636318.jpg",
      alt: "Descriptive Text"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "overlay"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "cooltext"
    }, "Tonto SMS")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.archangel-media.com/products/plugins/tonto-sms/"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "btn2"
    }, "Learn More")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "image-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.archangel-media.com/wp-content/uploads/2023/11/Eye-P-small.png",
      alt: "Descriptive Text"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "overlay"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "cooltext"
    }, "Eye-P")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.archangel-media.com/products/plugins/eye-p/"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "btn2"
    }, "Learn More")))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "outer_client"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "span-f"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("he3", null, "What Our Clients Say"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "aa_font6"
    }, "Sometimes it helps to just sit back and let the results speak for themselves.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "span-c"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "span-e container-fluid"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "col-c m30"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "c1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "aa_font7 ls1"
    }, "\u201CMichael was comfortable with all aspects of our projects and instilled a sense of enthusiasm and professionalism at all times. I would recommend Michael highly and hope to have the great opportunity to work with him in the future.\u201D"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-h2",
      src: "https://www.archangel-media.com/wp-content/uploads/2024/01/artwest2.jpg",
      alt: "some text"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa_font8"
    }, "Art West"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa_font8"
    }, "VP Real Estate Dispositions @ Washington Mutual"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "col-c m30"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "c1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "aa_font7 ls1"
    }, "\u201CMichael always demonstrated the highest level of professionalism and a continued \"Get it done\" attitude. Of the many tasks I have utilized his services I have always been more than pleased with the results.\u201D"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-h2",
      src: "https://www.archangel-media.com/wp-content/uploads/2024/01/Cheshire.jpg",
      alt: "some text"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa_font8"
    }, "Cheshire Webb"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa_font8"
    }, "Vice President @ Foundry Commercial"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "col-c m30"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "c1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "aa_font7 ls1"
    }, "\u201CMichaels efforts resulted in stellar results for the client. He brought enthusiasm and a positive attitude to challenging assignments. I would welcome the opportunity to work with him again in the future.\u201D"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-h2",
      src: "https://www.archangel-media.com/wp-content/uploads/2024/01/Samantha.jpg",
      alt: "some text"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa_font8"
    }, "Samantha Turner"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aa_font8"
    }, "Senior Real Estate Manager @ Weyerhaeuser Company")))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      id: "JoinUs",
      className: "short_view"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "header2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "background2",
      src: "https://www.archangel-media.com/wp-content/uploads/2022/03/canyon-purple-orange-light-formation-rock-1608614-pxhere-com.jpg"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "overlay2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "foreground2a"
    }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "f2a"
    }, "Join us. "), "It will only take a minute."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.archangel-media.com/getting-started/"
    }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "btn2 join_us "
    }, "GET STARTED TODAY")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_OurTeam_ourteam_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      id: "Hours",
      className: "short_view"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "header3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "background",
      src: "https://www.archangel-media.com/wp-content/uploads/2022/03/plants-green-white-background-white-decoration-design-1418858-pxhere-com-1.jpg"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "overlay2"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
      className: "Twide"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "foreground2b"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "270", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "PROJECTS")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "spacer"
    }, "|"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "foreground2b"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "93,000", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "WORKED HOURS")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "spacer"
    }, "|"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
      className: "foreground2b"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "2 Powerhouse", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "DEVELOPERS")))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "latest_news"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_LatestNews_latestnews_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "contact",
      className: "short_view3"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "header2"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "square3"
    }, "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: ""
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ContactForm_contactform_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "background4",
      src: "https://www.michaelastein.com/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/hello.png"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "footer1",
      className: "aa_footer"
    }, "\xA9 2023 Archangel Media Development. Created using WordPress, PhpStorm, ReactJS, and Custom Guttenberg Blocks. This home page has been hand coded for demo purposes.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("script", null, "const scrollMeDiv = document.getElementById(\"scrollMe\"); scrollMeDiv ? scrollMeDiv.addEventListener('scroll', aa_handleScroll) : console.log(\"Failed to get Inside Conditional\"); document.addEventListener(\"DOMContentLoaded\", stopscroll);"));
  }
}
function storage() {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-ms"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--7",
    onClick: () => {
      dinput("7");
    }
  }, "7"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--8",
    onClick: () => {
      dinput("8");
    }
  }, "8"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--9",
    onClick: () => {
      dinput("9");
    }
  }, "9"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--4",
    onClick: () => {
      dinput("4");
    }
  }, "4"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--5",
    onClick: () => {
      dinput("5");
    }
  }, "5"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--6",
    onClick: () => {
      dinput("6");
    }
  }, "6"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--1",
    onClick: () => {
      dinput("1");
    }
  }, "1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--2",
    onClick: () => {
      dinput("2");
    }
  }, "2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--3",
    onClick: () => {
      dinput("3");
    }
  }, "3"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--0",
    onClick: () => {
      dinput("0");
    }
  }, "0"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--per",
    onClick: () => {
      dinput(".");
    }
  }, "."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--bksp",
    onClick: () => {
      dinput("<");
    }
  }, "<<"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--clear",
    onClick: () => {
      dinput("C");
    }
  }, "C"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--plus",
    onClick: () => {
      dinput("+");
    }
  }, "+"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "padButton padButton--minus",
    onClick: () => {
      dinput("-");
    }
  }, "-"));
}
/* harmony default export */ __webpack_exports__["default"] = (Home1);
function onScroll2() {
  console.log("This is outside the class");
}

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  primary: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "enable-background": "new 0 0 507.434 507.434",
    height: "512",
    viewBox: "0 0 507.434 507.434",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m392.986 260.922c0 42.358 6.782 106.871 52.224 106.871s52.224-64.513 52.224-106.871z",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m494.571 303.827c-4.983 33.068-17.914 63.965-49.361 63.965-31.448 0-44.378-30.897-49.361-63.965z",
    fill: "#d789b9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m495.533 296.617c1.448-12.381 1.901-24.774 1.901-35.695h-22.918c0 10.834-.569 23.526-2.581 35.695z",
    fill: "#e1bdfc"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m469.895 306.617c-5.116 20.728-15.536 37.727-36.144 37.727-8.365 0-15.049-2.805-20.384-7.521.666 1.749 1.286 3.513 1.828 5.303 1.767 5.825 3.446 11.763 5.622 17.464 6.537 5.168 14.555 8.203 24.392 8.203 30.562 0 43.636-29.18 48.922-61.176z",
    fill: "#c668b9"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m387.736 458.144c-26.845 17.741-72.32 21.46-86.422-.683 3.838-1.701-8.627-41.665-6.49-44.748 3.543-5.112 45.77 9.801 61.828 3.074 8.071-3.381 45.695-37.756 65.622-21.801s-7.693 46.417-34.538 64.158z",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m412.668 442.996c16.62-16.738 24.789-36.853 9.606-49.01-16.498-13.21-32.305 8.473-41.836 18.244 10.715 10.291 21.08 20.963 32.23 30.766z",
    fill: "#a1e8c3"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m68.581 478.402s-32.452-15.227-36.38-42.984 18.03-42.897 18.03-42.897-44.435-14.224-39.911-75.823 45.696-71.558 45.696-71.558-16.809-81.995 64.721-48.25c0 0-20.525-110.454 57.89-74.445l21.162 197.563z",
    fill: "#ccf3e2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m51.6 392.307s-39.989-14.093-39.27-53.251c6.571 17.235 50.024 77.594 109.248-22.951 2.201-3.736 36.837 58.293 40.958 57.201l-93.1 106.718s-33.734-15.799-37.402-44.133c-3.667-28.333 19.566-43.584 19.566-43.584z",
    fill: "#b1b6e1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m70.957 479.987c13.413-36.122 34.586-64.352 59.12-82.836l.009.212c-9.94-14.085-17.691-30.117-24.909-55.673l-15.299-50.583c-5.139-18.197-4.388-36.663 1.115-53.365-5.591-3.193-10.948-8.115-15.669-14.917-14.377-20.716-8.967-56.786-2.516-61.263s42.134 3.075 56.511 23.791c.568.819 1.097 1.636 1.609 2.452 6.752-4.031 14.135-7.256 22.064-9.495l54.28-15.331c4.053-1.145 8.035-1.936 11.937-2.425-.854-5.145-.826-10.905.271-17.204 4.281-24.583 33.17-46.22 40.825-44.887s27.53 31.461 23.249 56.044c-1.416 8.134-4.207 14.823-7.94 20.035 12.621 8.138 22.306 18.213 28.067 26.214 13.903 19.309 26.103 47.548 26.103 47.548 26.833 13.968 41.289 39.367 39.515 65.512-1.464 21.572-11.218 39.84-26.936 54.459-13.815 12.849-39.193 23.224-53.902 26.03l-2.258 1.088c8.608 28.579 14.118 65.422 14.077 84.594",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m330.115 245.359s-12.355-28.598-26.435-48.152c-5.834-8.103-15.643-18.306-28.424-26.547 3.78-5.278 6.607-12.053 8.041-20.29 4.335-24.895-15.793-55.406-23.545-56.757-3.458-.602-11.193 3.432-19.087 10.285.568-.052 1.071-.035 1.496.06 6.946 1.547 23.843 29.959 18.877 52.267-1.643 7.381-4.482 13.382-8.12 17.991 11.199 7.984 19.629 17.615 24.559 25.181 11.895 18.259 21.851 44.615 21.851 44.615 23.953 13.925 36.093 37.781 33.354 61.624-2.26 19.673-11.965 35.97-26.969 48.674-8.696 7.363-20.199 16.693-31.917 21.138-9.082 3.445-17.424 8.757-16.258 18.682 1.332 11.326 1.743 31.133 2.763 43.729.944 11.656-8.561 21.488-20.243 20.943l-161.999-.402c-6.052 10.284-5.566 9.486-10.059 21.587h232.237c.041-19.415-5.538-56.727-14.256-85.669l2.287-1.102c14.896-2.842 40.597-13.348 54.587-26.361 15.917-14.805 25.796-33.305 27.278-55.151 1.796-26.478-12.844-52.2-40.018-66.345z",
    fill: "#e1bdfc"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m164.615 200.167c-.086-.398-.155-.803-.186-1.224-3.924-15.373-3.173-29.902 4.402-43.2-4.74-17.1-4.118-31.676 4.352-42.706-.088-20.419 2.452-42.978 6.831-67.033.369-3.618 5.495-3.992 6.385-.466 6.842 18.485 12.078 35.988 12.802 50.731 7.849 9.863 11.242 21.133 8.661 34.319 7.014 10.247 10.636 21.97 9.052 35.872 9.014 10.285 8.09 22.374 8.116 27.963-1.033 19.09-56.601 23.414-60.415 5.744z",
    fill: "#f6e06e"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m164.615 200.167c-.086-.398-.155-.803-.186-1.224-2.787-10.917-3.199-21.406-.5-31.334.31 2.936.848 5.91 1.613 8.922.024.36.081.706.154 1.046 3.22 15.087 52.047 10.982 53.095-5.355.004-.923.039-2.055.039-3.341 6.955 9.7 6.177 20.386 6.201 25.543-1.034 19.089-56.602 23.413-60.416 5.743z",
    fill: "#dda86a"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m301.46 177.694c-14.223-3.446-26.535-12.001-35.361-23.674-2.507-3.316-5.553-6.33-9.129-8.915-17.077-12.344-40.989-10.238-55.629 4.917-17.462 18.075-15.638 46.803 3.318 62.592 16.321 13.593 36.676 15.28 53.429 9.77 9.76-3.21 30.697-15.95 46.476-26.026 7.639-4.879 5.703-16.53-3.104-18.664z",
    fill: "#ccf3e2"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m204.659 212.614c16.321 13.593 36.676 15.28 53.429 9.77 9.76-3.21 30.697-15.95 46.476-26.026 7.638-4.878 5.703-16.529-3.105-18.663-14.223-3.446-26.535-12.002-35.361-23.674-2.507-3.316-5.553-6.33-9.129-8.915-17.077-12.344-40.989-10.238-55.629 4.916-17.461 18.075-15.637 46.803 3.319 62.592zm13.248-68.351c12.751-8.905 30.178-7.25 40.544 3.838 2.171 2.322 3.898 4.881 5.194 7.584 4.564 9.517 12.09 17.265 21.75 21.61 5.982 2.691 5.618 11.282-.579 13.761-12.804 5.122-29.698 11.467-37.164 12.473-12.815 1.726-27.127-2.171-36.766-14.053-11.194-13.8-8.187-34.592 7.021-45.213z",
    fill: "#b1b6e1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m468.27 99.229 8.215 23.098c.352.989 1.048 1.773 1.926 2.168l20.521 9.246c2.899 1.306 2.899 5.925 0 7.232l-20.521 9.246c-.879.396-1.575 1.18-1.926 2.169l-8.215 23.098c-1.16 3.263-5.264 3.263-6.425 0l-8.214-23.098c-.352-.989-1.048-1.773-1.927-2.169l-20.521-9.246c-2.899-1.306-2.899-5.925 0-7.232l20.521-9.246c.879-.396 1.575-1.179 1.927-2.168l8.214-23.098c1.16-3.263 5.264-3.263 6.425 0z",
    fill: "#fbf2aa"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m62.791 28.248 6.093 17.133c.261.734.777 1.315 1.429 1.608l15.222 6.858c2.151.969 2.151 4.395 0 5.364l-15.222 6.858c-.652.294-1.168.875-1.429 1.608l-6.093 17.133c-.861 2.421-3.905 2.421-4.766 0l-6.093-17.133c-.261-.734-.777-1.315-1.429-1.608l-15.223-6.857c-2.15-.969-2.15-4.395 0-5.364l15.222-6.858c.652-.294 1.168-.875 1.429-1.608l6.093-17.133c.861-2.422 3.906-2.422 4.767-.001z",
    fill: "#fbf2aa"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fill: "#f7e16e"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "312.746",
    cy: "31.218",
    r: "12.187"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m401.611 73.995c0 5.228-4.238 9.466-9.466 9.466s-9.466-4.238-9.466-9.466 4.238-9.466 9.466-9.466c5.228.001 9.466 4.239 9.466 9.466z"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m473.251 419.664h-18.041v-42.775c25.756-4.807 52.225-30.535 52.225-115.966 0-5.523-4.478-10-10-10h-104.449c-5.523 0-10 4.477-10 10 0 85.431 26.468 111.159 52.224 115.966v17.377c-1.592-3.064-3.827-5.797-6.686-8.086-17.855-14.296-39.423-1.492-56.755 8.793-9.064 5.38-18.438 10.942-25.967 12.358-14.179 2.672-30.921-3.314-41.555-8.758 14.661-4.964 32.837-13.652 44.663-24.65 18.125-16.858 28.534-37.987 30.104-61.104 2.016-29.701-13.901-57.506-41.734-73.349-3.506-7.729-13.019-27.825-24.024-43.781 1.786-3.151 2.477-6.871 1.842-10.684-1.091-6.543-5.775-11.579-12.224-13.142-4.548-1.102-8.948-2.826-13.105-5.09 1.463-3.803 2.616-7.864 3.374-12.225 3.016-17.318-3.754-34.332-8.058-42.932-2.652-5.298-12.17-22.735-23.328-24.68-11.164-1.945-26.011 11.251-30.297 15.342-3.593 3.429-8.558 8.759-12.941 15.486-.772-8.896-3.951-17.306-9.545-25.134-1.107-13.213-5.198-28.903-13.07-50.223-1.814-5.867-7.441-9.737-13.619-9.29-6.253.456-11.287 5.196-12.156 11.356-4.253 23.423-6.514 43.832-6.887 62.148-14.369-3.102-26.348-1.018-35.736 6.3-12.4 9.664-17.256 26.622-18.734 42.97-2.882-1.276-5.529-2.279-7.725-3.025-5.657-1.924-24.842-7.692-34.203-1.195-9.362 6.497-10.669 26.488-10.847 32.46-.063 2.121-.055 4.677.089 7.502-12.241 14.023-12.264 35.244-11.091 47.099-14.157 6.854-40.917 26.419-44.649 77.232-2.602 35.433 9.948 56.852 20.934 68.58 4.2 4.484 8.471 7.922 12.305 10.514-6.876 8.795-13.961 22.854-11.286 41.761 4.632 32.735 40.509 49.92 42.034 50.635 1.373.645 2.818.949 4.241.949.498 0 .992-.043 1.48-.116.213.014.426.028.639.028 4.061 0 7.879-2.492 9.376-6.521 11.993-32.296 30.726-58.936 54.243-77.17 3.482-1.747 5.676-5.398 5.502-9.374l-.009-.212c-.107-2.45-1.105-4.729-2.739-6.449-9.549-13.882-16.328-29.34-22.528-51.292-.017-.06-.034-.118-.052-.178l-15.272-50.492c-4.403-15.653-4.053-32.053 1.013-47.431 1.488-4.516-.41-9.455-4.539-11.812-4.539-2.593-8.715-6.608-12.413-11.935-9.914-14.286-7.802-39.241-4.695-46.864 8.26-.281 32.346 6.509 42.256 20.789.423.61.854 1.268 1.354 2.066 2.889 4.608 8.931 6.064 13.6 3.275 6.129-3.659 12.742-6.505 19.655-8.458l.837-.236c.293 4.52 1.023 9.173 2.219 13.96.04.338.11.696.179 1.055.014.099.031.197.05.295.007.035.009.065.017.1 0 .001.001.003.001.004.014.064.033.124.047.187.017.067.032.134.051.201 2.799 11.541 17.45 15.51 31.215 15.509 1.954 0 3.89-.079 5.77-.229 1.414-.112 2.854-.28 4.3-.481.23.199.451.406.685.601 11.119 9.261 24.911 14.099 39.113 14.099 6.665 0 13.419-1.065 20.03-3.24 7.014-2.306 19.6-9.08 37.448-20.136 12.223 18.021 22.822 42.393 22.933 42.65.912 2.109 2.523 3.842 4.561 4.902 22.611 11.77 35.699 33.215 34.154 55.965-1.235 18.205-9.232 34.292-23.77 47.814-12.521 11.646-36.481 21.147-48.965 23.529-.854.163-1.685.438-2.469.815l-2.259 1.089c-4.432 2.137-6.651 7.181-5.232 11.892 8.48 28.154 13.689 64.323 13.652 81.689-.012 5.522 4.456 10.01 9.978 10.021h.022c5.443 0 9.867-4.353 9.989-9.772 9.683 2.879 20.103 4.523 30.676 4.522 14.157-.001 28.566-2.908 41.75-9.594 12.917-6.55 29.29-19.315 40.922-33.806h49.897c5.522 0 10-4.478 10-10 .005-5.521-4.473-9.998-9.995-9.998zm-394.122-179.442c-4.24 17.045-3.962 34.848.862 51.928.017.06.034.118.052.178l15.273 50.497c5.902 20.875 12.389 36.57 21.047 50.621-21.37 18.193-38.801 42.606-51.064 71.442-8.42-5.648-21.152-16.411-23.198-30.871-2.978-21.043 13.176-32.814 13.805-33.264 3.139-2.164 4.774-5.925 4.216-9.696-.558-3.772-3.212-6.897-6.843-8.061-.37-.118-36.889-12.437-32.987-65.566 3.847-52.386 36.078-62.024 38.116-62.58 5.297-1.19 8.478-6.37 7.407-11.699-.812-4.042-1.676-11.743-1.044-19.577.649 1.109 1.329 2.207 2.073 3.279 3.673 5.29 7.787 9.765 12.285 13.369zm179.093-132.988c5.957 5.605 18.149 27.043 15.218 43.885-.116.669-.261 1.308-.4 1.954-.737-.87-1.462-1.755-2.155-2.672-2.922-3.863-6.421-7.281-10.4-10.158-8.004-5.786-17.324-8.782-26.686-9.113 6.848-11.787 18.792-21.447 24.423-23.896zm-72.633-31.72c1.89 7.282 3.3 14.635 3.625 21.247.002.044.01.086.013.13.012.198.035.396.059.594l-5.878 4.125c.337-8.196 1.054-16.858 2.181-26.096zm-4.474 43.614c.059-.077.106-.158.162-.235.112-.154.222-.31.325-.471.079-.124.152-.249.226-.375.09-.156.179-.312.261-.474.071-.138.135-.277.199-.417.022-.05.048-.097.07-.147l12.739-8.941c3.483 6.393 4.427 13.07 2.953 20.6-.103.525-.15 1.048-.169 1.566l-18.76 13.078c-2.945-11.39-2.295-18.599 1.994-24.184zm-31.104 47.883c-5.67 1.602-11.182 3.688-16.466 6.229-1.642-1.854-3.396-3.554-5.206-5.137.025-15.531 2.51-32.44 11.471-39.413 4.253-3.31 10.227-4.245 17.833-2.836-1.181 10.027 1.206 20.114 3.912 28.705.133.422.298.825.48 1.216-1.408 2.849-2.55 5.792-3.455 8.816zm21.993-4.261c1.986-1.237 4.491-2.611 6.203-4.173l20.176-14.065c-.458.439-.913.881-1.357 1.341-9.228 9.553-14.059 21.981-13.72 35.13l-14.51 9.351c-1.545-10.192-.491-19.3 3.208-27.584zm1.06 39.11 12.331-7.947c1.222 4.014 2.953 7.854 5.148 11.42-7.878.081-14.147-1.398-17.479-3.473zm83.149 14.824c-16.74 5.503-34.578 2.26-47.714-8.681-7.819-6.512-12.619-16.078-13.169-26.244-.558-10.307 3.109-20.098 10.327-27.568 7.088-7.337 16.71-11.115 26.385-11.115 7.488 0 15.01 2.264 21.412 6.892 3.013 2.178 5.656 4.759 7.858 7.672 9.851 13.027 23.606 22.221 38.734 25.886 2.48.602 3.074 2.615 3.214 3.453.14.841.232 2.943-1.926 4.322-21.95 14.018-37.975 23.032-45.121 25.383zm117.174 238.947c-20.533 10.412-45.435 8.992-64.727 1.371-1.213-11.179-3.211-24.094-5.886-37.076 13.552 5.764 30.808 10.052 46.726 7.06 8.076-1.519 16.107-5.417 23.983-9.861l19.829 24.879c-6.267 5.386-13.146 10.189-19.925 13.627zm44.614-48.259c-.734 7.104-7.076 16.983-15.958 26.334l-18.094-22.702c15.238-8.978 25.784-14.25 32.075-9.213 1.141.915 2.328 2.174 1.977 5.581zm-14.881-136.45h84.181c-.245 8.967-.832 17.303-1.749 25.005h-80.684c-.916-7.701-1.503-16.038-1.748-25.005zm8.393 56.064c-1.952-5.668-3.566-12.037-4.851-19.059h77.097c-1.285 7.022-2.899 13.39-4.851 19.059-10.607 30.807-27.987 30.807-33.698 30.807-5.711-.001-23.091-.001-33.697-30.807z",
    fill: "#3c122c"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m250.336 179.871c-2.699 0-5.388-1.085-7.36-3.227-6.672-7.248-13.9-7.618-13.988-7.618 0 0 0 0-.001 0-.045.001-.092.001-.138.001-5.46 0-9.922-4.389-9.996-9.865-.075-5.522 4.342-10.06 9.864-10.134 1.6-.045 16.191.185 28.973 14.071 3.74 4.063 3.479 10.39-.585 14.13-1.921 1.768-4.348 2.642-6.769 2.642z",
    fill: "#fff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fill: "#3c122c"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m190.062 327.812c-23.373 0-42.388-19.015-42.388-42.387 0-23.373 19.015-42.388 42.388-42.388 23.372 0 42.388 19.015 42.388 42.388 0 23.372-19.015 42.387-42.388 42.387zm0-72.774c-16.756 0-30.388 13.632-30.388 30.388 0 16.755 13.632 30.387 30.388 30.387s30.388-13.632 30.388-30.387c0-16.757-13.632-30.388-30.388-30.388z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m173.129 343.268c0 3.819 3.096 6.915 6.915 6.915s6.915-3.096 6.915-6.915-3.096-6.915-6.915-6.915c-3.819.001-6.915 3.096-6.915 6.915z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "180.044",
    cy: "363.815",
    r: "6.915"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m266.834 317.087c-1.011 0-2.035-.256-2.976-.794-2.876-1.646-3.872-5.312-2.226-8.188 3.349-5.849 9.606-9.395 16.347-9.23 5.624.13 10.8 2.779 14.2 7.268 2.001 2.642 1.482 6.404-1.159 8.405-2.643 2.002-6.405 1.481-8.405-1.159-1.178-1.555-2.969-2.472-4.913-2.518-2.368-.051-4.496 1.171-5.655 3.197-1.109 1.935-3.132 3.019-5.213 3.019z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m286.649 262.888c-2.868 0-5.404-2.063-5.906-4.985-.562-3.266 1.632-6.368 4.897-6.929l19.882-3.414c3.27-.567 6.367 1.632 6.929 4.897.561 3.266-1.632 6.368-4.898 6.929l-19.882 3.414c-.343.06-.685.088-1.022.088z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "m184.003 294.541c-2.366 0-4.608-1.409-5.558-3.735-1.251-3.068.221-6.57 3.289-7.822l18.678-7.62c3.068-1.254 6.57.221 7.822 3.289 1.251 3.068-.221 6.57-3.289 7.822l-18.678 7.62c-.742.303-1.509.446-2.264.446z"
  }))))),
  secondary: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    "enable-background": "new 0 0 507.434 507.434",
    height: "512",
    viewBox: "0 0 507.434 507.434",
    width: "512",
    xmlns: "http://www.w3.org/2000/svg"
  }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "256",
    cy: "256",
    r: "128",
    fill: "gold"
  }), "  ")
});

/***/ }),

/***/ "../../../wp-includes/js/codemirror/csslint.js":
/*!*****************************************************!*\
  !*** ../../../wp-includes/js/codemirror/csslint.js ***!
  \*****************************************************/
/***/ (function() {

/*!
CSSLint v1.0.4
Copyright (c) 2016 Nicole Sullivan and Nicholas C. Zakas. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var CSSLint = function () {
  var module = module || {},
    exports = exports || {};

  /*!
  Parser-Lib
  Copyright (c) 2009-2016 Nicholas C. Zakas. All rights reserved.
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  */
  /* Version v1.1.0, Build time: 6-December-2016 10:31:29 */
  var parserlib = function () {
    var require;
    require = function e(t, n, r) {
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            var a = typeof require == "function" && require;
            if (!u && a) return a(o, !0);
            if (i) return i(o, !0);
            var f = new Error("Cannot find module '" + o + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }
          var l = n[o] = {
            exports: {}
          };
          t[o][0].call(l.exports, function (e) {
            var n = t[o][1][e];
            return s(n ? n : e);
          }, l, l.exports, e, t, n, r);
        }
        return n[o].exports;
      }
      var i = typeof require == "function" && require;
      for (var o = 0; o < r.length; o++) s(r[o]);
      return s;
    }({
      1: [function (require, module, exports) {
        "use strict";

        /* exported Colors */
        var Colors = module.exports = {
          __proto__: null,
          aliceblue: "#f0f8ff",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          aquamarine: "#7fffd4",
          azure: "#f0ffff",
          beige: "#f5f5dc",
          bisque: "#ffe4c4",
          black: "#000000",
          blanchedalmond: "#ffebcd",
          blue: "#0000ff",
          blueviolet: "#8a2be2",
          brown: "#a52a2a",
          burlywood: "#deb887",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          cornflowerblue: "#6495ed",
          cornsilk: "#fff8dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkgray: "#a9a9a9",
          darkgrey: "#a9a9a9",
          darkgreen: "#006400",
          darkkhaki: "#bdb76b",
          darkmagenta: "#8b008b",
          darkolivegreen: "#556b2f",
          darkorange: "#ff8c00",
          darkorchid: "#9932cc",
          darkred: "#8b0000",
          darksalmon: "#e9967a",
          darkseagreen: "#8fbc8f",
          darkslateblue: "#483d8b",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          darkturquoise: "#00ced1",
          darkviolet: "#9400d3",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          dimgray: "#696969",
          dimgrey: "#696969",
          dodgerblue: "#1e90ff",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          forestgreen: "#228b22",
          fuchsia: "#ff00ff",
          gainsboro: "#dcdcdc",
          ghostwhite: "#f8f8ff",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gray: "#808080",
          grey: "#808080",
          green: "#008000",
          greenyellow: "#adff2f",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          ivory: "#fffff0",
          khaki: "#f0e68c",
          lavender: "#e6e6fa",
          lavenderblush: "#fff0f5",
          lawngreen: "#7cfc00",
          lemonchiffon: "#fffacd",
          lightblue: "#add8e6",
          lightcoral: "#f08080",
          lightcyan: "#e0ffff",
          lightgoldenrodyellow: "#fafad2",
          lightgray: "#d3d3d3",
          lightgrey: "#d3d3d3",
          lightgreen: "#90ee90",
          lightpink: "#ffb6c1",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          lightskyblue: "#87cefa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          lightsteelblue: "#b0c4de",
          lightyellow: "#ffffe0",
          lime: "#00ff00",
          limegreen: "#32cd32",
          linen: "#faf0e6",
          magenta: "#ff00ff",
          maroon: "#800000",
          mediumaquamarine: "#66cdaa",
          mediumblue: "#0000cd",
          mediumorchid: "#ba55d3",
          mediumpurple: "#9370d8",
          mediumseagreen: "#3cb371",
          mediumslateblue: "#7b68ee",
          mediumspringgreen: "#00fa9a",
          mediumturquoise: "#48d1cc",
          mediumvioletred: "#c71585",
          midnightblue: "#191970",
          mintcream: "#f5fffa",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          navajowhite: "#ffdead",
          navy: "#000080",
          oldlace: "#fdf5e6",
          olive: "#808000",
          olivedrab: "#6b8e23",
          orange: "#ffa500",
          orangered: "#ff4500",
          orchid: "#da70d6",
          palegoldenrod: "#eee8aa",
          palegreen: "#98fb98",
          paleturquoise: "#afeeee",
          palevioletred: "#d87093",
          papayawhip: "#ffefd5",
          peachpuff: "#ffdab9",
          peru: "#cd853f",
          pink: "#ffc0cb",
          plum: "#dda0dd",
          powderblue: "#b0e0e6",
          purple: "#800080",
          red: "#ff0000",
          rosybrown: "#bc8f8f",
          royalblue: "#4169e1",
          saddlebrown: "#8b4513",
          salmon: "#fa8072",
          sandybrown: "#f4a460",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          sienna: "#a0522d",
          silver: "#c0c0c0",
          skyblue: "#87ceeb",
          slateblue: "#6a5acd",
          slategray: "#708090",
          slategrey: "#708090",
          snow: "#fffafa",
          springgreen: "#00ff7f",
          steelblue: "#4682b4",
          tan: "#d2b48c",
          teal: "#008080",
          thistle: "#d8bfd8",
          tomato: "#ff6347",
          turquoise: "#40e0d0",
          violet: "#ee82ee",
          wheat: "#f5deb3",
          white: "#ffffff",
          whitesmoke: "#f5f5f5",
          yellow: "#ffff00",
          yellowgreen: "#9acd32",
          //'currentColor' color keyword https://www.w3.org/TR/css3-color/#currentcolor
          currentColor: "The value of the 'color' property.",
          //CSS2 system colors https://www.w3.org/TR/css3-color/#css2-system
          activeBorder: "Active window border.",
          activecaption: "Active window caption.",
          appworkspace: "Background color of multiple document interface.",
          background: "Desktop background.",
          buttonface: "The face background color for 3-D elements that appear 3-D due to one layer of surrounding border.",
          buttonhighlight: "The color of the border facing the light source for 3-D elements that appear 3-D due to one layer of surrounding border.",
          buttonshadow: "The color of the border away from the light source for 3-D elements that appear 3-D due to one layer of surrounding border.",
          buttontext: "Text on push buttons.",
          captiontext: "Text in caption, size box, and scrollbar arrow box.",
          graytext: "Grayed (disabled) text. This color is set to #000 if the current display driver does not support a solid gray color.",
          greytext: "Greyed (disabled) text. This color is set to #000 if the current display driver does not support a solid grey color.",
          highlight: "Item(s) selected in a control.",
          highlighttext: "Text of item(s) selected in a control.",
          inactiveborder: "Inactive window border.",
          inactivecaption: "Inactive window caption.",
          inactivecaptiontext: "Color of text in an inactive caption.",
          infobackground: "Background color for tooltip controls.",
          infotext: "Text color for tooltip controls.",
          menu: "Menu background.",
          menutext: "Text in menus.",
          scrollbar: "Scroll bar gray area.",
          threeddarkshadow: "The color of the darker (generally outer) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
          threedface: "The face background color for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
          threedhighlight: "The color of the lighter (generally outer) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
          threedlightshadow: "The color of the darker (generally inner) of the two borders facing the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
          threedshadow: "The color of the lighter (generally inner) of the two borders away from the light source for 3-D elements that appear 3-D due to two concentric layers of surrounding border.",
          window: "Window background.",
          windowframe: "Window frame.",
          windowtext: "Text in windows."
        };
      }, {}],
      2: [function (require, module, exports) {
        "use strict";

        module.exports = Combinator;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents a selector combinator (whitespace, +, >).
         * @namespace parserlib.css
         * @class Combinator
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {String} text The text representation of the unit.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function Combinator(text, line, col) {
          SyntaxUnit.call(this, text, line, col, Parser.COMBINATOR_TYPE);

          /**
           * The type of modifier.
           * @type String
           * @property type
           */
          this.type = "unknown";

          //pretty simple
          if (/^\s+$/.test(text)) {
            this.type = "descendant";
          } else if (text === ">") {
            this.type = "child";
          } else if (text === "+") {
            this.type = "adjacent-sibling";
          } else if (text === "~") {
            this.type = "sibling";
          }
        }
        Combinator.prototype = new SyntaxUnit();
        Combinator.prototype.constructor = Combinator;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      3: [function (require, module, exports) {
        "use strict";

        module.exports = Matcher;
        var StringReader = require("../util/StringReader");
        var SyntaxError = require("../util/SyntaxError");

        /**
         * This class implements a combinator library for matcher functions.
         * The combinators are described at:
         * https://developer.mozilla.org/en-US/docs/Web/CSS/Value_definition_syntax#Component_value_combinators
         */
        function Matcher(matchFunc, toString) {
          this.match = function (expression) {
            // Save/restore marks to ensure that failed matches always restore
            // the original location in the expression.
            var result;
            expression.mark();
            result = matchFunc(expression);
            if (result) {
              expression.drop();
            } else {
              expression.restore();
            }
            return result;
          };
          this.toString = typeof toString === "function" ? toString : function () {
            return toString;
          };
        }

        /** Precedence table of combinators. */
        Matcher.prec = {
          MOD: 5,
          SEQ: 4,
          ANDAND: 3,
          OROR: 2,
          ALT: 1
        };

        /** Simple recursive-descent grammar to build matchers from strings. */
        Matcher.parse = function (str) {
          var reader, eat, expr, oror, andand, seq, mod, term, result;
          reader = new StringReader(str);
          eat = function (matcher) {
            var result = reader.readMatch(matcher);
            if (result === null) {
              throw new SyntaxError("Expected " + matcher, reader.getLine(), reader.getCol());
            }
            return result;
          };
          expr = function () {
            // expr = oror (" | " oror)*
            var m = [oror()];
            while (reader.readMatch(" | ") !== null) {
              m.push(oror());
            }
            return m.length === 1 ? m[0] : Matcher.alt.apply(Matcher, m);
          };
          oror = function () {
            // oror = andand ( " || " andand)*
            var m = [andand()];
            while (reader.readMatch(" || ") !== null) {
              m.push(andand());
            }
            return m.length === 1 ? m[0] : Matcher.oror.apply(Matcher, m);
          };
          andand = function () {
            // andand = seq ( " && " seq)*
            var m = [seq()];
            while (reader.readMatch(" && ") !== null) {
              m.push(seq());
            }
            return m.length === 1 ? m[0] : Matcher.andand.apply(Matcher, m);
          };
          seq = function () {
            // seq = mod ( " " mod)*
            var m = [mod()];
            while (reader.readMatch(/^ (?![&|\]])/) !== null) {
              m.push(mod());
            }
            return m.length === 1 ? m[0] : Matcher.seq.apply(Matcher, m);
          };
          mod = function () {
            // mod = term ( "?" | "*" | "+" | "#" | "{<num>,<num>}" )?
            var m = term();
            if (reader.readMatch("?") !== null) {
              return m.question();
            } else if (reader.readMatch("*") !== null) {
              return m.star();
            } else if (reader.readMatch("+") !== null) {
              return m.plus();
            } else if (reader.readMatch("#") !== null) {
              return m.hash();
            } else if (reader.readMatch(/^\{\s*/) !== null) {
              var min = eat(/^\d+/);
              eat(/^\s*,\s*/);
              var max = eat(/^\d+/);
              eat(/^\s*\}/);
              return m.braces(+min, +max);
            }
            return m;
          };
          term = function () {
            // term = <nt> | literal | "[ " expression " ]"
            if (reader.readMatch("[ ") !== null) {
              var m = expr();
              eat(" ]");
              return m;
            }
            return Matcher.fromType(eat(/^[^ ?*+#{]+/));
          };
          result = expr();
          if (!reader.eof()) {
            throw new SyntaxError("Expected end of string", reader.getLine(), reader.getCol());
          }
          return result;
        };

        /**
         * Convert a string to a matcher (parsing simple alternations),
         * or do nothing if the argument is already a matcher.
         */
        Matcher.cast = function (m) {
          if (m instanceof Matcher) {
            return m;
          }
          return Matcher.parse(m);
        };

        /**
         * Create a matcher for a single type.
         */
        Matcher.fromType = function (type) {
          // Late require of ValidationTypes to break a dependency cycle.
          var ValidationTypes = require("./ValidationTypes");
          return new Matcher(function (expression) {
            return expression.hasNext() && ValidationTypes.isType(expression, type);
          }, type);
        };

        /**
         * Create a matcher for one or more juxtaposed words, which all must
         * occur, in the given order.
         */
        Matcher.seq = function () {
          var ms = Array.prototype.slice.call(arguments).map(Matcher.cast);
          if (ms.length === 1) {
            return ms[0];
          }
          return new Matcher(function (expression) {
            var i,
              result = true;
            for (i = 0; result && i < ms.length; i++) {
              result = ms[i].match(expression);
            }
            return result;
          }, function (prec) {
            var p = Matcher.prec.SEQ;
            var s = ms.map(function (m) {
              return m.toString(p);
            }).join(" ");
            if (prec > p) {
              s = "[ " + s + " ]";
            }
            return s;
          });
        };

        /**
         * Create a matcher for one or more alternatives, where exactly one
         * must occur.
         */
        Matcher.alt = function () {
          var ms = Array.prototype.slice.call(arguments).map(Matcher.cast);
          if (ms.length === 1) {
            return ms[0];
          }
          return new Matcher(function (expression) {
            var i,
              result = false;
            for (i = 0; !result && i < ms.length; i++) {
              result = ms[i].match(expression);
            }
            return result;
          }, function (prec) {
            var p = Matcher.prec.ALT;
            var s = ms.map(function (m) {
              return m.toString(p);
            }).join(" | ");
            if (prec > p) {
              s = "[ " + s + " ]";
            }
            return s;
          });
        };

        /**
         * Create a matcher for two or more options.  This implements the
         * double bar (||) and double ampersand (&&) operators, as well as
         * variants of && where some of the alternatives are optional.
         * This will backtrack through even successful matches to try to
         * maximize the number of items matched.
         */
        Matcher.many = function (required) {
          var ms = Array.prototype.slice.call(arguments, 1).reduce(function (acc, v) {
            if (v.expand) {
              // Insert all of the options for the given complex rule as
              // individual options.
              var ValidationTypes = require("./ValidationTypes");
              acc.push.apply(acc, ValidationTypes.complex[v.expand].options);
            } else {
              acc.push(Matcher.cast(v));
            }
            return acc;
          }, []);
          if (required === true) {
            required = ms.map(function () {
              return true;
            });
          }
          var result = new Matcher(function (expression) {
            var seen = [],
              max = 0,
              pass = 0;
            var success = function (matchCount) {
              if (pass === 0) {
                max = Math.max(matchCount, max);
                return matchCount === ms.length;
              } else {
                return matchCount === max;
              }
            };
            var tryMatch = function (matchCount) {
              for (var i = 0; i < ms.length; i++) {
                if (seen[i]) {
                  continue;
                }
                expression.mark();
                if (ms[i].match(expression)) {
                  seen[i] = true;
                  // Increase matchCount iff this was a required element
                  // (or if all the elements are optional)
                  if (tryMatch(matchCount + (required === false || required[i] ? 1 : 0))) {
                    expression.drop();
                    return true;
                  }
                  // Backtrack: try *not* matching using this rule, and
                  // let's see if it leads to a better overall match.
                  expression.restore();
                  seen[i] = false;
                } else {
                  expression.drop();
                }
              }
              return success(matchCount);
            };
            if (!tryMatch(0)) {
              // Couldn't get a complete match, retrace our steps to make the
              // match with the maximum # of required elements.
              pass++;
              tryMatch(0);
            }
            if (required === false) {
              return max > 0;
            }
            // Use finer-grained specification of which matchers are required.
            for (var i = 0; i < ms.length; i++) {
              if (required[i] && !seen[i]) {
                return false;
              }
            }
            return true;
          }, function (prec) {
            var p = required === false ? Matcher.prec.OROR : Matcher.prec.ANDAND;
            var s = ms.map(function (m, i) {
              if (required !== false && !required[i]) {
                return m.toString(Matcher.prec.MOD) + "?";
              }
              return m.toString(p);
            }).join(required === false ? " || " : " && ");
            if (prec > p) {
              s = "[ " + s + " ]";
            }
            return s;
          });
          result.options = ms;
          return result;
        };

        /**
         * Create a matcher for two or more options, where all options are
         * mandatory but they may appear in any order.
         */
        Matcher.andand = function () {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(true);
          return Matcher.many.apply(Matcher, args);
        };

        /**
         * Create a matcher for two or more options, where options are
         * optional and may appear in any order, but at least one must be
         * present.
         */
        Matcher.oror = function () {
          var args = Array.prototype.slice.call(arguments);
          args.unshift(false);
          return Matcher.many.apply(Matcher, args);
        };

        /** Instance methods on Matchers. */
        Matcher.prototype = {
          constructor: Matcher,
          // These are expected to be overridden in every instance.
          match: function () {
            throw new Error("unimplemented");
          },
          toString: function () {
            throw new Error("unimplemented");
          },
          // This returns a standalone function to do the matching.
          func: function () {
            return this.match.bind(this);
          },
          // Basic combinators
          then: function (m) {
            return Matcher.seq(this, m);
          },
          or: function (m) {
            return Matcher.alt(this, m);
          },
          andand: function (m) {
            return Matcher.many(true, this, m);
          },
          oror: function (m) {
            return Matcher.many(false, this, m);
          },
          // Component value multipliers
          star: function () {
            return this.braces(0, Infinity, "*");
          },
          plus: function () {
            return this.braces(1, Infinity, "+");
          },
          question: function () {
            return this.braces(0, 1, "?");
          },
          hash: function () {
            return this.braces(1, Infinity, "#", Matcher.cast(","));
          },
          braces: function (min, max, marker, optSep) {
            var m1 = this,
              m2 = optSep ? optSep.then(this) : this;
            if (!marker) {
              marker = "{" + min + "," + max + "}";
            }
            return new Matcher(function (expression) {
              var result = true,
                i;
              for (i = 0; i < max; i++) {
                if (i > 0 && optSep) {
                  result = m2.match(expression);
                } else {
                  result = m1.match(expression);
                }
                if (!result) {
                  break;
                }
              }
              return i >= min;
            }, function () {
              return m1.toString(Matcher.prec.MOD) + marker;
            });
          }
        };
      }, {
        "../util/StringReader": 24,
        "../util/SyntaxError": 25,
        "./ValidationTypes": 21
      }],
      4: [function (require, module, exports) {
        "use strict";

        module.exports = MediaFeature;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents a media feature, such as max-width:500.
         * @namespace parserlib.css
         * @class MediaFeature
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {SyntaxUnit} name The name of the feature.
         * @param {SyntaxUnit} value The value of the feature or null if none.
         */
        function MediaFeature(name, value) {
          SyntaxUnit.call(this, "(" + name + (value !== null ? ":" + value : "") + ")", name.startLine, name.startCol, Parser.MEDIA_FEATURE_TYPE);

          /**
           * The name of the media feature
           * @type String
           * @property name
           */
          this.name = name;

          /**
           * The value for the feature or null if there is none.
           * @type SyntaxUnit
           * @property value
           */
          this.value = value;
        }
        MediaFeature.prototype = new SyntaxUnit();
        MediaFeature.prototype.constructor = MediaFeature;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      5: [function (require, module, exports) {
        "use strict";

        module.exports = MediaQuery;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents an individual media query.
         * @namespace parserlib.css
         * @class MediaQuery
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {String} modifier The modifier "not" or "only" (or null).
         * @param {String} mediaType The type of media (i.e., "print").
         * @param {Array} parts Array of selectors parts making up this selector.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function MediaQuery(modifier, mediaType, features, line, col) {
          SyntaxUnit.call(this, (modifier ? modifier + " " : "") + (mediaType ? mediaType : "") + (mediaType && features.length > 0 ? " and " : "") + features.join(" and "), line, col, Parser.MEDIA_QUERY_TYPE);

          /**
           * The media modifier ("not" or "only")
           * @type String
           * @property modifier
           */
          this.modifier = modifier;

          /**
           * The mediaType (i.e., "print")
           * @type String
           * @property mediaType
           */
          this.mediaType = mediaType;

          /**
           * The parts that make up the selector.
           * @type Array
           * @property features
           */
          this.features = features;
        }
        MediaQuery.prototype = new SyntaxUnit();
        MediaQuery.prototype.constructor = MediaQuery;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      6: [function (require, module, exports) {
        "use strict";

        module.exports = Parser;
        var EventTarget = require("../util/EventTarget");
        var SyntaxError = require("../util/SyntaxError");
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Combinator = require("./Combinator");
        var MediaFeature = require("./MediaFeature");
        var MediaQuery = require("./MediaQuery");
        var PropertyName = require("./PropertyName");
        var PropertyValue = require("./PropertyValue");
        var PropertyValuePart = require("./PropertyValuePart");
        var Selector = require("./Selector");
        var SelectorPart = require("./SelectorPart");
        var SelectorSubPart = require("./SelectorSubPart");
        var TokenStream = require("./TokenStream");
        var Tokens = require("./Tokens");
        var Validation = require("./Validation");

        /**
         * A CSS3 parser.
         * @namespace parserlib.css
         * @class Parser
         * @constructor
         * @param {Object} options (Optional) Various options for the parser:
         *      starHack (true|false) to allow IE6 star hack as valid,
         *      underscoreHack (true|false) to interpret leading underscores
         *      as IE6-7 targeting for known properties, ieFilters (true|false)
         *      to indicate that IE < 8 filters should be accepted and not throw
         *      syntax errors.
         */
        function Parser(options) {
          //inherit event functionality
          EventTarget.call(this);
          this.options = options || {};
          this._tokenStream = null;
        }

        //Static constants
        Parser.DEFAULT_TYPE = 0;
        Parser.COMBINATOR_TYPE = 1;
        Parser.MEDIA_FEATURE_TYPE = 2;
        Parser.MEDIA_QUERY_TYPE = 3;
        Parser.PROPERTY_NAME_TYPE = 4;
        Parser.PROPERTY_VALUE_TYPE = 5;
        Parser.PROPERTY_VALUE_PART_TYPE = 6;
        Parser.SELECTOR_TYPE = 7;
        Parser.SELECTOR_PART_TYPE = 8;
        Parser.SELECTOR_SUB_PART_TYPE = 9;
        Parser.prototype = function () {
          var proto = new EventTarget(),
            //new prototype
            prop,
            additions = {
              __proto__: null,
              //restore constructor
              constructor: Parser,
              //instance constants - yuck
              DEFAULT_TYPE: 0,
              COMBINATOR_TYPE: 1,
              MEDIA_FEATURE_TYPE: 2,
              MEDIA_QUERY_TYPE: 3,
              PROPERTY_NAME_TYPE: 4,
              PROPERTY_VALUE_TYPE: 5,
              PROPERTY_VALUE_PART_TYPE: 6,
              SELECTOR_TYPE: 7,
              SELECTOR_PART_TYPE: 8,
              SELECTOR_SUB_PART_TYPE: 9,
              //-----------------------------------------------------------------
              // Grammar
              //-----------------------------------------------------------------

              _stylesheet: function () {
                /*
                 * stylesheet
                 *  : [ CHARSET_SYM S* STRING S* ';' ]?
                 *    [S|CDO|CDC]* [ import [S|CDO|CDC]* ]*
                 *    [ namespace [S|CDO|CDC]* ]*
                 *    [ [ ruleset | media | page | font_face | keyframes_rule | supports_rule ] [S|CDO|CDC]* ]*
                 *  ;
                 */

                var tokenStream = this._tokenStream,
                  count,
                  token,
                  tt;
                this.fire("startstylesheet");

                //try to read character set
                this._charset();
                this._skipCruft();

                //try to read imports - may be more than one
                while (tokenStream.peek() === Tokens.IMPORT_SYM) {
                  this._import();
                  this._skipCruft();
                }

                //try to read namespaces - may be more than one
                while (tokenStream.peek() === Tokens.NAMESPACE_SYM) {
                  this._namespace();
                  this._skipCruft();
                }

                //get the next token
                tt = tokenStream.peek();

                //try to read the rest
                while (tt > Tokens.EOF) {
                  try {
                    switch (tt) {
                      case Tokens.MEDIA_SYM:
                        this._media();
                        this._skipCruft();
                        break;
                      case Tokens.PAGE_SYM:
                        this._page();
                        this._skipCruft();
                        break;
                      case Tokens.FONT_FACE_SYM:
                        this._font_face();
                        this._skipCruft();
                        break;
                      case Tokens.KEYFRAMES_SYM:
                        this._keyframes();
                        this._skipCruft();
                        break;
                      case Tokens.VIEWPORT_SYM:
                        this._viewport();
                        this._skipCruft();
                        break;
                      case Tokens.DOCUMENT_SYM:
                        this._document();
                        this._skipCruft();
                        break;
                      case Tokens.SUPPORTS_SYM:
                        this._supports();
                        this._skipCruft();
                        break;
                      case Tokens.UNKNOWN_SYM:
                        //unknown @ rule
                        tokenStream.get();
                        if (!this.options.strict) {
                          //fire error event
                          this.fire({
                            type: "error",
                            error: null,
                            message: "Unknown @ rule: " + tokenStream.LT(0).value + ".",
                            line: tokenStream.LT(0).startLine,
                            col: tokenStream.LT(0).startCol
                          });

                          //skip braces
                          count = 0;
                          while (tokenStream.advance([Tokens.LBRACE, Tokens.RBRACE]) === Tokens.LBRACE) {
                            count++; //keep track of nesting depth
                          }

                          while (count) {
                            tokenStream.advance([Tokens.RBRACE]);
                            count--;
                          }
                        } else {
                          //not a syntax error, rethrow it
                          throw new SyntaxError("Unknown @ rule.", tokenStream.LT(0).startLine, tokenStream.LT(0).startCol);
                        }
                        break;
                      case Tokens.S:
                        this._readWhitespace();
                        break;
                      default:
                        if (!this._ruleset()) {
                          //error handling for known issues
                          switch (tt) {
                            case Tokens.CHARSET_SYM:
                              token = tokenStream.LT(1);
                              this._charset(false);
                              throw new SyntaxError("@charset not allowed here.", token.startLine, token.startCol);
                            case Tokens.IMPORT_SYM:
                              token = tokenStream.LT(1);
                              this._import(false);
                              throw new SyntaxError("@import not allowed here.", token.startLine, token.startCol);
                            case Tokens.NAMESPACE_SYM:
                              token = tokenStream.LT(1);
                              this._namespace(false);
                              throw new SyntaxError("@namespace not allowed here.", token.startLine, token.startCol);
                            default:
                              tokenStream.get(); //get the last token
                              this._unexpectedToken(tokenStream.token());
                          }
                        }
                    }
                  } catch (ex) {
                    if (ex instanceof SyntaxError && !this.options.strict) {
                      this.fire({
                        type: "error",
                        error: ex,
                        message: ex.message,
                        line: ex.line,
                        col: ex.col
                      });
                    } else {
                      throw ex;
                    }
                  }
                  tt = tokenStream.peek();
                }
                if (tt !== Tokens.EOF) {
                  this._unexpectedToken(tokenStream.token());
                }
                this.fire("endstylesheet");
              },
              _charset: function (emit) {
                var tokenStream = this._tokenStream,
                  charset,
                  token,
                  line,
                  col;
                if (tokenStream.match(Tokens.CHARSET_SYM)) {
                  line = tokenStream.token().startLine;
                  col = tokenStream.token().startCol;
                  this._readWhitespace();
                  tokenStream.mustMatch(Tokens.STRING);
                  token = tokenStream.token();
                  charset = token.value;
                  this._readWhitespace();
                  tokenStream.mustMatch(Tokens.SEMICOLON);
                  if (emit !== false) {
                    this.fire({
                      type: "charset",
                      charset: charset,
                      line: line,
                      col: col
                    });
                  }
                }
              },
              _import: function (emit) {
                /*
                 * import
                 *   : IMPORT_SYM S*
                 *    [STRING|URI] S* media_query_list? ';' S*
                 */

                var tokenStream = this._tokenStream,
                  uri,
                  importToken,
                  mediaList = [];

                //read import symbol
                tokenStream.mustMatch(Tokens.IMPORT_SYM);
                importToken = tokenStream.token();
                this._readWhitespace();
                tokenStream.mustMatch([Tokens.STRING, Tokens.URI]);

                //grab the URI value
                uri = tokenStream.token().value.replace(/^(?:url\()?["']?([^"']+?)["']?\)?$/, "$1");
                this._readWhitespace();
                mediaList = this._media_query_list();

                //must end with a semicolon
                tokenStream.mustMatch(Tokens.SEMICOLON);
                this._readWhitespace();
                if (emit !== false) {
                  this.fire({
                    type: "import",
                    uri: uri,
                    media: mediaList,
                    line: importToken.startLine,
                    col: importToken.startCol
                  });
                }
              },
              _namespace: function (emit) {
                /*
                 * namespace
                 *   : NAMESPACE_SYM S* [namespace_prefix S*]? [STRING|URI] S* ';' S*
                 */

                var tokenStream = this._tokenStream,
                  line,
                  col,
                  prefix,
                  uri;

                //read import symbol
                tokenStream.mustMatch(Tokens.NAMESPACE_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;
                this._readWhitespace();

                //it's a namespace prefix - no _namespace_prefix() method because it's just an IDENT
                if (tokenStream.match(Tokens.IDENT)) {
                  prefix = tokenStream.token().value;
                  this._readWhitespace();
                }
                tokenStream.mustMatch([Tokens.STRING, Tokens.URI]);
                /*if (!tokenStream.match(Tokens.STRING)){
                    tokenStream.mustMatch(Tokens.URI);
                }*/

                //grab the URI value
                uri = tokenStream.token().value.replace(/(?:url\()?["']([^"']+)["']\)?/, "$1");
                this._readWhitespace();

                //must end with a semicolon
                tokenStream.mustMatch(Tokens.SEMICOLON);
                this._readWhitespace();
                if (emit !== false) {
                  this.fire({
                    type: "namespace",
                    prefix: prefix,
                    uri: uri,
                    line: line,
                    col: col
                  });
                }
              },
              _supports: function (emit) {
                /*
                 * supports_rule
                 *  : SUPPORTS_SYM S* supports_condition S* group_rule_body
                 *  ;
                 */
                var tokenStream = this._tokenStream,
                  line,
                  col;
                if (tokenStream.match(Tokens.SUPPORTS_SYM)) {
                  line = tokenStream.token().startLine;
                  col = tokenStream.token().startCol;
                  this._readWhitespace();
                  this._supports_condition();
                  this._readWhitespace();
                  tokenStream.mustMatch(Tokens.LBRACE);
                  this._readWhitespace();
                  if (emit !== false) {
                    this.fire({
                      type: "startsupports",
                      line: line,
                      col: col
                    });
                  }
                  while (true) {
                    if (!this._ruleset()) {
                      break;
                    }
                  }
                  tokenStream.mustMatch(Tokens.RBRACE);
                  this._readWhitespace();
                  this.fire({
                    type: "endsupports",
                    line: line,
                    col: col
                  });
                }
              },
              _supports_condition: function () {
                /*
                 * supports_condition
                 *  : supports_negation | supports_conjunction | supports_disjunction |
                 *    supports_condition_in_parens
                 *  ;
                 */
                var tokenStream = this._tokenStream,
                  ident;
                if (tokenStream.match(Tokens.IDENT)) {
                  ident = tokenStream.token().value.toLowerCase();
                  if (ident === "not") {
                    tokenStream.mustMatch(Tokens.S);
                    this._supports_condition_in_parens();
                  } else {
                    tokenStream.unget();
                  }
                } else {
                  this._supports_condition_in_parens();
                  this._readWhitespace();
                  while (tokenStream.peek() === Tokens.IDENT) {
                    ident = tokenStream.LT(1).value.toLowerCase();
                    if (ident === "and" || ident === "or") {
                      tokenStream.mustMatch(Tokens.IDENT);
                      this._readWhitespace();
                      this._supports_condition_in_parens();
                      this._readWhitespace();
                    }
                  }
                }
              },
              _supports_condition_in_parens: function () {
                /*
                 * supports_condition_in_parens
                 *  : ( '(' S* supports_condition S* ')' ) | supports_declaration_condition |
                 *    general_enclosed
                 *  ;
                 */
                var tokenStream = this._tokenStream,
                  ident;
                if (tokenStream.match(Tokens.LPAREN)) {
                  this._readWhitespace();
                  if (tokenStream.match(Tokens.IDENT)) {
                    // look ahead for not keyword, if not given, continue with declaration condition.
                    ident = tokenStream.token().value.toLowerCase();
                    if (ident === "not") {
                      this._readWhitespace();
                      this._supports_condition();
                      this._readWhitespace();
                      tokenStream.mustMatch(Tokens.RPAREN);
                    } else {
                      tokenStream.unget();
                      this._supports_declaration_condition(false);
                    }
                  } else {
                    this._supports_condition();
                    this._readWhitespace();
                    tokenStream.mustMatch(Tokens.RPAREN);
                  }
                } else {
                  this._supports_declaration_condition();
                }
              },
              _supports_declaration_condition: function (requireStartParen) {
                /*
                 * supports_declaration_condition
                 *  : '(' S* declaration ')'
                 *  ;
                 */
                var tokenStream = this._tokenStream;
                if (requireStartParen !== false) {
                  tokenStream.mustMatch(Tokens.LPAREN);
                }
                this._readWhitespace();
                this._declaration();
                tokenStream.mustMatch(Tokens.RPAREN);
              },
              _media: function () {
                /*
                 * media
                 *   : MEDIA_SYM S* media_query_list S* '{' S* ruleset* '}' S*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  line,
                  col,
                  mediaList; //       = [];

                //look for @media
                tokenStream.mustMatch(Tokens.MEDIA_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;
                this._readWhitespace();
                mediaList = this._media_query_list();
                tokenStream.mustMatch(Tokens.LBRACE);
                this._readWhitespace();
                this.fire({
                  type: "startmedia",
                  media: mediaList,
                  line: line,
                  col: col
                });
                while (true) {
                  if (tokenStream.peek() === Tokens.PAGE_SYM) {
                    this._page();
                  } else if (tokenStream.peek() === Tokens.FONT_FACE_SYM) {
                    this._font_face();
                  } else if (tokenStream.peek() === Tokens.VIEWPORT_SYM) {
                    this._viewport();
                  } else if (tokenStream.peek() === Tokens.DOCUMENT_SYM) {
                    this._document();
                  } else if (tokenStream.peek() === Tokens.SUPPORTS_SYM) {
                    this._supports();
                  } else if (tokenStream.peek() === Tokens.MEDIA_SYM) {
                    this._media();
                  } else if (!this._ruleset()) {
                    break;
                  }
                }
                tokenStream.mustMatch(Tokens.RBRACE);
                this._readWhitespace();
                this.fire({
                  type: "endmedia",
                  media: mediaList,
                  line: line,
                  col: col
                });
              },
              //CSS3 Media Queries
              _media_query_list: function () {
                /*
                 * media_query_list
                 *   : S* [media_query [ ',' S* media_query ]* ]?
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  mediaList = [];
                this._readWhitespace();
                if (tokenStream.peek() === Tokens.IDENT || tokenStream.peek() === Tokens.LPAREN) {
                  mediaList.push(this._media_query());
                }
                while (tokenStream.match(Tokens.COMMA)) {
                  this._readWhitespace();
                  mediaList.push(this._media_query());
                }
                return mediaList;
              },
              /*
               * Note: "expression" in the grammar maps to the _media_expression
               * method.
                */
              _media_query: function () {
                /*
                 * media_query
                 *   : [ONLY | NOT]? S* media_type S* [ AND S* expression ]*
                 *   | expression [ AND S* expression ]*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  type = null,
                  ident = null,
                  token = null,
                  expressions = [];
                if (tokenStream.match(Tokens.IDENT)) {
                  ident = tokenStream.token().value.toLowerCase();

                  //since there's no custom tokens for these, need to manually check
                  if (ident !== "only" && ident !== "not") {
                    tokenStream.unget();
                    ident = null;
                  } else {
                    token = tokenStream.token();
                  }
                }
                this._readWhitespace();
                if (tokenStream.peek() === Tokens.IDENT) {
                  type = this._media_type();
                  if (token === null) {
                    token = tokenStream.token();
                  }
                } else if (tokenStream.peek() === Tokens.LPAREN) {
                  if (token === null) {
                    token = tokenStream.LT(1);
                  }
                  expressions.push(this._media_expression());
                }
                if (type === null && expressions.length === 0) {
                  return null;
                } else {
                  this._readWhitespace();
                  while (tokenStream.match(Tokens.IDENT)) {
                    if (tokenStream.token().value.toLowerCase() !== "and") {
                      this._unexpectedToken(tokenStream.token());
                    }
                    this._readWhitespace();
                    expressions.push(this._media_expression());
                  }
                }
                return new MediaQuery(ident, type, expressions, token.startLine, token.startCol);
              },
              //CSS3 Media Queries
              _media_type: function () {
                /*
                 * media_type
                 *   : IDENT
                 *   ;
                 */
                return this._media_feature();
              },
              /**
               * Note: in CSS3 Media Queries, this is called "expression".
               * Renamed here to avoid conflict with CSS3 Selectors
               * definition of "expression". Also note that "expr" in the
               * grammar now maps to "expression" from CSS3 selectors.
               * @method _media_expression
               * @private
               */
              _media_expression: function () {
                /*
                 * expression
                 *  : '(' S* media_feature S* [ ':' S* expr ]? ')' S*
                 *  ;
                 */
                var tokenStream = this._tokenStream,
                  feature = null,
                  token,
                  expression = null;
                tokenStream.mustMatch(Tokens.LPAREN);
                feature = this._media_feature();
                this._readWhitespace();
                if (tokenStream.match(Tokens.COLON)) {
                  this._readWhitespace();
                  token = tokenStream.LT(1);
                  expression = this._expression();
                }
                tokenStream.mustMatch(Tokens.RPAREN);
                this._readWhitespace();
                return new MediaFeature(feature, expression ? new SyntaxUnit(expression, token.startLine, token.startCol) : null);
              },
              //CSS3 Media Queries
              _media_feature: function () {
                /*
                 * media_feature
                 *   : IDENT
                 *   ;
                 */
                var tokenStream = this._tokenStream;
                this._readWhitespace();
                tokenStream.mustMatch(Tokens.IDENT);
                return SyntaxUnit.fromToken(tokenStream.token());
              },
              //CSS3 Paged Media
              _page: function () {
                /*
                 * page:
                 *    PAGE_SYM S* IDENT? pseudo_page? S*
                 *    '{' S* [ declaration | margin ]? [ ';' S* [ declaration | margin ]? ]* '}' S*
                 *    ;
                 */
                var tokenStream = this._tokenStream,
                  line,
                  col,
                  identifier = null,
                  pseudoPage = null;

                //look for @page
                tokenStream.mustMatch(Tokens.PAGE_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;
                this._readWhitespace();
                if (tokenStream.match(Tokens.IDENT)) {
                  identifier = tokenStream.token().value;

                  //The value 'auto' may not be used as a page name and MUST be treated as a syntax error.
                  if (identifier.toLowerCase() === "auto") {
                    this._unexpectedToken(tokenStream.token());
                  }
                }

                //see if there's a colon upcoming
                if (tokenStream.peek() === Tokens.COLON) {
                  pseudoPage = this._pseudo_page();
                }
                this._readWhitespace();
                this.fire({
                  type: "startpage",
                  id: identifier,
                  pseudo: pseudoPage,
                  line: line,
                  col: col
                });
                this._readDeclarations(true, true);
                this.fire({
                  type: "endpage",
                  id: identifier,
                  pseudo: pseudoPage,
                  line: line,
                  col: col
                });
              },
              //CSS3 Paged Media
              _margin: function () {
                /*
                 * margin :
                 *    margin_sym S* '{' declaration [ ';' S* declaration? ]* '}' S*
                 *    ;
                 */
                var tokenStream = this._tokenStream,
                  line,
                  col,
                  marginSym = this._margin_sym();
                if (marginSym) {
                  line = tokenStream.token().startLine;
                  col = tokenStream.token().startCol;
                  this.fire({
                    type: "startpagemargin",
                    margin: marginSym,
                    line: line,
                    col: col
                  });
                  this._readDeclarations(true);
                  this.fire({
                    type: "endpagemargin",
                    margin: marginSym,
                    line: line,
                    col: col
                  });
                  return true;
                } else {
                  return false;
                }
              },
              //CSS3 Paged Media
              _margin_sym: function () {
                /*
                 * margin_sym :
                 *    TOPLEFTCORNER_SYM |
                 *    TOPLEFT_SYM |
                 *    TOPCENTER_SYM |
                 *    TOPRIGHT_SYM |
                 *    TOPRIGHTCORNER_SYM |
                 *    BOTTOMLEFTCORNER_SYM |
                 *    BOTTOMLEFT_SYM |
                 *    BOTTOMCENTER_SYM |
                 *    BOTTOMRIGHT_SYM |
                 *    BOTTOMRIGHTCORNER_SYM |
                 *    LEFTTOP_SYM |
                 *    LEFTMIDDLE_SYM |
                 *    LEFTBOTTOM_SYM |
                 *    RIGHTTOP_SYM |
                 *    RIGHTMIDDLE_SYM |
                 *    RIGHTBOTTOM_SYM
                 *    ;
                 */

                var tokenStream = this._tokenStream;
                if (tokenStream.match([Tokens.TOPLEFTCORNER_SYM, Tokens.TOPLEFT_SYM, Tokens.TOPCENTER_SYM, Tokens.TOPRIGHT_SYM, Tokens.TOPRIGHTCORNER_SYM, Tokens.BOTTOMLEFTCORNER_SYM, Tokens.BOTTOMLEFT_SYM, Tokens.BOTTOMCENTER_SYM, Tokens.BOTTOMRIGHT_SYM, Tokens.BOTTOMRIGHTCORNER_SYM, Tokens.LEFTTOP_SYM, Tokens.LEFTMIDDLE_SYM, Tokens.LEFTBOTTOM_SYM, Tokens.RIGHTTOP_SYM, Tokens.RIGHTMIDDLE_SYM, Tokens.RIGHTBOTTOM_SYM])) {
                  return SyntaxUnit.fromToken(tokenStream.token());
                } else {
                  return null;
                }
              },
              _pseudo_page: function () {
                /*
                 * pseudo_page
                 *   : ':' IDENT
                 *   ;
                 */

                var tokenStream = this._tokenStream;
                tokenStream.mustMatch(Tokens.COLON);
                tokenStream.mustMatch(Tokens.IDENT);

                //TODO: CSS3 Paged Media says only "left", "center", and "right" are allowed

                return tokenStream.token().value;
              },
              _font_face: function () {
                /*
                 * font_face
                 *   : FONT_FACE_SYM S*
                 *     '{' S* declaration [ ';' S* declaration ]* '}' S*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  line,
                  col;

                //look for @page
                tokenStream.mustMatch(Tokens.FONT_FACE_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;
                this._readWhitespace();
                this.fire({
                  type: "startfontface",
                  line: line,
                  col: col
                });
                this._readDeclarations(true);
                this.fire({
                  type: "endfontface",
                  line: line,
                  col: col
                });
              },
              _viewport: function () {
                /*
                 * viewport
                 *   : VIEWPORT_SYM S*
                 *     '{' S* declaration? [ ';' S* declaration? ]* '}' S*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  line,
                  col;
                tokenStream.mustMatch(Tokens.VIEWPORT_SYM);
                line = tokenStream.token().startLine;
                col = tokenStream.token().startCol;
                this._readWhitespace();
                this.fire({
                  type: "startviewport",
                  line: line,
                  col: col
                });
                this._readDeclarations(true);
                this.fire({
                  type: "endviewport",
                  line: line,
                  col: col
                });
              },
              _document: function () {
                /*
                 * document
                 *   : DOCUMENT_SYM S*
                 *     _document_function [ ',' S* _document_function ]* S*
                 *     '{' S* ruleset* '}'
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  token,
                  functions = [],
                  prefix = "";
                tokenStream.mustMatch(Tokens.DOCUMENT_SYM);
                token = tokenStream.token();
                if (/^@\-([^\-]+)\-/.test(token.value)) {
                  prefix = RegExp.$1;
                }
                this._readWhitespace();
                functions.push(this._document_function());
                while (tokenStream.match(Tokens.COMMA)) {
                  this._readWhitespace();
                  functions.push(this._document_function());
                }
                tokenStream.mustMatch(Tokens.LBRACE);
                this._readWhitespace();
                this.fire({
                  type: "startdocument",
                  functions: functions,
                  prefix: prefix,
                  line: token.startLine,
                  col: token.startCol
                });
                var ok = true;
                while (ok) {
                  switch (tokenStream.peek()) {
                    case Tokens.PAGE_SYM:
                      this._page();
                      break;
                    case Tokens.FONT_FACE_SYM:
                      this._font_face();
                      break;
                    case Tokens.VIEWPORT_SYM:
                      this._viewport();
                      break;
                    case Tokens.MEDIA_SYM:
                      this._media();
                      break;
                    case Tokens.KEYFRAMES_SYM:
                      this._keyframes();
                      break;
                    case Tokens.DOCUMENT_SYM:
                      this._document();
                      break;
                    default:
                      ok = Boolean(this._ruleset());
                  }
                }
                tokenStream.mustMatch(Tokens.RBRACE);
                token = tokenStream.token();
                this._readWhitespace();
                this.fire({
                  type: "enddocument",
                  functions: functions,
                  prefix: prefix,
                  line: token.startLine,
                  col: token.startCol
                });
              },
              _document_function: function () {
                /*
                 * document_function
                 *   : function | URI S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  value;
                if (tokenStream.match(Tokens.URI)) {
                  value = tokenStream.token().value;
                  this._readWhitespace();
                } else {
                  value = this._function();
                }
                return value;
              },
              _operator: function (inFunction) {
                /*
                 * operator (outside function)
                 *  : '/' S* | ',' S* | /( empty )/
                 * operator (inside function)
                 *  : '/' S* | '+' S* | '*' S* | '-' S* /( empty )/
                 *  ;
                 */

                var tokenStream = this._tokenStream,
                  token = null;
                if (tokenStream.match([Tokens.SLASH, Tokens.COMMA]) || inFunction && tokenStream.match([Tokens.PLUS, Tokens.STAR, Tokens.MINUS])) {
                  token = tokenStream.token();
                  this._readWhitespace();
                }
                return token ? PropertyValuePart.fromToken(token) : null;
              },
              _combinator: function () {
                /*
                 * combinator
                 *  : PLUS S* | GREATER S* | TILDE S* | S+
                 *  ;
                 */

                var tokenStream = this._tokenStream,
                  value = null,
                  token;
                if (tokenStream.match([Tokens.PLUS, Tokens.GREATER, Tokens.TILDE])) {
                  token = tokenStream.token();
                  value = new Combinator(token.value, token.startLine, token.startCol);
                  this._readWhitespace();
                }
                return value;
              },
              _unary_operator: function () {
                /*
                 * unary_operator
                 *  : '-' | '+'
                 *  ;
                 */

                var tokenStream = this._tokenStream;
                if (tokenStream.match([Tokens.MINUS, Tokens.PLUS])) {
                  return tokenStream.token().value;
                } else {
                  return null;
                }
              },
              _property: function () {
                /*
                 * property
                 *   : IDENT S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  value = null,
                  hack = null,
                  tokenValue,
                  token,
                  line,
                  col;

                //check for star hack - throws error if not allowed
                if (tokenStream.peek() === Tokens.STAR && this.options.starHack) {
                  tokenStream.get();
                  token = tokenStream.token();
                  hack = token.value;
                  line = token.startLine;
                  col = token.startCol;
                }
                if (tokenStream.match(Tokens.IDENT)) {
                  token = tokenStream.token();
                  tokenValue = token.value;

                  //check for underscore hack - no error if not allowed because it's valid CSS syntax
                  if (tokenValue.charAt(0) === "_" && this.options.underscoreHack) {
                    hack = "_";
                    tokenValue = tokenValue.substring(1);
                  }
                  value = new PropertyName(tokenValue, hack, line || token.startLine, col || token.startCol);
                  this._readWhitespace();
                }
                return value;
              },
              //Augmented with CSS3 Selectors
              _ruleset: function () {
                /*
                 * ruleset
                 *   : selectors_group
                 *     '{' S* declaration? [ ';' S* declaration? ]* '}' S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  tt,
                  selectors;

                /*
                 * Error Recovery: If even a single selector fails to parse,
                 * then the entire ruleset should be thrown away.
                 */
                try {
                  selectors = this._selectors_group();
                } catch (ex) {
                  if (ex instanceof SyntaxError && !this.options.strict) {
                    //fire error event
                    this.fire({
                      type: "error",
                      error: ex,
                      message: ex.message,
                      line: ex.line,
                      col: ex.col
                    });

                    //skip over everything until closing brace
                    tt = tokenStream.advance([Tokens.RBRACE]);
                    if (tt === Tokens.RBRACE) {
                      //if there's a right brace, the rule is finished so don't do anything
                    } else {
                      //otherwise, rethrow the error because it wasn't handled properly
                      throw ex;
                    }
                  } else {
                    //not a syntax error, rethrow it
                    throw ex;
                  }

                  //trigger parser to continue
                  return true;
                }

                //if it got here, all selectors parsed
                if (selectors) {
                  this.fire({
                    type: "startrule",
                    selectors: selectors,
                    line: selectors[0].line,
                    col: selectors[0].col
                  });
                  this._readDeclarations(true);
                  this.fire({
                    type: "endrule",
                    selectors: selectors,
                    line: selectors[0].line,
                    col: selectors[0].col
                  });
                }
                return selectors;
              },
              //CSS3 Selectors
              _selectors_group: function () {
                /*
                 * selectors_group
                 *   : selector [ COMMA S* selector ]*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  selectors = [],
                  selector;
                selector = this._selector();
                if (selector !== null) {
                  selectors.push(selector);
                  while (tokenStream.match(Tokens.COMMA)) {
                    this._readWhitespace();
                    selector = this._selector();
                    if (selector !== null) {
                      selectors.push(selector);
                    } else {
                      this._unexpectedToken(tokenStream.LT(1));
                    }
                  }
                }
                return selectors.length ? selectors : null;
              },
              //CSS3 Selectors
              _selector: function () {
                /*
                 * selector
                 *   : simple_selector_sequence [ combinator simple_selector_sequence ]*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  selector = [],
                  nextSelector = null,
                  combinator = null,
                  ws = null;

                //if there's no simple selector, then there's no selector
                nextSelector = this._simple_selector_sequence();
                if (nextSelector === null) {
                  return null;
                }
                selector.push(nextSelector);
                do {
                  //look for a combinator
                  combinator = this._combinator();
                  if (combinator !== null) {
                    selector.push(combinator);
                    nextSelector = this._simple_selector_sequence();

                    //there must be a next selector
                    if (nextSelector === null) {
                      this._unexpectedToken(tokenStream.LT(1));
                    } else {
                      //nextSelector is an instance of SelectorPart
                      selector.push(nextSelector);
                    }
                  } else {
                    //if there's not whitespace, we're done
                    if (this._readWhitespace()) {
                      //add whitespace separator
                      ws = new Combinator(tokenStream.token().value, tokenStream.token().startLine, tokenStream.token().startCol);

                      //combinator is not required
                      combinator = this._combinator();

                      //selector is required if there's a combinator
                      nextSelector = this._simple_selector_sequence();
                      if (nextSelector === null) {
                        if (combinator !== null) {
                          this._unexpectedToken(tokenStream.LT(1));
                        }
                      } else {
                        if (combinator !== null) {
                          selector.push(combinator);
                        } else {
                          selector.push(ws);
                        }
                        selector.push(nextSelector);
                      }
                    } else {
                      break;
                    }
                  }
                } while (true);
                return new Selector(selector, selector[0].line, selector[0].col);
              },
              //CSS3 Selectors
              _simple_selector_sequence: function () {
                /*
                 * simple_selector_sequence
                 *   : [ type_selector | universal ]
                 *     [ HASH | class | attrib | pseudo | negation ]*
                 *   | [ HASH | class | attrib | pseudo | negation ]+
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  //parts of a simple selector
                  elementName = null,
                  modifiers = [],
                  //complete selector text
                  selectorText = "",
                  //the different parts after the element name to search for
                  components = [
                  //HASH
                  function () {
                    return tokenStream.match(Tokens.HASH) ? new SelectorSubPart(tokenStream.token().value, "id", tokenStream.token().startLine, tokenStream.token().startCol) : null;
                  }, this._class, this._attrib, this._pseudo, this._negation],
                  i = 0,
                  len = components.length,
                  component = null,
                  line,
                  col;

                //get starting line and column for the selector
                line = tokenStream.LT(1).startLine;
                col = tokenStream.LT(1).startCol;
                elementName = this._type_selector();
                if (!elementName) {
                  elementName = this._universal();
                }
                if (elementName !== null) {
                  selectorText += elementName;
                }
                while (true) {
                  //whitespace means we're done
                  if (tokenStream.peek() === Tokens.S) {
                    break;
                  }

                  //check for each component
                  while (i < len && component === null) {
                    component = components[i++].call(this);
                  }
                  if (component === null) {
                    //we don't have a selector
                    if (selectorText === "") {
                      return null;
                    } else {
                      break;
                    }
                  } else {
                    i = 0;
                    modifiers.push(component);
                    selectorText += component.toString();
                    component = null;
                  }
                }
                return selectorText !== "" ? new SelectorPart(elementName, modifiers, selectorText, line, col) : null;
              },
              //CSS3 Selectors
              _type_selector: function () {
                /*
                 * type_selector
                 *   : [ namespace_prefix ]? element_name
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  ns = this._namespace_prefix(),
                  elementName = this._element_name();
                if (!elementName) {
                  /*
                   * Need to back out the namespace that was read due to both
                   * type_selector and universal reading namespace_prefix
                   * first. Kind of hacky, but only way I can figure out
                   * right now how to not change the grammar.
                   */
                  if (ns) {
                    tokenStream.unget();
                    if (ns.length > 1) {
                      tokenStream.unget();
                    }
                  }
                  return null;
                } else {
                  if (ns) {
                    elementName.text = ns + elementName.text;
                    elementName.col -= ns.length;
                  }
                  return elementName;
                }
              },
              //CSS3 Selectors
              _class: function () {
                /*
                 * class
                 *   : '.' IDENT
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  token;
                if (tokenStream.match(Tokens.DOT)) {
                  tokenStream.mustMatch(Tokens.IDENT);
                  token = tokenStream.token();
                  return new SelectorSubPart("." + token.value, "class", token.startLine, token.startCol - 1);
                } else {
                  return null;
                }
              },
              //CSS3 Selectors
              _element_name: function () {
                /*
                 * element_name
                 *   : IDENT
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  token;
                if (tokenStream.match(Tokens.IDENT)) {
                  token = tokenStream.token();
                  return new SelectorSubPart(token.value, "elementName", token.startLine, token.startCol);
                } else {
                  return null;
                }
              },
              //CSS3 Selectors
              _namespace_prefix: function () {
                /*
                 * namespace_prefix
                 *   : [ IDENT | '*' ]? '|'
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  value = "";

                //verify that this is a namespace prefix
                if (tokenStream.LA(1) === Tokens.PIPE || tokenStream.LA(2) === Tokens.PIPE) {
                  if (tokenStream.match([Tokens.IDENT, Tokens.STAR])) {
                    value += tokenStream.token().value;
                  }
                  tokenStream.mustMatch(Tokens.PIPE);
                  value += "|";
                }
                return value.length ? value : null;
              },
              //CSS3 Selectors
              _universal: function () {
                /*
                 * universal
                 *   : [ namespace_prefix ]? '*'
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  value = "",
                  ns;
                ns = this._namespace_prefix();
                if (ns) {
                  value += ns;
                }
                if (tokenStream.match(Tokens.STAR)) {
                  value += "*";
                }
                return value.length ? value : null;
              },
              //CSS3 Selectors
              _attrib: function () {
                /*
                 * attrib
                 *   : '[' S* [ namespace_prefix ]? IDENT S*
                 *         [ [ PREFIXMATCH |
                 *             SUFFIXMATCH |
                 *             SUBSTRINGMATCH |
                 *             '=' |
                 *             INCLUDES |
                 *             DASHMATCH ] S* [ IDENT | STRING ] S*
                 *         ]? ']'
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  value = null,
                  ns,
                  token;
                if (tokenStream.match(Tokens.LBRACKET)) {
                  token = tokenStream.token();
                  value = token.value;
                  value += this._readWhitespace();
                  ns = this._namespace_prefix();
                  if (ns) {
                    value += ns;
                  }
                  tokenStream.mustMatch(Tokens.IDENT);
                  value += tokenStream.token().value;
                  value += this._readWhitespace();
                  if (tokenStream.match([Tokens.PREFIXMATCH, Tokens.SUFFIXMATCH, Tokens.SUBSTRINGMATCH, Tokens.EQUALS, Tokens.INCLUDES, Tokens.DASHMATCH])) {
                    value += tokenStream.token().value;
                    value += this._readWhitespace();
                    tokenStream.mustMatch([Tokens.IDENT, Tokens.STRING]);
                    value += tokenStream.token().value;
                    value += this._readWhitespace();
                  }
                  tokenStream.mustMatch(Tokens.RBRACKET);
                  return new SelectorSubPart(value + "]", "attribute", token.startLine, token.startCol);
                } else {
                  return null;
                }
              },
              //CSS3 Selectors
              _pseudo: function () {
                /*
                 * pseudo
                 *   : ':' ':'? [ IDENT | functional_pseudo ]
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  pseudo = null,
                  colons = ":",
                  line,
                  col;
                if (tokenStream.match(Tokens.COLON)) {
                  if (tokenStream.match(Tokens.COLON)) {
                    colons += ":";
                  }
                  if (tokenStream.match(Tokens.IDENT)) {
                    pseudo = tokenStream.token().value;
                    line = tokenStream.token().startLine;
                    col = tokenStream.token().startCol - colons.length;
                  } else if (tokenStream.peek() === Tokens.FUNCTION) {
                    line = tokenStream.LT(1).startLine;
                    col = tokenStream.LT(1).startCol - colons.length;
                    pseudo = this._functional_pseudo();
                  }
                  if (pseudo) {
                    pseudo = new SelectorSubPart(colons + pseudo, "pseudo", line, col);
                  } else {
                    var startLine = tokenStream.LT(1).startLine,
                      startCol = tokenStream.LT(0).startCol;
                    throw new SyntaxError("Expected a `FUNCTION` or `IDENT` after colon at line " + startLine + ", col " + startCol + ".", startLine, startCol);
                  }
                }
                return pseudo;
              },
              //CSS3 Selectors
              _functional_pseudo: function () {
                /*
                 * functional_pseudo
                 *   : FUNCTION S* expression ')'
                 *   ;
                */

                var tokenStream = this._tokenStream,
                  value = null;
                if (tokenStream.match(Tokens.FUNCTION)) {
                  value = tokenStream.token().value;
                  value += this._readWhitespace();
                  value += this._expression();
                  tokenStream.mustMatch(Tokens.RPAREN);
                  value += ")";
                }
                return value;
              },
              //CSS3 Selectors
              _expression: function () {
                /*
                 * expression
                 *   : [ [ PLUS | '-' | DIMENSION | NUMBER | STRING | IDENT ] S* ]+
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  value = "";
                while (tokenStream.match([Tokens.PLUS, Tokens.MINUS, Tokens.DIMENSION, Tokens.NUMBER, Tokens.STRING, Tokens.IDENT, Tokens.LENGTH, Tokens.FREQ, Tokens.ANGLE, Tokens.TIME, Tokens.RESOLUTION, Tokens.SLASH])) {
                  value += tokenStream.token().value;
                  value += this._readWhitespace();
                }
                return value.length ? value : null;
              },
              //CSS3 Selectors
              _negation: function () {
                /*
                 * negation
                 *   : NOT S* negation_arg S* ')'
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  line,
                  col,
                  value = "",
                  arg,
                  subpart = null;
                if (tokenStream.match(Tokens.NOT)) {
                  value = tokenStream.token().value;
                  line = tokenStream.token().startLine;
                  col = tokenStream.token().startCol;
                  value += this._readWhitespace();
                  arg = this._negation_arg();
                  value += arg;
                  value += this._readWhitespace();
                  tokenStream.match(Tokens.RPAREN);
                  value += tokenStream.token().value;
                  subpart = new SelectorSubPart(value, "not", line, col);
                  subpart.args.push(arg);
                }
                return subpart;
              },
              //CSS3 Selectors
              _negation_arg: function () {
                /*
                 * negation_arg
                 *   : type_selector | universal | HASH | class | attrib | pseudo
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  args = [this._type_selector, this._universal, function () {
                    return tokenStream.match(Tokens.HASH) ? new SelectorSubPart(tokenStream.token().value, "id", tokenStream.token().startLine, tokenStream.token().startCol) : null;
                  }, this._class, this._attrib, this._pseudo],
                  arg = null,
                  i = 0,
                  len = args.length,
                  line,
                  col,
                  part;
                line = tokenStream.LT(1).startLine;
                col = tokenStream.LT(1).startCol;
                while (i < len && arg === null) {
                  arg = args[i].call(this);
                  i++;
                }

                //must be a negation arg
                if (arg === null) {
                  this._unexpectedToken(tokenStream.LT(1));
                }

                //it's an element name
                if (arg.type === "elementName") {
                  part = new SelectorPart(arg, [], arg.toString(), line, col);
                } else {
                  part = new SelectorPart(null, [arg], arg.toString(), line, col);
                }
                return part;
              },
              _declaration: function () {
                /*
                 * declaration
                 *   : property ':' S* expr prio?
                 *   | /( empty )/
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  property = null,
                  expr = null,
                  prio = null,
                  invalid = null,
                  propertyName = "";
                property = this._property();
                if (property !== null) {
                  tokenStream.mustMatch(Tokens.COLON);
                  this._readWhitespace();
                  expr = this._expr();

                  //if there's no parts for the value, it's an error
                  if (!expr || expr.length === 0) {
                    this._unexpectedToken(tokenStream.LT(1));
                  }
                  prio = this._prio();

                  /*
                   * If hacks should be allowed, then only check the root
                   * property. If hacks should not be allowed, treat
                   * _property or *property as invalid properties.
                   */
                  propertyName = property.toString();
                  if (this.options.starHack && property.hack === "*" || this.options.underscoreHack && property.hack === "_") {
                    propertyName = property.text;
                  }
                  try {
                    this._validateProperty(propertyName, expr);
                  } catch (ex) {
                    invalid = ex;
                  }
                  this.fire({
                    type: "property",
                    property: property,
                    value: expr,
                    important: prio,
                    line: property.line,
                    col: property.col,
                    invalid: invalid
                  });
                  return true;
                } else {
                  return false;
                }
              },
              _prio: function () {
                /*
                 * prio
                 *   : IMPORTANT_SYM S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  result = tokenStream.match(Tokens.IMPORTANT_SYM);
                this._readWhitespace();
                return result;
              },
              _expr: function (inFunction) {
                /*
                 * expr
                 *   : term [ operator term ]*
                 *   ;
                 */

                var values = [],
                  //valueParts    = [],
                  value = null,
                  operator = null;
                value = this._term(inFunction);
                if (value !== null) {
                  values.push(value);
                  do {
                    operator = this._operator(inFunction);

                    //if there's an operator, keep building up the value parts
                    if (operator) {
                      values.push(operator);
                    } /*else {
                        //if there's not an operator, you have a full value
                        values.push(new PropertyValue(valueParts, valueParts[0].line, valueParts[0].col));
                        valueParts = [];
                      }*/

                    value = this._term(inFunction);
                    if (value === null) {
                      break;
                    } else {
                      values.push(value);
                    }
                  } while (true);
                }

                //cleanup
                /*if (valueParts.length) {
                    values.push(new PropertyValue(valueParts, valueParts[0].line, valueParts[0].col));
                }*/

                return values.length > 0 ? new PropertyValue(values, values[0].line, values[0].col) : null;
              },
              _term: function (inFunction) {
                /*
                 * term
                 *   : unary_operator?
                 *     [ NUMBER S* | PERCENTAGE S* | LENGTH S* | ANGLE S* |
                 *       TIME S* | FREQ S* | function | ie_function ]
                 *   | STRING S* | IDENT S* | URI S* | UNICODERANGE S* | hexcolor
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  unary = null,
                  value = null,
                  endChar = null,
                  part = null,
                  token,
                  line,
                  col;

                //returns the operator or null
                unary = this._unary_operator();
                if (unary !== null) {
                  line = tokenStream.token().startLine;
                  col = tokenStream.token().startCol;
                }

                //exception for IE filters
                if (tokenStream.peek() === Tokens.IE_FUNCTION && this.options.ieFilters) {
                  value = this._ie_function();
                  if (unary === null) {
                    line = tokenStream.token().startLine;
                    col = tokenStream.token().startCol;
                  }

                  //see if it's a simple block
                } else if (inFunction && tokenStream.match([Tokens.LPAREN, Tokens.LBRACE, Tokens.LBRACKET])) {
                  token = tokenStream.token();
                  endChar = token.endChar;
                  value = token.value + this._expr(inFunction).text;
                  if (unary === null) {
                    line = tokenStream.token().startLine;
                    col = tokenStream.token().startCol;
                  }
                  tokenStream.mustMatch(Tokens.type(endChar));
                  value += endChar;
                  this._readWhitespace();

                  //see if there's a simple match
                } else if (tokenStream.match([Tokens.NUMBER, Tokens.PERCENTAGE, Tokens.LENGTH, Tokens.ANGLE, Tokens.TIME, Tokens.FREQ, Tokens.STRING, Tokens.IDENT, Tokens.URI, Tokens.UNICODE_RANGE])) {
                  value = tokenStream.token().value;
                  if (unary === null) {
                    line = tokenStream.token().startLine;
                    col = tokenStream.token().startCol;
                    // Correct potentially-inaccurate IDENT parsing in
                    // PropertyValuePart constructor.
                    part = PropertyValuePart.fromToken(tokenStream.token());
                  }
                  this._readWhitespace();
                } else {
                  //see if it's a color
                  token = this._hexcolor();
                  if (token === null) {
                    //if there's no unary, get the start of the next token for line/col info
                    if (unary === null) {
                      line = tokenStream.LT(1).startLine;
                      col = tokenStream.LT(1).startCol;
                    }

                    //has to be a function
                    if (value === null) {
                      /*
                       * This checks for alpha(opacity=0) style of IE
                       * functions. IE_FUNCTION only presents progid: style.
                       */
                      if (tokenStream.LA(3) === Tokens.EQUALS && this.options.ieFilters) {
                        value = this._ie_function();
                      } else {
                        value = this._function();
                      }
                    }

                    /*if (value === null) {
                        return null;
                        //throw new Error("Expected identifier at line " + tokenStream.token().startLine + ", character " +  tokenStream.token().startCol + ".");
                    }*/
                  } else {
                    value = token.value;
                    if (unary === null) {
                      line = token.startLine;
                      col = token.startCol;
                    }
                  }
                }
                return part !== null ? part : value !== null ? new PropertyValuePart(unary !== null ? unary + value : value, line, col) : null;
              },
              _function: function () {
                /*
                 * function
                 *   : FUNCTION S* expr ')' S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  functionText = null,
                  expr = null,
                  lt;
                if (tokenStream.match(Tokens.FUNCTION)) {
                  functionText = tokenStream.token().value;
                  this._readWhitespace();
                  expr = this._expr(true);
                  functionText += expr;

                  //START: Horrible hack in case it's an IE filter
                  if (this.options.ieFilters && tokenStream.peek() === Tokens.EQUALS) {
                    do {
                      if (this._readWhitespace()) {
                        functionText += tokenStream.token().value;
                      }

                      //might be second time in the loop
                      if (tokenStream.LA(0) === Tokens.COMMA) {
                        functionText += tokenStream.token().value;
                      }
                      tokenStream.match(Tokens.IDENT);
                      functionText += tokenStream.token().value;
                      tokenStream.match(Tokens.EQUALS);
                      functionText += tokenStream.token().value;

                      //functionText += this._term();
                      lt = tokenStream.peek();
                      while (lt !== Tokens.COMMA && lt !== Tokens.S && lt !== Tokens.RPAREN) {
                        tokenStream.get();
                        functionText += tokenStream.token().value;
                        lt = tokenStream.peek();
                      }
                    } while (tokenStream.match([Tokens.COMMA, Tokens.S]));
                  }

                  //END: Horrible Hack

                  tokenStream.match(Tokens.RPAREN);
                  functionText += ")";
                  this._readWhitespace();
                }
                return functionText;
              },
              _ie_function: function () {
                /* (My own extension)
                 * ie_function
                 *   : IE_FUNCTION S* IDENT '=' term [S* ','? IDENT '=' term]+ ')' S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  functionText = null,
                  lt;

                //IE function can begin like a regular function, too
                if (tokenStream.match([Tokens.IE_FUNCTION, Tokens.FUNCTION])) {
                  functionText = tokenStream.token().value;
                  do {
                    if (this._readWhitespace()) {
                      functionText += tokenStream.token().value;
                    }

                    //might be second time in the loop
                    if (tokenStream.LA(0) === Tokens.COMMA) {
                      functionText += tokenStream.token().value;
                    }
                    tokenStream.match(Tokens.IDENT);
                    functionText += tokenStream.token().value;
                    tokenStream.match(Tokens.EQUALS);
                    functionText += tokenStream.token().value;

                    //functionText += this._term();
                    lt = tokenStream.peek();
                    while (lt !== Tokens.COMMA && lt !== Tokens.S && lt !== Tokens.RPAREN) {
                      tokenStream.get();
                      functionText += tokenStream.token().value;
                      lt = tokenStream.peek();
                    }
                  } while (tokenStream.match([Tokens.COMMA, Tokens.S]));
                  tokenStream.match(Tokens.RPAREN);
                  functionText += ")";
                  this._readWhitespace();
                }
                return functionText;
              },
              _hexcolor: function () {
                /*
                 * There is a constraint on the color that it must
                 * have either 3 or 6 hex-digits (i.e., [0-9a-fA-F])
                 * after the "#"; e.g., "#000" is OK, but "#abcd" is not.
                 *
                 * hexcolor
                 *   : HASH S*
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  token = null,
                  color;
                if (tokenStream.match(Tokens.HASH)) {
                  //need to do some validation here

                  token = tokenStream.token();
                  color = token.value;
                  if (!/#[a-f0-9]{3,6}/i.test(color)) {
                    throw new SyntaxError("Expected a hex color but found '" + color + "' at line " + token.startLine + ", col " + token.startCol + ".", token.startLine, token.startCol);
                  }
                  this._readWhitespace();
                }
                return token;
              },
              //-----------------------------------------------------------------
              // Animations methods
              //-----------------------------------------------------------------

              _keyframes: function () {
                /*
                 * keyframes:
                 *   : KEYFRAMES_SYM S* keyframe_name S* '{' S* keyframe_rule* '}' {
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  token,
                  tt,
                  name,
                  prefix = "";
                tokenStream.mustMatch(Tokens.KEYFRAMES_SYM);
                token = tokenStream.token();
                if (/^@\-([^\-]+)\-/.test(token.value)) {
                  prefix = RegExp.$1;
                }
                this._readWhitespace();
                name = this._keyframe_name();
                this._readWhitespace();
                tokenStream.mustMatch(Tokens.LBRACE);
                this.fire({
                  type: "startkeyframes",
                  name: name,
                  prefix: prefix,
                  line: token.startLine,
                  col: token.startCol
                });
                this._readWhitespace();
                tt = tokenStream.peek();

                //check for key
                while (tt === Tokens.IDENT || tt === Tokens.PERCENTAGE) {
                  this._keyframe_rule();
                  this._readWhitespace();
                  tt = tokenStream.peek();
                }
                this.fire({
                  type: "endkeyframes",
                  name: name,
                  prefix: prefix,
                  line: token.startLine,
                  col: token.startCol
                });
                this._readWhitespace();
                tokenStream.mustMatch(Tokens.RBRACE);
                this._readWhitespace();
              },
              _keyframe_name: function () {
                /*
                 * keyframe_name:
                 *   : IDENT
                 *   | STRING
                 *   ;
                 */
                var tokenStream = this._tokenStream;
                tokenStream.mustMatch([Tokens.IDENT, Tokens.STRING]);
                return SyntaxUnit.fromToken(tokenStream.token());
              },
              _keyframe_rule: function () {
                /*
                 * keyframe_rule:
                 *   : key_list S*
                 *     '{' S* declaration [ ';' S* declaration ]* '}' S*
                 *   ;
                 */
                var keyList = this._key_list();
                this.fire({
                  type: "startkeyframerule",
                  keys: keyList,
                  line: keyList[0].line,
                  col: keyList[0].col
                });
                this._readDeclarations(true);
                this.fire({
                  type: "endkeyframerule",
                  keys: keyList,
                  line: keyList[0].line,
                  col: keyList[0].col
                });
              },
              _key_list: function () {
                /*
                 * key_list:
                 *   : key [ S* ',' S* key]*
                 *   ;
                 */
                var tokenStream = this._tokenStream,
                  keyList = [];

                //must be least one key
                keyList.push(this._key());
                this._readWhitespace();
                while (tokenStream.match(Tokens.COMMA)) {
                  this._readWhitespace();
                  keyList.push(this._key());
                  this._readWhitespace();
                }
                return keyList;
              },
              _key: function () {
                /*
                 * There is a restriction that IDENT can be only "from" or "to".
                 *
                 * key
                 *   : PERCENTAGE
                 *   | IDENT
                 *   ;
                 */

                var tokenStream = this._tokenStream,
                  token;
                if (tokenStream.match(Tokens.PERCENTAGE)) {
                  return SyntaxUnit.fromToken(tokenStream.token());
                } else if (tokenStream.match(Tokens.IDENT)) {
                  token = tokenStream.token();
                  if (/from|to/i.test(token.value)) {
                    return SyntaxUnit.fromToken(token);
                  }
                  tokenStream.unget();
                }

                //if it gets here, there wasn't a valid token, so time to explode
                this._unexpectedToken(tokenStream.LT(1));
              },
              //-----------------------------------------------------------------
              // Helper methods
              //-----------------------------------------------------------------

              /**
               * Not part of CSS grammar, but useful for skipping over
               * combination of white space and HTML-style comments.
               * @return {void}
               * @method _skipCruft
               * @private
               */
              _skipCruft: function () {
                while (this._tokenStream.match([Tokens.S, Tokens.CDO, Tokens.CDC])) {
                  //noop
                }
              },
              /**
               * Not part of CSS grammar, but this pattern occurs frequently
               * in the official CSS grammar. Split out here to eliminate
               * duplicate code.
               * @param {Boolean} checkStart Indicates if the rule should check
               *      for the left brace at the beginning.
               * @param {Boolean} readMargins Indicates if the rule should check
               *      for margin patterns.
               * @return {void}
               * @method _readDeclarations
               * @private
               */
              _readDeclarations: function (checkStart, readMargins) {
                /*
                 * Reads the pattern
                 * S* '{' S* declaration [ ';' S* declaration ]* '}' S*
                 * or
                 * S* '{' S* [ declaration | margin ]? [ ';' S* [ declaration | margin ]? ]* '}' S*
                 * Note that this is how it is described in CSS3 Paged Media, but is actually incorrect.
                 * A semicolon is only necessary following a declaration if there's another declaration
                 * or margin afterwards.
                 */
                var tokenStream = this._tokenStream,
                  tt;
                this._readWhitespace();
                if (checkStart) {
                  tokenStream.mustMatch(Tokens.LBRACE);
                }
                this._readWhitespace();
                try {
                  while (true) {
                    if (tokenStream.match(Tokens.SEMICOLON) || readMargins && this._margin()) {
                      //noop
                    } else if (this._declaration()) {
                      if (!tokenStream.match(Tokens.SEMICOLON)) {
                        break;
                      }
                    } else {
                      break;
                    }

                    //if ((!this._margin() && !this._declaration()) || !tokenStream.match(Tokens.SEMICOLON)){
                    //    break;
                    //}
                    this._readWhitespace();
                  }
                  tokenStream.mustMatch(Tokens.RBRACE);
                  this._readWhitespace();
                } catch (ex) {
                  if (ex instanceof SyntaxError && !this.options.strict) {
                    //fire error event
                    this.fire({
                      type: "error",
                      error: ex,
                      message: ex.message,
                      line: ex.line,
                      col: ex.col
                    });

                    //see if there's another declaration
                    tt = tokenStream.advance([Tokens.SEMICOLON, Tokens.RBRACE]);
                    if (tt === Tokens.SEMICOLON) {
                      //if there's a semicolon, then there might be another declaration
                      this._readDeclarations(false, readMargins);
                    } else if (tt !== Tokens.RBRACE) {
                      //if there's a right brace, the rule is finished so don't do anything
                      //otherwise, rethrow the error because it wasn't handled properly
                      throw ex;
                    }
                  } else {
                    //not a syntax error, rethrow it
                    throw ex;
                  }
                }
              },
              /**
               * In some cases, you can end up with two white space tokens in a
               * row. Instead of making a change in every function that looks for
               * white space, this function is used to match as much white space
               * as necessary.
               * @method _readWhitespace
               * @return {String} The white space if found, empty string if not.
               * @private
               */
              _readWhitespace: function () {
                var tokenStream = this._tokenStream,
                  ws = "";
                while (tokenStream.match(Tokens.S)) {
                  ws += tokenStream.token().value;
                }
                return ws;
              },
              /**
               * Throws an error when an unexpected token is found.
               * @param {Object} token The token that was found.
               * @method _unexpectedToken
               * @return {void}
               * @private
               */
              _unexpectedToken: function (token) {
                throw new SyntaxError("Unexpected token '" + token.value + "' at line " + token.startLine + ", col " + token.startCol + ".", token.startLine, token.startCol);
              },
              /**
               * Helper method used for parsing subparts of a style sheet.
               * @return {void}
               * @method _verifyEnd
               * @private
               */
              _verifyEnd: function () {
                if (this._tokenStream.LA(1) !== Tokens.EOF) {
                  this._unexpectedToken(this._tokenStream.LT(1));
                }
              },
              //-----------------------------------------------------------------
              // Validation methods
              //-----------------------------------------------------------------
              _validateProperty: function (property, value) {
                Validation.validate(property, value);
              },
              //-----------------------------------------------------------------
              // Parsing methods
              //-----------------------------------------------------------------

              parse: function (input) {
                this._tokenStream = new TokenStream(input, Tokens);
                this._stylesheet();
              },
              parseStyleSheet: function (input) {
                //just passthrough
                return this.parse(input);
              },
              parseMediaQuery: function (input) {
                this._tokenStream = new TokenStream(input, Tokens);
                var result = this._media_query();

                //if there's anything more, then it's an invalid selector
                this._verifyEnd();

                //otherwise return result
                return result;
              },
              /**
               * Parses a property value (everything after the semicolon).
               * @return {parserlib.css.PropertyValue} The property value.
               * @throws parserlib.util.SyntaxError If an unexpected token is found.
               * @method parserPropertyValue
               */
              parsePropertyValue: function (input) {
                this._tokenStream = new TokenStream(input, Tokens);
                this._readWhitespace();
                var result = this._expr();

                //okay to have a trailing white space
                this._readWhitespace();

                //if there's anything more, then it's an invalid selector
                this._verifyEnd();

                //otherwise return result
                return result;
              },
              /**
               * Parses a complete CSS rule, including selectors and
               * properties.
               * @param {String} input The text to parser.
               * @return {Boolean} True if the parse completed successfully, false if not.
               * @method parseRule
               */
              parseRule: function (input) {
                this._tokenStream = new TokenStream(input, Tokens);

                //skip any leading white space
                this._readWhitespace();
                var result = this._ruleset();

                //skip any trailing white space
                this._readWhitespace();

                //if there's anything more, then it's an invalid selector
                this._verifyEnd();

                //otherwise return result
                return result;
              },
              /**
               * Parses a single CSS selector (no comma)
               * @param {String} input The text to parse as a CSS selector.
               * @return {Selector} An object representing the selector.
               * @throws parserlib.util.SyntaxError If an unexpected token is found.
               * @method parseSelector
               */
              parseSelector: function (input) {
                this._tokenStream = new TokenStream(input, Tokens);

                //skip any leading white space
                this._readWhitespace();
                var result = this._selector();

                //skip any trailing white space
                this._readWhitespace();

                //if there's anything more, then it's an invalid selector
                this._verifyEnd();

                //otherwise return result
                return result;
              },
              /**
               * Parses an HTML style attribute: a set of CSS declarations
               * separated by semicolons.
               * @param {String} input The text to parse as a style attribute
               * @return {void}
               * @method parseStyleAttribute
               */
              parseStyleAttribute: function (input) {
                input += "}"; // for error recovery in _readDeclarations()
                this._tokenStream = new TokenStream(input, Tokens);
                this._readDeclarations();
              }
            };

          //copy over onto prototype
          for (prop in additions) {
            if (Object.prototype.hasOwnProperty.call(additions, prop)) {
              proto[prop] = additions[prop];
            }
          }
          return proto;
        }();

        /*
        nth
          : S* [ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]? |
                 ['-'|'+']? INTEGER | {O}{D}{D} | {E}{V}{E}{N} ] S*
          ;
        */
      }, {
        "../util/EventTarget": 23,
        "../util/SyntaxError": 25,
        "../util/SyntaxUnit": 26,
        "./Combinator": 2,
        "./MediaFeature": 4,
        "./MediaQuery": 5,
        "./PropertyName": 8,
        "./PropertyValue": 9,
        "./PropertyValuePart": 11,
        "./Selector": 13,
        "./SelectorPart": 14,
        "./SelectorSubPart": 15,
        "./TokenStream": 17,
        "./Tokens": 18,
        "./Validation": 19
      }],
      7: [function (require, module, exports) {
        "use strict";

        /* exported Properties */
        var Properties = module.exports = {
          __proto__: null,
          //A
          "align-items": "flex-start | flex-end | center | baseline | stretch",
          "align-content": "flex-start | flex-end | center | space-between | space-around | stretch",
          "align-self": "auto | flex-start | flex-end | center | baseline | stretch",
          "all": "initial | inherit | unset",
          "-webkit-align-items": "flex-start | flex-end | center | baseline | stretch",
          "-webkit-align-content": "flex-start | flex-end | center | space-between | space-around | stretch",
          "-webkit-align-self": "auto | flex-start | flex-end | center | baseline | stretch",
          "alignment-adjust": "auto | baseline | before-edge | text-before-edge | middle | central | after-edge | text-after-edge | ideographic | alphabetic | hanging | mathematical | <percentage> | <length>",
          "alignment-baseline": "auto | baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical",
          "animation": 1,
          "animation-delay": "<time>#",
          "animation-direction": "<single-animation-direction>#",
          "animation-duration": "<time>#",
          "animation-fill-mode": "[ none | forwards | backwards | both ]#",
          "animation-iteration-count": "[ <number> | infinite ]#",
          "animation-name": "[ none | <single-animation-name> ]#",
          "animation-play-state": "[ running | paused ]#",
          "animation-timing-function": 1,
          //vendor prefixed
          "-moz-animation-delay": "<time>#",
          "-moz-animation-direction": "[ normal | alternate ]#",
          "-moz-animation-duration": "<time>#",
          "-moz-animation-iteration-count": "[ <number> | infinite ]#",
          "-moz-animation-name": "[ none | <single-animation-name> ]#",
          "-moz-animation-play-state": "[ running | paused ]#",
          "-ms-animation-delay": "<time>#",
          "-ms-animation-direction": "[ normal | alternate ]#",
          "-ms-animation-duration": "<time>#",
          "-ms-animation-iteration-count": "[ <number> | infinite ]#",
          "-ms-animation-name": "[ none | <single-animation-name> ]#",
          "-ms-animation-play-state": "[ running | paused ]#",
          "-webkit-animation-delay": "<time>#",
          "-webkit-animation-direction": "[ normal | alternate ]#",
          "-webkit-animation-duration": "<time>#",
          "-webkit-animation-fill-mode": "[ none | forwards | backwards | both ]#",
          "-webkit-animation-iteration-count": "[ <number> | infinite ]#",
          "-webkit-animation-name": "[ none | <single-animation-name> ]#",
          "-webkit-animation-play-state": "[ running | paused ]#",
          "-o-animation-delay": "<time>#",
          "-o-animation-direction": "[ normal | alternate ]#",
          "-o-animation-duration": "<time>#",
          "-o-animation-iteration-count": "[ <number> | infinite ]#",
          "-o-animation-name": "[ none | <single-animation-name> ]#",
          "-o-animation-play-state": "[ running | paused ]#",
          "appearance": "none | auto",
          "-moz-appearance": "none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized",
          "-ms-appearance": "none | icon | window | desktop | workspace | document | tooltip | dialog | button | push-button | hyperlink | radio | radio-button | checkbox | menu-item | tab | menu | menubar | pull-down-menu | pop-up-menu | list-menu | radio-group | checkbox-group | outline-tree | range | field | combo-box | signature | password | normal",
          "-webkit-appearance": "none | button | button-bevel | caps-lock-indicator | caret | checkbox | default-button | listbox	| listitem | media-fullscreen-button | media-mute-button | media-play-button | media-seek-back-button	| media-seek-forward-button	| media-slider | media-sliderthumb | menulist	| menulist-button	| menulist-text	| menulist-textfield | push-button	| radio	| searchfield	| searchfield-cancel-button	| searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical	| square-button	| textarea	| textfield	| scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbargripper-horizontal | scrollbargripper-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical",
          "-o-appearance": "none | window | desktop | workspace | document | tooltip | dialog | button | push-button | hyperlink | radio | radio-button | checkbox | menu-item | tab | menu | menubar | pull-down-menu | pop-up-menu | list-menu | radio-group | checkbox-group | outline-tree | range | field | combo-box | signature | password | normal",
          "azimuth": "<azimuth>",
          //B
          "backface-visibility": "visible | hidden",
          "background": 1,
          "background-attachment": "<attachment>#",
          "background-clip": "<box>#",
          "background-color": "<color>",
          "background-image": "<bg-image>#",
          "background-origin": "<box>#",
          "background-position": "<bg-position>",
          "background-repeat": "<repeat-style>#",
          "background-size": "<bg-size>#",
          "baseline-shift": "baseline | sub | super | <percentage> | <length>",
          "behavior": 1,
          "binding": 1,
          "bleed": "<length>",
          "bookmark-label": "<content> | <attr> | <string>",
          "bookmark-level": "none | <integer>",
          "bookmark-state": "open | closed",
          "bookmark-target": "none | <uri> | <attr>",
          "border": "<border-width> || <border-style> || <color>",
          "border-bottom": "<border-width> || <border-style> || <color>",
          "border-bottom-color": "<color>",
          "border-bottom-left-radius": "<x-one-radius>",
          "border-bottom-right-radius": "<x-one-radius>",
          "border-bottom-style": "<border-style>",
          "border-bottom-width": "<border-width>",
          "border-collapse": "collapse | separate",
          "border-color": "<color>{1,4}",
          "border-image": 1,
          "border-image-outset": "[ <length> | <number> ]{1,4}",
          "border-image-repeat": "[ stretch | repeat | round ]{1,2}",
          "border-image-slice": "<border-image-slice>",
          "border-image-source": "<image> | none",
          "border-image-width": "[ <length> | <percentage> | <number> | auto ]{1,4}",
          "border-left": "<border-width> || <border-style> || <color>",
          "border-left-color": "<color>",
          "border-left-style": "<border-style>",
          "border-left-width": "<border-width>",
          "border-radius": "<border-radius>",
          "border-right": "<border-width> || <border-style> || <color>",
          "border-right-color": "<color>",
          "border-right-style": "<border-style>",
          "border-right-width": "<border-width>",
          "border-spacing": "<length>{1,2}",
          "border-style": "<border-style>{1,4}",
          "border-top": "<border-width> || <border-style> || <color>",
          "border-top-color": "<color>",
          "border-top-left-radius": "<x-one-radius>",
          "border-top-right-radius": "<x-one-radius>",
          "border-top-style": "<border-style>",
          "border-top-width": "<border-width>",
          "border-width": "<border-width>{1,4}",
          "bottom": "<margin-width>",
          "-moz-box-align": "start | end | center | baseline | stretch",
          "-moz-box-decoration-break": "slice | clone",
          "-moz-box-direction": "normal | reverse",
          "-moz-box-flex": "<number>",
          "-moz-box-flex-group": "<integer>",
          "-moz-box-lines": "single | multiple",
          "-moz-box-ordinal-group": "<integer>",
          "-moz-box-orient": "horizontal | vertical | inline-axis | block-axis",
          "-moz-box-pack": "start | end | center | justify",
          "-o-box-decoration-break": "slice | clone",
          "-webkit-box-align": "start | end | center | baseline | stretch",
          "-webkit-box-decoration-break": "slice | clone",
          "-webkit-box-direction": "normal | reverse",
          "-webkit-box-flex": "<number>",
          "-webkit-box-flex-group": "<integer>",
          "-webkit-box-lines": "single | multiple",
          "-webkit-box-ordinal-group": "<integer>",
          "-webkit-box-orient": "horizontal | vertical | inline-axis | block-axis",
          "-webkit-box-pack": "start | end | center | justify",
          "box-decoration-break": "slice | clone",
          "box-shadow": "<box-shadow>",
          "box-sizing": "content-box | border-box",
          "break-after": "auto | always | avoid | left | right | page | column | avoid-page | avoid-column",
          "break-before": "auto | always | avoid | left | right | page | column | avoid-page | avoid-column",
          "break-inside": "auto | avoid | avoid-page | avoid-column",
          //C
          "caption-side": "top | bottom",
          "clear": "none | right | left | both",
          "clip": "<shape> | auto",
          "-webkit-clip-path": "<clip-source> | <clip-path> | none",
          "clip-path": "<clip-source> | <clip-path> | none",
          "clip-rule": "nonzero | evenodd",
          "color": "<color>",
          "color-interpolation": "auto | sRGB | linearRGB",
          "color-interpolation-filters": "auto | sRGB | linearRGB",
          "color-profile": 1,
          "color-rendering": "auto | optimizeSpeed | optimizeQuality",
          "column-count": "<integer> | auto",
          //https://www.w3.org/TR/css3-multicol/
          "column-fill": "auto | balance",
          "column-gap": "<length> | normal",
          "column-rule": "<border-width> || <border-style> || <color>",
          "column-rule-color": "<color>",
          "column-rule-style": "<border-style>",
          "column-rule-width": "<border-width>",
          "column-span": "none | all",
          "column-width": "<length> | auto",
          "columns": 1,
          "content": 1,
          "counter-increment": 1,
          "counter-reset": 1,
          "crop": "<shape> | auto",
          "cue": "cue-after | cue-before",
          "cue-after": 1,
          "cue-before": 1,
          "cursor": 1,
          //D
          "direction": "ltr | rtl",
          "display": "inline | block | list-item | inline-block | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | grid | inline-grid | run-in | ruby | ruby-base | ruby-text | ruby-base-container | ruby-text-container | contents | none | -moz-box | -moz-inline-block | -moz-inline-box | -moz-inline-grid | -moz-inline-stack | -moz-inline-table | -moz-grid | -moz-grid-group | -moz-grid-line | -moz-groupbox | -moz-deck | -moz-popup | -moz-stack | -moz-marker | -webkit-box | -webkit-inline-box | -ms-flexbox | -ms-inline-flexbox | flex | -webkit-flex | inline-flex | -webkit-inline-flex",
          "dominant-baseline": "auto | use-script | no-change | reset-size | ideographic | alphabetic | hanging | mathematical | central | middle | text-after-edge | text-before-edge",
          "drop-initial-after-adjust": "central | middle | after-edge | text-after-edge | ideographic | alphabetic | mathematical | <percentage> | <length>",
          "drop-initial-after-align": "baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical",
          "drop-initial-before-adjust": "before-edge | text-before-edge | central | middle | hanging | mathematical | <percentage> | <length>",
          "drop-initial-before-align": "caps-height | baseline | use-script | before-edge | text-before-edge | after-edge | text-after-edge | central | middle | ideographic | alphabetic | hanging | mathematical",
          "drop-initial-size": "auto | line | <length> | <percentage>",
          "drop-initial-value": "<integer>",
          //E
          "elevation": "<angle> | below | level | above | higher | lower",
          "empty-cells": "show | hide",
          "enable-background": 1,
          //F
          "fill": "<paint>",
          "fill-opacity": "<opacity-value>",
          "fill-rule": "nonzero | evenodd",
          "filter": "<filter-function-list> | none",
          "fit": "fill | hidden | meet | slice",
          "fit-position": 1,
          "flex": "<flex>",
          "flex-basis": "<width>",
          "flex-direction": "row | row-reverse | column | column-reverse",
          "flex-flow": "<flex-direction> || <flex-wrap>",
          "flex-grow": "<number>",
          "flex-shrink": "<number>",
          "flex-wrap": "nowrap | wrap | wrap-reverse",
          "-webkit-flex": "<flex>",
          "-webkit-flex-basis": "<width>",
          "-webkit-flex-direction": "row | row-reverse | column | column-reverse",
          "-webkit-flex-flow": "<flex-direction> || <flex-wrap>",
          "-webkit-flex-grow": "<number>",
          "-webkit-flex-shrink": "<number>",
          "-webkit-flex-wrap": "nowrap | wrap | wrap-reverse",
          "-ms-flex": "<flex>",
          "-ms-flex-align": "start | end | center | stretch | baseline",
          "-ms-flex-direction": "row | row-reverse | column | column-reverse",
          "-ms-flex-order": "<number>",
          "-ms-flex-pack": "start | end | center | justify",
          "-ms-flex-wrap": "nowrap | wrap | wrap-reverse",
          "float": "left | right | none",
          "float-offset": 1,
          "flood-color": 1,
          "flood-opacity": "<opacity-value>",
          "font": "<font-shorthand> | caption | icon | menu | message-box | small-caption | status-bar",
          "font-family": "<font-family>",
          "font-feature-settings": "<feature-tag-value> | normal",
          "font-kerning": "auto | normal | none",
          "font-size": "<font-size>",
          "font-size-adjust": "<number> | none",
          "font-stretch": "<font-stretch>",
          "font-style": "<font-style>",
          "font-variant": "<font-variant> | normal | none",
          "font-variant-alternates": "<font-variant-alternates> | normal",
          "font-variant-caps": "<font-variant-caps> | normal",
          "font-variant-east-asian": "<font-variant-east-asian> | normal",
          "font-variant-ligatures": "<font-variant-ligatures> | normal | none",
          "font-variant-numeric": "<font-variant-numeric> | normal",
          "font-variant-position": "normal | sub | super",
          "font-weight": "<font-weight>",
          //G
          "glyph-orientation-horizontal": "<glyph-angle>",
          "glyph-orientation-vertical": "auto | <glyph-angle>",
          "grid": 1,
          "grid-area": 1,
          "grid-auto-columns": 1,
          "grid-auto-flow": 1,
          "grid-auto-position": 1,
          "grid-auto-rows": 1,
          "grid-cell-stacking": "columns | rows | layer",
          "grid-column": 1,
          "grid-columns": 1,
          "grid-column-align": "start | end | center | stretch",
          "grid-column-sizing": 1,
          "grid-column-start": 1,
          "grid-column-end": 1,
          "grid-column-span": "<integer>",
          "grid-flow": "none | rows | columns",
          "grid-layer": "<integer>",
          "grid-row": 1,
          "grid-rows": 1,
          "grid-row-align": "start | end | center | stretch",
          "grid-row-start": 1,
          "grid-row-end": 1,
          "grid-row-span": "<integer>",
          "grid-row-sizing": 1,
          "grid-template": 1,
          "grid-template-areas": 1,
          "grid-template-columns": 1,
          "grid-template-rows": 1,
          //H
          "hanging-punctuation": 1,
          "height": "<margin-width> | <content-sizing>",
          "hyphenate-after": "<integer> | auto",
          "hyphenate-before": "<integer> | auto",
          "hyphenate-character": "<string> | auto",
          "hyphenate-lines": "no-limit | <integer>",
          "hyphenate-resource": 1,
          "hyphens": "none | manual | auto",
          //I
          "icon": 1,
          "image-orientation": "angle | auto",
          "image-rendering": "auto | optimizeSpeed | optimizeQuality",
          "image-resolution": 1,
          "ime-mode": "auto | normal | active | inactive | disabled",
          "inline-box-align": "last | <integer>",
          //J
          "justify-content": "flex-start | flex-end | center | space-between | space-around",
          "-webkit-justify-content": "flex-start | flex-end | center | space-between | space-around",
          //K
          "kerning": "auto | <length>",
          //L
          "left": "<margin-width>",
          "letter-spacing": "<length> | normal",
          "line-height": "<line-height>",
          "line-break": "auto | loose | normal | strict",
          "line-stacking": 1,
          "line-stacking-ruby": "exclude-ruby | include-ruby",
          "line-stacking-shift": "consider-shifts | disregard-shifts",
          "line-stacking-strategy": "inline-line-height | block-line-height | max-height | grid-height",
          "list-style": 1,
          "list-style-image": "<uri> | none",
          "list-style-position": "inside | outside",
          "list-style-type": "disc | circle | square | decimal | decimal-leading-zero | lower-roman | upper-roman | lower-greek | lower-latin | upper-latin | armenian | georgian | lower-alpha | upper-alpha | none",
          //M
          "margin": "<margin-width>{1,4}",
          "margin-bottom": "<margin-width>",
          "margin-left": "<margin-width>",
          "margin-right": "<margin-width>",
          "margin-top": "<margin-width>",
          "mark": 1,
          "mark-after": 1,
          "mark-before": 1,
          "marker": 1,
          "marker-end": 1,
          "marker-mid": 1,
          "marker-start": 1,
          "marks": 1,
          "marquee-direction": 1,
          "marquee-play-count": 1,
          "marquee-speed": 1,
          "marquee-style": 1,
          "mask": 1,
          "max-height": "<length> | <percentage> | <content-sizing> | none",
          "max-width": "<length> | <percentage> | <content-sizing> | none",
          "min-height": "<length> | <percentage> | <content-sizing> | contain-floats | -moz-contain-floats | -webkit-contain-floats",
          "min-width": "<length> | <percentage> | <content-sizing> | contain-floats | -moz-contain-floats | -webkit-contain-floats",
          "move-to": 1,
          //N
          "nav-down": 1,
          "nav-index": 1,
          "nav-left": 1,
          "nav-right": 1,
          "nav-up": 1,
          //O
          "object-fit": "fill | contain | cover | none | scale-down",
          "object-position": "<position>",
          "opacity": "<opacity-value>",
          "order": "<integer>",
          "-webkit-order": "<integer>",
          "orphans": "<integer>",
          "outline": 1,
          "outline-color": "<color> | invert",
          "outline-offset": 1,
          "outline-style": "<border-style>",
          "outline-width": "<border-width>",
          "overflow": "visible | hidden | scroll | auto",
          "overflow-style": 1,
          "overflow-wrap": "normal | break-word",
          "overflow-x": 1,
          "overflow-y": 1,
          //P
          "padding": "<padding-width>{1,4}",
          "padding-bottom": "<padding-width>",
          "padding-left": "<padding-width>",
          "padding-right": "<padding-width>",
          "padding-top": "<padding-width>",
          "page": 1,
          "page-break-after": "auto | always | avoid | left | right",
          "page-break-before": "auto | always | avoid | left | right",
          "page-break-inside": "auto | avoid",
          "page-policy": 1,
          "pause": 1,
          "pause-after": 1,
          "pause-before": 1,
          "perspective": 1,
          "perspective-origin": 1,
          "phonemes": 1,
          "pitch": 1,
          "pitch-range": 1,
          "play-during": 1,
          "pointer-events": "auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all",
          "position": "static | relative | absolute | fixed",
          "presentation-level": 1,
          "punctuation-trim": 1,
          //Q
          "quotes": 1,
          //R
          "rendering-intent": 1,
          "resize": 1,
          "rest": 1,
          "rest-after": 1,
          "rest-before": 1,
          "richness": 1,
          "right": "<margin-width>",
          "rotation": 1,
          "rotation-point": 1,
          "ruby-align": 1,
          "ruby-overhang": 1,
          "ruby-position": 1,
          "ruby-span": 1,
          //S
          "shape-rendering": "auto | optimizeSpeed | crispEdges | geometricPrecision",
          "size": 1,
          "speak": "normal | none | spell-out",
          "speak-header": "once | always",
          "speak-numeral": "digits | continuous",
          "speak-punctuation": "code | none",
          "speech-rate": 1,
          "src": 1,
          "stop-color": 1,
          "stop-opacity": "<opacity-value>",
          "stress": 1,
          "string-set": 1,
          "stroke": "<paint>",
          "stroke-dasharray": "none | <dasharray>",
          "stroke-dashoffset": "<percentage> | <length>",
          "stroke-linecap": "butt | round | square",
          "stroke-linejoin": "miter | round | bevel",
          "stroke-miterlimit": "<miterlimit>",
          "stroke-opacity": "<opacity-value>",
          "stroke-width": "<percentage> | <length>",
          "table-layout": "auto | fixed",
          "tab-size": "<integer> | <length>",
          "target": 1,
          "target-name": 1,
          "target-new": 1,
          "target-position": 1,
          "text-align": "left | right | center | justify | match-parent | start | end",
          "text-align-last": 1,
          "text-anchor": "start | middle | end",
          "text-decoration": "<text-decoration-line> || <text-decoration-style> || <text-decoration-color>",
          "text-decoration-color": "<text-decoration-color>",
          "text-decoration-line": "<text-decoration-line>",
          "text-decoration-style": "<text-decoration-style>",
          "text-emphasis": 1,
          "text-height": 1,
          "text-indent": "<length> | <percentage>",
          "text-justify": "auto | none | inter-word | inter-ideograph | inter-cluster | distribute | kashida",
          "text-outline": 1,
          "text-overflow": 1,
          "text-rendering": "auto | optimizeSpeed | optimizeLegibility | geometricPrecision",
          "text-shadow": 1,
          "text-transform": "capitalize | uppercase | lowercase | none",
          "text-wrap": "normal | none | avoid",
          "top": "<margin-width>",
          "-ms-touch-action": "auto | none | pan-x | pan-y | pan-left | pan-right | pan-up | pan-down | manipulation",
          "touch-action": "auto | none | pan-x | pan-y | pan-left | pan-right | pan-up | pan-down | manipulation",
          "transform": 1,
          "transform-origin": 1,
          "transform-style": 1,
          "transition": 1,
          "transition-delay": 1,
          "transition-duration": 1,
          "transition-property": 1,
          "transition-timing-function": 1,
          //U
          "unicode-bidi": "normal | embed | isolate | bidi-override | isolate-override | plaintext",
          "user-modify": "read-only | read-write | write-only",
          "user-select": "none | text | toggle | element | elements | all",
          //V
          "vertical-align": "auto | use-script | baseline | sub | super | top | text-top | central | middle | bottom | text-bottom | <percentage> | <length>",
          "visibility": "visible | hidden | collapse",
          "voice-balance": 1,
          "voice-duration": 1,
          "voice-family": 1,
          "voice-pitch": 1,
          "voice-pitch-range": 1,
          "voice-rate": 1,
          "voice-stress": 1,
          "voice-volume": 1,
          "volume": 1,
          //W
          "white-space": "normal | pre | nowrap | pre-wrap | pre-line | -pre-wrap | -o-pre-wrap | -moz-pre-wrap | -hp-pre-wrap",
          // https://perishablepress.com/wrapping-content/
          "white-space-collapse": 1,
          "widows": "<integer>",
          "width": "<length> | <percentage> | <content-sizing> | auto",
          "will-change": "<will-change>",
          "word-break": "normal | keep-all | break-all",
          "word-spacing": "<length> | normal",
          "word-wrap": "normal | break-word",
          "writing-mode": "horizontal-tb | vertical-rl | vertical-lr | lr-tb | rl-tb | tb-rl | bt-rl | tb-lr | bt-lr | lr-bt | rl-bt | lr | rl | tb",
          //Z
          "z-index": "<integer> | auto",
          "zoom": "<number> | <percentage> | normal"
        };
      }, {}],
      8: [function (require, module, exports) {
        "use strict";

        module.exports = PropertyName;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents a selector combinator (whitespace, +, >).
         * @namespace parserlib.css
         * @class PropertyName
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {String} text The text representation of the unit.
         * @param {String} hack The type of IE hack applied ("*", "_", or null).
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function PropertyName(text, hack, line, col) {
          SyntaxUnit.call(this, text, line, col, Parser.PROPERTY_NAME_TYPE);

          /**
           * The type of IE hack applied ("*", "_", or null).
           * @type String
           * @property hack
           */
          this.hack = hack;
        }
        PropertyName.prototype = new SyntaxUnit();
        PropertyName.prototype.constructor = PropertyName;
        PropertyName.prototype.toString = function () {
          return (this.hack ? this.hack : "") + this.text;
        };
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      9: [function (require, module, exports) {
        "use strict";

        module.exports = PropertyValue;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents a single part of a CSS property value, meaning that it represents
         * just everything single part between ":" and ";". If there are multiple values
         * separated by commas, this type represents just one of the values.
         * @param {String[]} parts An array of value parts making up this value.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         * @namespace parserlib.css
         * @class PropertyValue
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         */
        function PropertyValue(parts, line, col) {
          SyntaxUnit.call(this, parts.join(" "), line, col, Parser.PROPERTY_VALUE_TYPE);

          /**
           * The parts that make up the selector.
           * @type Array
           * @property parts
           */
          this.parts = parts;
        }
        PropertyValue.prototype = new SyntaxUnit();
        PropertyValue.prototype.constructor = PropertyValue;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      10: [function (require, module, exports) {
        "use strict";

        module.exports = PropertyValueIterator;

        /**
         * A utility class that allows for easy iteration over the various parts of a
         * property value.
         * @param {parserlib.css.PropertyValue} value The property value to iterate over.
         * @namespace parserlib.css
         * @class PropertyValueIterator
         * @constructor
         */
        function PropertyValueIterator(value) {
          /**
           * Iterator value
           * @type int
           * @property _i
           * @private
           */
          this._i = 0;

          /**
           * The parts that make up the value.
           * @type Array
           * @property _parts
           * @private
           */
          this._parts = value.parts;

          /**
           * Keeps track of bookmarks along the way.
           * @type Array
           * @property _marks
           * @private
           */
          this._marks = [];

          /**
           * Holds the original property value.
           * @type parserlib.css.PropertyValue
           * @property value
           */
          this.value = value;
        }

        /**
         * Returns the total number of parts in the value.
         * @return {int} The total number of parts in the value.
         * @method count
         */
        PropertyValueIterator.prototype.count = function () {
          return this._parts.length;
        };

        /**
         * Indicates if the iterator is positioned at the first item.
         * @return {Boolean} True if positioned at first item, false if not.
         * @method isFirst
         */
        PropertyValueIterator.prototype.isFirst = function () {
          return this._i === 0;
        };

        /**
         * Indicates if there are more parts of the property value.
         * @return {Boolean} True if there are more parts, false if not.
         * @method hasNext
         */
        PropertyValueIterator.prototype.hasNext = function () {
          return this._i < this._parts.length;
        };

        /**
         * Marks the current spot in the iteration so it can be restored to
         * later on.
         * @return {void}
         * @method mark
         */
        PropertyValueIterator.prototype.mark = function () {
          this._marks.push(this._i);
        };

        /**
         * Returns the next part of the property value or null if there is no next
         * part. Does not move the internal counter forward.
         * @return {parserlib.css.PropertyValuePart} The next part of the property value or null if there is no next
         * part.
         * @method peek
         */
        PropertyValueIterator.prototype.peek = function (count) {
          return this.hasNext() ? this._parts[this._i + (count || 0)] : null;
        };

        /**
         * Returns the next part of the property value or null if there is no next
         * part.
         * @return {parserlib.css.PropertyValuePart} The next part of the property value or null if there is no next
         * part.
         * @method next
         */
        PropertyValueIterator.prototype.next = function () {
          return this.hasNext() ? this._parts[this._i++] : null;
        };

        /**
         * Returns the previous part of the property value or null if there is no
         * previous part.
         * @return {parserlib.css.PropertyValuePart} The previous part of the
         * property value or null if there is no previous part.
         * @method previous
         */
        PropertyValueIterator.prototype.previous = function () {
          return this._i > 0 ? this._parts[--this._i] : null;
        };

        /**
         * Restores the last saved bookmark.
         * @return {void}
         * @method restore
         */
        PropertyValueIterator.prototype.restore = function () {
          if (this._marks.length) {
            this._i = this._marks.pop();
          }
        };

        /**
         * Drops the last saved bookmark.
         * @return {void}
         * @method drop
         */
        PropertyValueIterator.prototype.drop = function () {
          this._marks.pop();
        };
      }, {}],
      11: [function (require, module, exports) {
        "use strict";

        module.exports = PropertyValuePart;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Colors = require("./Colors");
        var Parser = require("./Parser");
        var Tokens = require("./Tokens");

        /**
         * Represents a single part of a CSS property value, meaning that it represents
         * just one part of the data between ":" and ";".
         * @param {String} text The text representation of the unit.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         * @namespace parserlib.css
         * @class PropertyValuePart
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         */
        function PropertyValuePart(text, line, col, optionalHint) {
          var hint = optionalHint || {};
          SyntaxUnit.call(this, text, line, col, Parser.PROPERTY_VALUE_PART_TYPE);

          /**
           * Indicates the type of value unit.
           * @type String
           * @property type
           */
          this.type = "unknown";

          //figure out what type of data it is

          var temp;

          //it is a measurement?
          if (/^([+\-]?[\d\.]+)([a-z]+)$/i.test(text)) {
            //dimension
            this.type = "dimension";
            this.value = +RegExp.$1;
            this.units = RegExp.$2;

            //try to narrow down
            switch (this.units.toLowerCase()) {
              case "em":
              case "rem":
              case "ex":
              case "px":
              case "cm":
              case "mm":
              case "in":
              case "pt":
              case "pc":
              case "ch":
              case "vh":
              case "vw":
              case "vmax":
              case "vmin":
                this.type = "length";
                break;
              case "fr":
                this.type = "grid";
                break;
              case "deg":
              case "rad":
              case "grad":
              case "turn":
                this.type = "angle";
                break;
              case "ms":
              case "s":
                this.type = "time";
                break;
              case "hz":
              case "khz":
                this.type = "frequency";
                break;
              case "dpi":
              case "dpcm":
                this.type = "resolution";
                break;

              //default
            }
          } else if (/^([+\-]?[\d\.]+)%$/i.test(text)) {
            //percentage
            this.type = "percentage";
            this.value = +RegExp.$1;
          } else if (/^([+\-]?\d+)$/i.test(text)) {
            //integer
            this.type = "integer";
            this.value = +RegExp.$1;
          } else if (/^([+\-]?[\d\.]+)$/i.test(text)) {
            //number
            this.type = "number";
            this.value = +RegExp.$1;
          } else if (/^#([a-f0-9]{3,6})/i.test(text)) {
            //hexcolor
            this.type = "color";
            temp = RegExp.$1;
            if (temp.length === 3) {
              this.red = parseInt(temp.charAt(0) + temp.charAt(0), 16);
              this.green = parseInt(temp.charAt(1) + temp.charAt(1), 16);
              this.blue = parseInt(temp.charAt(2) + temp.charAt(2), 16);
            } else {
              this.red = parseInt(temp.substring(0, 2), 16);
              this.green = parseInt(temp.substring(2, 4), 16);
              this.blue = parseInt(temp.substring(4, 6), 16);
            }
          } else if (/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i.test(text)) {
            //rgb() color with absolute numbers
            this.type = "color";
            this.red = +RegExp.$1;
            this.green = +RegExp.$2;
            this.blue = +RegExp.$3;
          } else if (/^rgb\(\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i.test(text)) {
            //rgb() color with percentages
            this.type = "color";
            this.red = +RegExp.$1 * 255 / 100;
            this.green = +RegExp.$2 * 255 / 100;
            this.blue = +RegExp.$3 * 255 / 100;
          } else if (/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/i.test(text)) {
            //rgba() color with absolute numbers
            this.type = "color";
            this.red = +RegExp.$1;
            this.green = +RegExp.$2;
            this.blue = +RegExp.$3;
            this.alpha = +RegExp.$4;
          } else if (/^rgba\(\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d\.]+)\s*\)/i.test(text)) {
            //rgba() color with percentages
            this.type = "color";
            this.red = +RegExp.$1 * 255 / 100;
            this.green = +RegExp.$2 * 255 / 100;
            this.blue = +RegExp.$3 * 255 / 100;
            this.alpha = +RegExp.$4;
          } else if (/^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i.test(text)) {
            //hsl()
            this.type = "color";
            this.hue = +RegExp.$1;
            this.saturation = +RegExp.$2 / 100;
            this.lightness = +RegExp.$3 / 100;
          } else if (/^hsla\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*([\d\.]+)\s*\)/i.test(text)) {
            //hsla() color with percentages
            this.type = "color";
            this.hue = +RegExp.$1;
            this.saturation = +RegExp.$2 / 100;
            this.lightness = +RegExp.$3 / 100;
            this.alpha = +RegExp.$4;
          } else if (/^url\(("([^\\"]|\\.)*")\)/i.test(text)) {
            //URI
            // generated by TokenStream.readURI, so always double-quoted.
            this.type = "uri";
            this.uri = PropertyValuePart.parseString(RegExp.$1);
          } else if (/^([^\(]+)\(/i.test(text)) {
            this.type = "function";
            this.name = RegExp.$1;
            this.value = text;
          } else if (/^"([^\n\r\f\\"]|\\\r\n|\\[^\r0-9a-f]|\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)*"/i.test(text)) {
            //double-quoted string
            this.type = "string";
            this.value = PropertyValuePart.parseString(text);
          } else if (/^'([^\n\r\f\\']|\\\r\n|\\[^\r0-9a-f]|\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)*'/i.test(text)) {
            //single-quoted string
            this.type = "string";
            this.value = PropertyValuePart.parseString(text);
          } else if (Colors[text.toLowerCase()]) {
            //named color
            this.type = "color";
            temp = Colors[text.toLowerCase()].substring(1);
            this.red = parseInt(temp.substring(0, 2), 16);
            this.green = parseInt(temp.substring(2, 4), 16);
            this.blue = parseInt(temp.substring(4, 6), 16);
          } else if (/^[,\/]$/.test(text)) {
            this.type = "operator";
            this.value = text;
          } else if (/^-?[a-z_\u00A0-\uFFFF][a-z0-9\-_\u00A0-\uFFFF]*$/i.test(text)) {
            this.type = "identifier";
            this.value = text;
          }

          // There can be ambiguity with escape sequences in identifiers, as
          // well as with "color" parts which are also "identifiers", so record
          // an explicit hint when the token generating this PropertyValuePart
          // was an identifier.
          this.wasIdent = Boolean(hint.ident);
        }
        PropertyValuePart.prototype = new SyntaxUnit();
        PropertyValuePart.prototype.constructor = PropertyValuePart;

        /**
         * Helper method to parse a CSS string.
         */
        PropertyValuePart.parseString = function (str) {
          str = str.slice(1, -1); // Strip surrounding single/double quotes
          var replacer = function (match, esc) {
            if (/^(\n|\r\n|\r|\f)$/.test(esc)) {
              return "";
            }
            var m = /^[0-9a-f]{1,6}/i.exec(esc);
            if (m) {
              var codePoint = parseInt(m[0], 16);
              if (String.fromCodePoint) {
                return String.fromCodePoint(codePoint);
              } else {
                // XXX No support for surrogates on old JavaScript engines.
                return String.fromCharCode(codePoint);
              }
            }
            return esc;
          };
          return str.replace(/\\(\r\n|[^\r0-9a-f]|[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)/ig, replacer);
        };

        /**
         * Helper method to serialize a CSS string.
         */
        PropertyValuePart.serializeString = function (value) {
          var replacer = function (match, c) {
            if (c === "\"") {
              return "\\" + c;
            }
            var cp = String.codePointAt ? String.codePointAt(0) :
            // We only escape non-surrogate chars, so using charCodeAt
            // is harmless here.
            String.charCodeAt(0);
            return "\\" + cp.toString(16) + " ";
          };
          return "\"" + value.replace(/["\r\n\f]/g, replacer) + "\"";
        };

        /**
         * Create a new syntax unit based solely on the given token.
         * Convenience method for creating a new syntax unit when
         * it represents a single token instead of multiple.
         * @param {Object} token The token object to represent.
         * @return {parserlib.css.PropertyValuePart} The object representing the token.
         * @static
         * @method fromToken
         */
        PropertyValuePart.fromToken = function (token) {
          var part = new PropertyValuePart(token.value, token.startLine, token.startCol, {
            // Tokens can have escaped characters that would fool the type
            // identification in the PropertyValuePart constructor, so pass
            // in a hint if this was an identifier.
            ident: token.type === Tokens.IDENT
          });
          return part;
        };
      }, {
        "../util/SyntaxUnit": 26,
        "./Colors": 1,
        "./Parser": 6,
        "./Tokens": 18
      }],
      12: [function (require, module, exports) {
        "use strict";

        var Pseudos = module.exports = {
          __proto__: null,
          ":first-letter": 1,
          ":first-line": 1,
          ":before": 1,
          ":after": 1
        };
        Pseudos.ELEMENT = 1;
        Pseudos.CLASS = 2;
        Pseudos.isElement = function (pseudo) {
          return pseudo.indexOf("::") === 0 || Pseudos[pseudo.toLowerCase()] === Pseudos.ELEMENT;
        };
      }, {}],
      13: [function (require, module, exports) {
        "use strict";

        module.exports = Selector;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");
        var Specificity = require("./Specificity");

        /**
         * Represents an entire single selector, including all parts but not
         * including multiple selectors (those separated by commas).
         * @namespace parserlib.css
         * @class Selector
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {Array} parts Array of selectors parts making up this selector.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function Selector(parts, line, col) {
          SyntaxUnit.call(this, parts.join(" "), line, col, Parser.SELECTOR_TYPE);

          /**
           * The parts that make up the selector.
           * @type Array
           * @property parts
           */
          this.parts = parts;

          /**
           * The specificity of the selector.
           * @type parserlib.css.Specificity
           * @property specificity
           */
          this.specificity = Specificity.calculate(this);
        }
        Selector.prototype = new SyntaxUnit();
        Selector.prototype.constructor = Selector;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6,
        "./Specificity": 16
      }],
      14: [function (require, module, exports) {
        "use strict";

        module.exports = SelectorPart;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents a single part of a selector string, meaning a single set of
         * element name and modifiers. This does not include combinators such as
         * spaces, +, >, etc.
         * @namespace parserlib.css
         * @class SelectorPart
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {String} elementName The element name in the selector or null
         *      if there is no element name.
         * @param {Array} modifiers Array of individual modifiers for the element.
         *      May be empty if there are none.
         * @param {String} text The text representation of the unit.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function SelectorPart(elementName, modifiers, text, line, col) {
          SyntaxUnit.call(this, text, line, col, Parser.SELECTOR_PART_TYPE);

          /**
           * The tag name of the element to which this part
           * of the selector affects.
           * @type String
           * @property elementName
           */
          this.elementName = elementName;

          /**
           * The parts that come after the element name, such as class names, IDs,
           * pseudo classes/elements, etc.
           * @type Array
           * @property modifiers
           */
          this.modifiers = modifiers;
        }
        SelectorPart.prototype = new SyntaxUnit();
        SelectorPart.prototype.constructor = SelectorPart;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      15: [function (require, module, exports) {
        "use strict";

        module.exports = SelectorSubPart;
        var SyntaxUnit = require("../util/SyntaxUnit");
        var Parser = require("./Parser");

        /**
         * Represents a selector modifier string, meaning a class name, element name,
         * element ID, pseudo rule, etc.
         * @namespace parserlib.css
         * @class SelectorSubPart
         * @extends parserlib.util.SyntaxUnit
         * @constructor
         * @param {String} text The text representation of the unit.
         * @param {String} type The type of selector modifier.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function SelectorSubPart(text, type, line, col) {
          SyntaxUnit.call(this, text, line, col, Parser.SELECTOR_SUB_PART_TYPE);

          /**
           * The type of modifier.
           * @type String
           * @property type
           */
          this.type = type;

          /**
           * Some subparts have arguments, this represents them.
           * @type Array
           * @property args
           */
          this.args = [];
        }
        SelectorSubPart.prototype = new SyntaxUnit();
        SelectorSubPart.prototype.constructor = SelectorSubPart;
      }, {
        "../util/SyntaxUnit": 26,
        "./Parser": 6
      }],
      16: [function (require, module, exports) {
        "use strict";

        module.exports = Specificity;
        var Pseudos = require("./Pseudos");
        var SelectorPart = require("./SelectorPart");

        /**
         * Represents a selector's specificity.
         * @namespace parserlib.css
         * @class Specificity
         * @constructor
         * @param {int} a Should be 1 for inline styles, zero for stylesheet styles
         * @param {int} b Number of ID selectors
         * @param {int} c Number of classes and pseudo classes
         * @param {int} d Number of element names and pseudo elements
         */
        function Specificity(a, b, c, d) {
          this.a = a;
          this.b = b;
          this.c = c;
          this.d = d;
        }
        Specificity.prototype = {
          constructor: Specificity,
          /**
           * Compare this specificity to another.
           * @param {Specificity} other The other specificity to compare to.
           * @return {int} -1 if the other specificity is larger, 1 if smaller, 0 if equal.
           * @method compare
           */
          compare: function (other) {
            var comps = ["a", "b", "c", "d"],
              i,
              len;
            for (i = 0, len = comps.length; i < len; i++) {
              if (this[comps[i]] < other[comps[i]]) {
                return -1;
              } else if (this[comps[i]] > other[comps[i]]) {
                return 1;
              }
            }
            return 0;
          },
          /**
           * Creates a numeric value for the specificity.
           * @return {int} The numeric value for the specificity.
           * @method valueOf
           */
          valueOf: function () {
            return this.a * 1000 + this.b * 100 + this.c * 10 + this.d;
          },
          /**
           * Returns a string representation for specificity.
           * @return {String} The string representation of specificity.
           * @method toString
           */
          toString: function () {
            return this.a + "," + this.b + "," + this.c + "," + this.d;
          }
        };

        /**
         * Calculates the specificity of the given selector.
         * @param {parserlib.css.Selector} The selector to calculate specificity for.
         * @return {parserlib.css.Specificity} The specificity of the selector.
         * @static
         * @method calculate
         */
        Specificity.calculate = function (selector) {
          var i,
            len,
            part,
            b = 0,
            c = 0,
            d = 0;
          function updateValues(part) {
            var i,
              j,
              len,
              num,
              elementName = part.elementName ? part.elementName.text : "",
              modifier;
            if (elementName && elementName.charAt(elementName.length - 1) !== "*") {
              d++;
            }
            for (i = 0, len = part.modifiers.length; i < len; i++) {
              modifier = part.modifiers[i];
              switch (modifier.type) {
                case "class":
                case "attribute":
                  c++;
                  break;
                case "id":
                  b++;
                  break;
                case "pseudo":
                  if (Pseudos.isElement(modifier.text)) {
                    d++;
                  } else {
                    c++;
                  }
                  break;
                case "not":
                  for (j = 0, num = modifier.args.length; j < num; j++) {
                    updateValues(modifier.args[j]);
                  }
              }
            }
          }
          for (i = 0, len = selector.parts.length; i < len; i++) {
            part = selector.parts[i];
            if (part instanceof SelectorPart) {
              updateValues(part);
            }
          }
          return new Specificity(0, b, c, d);
        };
      }, {
        "./Pseudos": 12,
        "./SelectorPart": 14
      }],
      17: [function (require, module, exports) {
        "use strict";

        module.exports = TokenStream;
        var TokenStreamBase = require("../util/TokenStreamBase");
        var PropertyValuePart = require("./PropertyValuePart");
        var Tokens = require("./Tokens");
        var h = /^[0-9a-fA-F]$/,
          nonascii = /^[\u00A0-\uFFFF]$/,
          nl = /\n|\r\n|\r|\f/,
          whitespace = /\u0009|\u000a|\u000c|\u000d|\u0020/;

        //-----------------------------------------------------------------------------
        // Helper functions
        //-----------------------------------------------------------------------------

        function isHexDigit(c) {
          return c !== null && h.test(c);
        }
        function isDigit(c) {
          return c !== null && /\d/.test(c);
        }
        function isWhitespace(c) {
          return c !== null && whitespace.test(c);
        }
        function isNewLine(c) {
          return c !== null && nl.test(c);
        }
        function isNameStart(c) {
          return c !== null && /[a-z_\u00A0-\uFFFF\\]/i.test(c);
        }
        function isNameChar(c) {
          return c !== null && (isNameStart(c) || /[0-9\-\\]/.test(c));
        }
        function isIdentStart(c) {
          return c !== null && (isNameStart(c) || /\-\\/.test(c));
        }
        function mix(receiver, supplier) {
          for (var prop in supplier) {
            if (Object.prototype.hasOwnProperty.call(supplier, prop)) {
              receiver[prop] = supplier[prop];
            }
          }
          return receiver;
        }

        //-----------------------------------------------------------------------------
        // CSS Token Stream
        //-----------------------------------------------------------------------------

        /**
         * A token stream that produces CSS tokens.
         * @param {String|Reader} input The source of text to tokenize.
         * @constructor
         * @class TokenStream
         * @namespace parserlib.css
         */
        function TokenStream(input) {
          TokenStreamBase.call(this, input, Tokens);
        }
        TokenStream.prototype = mix(new TokenStreamBase(), {
          /**
           * Overrides the TokenStreamBase method of the same name
           * to produce CSS tokens.
           * @return {Object} A token object representing the next token.
           * @method _getToken
           * @private
           */
          _getToken: function () {
            var c,
              reader = this._reader,
              token = null,
              startLine = reader.getLine(),
              startCol = reader.getCol();
            c = reader.read();
            while (c) {
              switch (c) {
                /*
                 * Potential tokens:
                 * - COMMENT
                 * - SLASH
                 * - CHAR
                 */
                case "/":
                  if (reader.peek() === "*") {
                    token = this.commentToken(c, startLine, startCol);
                  } else {
                    token = this.charToken(c, startLine, startCol);
                  }
                  break;

                /*
                 * Potential tokens:
                 * - DASHMATCH
                 * - INCLUDES
                 * - PREFIXMATCH
                 * - SUFFIXMATCH
                 * - SUBSTRINGMATCH
                 * - CHAR
                 */
                case "|":
                case "~":
                case "^":
                case "$":
                case "*":
                  if (reader.peek() === "=") {
                    token = this.comparisonToken(c, startLine, startCol);
                  } else {
                    token = this.charToken(c, startLine, startCol);
                  }
                  break;

                /*
                 * Potential tokens:
                 * - STRING
                 * - INVALID
                 */
                case "\"":
                case "'":
                  token = this.stringToken(c, startLine, startCol);
                  break;

                /*
                 * Potential tokens:
                 * - HASH
                 * - CHAR
                 */
                case "#":
                  if (isNameChar(reader.peek())) {
                    token = this.hashToken(c, startLine, startCol);
                  } else {
                    token = this.charToken(c, startLine, startCol);
                  }
                  break;

                /*
                 * Potential tokens:
                 * - DOT
                 * - NUMBER
                 * - DIMENSION
                 * - PERCENTAGE
                 */
                case ".":
                  if (isDigit(reader.peek())) {
                    token = this.numberToken(c, startLine, startCol);
                  } else {
                    token = this.charToken(c, startLine, startCol);
                  }
                  break;

                /*
                 * Potential tokens:
                 * - CDC
                 * - MINUS
                 * - NUMBER
                 * - DIMENSION
                 * - PERCENTAGE
                 */
                case "-":
                  if (reader.peek() === "-") {
                    //could be closing HTML-style comment
                    token = this.htmlCommentEndToken(c, startLine, startCol);
                  } else if (isNameStart(reader.peek())) {
                    token = this.identOrFunctionToken(c, startLine, startCol);
                  } else {
                    token = this.charToken(c, startLine, startCol);
                  }
                  break;

                /*
                 * Potential tokens:
                 * - IMPORTANT_SYM
                 * - CHAR
                 */
                case "!":
                  token = this.importantToken(c, startLine, startCol);
                  break;

                /*
                 * Any at-keyword or CHAR
                 */
                case "@":
                  token = this.atRuleToken(c, startLine, startCol);
                  break;

                /*
                 * Potential tokens:
                 * - NOT
                 * - CHAR
                 */
                case ":":
                  token = this.notToken(c, startLine, startCol);
                  break;

                /*
                 * Potential tokens:
                 * - CDO
                 * - CHAR
                 */
                case "<":
                  token = this.htmlCommentStartToken(c, startLine, startCol);
                  break;

                /*
                 * Potential tokens:
                 * - IDENT
                 * - CHAR
                 */
                case "\\":
                  if (/[^\r\n\f]/.test(reader.peek())) {
                    token = this.identOrFunctionToken(this.readEscape(c, true), startLine, startCol);
                  } else {
                    token = this.charToken(c, startLine, startCol);
                  }
                  break;

                /*
                 * Potential tokens:
                 * - UNICODE_RANGE
                 * - URL
                 * - CHAR
                 */
                case "U":
                case "u":
                  if (reader.peek() === "+") {
                    token = this.unicodeRangeToken(c, startLine, startCol);
                    break;
                  }
                /* falls through */
                default:
                  /*
                   * Potential tokens:
                   * - NUMBER
                   * - DIMENSION
                   * - LENGTH
                   * - FREQ
                   * - TIME
                   * - EMS
                   * - EXS
                   * - ANGLE
                   */
                  if (isDigit(c)) {
                    token = this.numberToken(c, startLine, startCol);
                  } else
                    /*
                     * Potential tokens:
                     * - S
                     */
                    if (isWhitespace(c)) {
                      token = this.whitespaceToken(c, startLine, startCol);
                    } else
                      /*
                       * Potential tokens:
                       * - IDENT
                       */
                      if (isIdentStart(c)) {
                        token = this.identOrFunctionToken(c, startLine, startCol);
                      } else {
                        /*
                         * Potential tokens:
                         * - CHAR
                         * - PLUS
                         */
                        token = this.charToken(c, startLine, startCol);
                      }
              }

              //make sure this token is wanted
              //TODO: check channel
              break;
            }
            if (!token && c === null) {
              token = this.createToken(Tokens.EOF, null, startLine, startCol);
            }
            return token;
          },
          //-------------------------------------------------------------------------
          // Methods to create tokens
          //-------------------------------------------------------------------------

          /**
           * Produces a token based on available data and the current
           * reader position information. This method is called by other
           * private methods to create tokens and is never called directly.
           * @param {int} tt The token type.
           * @param {String} value The text value of the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @param {Object} options (Optional) Specifies a channel property
           *      to indicate that a different channel should be scanned
           *      and/or a hide property indicating that the token should
           *      be hidden.
           * @return {Object} A token object.
           * @method createToken
           */
          createToken: function (tt, value, startLine, startCol, options) {
            var reader = this._reader;
            options = options || {};
            return {
              value: value,
              type: tt,
              channel: options.channel,
              endChar: options.endChar,
              hide: options.hide || false,
              startLine: startLine,
              startCol: startCol,
              endLine: reader.getLine(),
              endCol: reader.getCol()
            };
          },
          //-------------------------------------------------------------------------
          // Methods to create specific tokens
          //-------------------------------------------------------------------------

          /**
           * Produces a token for any at-rule. If the at-rule is unknown, then
           * the token is for a single "@" character.
           * @param {String} first The first character for the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method atRuleToken
           */
          atRuleToken: function (first, startLine, startCol) {
            var rule = first,
              reader = this._reader,
              tt = Tokens.CHAR,
              ident;

            /*
             * First, mark where we are. There are only four @ rules,
             * so anything else is really just an invalid token.
             * Basically, if this doesn't match one of the known @
             * rules, just return '@' as an unknown token and allow
             * parsing to continue after that point.
             */
            reader.mark();

            //try to find the at-keyword
            ident = this.readName();
            rule = first + ident;
            tt = Tokens.type(rule.toLowerCase());

            //if it's not valid, use the first character only and reset the reader
            if (tt === Tokens.CHAR || tt === Tokens.UNKNOWN) {
              if (rule.length > 1) {
                tt = Tokens.UNKNOWN_SYM;
              } else {
                tt = Tokens.CHAR;
                rule = first;
                reader.reset();
              }
            }
            return this.createToken(tt, rule, startLine, startCol);
          },
          /**
           * Produces a character token based on the given character
           * and location in the stream. If there's a special (non-standard)
           * token name, this is used; otherwise CHAR is used.
           * @param {String} c The character for the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method charToken
           */
          charToken: function (c, startLine, startCol) {
            var tt = Tokens.type(c);
            var opts = {};
            if (tt === -1) {
              tt = Tokens.CHAR;
            } else {
              opts.endChar = Tokens[tt].endChar;
            }
            return this.createToken(tt, c, startLine, startCol, opts);
          },
          /**
           * Produces a character token based on the given character
           * and location in the stream. If there's a special (non-standard)
           * token name, this is used; otherwise CHAR is used.
           * @param {String} first The first character for the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method commentToken
           */
          commentToken: function (first, startLine, startCol) {
            var comment = this.readComment(first);
            return this.createToken(Tokens.COMMENT, comment, startLine, startCol);
          },
          /**
           * Produces a comparison token based on the given character
           * and location in the stream. The next character must be
           * read and is already known to be an equals sign.
           * @param {String} c The character for the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method comparisonToken
           */
          comparisonToken: function (c, startLine, startCol) {
            var reader = this._reader,
              comparison = c + reader.read(),
              tt = Tokens.type(comparison) || Tokens.CHAR;
            return this.createToken(tt, comparison, startLine, startCol);
          },
          /**
           * Produces a hash token based on the specified information. The
           * first character provided is the pound sign (#) and then this
           * method reads a name afterward.
           * @param {String} first The first character (#) in the hash name.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method hashToken
           */
          hashToken: function (first, startLine, startCol) {
            var name = this.readName(first);
            return this.createToken(Tokens.HASH, name, startLine, startCol);
          },
          /**
           * Produces a CDO or CHAR token based on the specified information. The
           * first character is provided and the rest is read by the function to determine
           * the correct token to create.
           * @param {String} first The first character in the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method htmlCommentStartToken
           */
          htmlCommentStartToken: function (first, startLine, startCol) {
            var reader = this._reader,
              text = first;
            reader.mark();
            text += reader.readCount(3);
            if (text === "<!--") {
              return this.createToken(Tokens.CDO, text, startLine, startCol);
            } else {
              reader.reset();
              return this.charToken(first, startLine, startCol);
            }
          },
          /**
           * Produces a CDC or CHAR token based on the specified information. The
           * first character is provided and the rest is read by the function to determine
           * the correct token to create.
           * @param {String} first The first character in the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method htmlCommentEndToken
           */
          htmlCommentEndToken: function (first, startLine, startCol) {
            var reader = this._reader,
              text = first;
            reader.mark();
            text += reader.readCount(2);
            if (text === "-->") {
              return this.createToken(Tokens.CDC, text, startLine, startCol);
            } else {
              reader.reset();
              return this.charToken(first, startLine, startCol);
            }
          },
          /**
           * Produces an IDENT or FUNCTION token based on the specified information. The
           * first character is provided and the rest is read by the function to determine
           * the correct token to create.
           * @param {String} first The first character in the identifier.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method identOrFunctionToken
           */
          identOrFunctionToken: function (first, startLine, startCol) {
            var reader = this._reader,
              ident = this.readName(first),
              tt = Tokens.IDENT,
              uriFns = ["url(", "url-prefix(", "domain("],
              uri;

            //if there's a left paren immediately after, it's a URI or function
            if (reader.peek() === "(") {
              ident += reader.read();
              if (uriFns.indexOf(ident.toLowerCase()) > -1) {
                reader.mark();
                uri = this.readURI(ident);
                if (uri === null) {
                  //didn't find a valid URL or there's no closing paren
                  reader.reset();
                  tt = Tokens.FUNCTION;
                } else {
                  tt = Tokens.URI;
                  ident = uri;
                }
              } else {
                tt = Tokens.FUNCTION;
              }
            } else if (reader.peek() === ":") {
              //might be an IE function

              //IE-specific functions always being with progid:
              if (ident.toLowerCase() === "progid") {
                ident += reader.readTo("(");
                tt = Tokens.IE_FUNCTION;
              }
            }
            return this.createToken(tt, ident, startLine, startCol);
          },
          /**
           * Produces an IMPORTANT_SYM or CHAR token based on the specified information. The
           * first character is provided and the rest is read by the function to determine
           * the correct token to create.
           * @param {String} first The first character in the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method importantToken
           */
          importantToken: function (first, startLine, startCol) {
            var reader = this._reader,
              important = first,
              tt = Tokens.CHAR,
              temp,
              c;
            reader.mark();
            c = reader.read();
            while (c) {
              //there can be a comment in here
              if (c === "/") {
                //if the next character isn't a star, then this isn't a valid !important token
                if (reader.peek() !== "*") {
                  break;
                } else {
                  temp = this.readComment(c);
                  if (temp === "") {
                    //broken!
                    break;
                  }
                }
              } else if (isWhitespace(c)) {
                important += c + this.readWhitespace();
              } else if (/i/i.test(c)) {
                temp = reader.readCount(8);
                if (/mportant/i.test(temp)) {
                  important += c + temp;
                  tt = Tokens.IMPORTANT_SYM;
                }
                break; //we're done
              } else {
                break;
              }
              c = reader.read();
            }
            if (tt === Tokens.CHAR) {
              reader.reset();
              return this.charToken(first, startLine, startCol);
            } else {
              return this.createToken(tt, important, startLine, startCol);
            }
          },
          /**
           * Produces a NOT or CHAR token based on the specified information. The
           * first character is provided and the rest is read by the function to determine
           * the correct token to create.
           * @param {String} first The first character in the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method notToken
           */
          notToken: function (first, startLine, startCol) {
            var reader = this._reader,
              text = first;
            reader.mark();
            text += reader.readCount(4);
            if (text.toLowerCase() === ":not(") {
              return this.createToken(Tokens.NOT, text, startLine, startCol);
            } else {
              reader.reset();
              return this.charToken(first, startLine, startCol);
            }
          },
          /**
           * Produces a number token based on the given character
           * and location in the stream. This may return a token of
           * NUMBER, EMS, EXS, LENGTH, ANGLE, TIME, FREQ, DIMENSION,
           * or PERCENTAGE.
           * @param {String} first The first character for the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method numberToken
           */
          numberToken: function (first, startLine, startCol) {
            var reader = this._reader,
              value = this.readNumber(first),
              ident,
              tt = Tokens.NUMBER,
              c = reader.peek();
            if (isIdentStart(c)) {
              ident = this.readName(reader.read());
              value += ident;
              if (/^em$|^ex$|^px$|^gd$|^rem$|^vw$|^vh$|^vmax$|^vmin$|^ch$|^cm$|^mm$|^in$|^pt$|^pc$/i.test(ident)) {
                tt = Tokens.LENGTH;
              } else if (/^deg|^rad$|^grad$|^turn$/i.test(ident)) {
                tt = Tokens.ANGLE;
              } else if (/^ms$|^s$/i.test(ident)) {
                tt = Tokens.TIME;
              } else if (/^hz$|^khz$/i.test(ident)) {
                tt = Tokens.FREQ;
              } else if (/^dpi$|^dpcm$/i.test(ident)) {
                tt = Tokens.RESOLUTION;
              } else {
                tt = Tokens.DIMENSION;
              }
            } else if (c === "%") {
              value += reader.read();
              tt = Tokens.PERCENTAGE;
            }
            return this.createToken(tt, value, startLine, startCol);
          },
          /**
           * Produces a string token based on the given character
           * and location in the stream. Since strings may be indicated
           * by single or double quotes, a failure to match starting
           * and ending quotes results in an INVALID token being generated.
           * The first character in the string is passed in and then
           * the rest are read up to and including the final quotation mark.
           * @param {String} first The first character in the string.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method stringToken
           */
          stringToken: function (first, startLine, startCol) {
            var delim = first,
              string = first,
              reader = this._reader,
              tt = Tokens.STRING,
              c = reader.read(),
              i;
            while (c) {
              string += c;
              if (c === "\\") {
                c = reader.read();
                if (c === null) {
                  break; // premature EOF after backslash
                } else if (/[^\r\n\f0-9a-f]/i.test(c)) {
                  // single-character escape
                  string += c;
                } else {
                  // read up to six hex digits
                  for (i = 0; isHexDigit(c) && i < 6; i++) {
                    string += c;
                    c = reader.read();
                  }
                  // swallow trailing newline or space
                  if (c === "\r" && reader.peek() === "\n") {
                    string += c;
                    c = reader.read();
                  }
                  if (isWhitespace(c)) {
                    string += c;
                  } else {
                    // This character is null or not part of the escape;
                    // jump back to the top to process it.
                    continue;
                  }
                }
              } else if (c === delim) {
                break; // delimiter found.
              } else if (isNewLine(reader.peek())) {
                // newline without an escapement: it's an invalid string
                tt = Tokens.INVALID;
                break;
              }
              c = reader.read();
            }

            //if c is null, that means we're out of input and the string was never closed
            if (c === null) {
              tt = Tokens.INVALID;
            }
            return this.createToken(tt, string, startLine, startCol);
          },
          unicodeRangeToken: function (first, startLine, startCol) {
            var reader = this._reader,
              value = first,
              temp,
              tt = Tokens.CHAR;

            //then it should be a unicode range
            if (reader.peek() === "+") {
              reader.mark();
              value += reader.read();
              value += this.readUnicodeRangePart(true);

              //ensure there's an actual unicode range here
              if (value.length === 2) {
                reader.reset();
              } else {
                tt = Tokens.UNICODE_RANGE;

                //if there's a ? in the first part, there can't be a second part
                if (value.indexOf("?") === -1) {
                  if (reader.peek() === "-") {
                    reader.mark();
                    temp = reader.read();
                    temp += this.readUnicodeRangePart(false);

                    //if there's not another value, back up and just take the first
                    if (temp.length === 1) {
                      reader.reset();
                    } else {
                      value += temp;
                    }
                  }
                }
              }
            }
            return this.createToken(tt, value, startLine, startCol);
          },
          /**
           * Produces a S token based on the specified information. Since whitespace
           * may have multiple characters, this consumes all whitespace characters
           * into a single token.
           * @param {String} first The first character in the token.
           * @param {int} startLine The beginning line for the character.
           * @param {int} startCol The beginning column for the character.
           * @return {Object} A token object.
           * @method whitespaceToken
           */
          whitespaceToken: function (first, startLine, startCol) {
            var value = first + this.readWhitespace();
            return this.createToken(Tokens.S, value, startLine, startCol);
          },
          //-------------------------------------------------------------------------
          // Methods to read values from the string stream
          //-------------------------------------------------------------------------

          readUnicodeRangePart: function (allowQuestionMark) {
            var reader = this._reader,
              part = "",
              c = reader.peek();

            //first read hex digits
            while (isHexDigit(c) && part.length < 6) {
              reader.read();
              part += c;
              c = reader.peek();
            }

            //then read question marks if allowed
            if (allowQuestionMark) {
              while (c === "?" && part.length < 6) {
                reader.read();
                part += c;
                c = reader.peek();
              }
            }

            //there can't be any other characters after this point

            return part;
          },
          readWhitespace: function () {
            var reader = this._reader,
              whitespace = "",
              c = reader.peek();
            while (isWhitespace(c)) {
              reader.read();
              whitespace += c;
              c = reader.peek();
            }
            return whitespace;
          },
          readNumber: function (first) {
            var reader = this._reader,
              number = first,
              hasDot = first === ".",
              c = reader.peek();
            while (c) {
              if (isDigit(c)) {
                number += reader.read();
              } else if (c === ".") {
                if (hasDot) {
                  break;
                } else {
                  hasDot = true;
                  number += reader.read();
                }
              } else {
                break;
              }
              c = reader.peek();
            }
            return number;
          },
          // returns null w/o resetting reader if string is invalid.
          readString: function () {
            var token = this.stringToken(this._reader.read(), 0, 0);
            return token.type === Tokens.INVALID ? null : token.value;
          },
          // returns null w/o resetting reader if URI is invalid.
          readURI: function (first) {
            var reader = this._reader,
              uri = first,
              inner = "",
              c = reader.peek();

            //skip whitespace before
            while (c && isWhitespace(c)) {
              reader.read();
              c = reader.peek();
            }

            //it's a string
            if (c === "'" || c === "\"") {
              inner = this.readString();
              if (inner !== null) {
                inner = PropertyValuePart.parseString(inner);
              }
            } else {
              inner = this.readUnquotedURL();
            }
            c = reader.peek();

            //skip whitespace after
            while (c && isWhitespace(c)) {
              reader.read();
              c = reader.peek();
            }

            //if there was no inner value or the next character isn't closing paren, it's not a URI
            if (inner === null || c !== ")") {
              uri = null;
            } else {
              // Ensure argument to URL is always double-quoted
              // (This simplifies later processing in PropertyValuePart.)
              uri += PropertyValuePart.serializeString(inner) + reader.read();
            }
            return uri;
          },
          // This method never fails, although it may return an empty string.
          readUnquotedURL: function (first) {
            var reader = this._reader,
              url = first || "",
              c;
            for (c = reader.peek(); c; c = reader.peek()) {
              // Note that the grammar at
              // https://www.w3.org/TR/CSS2/grammar.html#scanner
              // incorrectly includes the backslash character in the
              // `url` production, although it is correctly omitted in
              // the `baduri1` production.
              if (nonascii.test(c) || /^[\-!#$%&*-\[\]-~]$/.test(c)) {
                url += c;
                reader.read();
              } else if (c === "\\") {
                if (/^[^\r\n\f]$/.test(reader.peek(2))) {
                  url += this.readEscape(reader.read(), true);
                } else {
                  break; // bad escape sequence.
                }
              } else {
                break; // bad character
              }
            }

            return url;
          },
          readName: function (first) {
            var reader = this._reader,
              ident = first || "",
              c;
            for (c = reader.peek(); c; c = reader.peek()) {
              if (c === "\\") {
                if (/^[^\r\n\f]$/.test(reader.peek(2))) {
                  ident += this.readEscape(reader.read(), true);
                } else {
                  // Bad escape sequence.
                  break;
                }
              } else if (isNameChar(c)) {
                ident += reader.read();
              } else {
                break;
              }
            }
            return ident;
          },
          readEscape: function (first, unescape) {
            var reader = this._reader,
              cssEscape = first || "",
              i = 0,
              c = reader.peek();
            if (isHexDigit(c)) {
              do {
                cssEscape += reader.read();
                c = reader.peek();
              } while (c && isHexDigit(c) && ++i < 6);
            }
            if (cssEscape.length === 1) {
              if (/^[^\r\n\f0-9a-f]$/.test(c)) {
                reader.read();
                if (unescape) {
                  return c;
                }
              } else {
                // We should never get here (readName won't call readEscape
                // if the escape sequence is bad).
                throw new Error("Bad escape sequence.");
              }
            } else if (c === "\r") {
              reader.read();
              if (reader.peek() === "\n") {
                c += reader.read();
              }
            } else if (/^[ \t\n\f]$/.test(c)) {
              reader.read();
            } else {
              c = "";
            }
            if (unescape) {
              var cp = parseInt(cssEscape.slice(first.length), 16);
              return String.fromCodePoint ? String.fromCodePoint(cp) : String.fromCharCode(cp);
            }
            return cssEscape + c;
          },
          readComment: function (first) {
            var reader = this._reader,
              comment = first || "",
              c = reader.read();
            if (c === "*") {
              while (c) {
                comment += c;

                //look for end of comment
                if (comment.length > 2 && c === "*" && reader.peek() === "/") {
                  comment += reader.read();
                  break;
                }
                c = reader.read();
              }
              return comment;
            } else {
              return "";
            }
          }
        });
      }, {
        "../util/TokenStreamBase": 27,
        "./PropertyValuePart": 11,
        "./Tokens": 18
      }],
      18: [function (require, module, exports) {
        "use strict";

        var Tokens = module.exports = [
        /*
         * The following token names are defined in CSS3 Grammar: https://www.w3.org/TR/css3-syntax/#lexical
         */

        // HTML-style comments
        {
          name: "CDO"
        }, {
          name: "CDC"
        },
        // ignorables
        {
          name: "S",
          whitespace: true /*, channel: "ws"*/
        }, {
          name: "COMMENT",
          comment: true,
          hide: true,
          channel: "comment"
        },
        // attribute equality
        {
          name: "INCLUDES",
          text: "~="
        }, {
          name: "DASHMATCH",
          text: "|="
        }, {
          name: "PREFIXMATCH",
          text: "^="
        }, {
          name: "SUFFIXMATCH",
          text: "$="
        }, {
          name: "SUBSTRINGMATCH",
          text: "*="
        },
        // identifier types
        {
          name: "STRING"
        }, {
          name: "IDENT"
        }, {
          name: "HASH"
        },
        // at-keywords
        {
          name: "IMPORT_SYM",
          text: "@import"
        }, {
          name: "PAGE_SYM",
          text: "@page"
        }, {
          name: "MEDIA_SYM",
          text: "@media"
        }, {
          name: "FONT_FACE_SYM",
          text: "@font-face"
        }, {
          name: "CHARSET_SYM",
          text: "@charset"
        }, {
          name: "NAMESPACE_SYM",
          text: "@namespace"
        }, {
          name: "SUPPORTS_SYM",
          text: "@supports"
        }, {
          name: "VIEWPORT_SYM",
          text: ["@viewport", "@-ms-viewport", "@-o-viewport"]
        }, {
          name: "DOCUMENT_SYM",
          text: ["@document", "@-moz-document"]
        }, {
          name: "UNKNOWN_SYM"
        },
        //{ name: "ATKEYWORD"},

        // CSS3 animations
        {
          name: "KEYFRAMES_SYM",
          text: ["@keyframes", "@-webkit-keyframes", "@-moz-keyframes", "@-o-keyframes"]
        },
        // important symbol
        {
          name: "IMPORTANT_SYM"
        },
        // measurements
        {
          name: "LENGTH"
        }, {
          name: "ANGLE"
        }, {
          name: "TIME"
        }, {
          name: "FREQ"
        }, {
          name: "DIMENSION"
        }, {
          name: "PERCENTAGE"
        }, {
          name: "NUMBER"
        },
        // functions
        {
          name: "URI"
        }, {
          name: "FUNCTION"
        },
        // Unicode ranges
        {
          name: "UNICODE_RANGE"
        },
        /*
         * The following token names are defined in CSS3 Selectors: https://www.w3.org/TR/css3-selectors/#selector-syntax
         */

        // invalid string
        {
          name: "INVALID"
        },
        // combinators
        {
          name: "PLUS",
          text: "+"
        }, {
          name: "GREATER",
          text: ">"
        }, {
          name: "COMMA",
          text: ","
        }, {
          name: "TILDE",
          text: "~"
        },
        // modifier
        {
          name: "NOT"
        },
        /*
         * Defined in CSS3 Paged Media
         */
        {
          name: "TOPLEFTCORNER_SYM",
          text: "@top-left-corner"
        }, {
          name: "TOPLEFT_SYM",
          text: "@top-left"
        }, {
          name: "TOPCENTER_SYM",
          text: "@top-center"
        }, {
          name: "TOPRIGHT_SYM",
          text: "@top-right"
        }, {
          name: "TOPRIGHTCORNER_SYM",
          text: "@top-right-corner"
        }, {
          name: "BOTTOMLEFTCORNER_SYM",
          text: "@bottom-left-corner"
        }, {
          name: "BOTTOMLEFT_SYM",
          text: "@bottom-left"
        }, {
          name: "BOTTOMCENTER_SYM",
          text: "@bottom-center"
        }, {
          name: "BOTTOMRIGHT_SYM",
          text: "@bottom-right"
        }, {
          name: "BOTTOMRIGHTCORNER_SYM",
          text: "@bottom-right-corner"
        }, {
          name: "LEFTTOP_SYM",
          text: "@left-top"
        }, {
          name: "LEFTMIDDLE_SYM",
          text: "@left-middle"
        }, {
          name: "LEFTBOTTOM_SYM",
          text: "@left-bottom"
        }, {
          name: "RIGHTTOP_SYM",
          text: "@right-top"
        }, {
          name: "RIGHTMIDDLE_SYM",
          text: "@right-middle"
        }, {
          name: "RIGHTBOTTOM_SYM",
          text: "@right-bottom"
        },
        /*
         * The following token names are defined in CSS3 Media Queries: https://www.w3.org/TR/css3-mediaqueries/#syntax
         */
        /*{ name: "MEDIA_ONLY", state: "media"},
        { name: "MEDIA_NOT", state: "media"},
        { name: "MEDIA_AND", state: "media"},*/
        {
          name: "RESOLUTION",
          state: "media"
        },
        /*
         * The following token names are not defined in any CSS specification but are used by the lexer.
         */

        // not a real token, but useful for stupid IE filters
        {
          name: "IE_FUNCTION"
        },
        // part of CSS3 grammar but not the Flex code
        {
          name: "CHAR"
        },
        // TODO: Needed?
        // Not defined as tokens, but might as well be
        {
          name: "PIPE",
          text: "|"
        }, {
          name: "SLASH",
          text: "/"
        }, {
          name: "MINUS",
          text: "-"
        }, {
          name: "STAR",
          text: "*"
        }, {
          name: "LBRACE",
          endChar: "}",
          text: "{"
        }, {
          name: "RBRACE",
          text: "}"
        }, {
          name: "LBRACKET",
          endChar: "]",
          text: "["
        }, {
          name: "RBRACKET",
          text: "]"
        }, {
          name: "EQUALS",
          text: "="
        }, {
          name: "COLON",
          text: ":"
        }, {
          name: "SEMICOLON",
          text: ";"
        }, {
          name: "LPAREN",
          endChar: ")",
          text: "("
        }, {
          name: "RPAREN",
          text: ")"
        }, {
          name: "DOT",
          text: "."
        }];
        (function () {
          var nameMap = [],
            typeMap = Object.create(null);
          Tokens.UNKNOWN = -1;
          Tokens.unshift({
            name: "EOF"
          });
          for (var i = 0, len = Tokens.length; i < len; i++) {
            nameMap.push(Tokens[i].name);
            Tokens[Tokens[i].name] = i;
            if (Tokens[i].text) {
              if (Tokens[i].text instanceof Array) {
                for (var j = 0; j < Tokens[i].text.length; j++) {
                  typeMap[Tokens[i].text[j]] = i;
                }
              } else {
                typeMap[Tokens[i].text] = i;
              }
            }
          }
          Tokens.name = function (tt) {
            return nameMap[tt];
          };
          Tokens.type = function (c) {
            return typeMap[c] || -1;
          };
        })();
      }, {}],
      19: [function (require, module, exports) {
        "use strict";

        /* exported Validation */
        var Matcher = require("./Matcher");
        var Properties = require("./Properties");
        var ValidationTypes = require("./ValidationTypes");
        var ValidationError = require("./ValidationError");
        var PropertyValueIterator = require("./PropertyValueIterator");
        var Validation = module.exports = {
          validate: function (property, value) {
            //normalize name
            var name = property.toString().toLowerCase(),
              expression = new PropertyValueIterator(value),
              spec = Properties[name],
              part;
            if (!spec) {
              if (name.indexOf("-") !== 0) {
                //vendor prefixed are ok
                throw new ValidationError("Unknown property '" + property + "'.", property.line, property.col);
              }
            } else if (typeof spec !== "number") {
              // All properties accept some CSS-wide values.
              // https://drafts.csswg.org/css-values-3/#common-keywords
              if (ValidationTypes.isAny(expression, "inherit | initial | unset")) {
                if (expression.hasNext()) {
                  part = expression.next();
                  throw new ValidationError("Expected end of value but found '" + part + "'.", part.line, part.col);
                }
                return;
              }

              // Property-specific validation.
              this.singleProperty(spec, expression);
            }
          },
          singleProperty: function (types, expression) {
            var result = false,
              value = expression.value,
              part;
            result = Matcher.parse(types).match(expression);
            if (!result) {
              if (expression.hasNext() && !expression.isFirst()) {
                part = expression.peek();
                throw new ValidationError("Expected end of value but found '" + part + "'.", part.line, part.col);
              } else {
                throw new ValidationError("Expected (" + ValidationTypes.describe(types) + ") but found '" + value + "'.", value.line, value.col);
              }
            } else if (expression.hasNext()) {
              part = expression.next();
              throw new ValidationError("Expected end of value but found '" + part + "'.", part.line, part.col);
            }
          }
        };
      }, {
        "./Matcher": 3,
        "./Properties": 7,
        "./PropertyValueIterator": 10,
        "./ValidationError": 20,
        "./ValidationTypes": 21
      }],
      20: [function (require, module, exports) {
        "use strict";

        module.exports = ValidationError;

        /**
         * Type to use when a validation error occurs.
         * @class ValidationError
         * @namespace parserlib.util
         * @constructor
         * @param {String} message The error message.
         * @param {int} line The line at which the error occurred.
         * @param {int} col The column at which the error occurred.
         */
        function ValidationError(message, line, col) {
          /**
           * The column at which the error occurred.
           * @type int
           * @property col
           */
          this.col = col;

          /**
           * The line at which the error occurred.
           * @type int
           * @property line
           */
          this.line = line;

          /**
           * The text representation of the unit.
           * @type String
           * @property text
           */
          this.message = message;
        }

        //inherit from Error
        ValidationError.prototype = new Error();
      }, {}],
      21: [function (require, module, exports) {
        "use strict";

        var ValidationTypes = module.exports;
        var Matcher = require("./Matcher");
        function copy(to, from) {
          Object.keys(from).forEach(function (prop) {
            to[prop] = from[prop];
          });
        }
        copy(ValidationTypes, {
          isLiteral: function (part, literals) {
            var text = part.text.toString().toLowerCase(),
              args = literals.split(" | "),
              i,
              len,
              found = false;
            for (i = 0, len = args.length; i < len && !found; i++) {
              if (args[i].charAt(0) === "<") {
                found = this.simple[args[i]](part);
              } else if (args[i].slice(-2) === "()") {
                found = part.type === "function" && part.name === args[i].slice(0, -2);
              } else if (text === args[i].toLowerCase()) {
                found = true;
              }
            }
            return found;
          },
          isSimple: function (type) {
            return Boolean(this.simple[type]);
          },
          isComplex: function (type) {
            return Boolean(this.complex[type]);
          },
          describe: function (type) {
            if (this.complex[type] instanceof Matcher) {
              return this.complex[type].toString(0);
            }
            return type;
          },
          /**
           * Determines if the next part(s) of the given expression
           * are any of the given types.
           */
          isAny: function (expression, types) {
            var args = types.split(" | "),
              i,
              len,
              found = false;
            for (i = 0, len = args.length; i < len && !found && expression.hasNext(); i++) {
              found = this.isType(expression, args[i]);
            }
            return found;
          },
          /**
           * Determines if the next part(s) of the given expression
           * are one of a group.
           */
          isAnyOfGroup: function (expression, types) {
            var args = types.split(" || "),
              i,
              len,
              found = false;
            for (i = 0, len = args.length; i < len && !found; i++) {
              found = this.isType(expression, args[i]);
            }
            return found ? args[i - 1] : false;
          },
          /**
           * Determines if the next part(s) of the given expression
           * are of a given type.
           */
          isType: function (expression, type) {
            var part = expression.peek(),
              result = false;
            if (type.charAt(0) !== "<") {
              result = this.isLiteral(part, type);
              if (result) {
                expression.next();
              }
            } else if (this.simple[type]) {
              result = this.simple[type](part);
              if (result) {
                expression.next();
              }
            } else if (this.complex[type] instanceof Matcher) {
              result = this.complex[type].match(expression);
            } else {
              result = this.complex[type](expression);
            }
            return result;
          },
          simple: {
            __proto__: null,
            "<absolute-size>": "xx-small | x-small | small | medium | large | x-large | xx-large",
            "<animateable-feature>": "scroll-position | contents | <animateable-feature-name>",
            "<animateable-feature-name>": function (part) {
              return this["<ident>"](part) && !/^(unset|initial|inherit|will-change|auto|scroll-position|contents)$/i.test(part);
            },
            "<angle>": function (part) {
              return part.type === "angle";
            },
            "<attachment>": "scroll | fixed | local",
            "<attr>": "attr()",
            // inset() = inset( <shape-arg>{1,4} [round <border-radius>]? )
            // circle() = circle( [<shape-radius>]? [at <position>]? )
            // ellipse() = ellipse( [<shape-radius>{2}]? [at <position>]? )
            // polygon() = polygon( [<fill-rule>,]? [<shape-arg> <shape-arg>]# )
            "<basic-shape>": "inset() | circle() | ellipse() | polygon()",
            "<bg-image>": "<image> | <gradient> | none",
            "<border-style>": "none | hidden | dotted | dashed | solid | double | groove | " + "ridge | inset | outset",
            "<border-width>": "<length> | thin | medium | thick",
            "<box>": "padding-box | border-box | content-box",
            "<clip-source>": "<uri>",
            "<color>": function (part) {
              return part.type === "color" || String(part) === "transparent" || String(part) === "currentColor";
            },
            // The SVG <color> spec doesn't include "currentColor" or "transparent" as a color.
            "<color-svg>": function (part) {
              return part.type === "color";
            },
            "<content>": "content()",
            // https://www.w3.org/TR/css3-sizing/#width-height-keywords
            "<content-sizing>": "fill-available | -moz-available | -webkit-fill-available | " + "max-content | -moz-max-content | -webkit-max-content | " + "min-content | -moz-min-content | -webkit-min-content | " + "fit-content | -moz-fit-content | -webkit-fit-content",
            "<feature-tag-value>": function (part) {
              return part.type === "function" && /^[A-Z0-9]{4}$/i.test(part);
            },
            // custom() isn't actually in the spec
            "<filter-function>": "blur() | brightness() | contrast() | custom() | " + "drop-shadow() | grayscale() | hue-rotate() | invert() | " + "opacity() | saturate() | sepia()",
            "<flex-basis>": "<width>",
            "<flex-direction>": "row | row-reverse | column | column-reverse",
            "<flex-grow>": "<number>",
            "<flex-shrink>": "<number>",
            "<flex-wrap>": "nowrap | wrap | wrap-reverse",
            "<font-size>": "<absolute-size> | <relative-size> | <length> | <percentage>",
            "<font-stretch>": "normal | ultra-condensed | extra-condensed | condensed | " + "semi-condensed | semi-expanded | expanded | extra-expanded | " + "ultra-expanded",
            "<font-style>": "normal | italic | oblique",
            "<font-variant-caps>": "small-caps | all-small-caps | petite-caps | all-petite-caps | " + "unicase | titling-caps",
            "<font-variant-css21>": "normal | small-caps",
            "<font-weight>": "normal | bold | bolder | lighter | " + "100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900",
            "<generic-family>": "serif | sans-serif | cursive | fantasy | monospace",
            "<geometry-box>": "<shape-box> | fill-box | stroke-box | view-box",
            "<glyph-angle>": function (part) {
              return part.type === "angle" && part.units === "deg";
            },
            "<gradient>": function (part) {
              return part.type === "function" && /^(?:\-(?:ms|moz|o|webkit)\-)?(?:repeating\-)?(?:radial\-|linear\-)?gradient/i.test(part);
            },
            "<icccolor>": "cielab() | cielch() | cielchab() | " + "icc-color() | icc-named-color()",
            //any identifier
            "<ident>": function (part) {
              return part.type === "identifier" || part.wasIdent;
            },
            "<ident-not-generic-family>": function (part) {
              return this["<ident>"](part) && !this["<generic-family>"](part);
            },
            "<image>": "<uri>",
            "<integer>": function (part) {
              return part.type === "integer";
            },
            "<length>": function (part) {
              if (part.type === "function" && /^(?:\-(?:ms|moz|o|webkit)\-)?calc/i.test(part)) {
                return true;
              } else {
                return part.type === "length" || part.type === "number" || part.type === "integer" || String(part) === "0";
              }
            },
            "<line>": function (part) {
              return part.type === "integer";
            },
            "<line-height>": "<number> | <length> | <percentage> | normal",
            "<margin-width>": "<length> | <percentage> | auto",
            "<miterlimit>": function (part) {
              return this["<number>"](part) && part.value >= 1;
            },
            "<nonnegative-length-or-percentage>": function (part) {
              return (this["<length>"](part) || this["<percentage>"](part)) && (String(part) === "0" || part.type === "function" || part.value >= 0);
            },
            "<nonnegative-number-or-percentage>": function (part) {
              return (this["<number>"](part) || this["<percentage>"](part)) && (String(part) === "0" || part.type === "function" || part.value >= 0);
            },
            "<number>": function (part) {
              return part.type === "number" || this["<integer>"](part);
            },
            "<opacity-value>": function (part) {
              return this["<number>"](part) && part.value >= 0 && part.value <= 1;
            },
            "<padding-width>": "<nonnegative-length-or-percentage>",
            "<percentage>": function (part) {
              return part.type === "percentage" || String(part) === "0";
            },
            "<relative-size>": "smaller | larger",
            "<shape>": "rect() | inset-rect()",
            "<shape-box>": "<box> | margin-box",
            "<single-animation-direction>": "normal | reverse | alternate | alternate-reverse",
            "<single-animation-name>": function (part) {
              return this["<ident>"](part) && /^-?[a-z_][-a-z0-9_]+$/i.test(part) && !/^(none|unset|initial|inherit)$/i.test(part);
            },
            "<string>": function (part) {
              return part.type === "string";
            },
            "<time>": function (part) {
              return part.type === "time";
            },
            "<uri>": function (part) {
              return part.type === "uri";
            },
            "<width>": "<margin-width>"
          },
          complex: {
            __proto__: null,
            "<azimuth>": "<angle>" + " | " + "[ [ left-side | far-left | left | center-left | center | " + "center-right | right | far-right | right-side ] || behind ]" + " | " + "leftwards | rightwards",
            "<bg-position>": "<position>#",
            "<bg-size>": "[ <length> | <percentage> | auto ]{1,2} | cover | contain",
            "<border-image-slice>":
            // [<number> | <percentage>]{1,4} && fill?
            // *but* fill can appear between any of the numbers
            Matcher.many([true /* first element is required */], Matcher.cast("<nonnegative-number-or-percentage>"), Matcher.cast("<nonnegative-number-or-percentage>"), Matcher.cast("<nonnegative-number-or-percentage>"), Matcher.cast("<nonnegative-number-or-percentage>"), "fill"),
            "<border-radius>": "<nonnegative-length-or-percentage>{1,4} " + "[ / <nonnegative-length-or-percentage>{1,4} ]?",
            "<box-shadow>": "none | <shadow>#",
            "<clip-path>": "<basic-shape> || <geometry-box>",
            "<dasharray>":
            // "list of comma and/or white space separated <length>s and
            // <percentage>s".  There is a non-negative constraint.
            Matcher.cast("<nonnegative-length-or-percentage>").braces(1, Infinity, "#", Matcher.cast(",").question()),
            "<family-name>":
            // <string> | <IDENT>+
            "<string> | <ident-not-generic-family> <ident>*",
            "<filter-function-list>": "[ <filter-function> | <uri> ]+",
            // https://www.w3.org/TR/2014/WD-css-flexbox-1-20140325/#flex-property
            "<flex>": "none | [ <flex-grow> <flex-shrink>? || <flex-basis> ]",
            "<font-family>": "[ <generic-family> | <family-name> ]#",
            "<font-shorthand>": "[ <font-style> || <font-variant-css21> || " + "<font-weight> || <font-stretch> ]? <font-size> " + "[ / <line-height> ]? <font-family>",
            "<font-variant-alternates>":
            // stylistic(<feature-value-name>)
            "stylistic() || " + "historical-forms || " +
            // styleset(<feature-value-name> #)
            "styleset() || " +
            // character-variant(<feature-value-name> #)
            "character-variant() || " +
            // swash(<feature-value-name>)
            "swash() || " +
            // ornaments(<feature-value-name>)
            "ornaments() || " +
            // annotation(<feature-value-name>)
            "annotation()",
            "<font-variant-ligatures>":
            // <common-lig-values>
            "[ common-ligatures | no-common-ligatures ] || " +
            // <discretionary-lig-values>
            "[ discretionary-ligatures | no-discretionary-ligatures ] || " +
            // <historical-lig-values>
            "[ historical-ligatures | no-historical-ligatures ] || " +
            // <contextual-alt-values>
            "[ contextual | no-contextual ]",
            "<font-variant-numeric>":
            // <numeric-figure-values>
            "[ lining-nums | oldstyle-nums ] || " +
            // <numeric-spacing-values>
            "[ proportional-nums | tabular-nums ] || " +
            // <numeric-fraction-values>
            "[ diagonal-fractions | stacked-fractions ] || " + "ordinal || slashed-zero",
            "<font-variant-east-asian>":
            // <east-asian-variant-values>
            "[ jis78 | jis83 | jis90 | jis04 | simplified | traditional ] || " +
            // <east-asian-width-values>
            "[ full-width | proportional-width ] || " + "ruby",
            // Note that <color> here is "as defined in the SVG spec", which
            // is more restrictive that the <color> defined in the CSS spec.
            // none | currentColor | <color> [<icccolor>]? |
            // <funciri> [ none | currentColor | <color> [<icccolor>]? ]?
            "<paint>": "<paint-basic> | <uri> <paint-basic>?",
            // Helper definition for <paint> above.
            "<paint-basic>": "none | currentColor | <color-svg> <icccolor>?",
            "<position>":
            // Because our `alt` combinator is ordered, we need to test these
            // in order from longest possible match to shortest.
            "[ center | [ left | right ] [ <percentage> | <length> ]? ] && " + "[ center | [ top | bottom ] [ <percentage> | <length> ]? ]" + " | " + "[ left | center | right | <percentage> | <length> ] " + "[ top | center | bottom | <percentage> | <length> ]" + " | " + "[ left | center | right | top | bottom | <percentage> | <length> ]",
            "<repeat-style>": "repeat-x | repeat-y | [ repeat | space | round | no-repeat ]{1,2}",
            "<shadow>":
            //inset? && [ <length>{2,4} && <color>? ]
            Matcher.many([true /* length is required */], Matcher.cast("<length>").braces(2, 4), "inset", "<color>"),
            "<text-decoration-color>": "<color>",
            "<text-decoration-line>": "none | [ underline || overline || line-through || blink ]",
            "<text-decoration-style>": "solid | double | dotted | dashed | wavy",
            "<will-change>": "auto | <animateable-feature>#",
            "<x-one-radius>":
            //[ <length> | <percentage> ] [ <length> | <percentage> ]?
            "[ <length> | <percentage> ]{1,2}"
          }
        });
        Object.keys(ValidationTypes.simple).forEach(function (nt) {
          var rule = ValidationTypes.simple[nt];
          if (typeof rule === "string") {
            ValidationTypes.simple[nt] = function (part) {
              return ValidationTypes.isLiteral(part, rule);
            };
          }
        });
        Object.keys(ValidationTypes.complex).forEach(function (nt) {
          var rule = ValidationTypes.complex[nt];
          if (typeof rule === "string") {
            ValidationTypes.complex[nt] = Matcher.parse(rule);
          }
        });

        // Because this is defined relative to other complex validation types,
        // we need to define it *after* the rest of the types are initialized.
        ValidationTypes.complex["<font-variant>"] = Matcher.oror({
          expand: "<font-variant-ligatures>"
        }, {
          expand: "<font-variant-alternates>"
        }, "<font-variant-caps>", {
          expand: "<font-variant-numeric>"
        }, {
          expand: "<font-variant-east-asian>"
        });
      }, {
        "./Matcher": 3
      }],
      22: [function (require, module, exports) {
        "use strict";

        module.exports = {
          Colors: require("./Colors"),
          Combinator: require("./Combinator"),
          Parser: require("./Parser"),
          PropertyName: require("./PropertyName"),
          PropertyValue: require("./PropertyValue"),
          PropertyValuePart: require("./PropertyValuePart"),
          Matcher: require("./Matcher"),
          MediaFeature: require("./MediaFeature"),
          MediaQuery: require("./MediaQuery"),
          Selector: require("./Selector"),
          SelectorPart: require("./SelectorPart"),
          SelectorSubPart: require("./SelectorSubPart"),
          Specificity: require("./Specificity"),
          TokenStream: require("./TokenStream"),
          Tokens: require("./Tokens"),
          ValidationError: require("./ValidationError")
        };
      }, {
        "./Colors": 1,
        "./Combinator": 2,
        "./Matcher": 3,
        "./MediaFeature": 4,
        "./MediaQuery": 5,
        "./Parser": 6,
        "./PropertyName": 8,
        "./PropertyValue": 9,
        "./PropertyValuePart": 11,
        "./Selector": 13,
        "./SelectorPart": 14,
        "./SelectorSubPart": 15,
        "./Specificity": 16,
        "./TokenStream": 17,
        "./Tokens": 18,
        "./ValidationError": 20
      }],
      23: [function (require, module, exports) {
        "use strict";

        module.exports = EventTarget;

        /**
         * A generic base to inherit from for any object
         * that needs event handling.
         * @class EventTarget
         * @constructor
         */
        function EventTarget() {
          /**
           * The array of listeners for various events.
           * @type Object
           * @property _listeners
           * @private
           */
          this._listeners = Object.create(null);
        }
        EventTarget.prototype = {
          //restore constructor
          constructor: EventTarget,
          /**
           * Adds a listener for a given event type.
           * @param {String} type The type of event to add a listener for.
           * @param {Function} listener The function to call when the event occurs.
           * @return {void}
           * @method addListener
           */
          addListener: function (type, listener) {
            if (!this._listeners[type]) {
              this._listeners[type] = [];
            }
            this._listeners[type].push(listener);
          },
          /**
           * Fires an event based on the passed-in object.
           * @param {Object|String} event An object with at least a 'type' attribute
           *      or a string indicating the event name.
           * @return {void}
           * @method fire
           */
          fire: function (event) {
            if (typeof event === "string") {
              event = {
                type: event
              };
            }
            if (typeof event.target !== "undefined") {
              event.target = this;
            }
            if (typeof event.type === "undefined") {
              throw new Error("Event object missing 'type' property.");
            }
            if (this._listeners[event.type]) {
              //create a copy of the array and use that so listeners can't chane
              var listeners = this._listeners[event.type].concat();
              for (var i = 0, len = listeners.length; i < len; i++) {
                listeners[i].call(this, event);
              }
            }
          },
          /**
           * Removes a listener for a given event type.
           * @param {String} type The type of event to remove a listener from.
           * @param {Function} listener The function to remove from the event.
           * @return {void}
           * @method removeListener
           */
          removeListener: function (type, listener) {
            if (this._listeners[type]) {
              var listeners = this._listeners[type];
              for (var i = 0, len = listeners.length; i < len; i++) {
                if (listeners[i] === listener) {
                  listeners.splice(i, 1);
                  break;
                }
              }
            }
          }
        };
      }, {}],
      24: [function (require, module, exports) {
        "use strict";

        module.exports = StringReader;

        /**
         * Convenient way to read through strings.
         * @namespace parserlib.util
         * @class StringReader
         * @constructor
         * @param {String} text The text to read.
         */
        function StringReader(text) {
          /**
           * The input text with line endings normalized.
           * @property _input
           * @type String
           * @private
           */
          this._input = text.replace(/(\r\n?|\n)/g, "\n");

          /**
           * The row for the character to be read next.
           * @property _line
           * @type int
           * @private
           */
          this._line = 1;

          /**
           * The column for the character to be read next.
           * @property _col
           * @type int
           * @private
           */
          this._col = 1;

          /**
           * The index of the character in the input to be read next.
           * @property _cursor
           * @type int
           * @private
           */
          this._cursor = 0;
        }
        StringReader.prototype = {
          // restore constructor
          constructor: StringReader,
          //-------------------------------------------------------------------------
          // Position info
          //-------------------------------------------------------------------------

          /**
           * Returns the column of the character to be read next.
           * @return {int} The column of the character to be read next.
           * @method getCol
           */
          getCol: function () {
            return this._col;
          },
          /**
           * Returns the row of the character to be read next.
           * @return {int} The row of the character to be read next.
           * @method getLine
           */
          getLine: function () {
            return this._line;
          },
          /**
           * Determines if you're at the end of the input.
           * @return {Boolean} True if there's no more input, false otherwise.
           * @method eof
           */
          eof: function () {
            return this._cursor === this._input.length;
          },
          //-------------------------------------------------------------------------
          // Basic reading
          //-------------------------------------------------------------------------

          /**
           * Reads the next character without advancing the cursor.
           * @param {int} count How many characters to look ahead (default is 1).
           * @return {String} The next character or null if there is no next character.
           * @method peek
           */
          peek: function (count) {
            var c = null;
            count = typeof count === "undefined" ? 1 : count;

            // if we're not at the end of the input...
            if (this._cursor < this._input.length) {
              // get character and increment cursor and column
              c = this._input.charAt(this._cursor + count - 1);
            }
            return c;
          },
          /**
           * Reads the next character from the input and adjusts the row and column
           * accordingly.
           * @return {String} The next character or null if there is no next character.
           * @method read
           */
          read: function () {
            var c = null;

            // if we're not at the end of the input...
            if (this._cursor < this._input.length) {
              // if the last character was a newline, increment row count
              // and reset column count
              if (this._input.charAt(this._cursor) === "\n") {
                this._line++;
                this._col = 1;
              } else {
                this._col++;
              }

              // get character and increment cursor and column
              c = this._input.charAt(this._cursor++);
            }
            return c;
          },
          //-------------------------------------------------------------------------
          // Misc
          //-------------------------------------------------------------------------

          /**
           * Saves the current location so it can be returned to later.
           * @method mark
           * @return {void}
           */
          mark: function () {
            this._bookmark = {
              cursor: this._cursor,
              line: this._line,
              col: this._col
            };
          },
          reset: function () {
            if (this._bookmark) {
              this._cursor = this._bookmark.cursor;
              this._line = this._bookmark.line;
              this._col = this._bookmark.col;
              delete this._bookmark;
            }
          },
          //-------------------------------------------------------------------------
          // Advanced reading
          //-------------------------------------------------------------------------

          /**
           * Reads up to and including the given string. Throws an error if that
           * string is not found.
           * @param {String} pattern The string to read.
           * @return {String} The string when it is found.
           * @throws Error when the string pattern is not found.
           * @method readTo
           */
          readTo: function (pattern) {
            var buffer = "",
              c;

            /*
             * First, buffer must be the same length as the pattern.
             * Then, buffer must end with the pattern or else reach the
             * end of the input.
             */
            while (buffer.length < pattern.length || buffer.lastIndexOf(pattern) !== buffer.length - pattern.length) {
              c = this.read();
              if (c) {
                buffer += c;
              } else {
                throw new Error("Expected \"" + pattern + "\" at line " + this._line + ", col " + this._col + ".");
              }
            }
            return buffer;
          },
          /**
           * Reads characters while each character causes the given
           * filter function to return true. The function is passed
           * in each character and either returns true to continue
           * reading or false to stop.
           * @param {Function} filter The function to read on each character.
           * @return {String} The string made up of all characters that passed the
           *      filter check.
           * @method readWhile
           */
          readWhile: function (filter) {
            var buffer = "",
              c = this.peek();
            while (c !== null && filter(c)) {
              buffer += this.read();
              c = this.peek();
            }
            return buffer;
          },
          /**
           * Reads characters that match either text or a regular expression and
           * returns those characters. If a match is found, the row and column
           * are adjusted; if no match is found, the reader's state is unchanged.
           * reading or false to stop.
           * @param {String|RegExp} matcher If a string, then the literal string
           *      value is searched for. If a regular expression, then any string
           *      matching the pattern is search for.
           * @return {String} The string made up of all characters that matched or
           *      null if there was no match.
           * @method readMatch
           */
          readMatch: function (matcher) {
            var source = this._input.substring(this._cursor),
              value = null;

            // if it's a string, just do a straight match
            if (typeof matcher === "string") {
              if (source.slice(0, matcher.length) === matcher) {
                value = this.readCount(matcher.length);
              }
            } else if (matcher instanceof RegExp) {
              if (matcher.test(source)) {
                value = this.readCount(RegExp.lastMatch.length);
              }
            }
            return value;
          },
          /**
           * Reads a given number of characters. If the end of the input is reached,
           * it reads only the remaining characters and does not throw an error.
           * @param {int} count The number of characters to read.
           * @return {String} The string made up the read characters.
           * @method readCount
           */
          readCount: function (count) {
            var buffer = "";
            while (count--) {
              buffer += this.read();
            }
            return buffer;
          }
        };
      }, {}],
      25: [function (require, module, exports) {
        "use strict";

        module.exports = SyntaxError;

        /**
         * Type to use when a syntax error occurs.
         * @class SyntaxError
         * @namespace parserlib.util
         * @constructor
         * @param {String} message The error message.
         * @param {int} line The line at which the error occurred.
         * @param {int} col The column at which the error occurred.
         */
        function SyntaxError(message, line, col) {
          Error.call(this);
          this.name = this.constructor.name;

          /**
           * The column at which the error occurred.
           * @type int
           * @property col
           */
          this.col = col;

          /**
           * The line at which the error occurred.
           * @type int
           * @property line
           */
          this.line = line;

          /**
           * The text representation of the unit.
           * @type String
           * @property text
           */
          this.message = message;
        }

        //inherit from Error
        SyntaxError.prototype = Object.create(Error.prototype); // jshint ignore:line
        SyntaxError.prototype.constructor = SyntaxError; // jshint ignore:line
      }, {}],
      26: [function (require, module, exports) {
        "use strict";

        module.exports = SyntaxUnit;

        /**
         * Base type to represent a single syntactic unit.
         * @class SyntaxUnit
         * @namespace parserlib.util
         * @constructor
         * @param {String} text The text of the unit.
         * @param {int} line The line of text on which the unit resides.
         * @param {int} col The column of text on which the unit resides.
         */
        function SyntaxUnit(text, line, col, type) {
          /**
           * The column of text on which the unit resides.
           * @type int
           * @property col
           */
          this.col = col;

          /**
           * The line of text on which the unit resides.
           * @type int
           * @property line
           */
          this.line = line;

          /**
           * The text representation of the unit.
           * @type String
           * @property text
           */
          this.text = text;

          /**
           * The type of syntax unit.
           * @type int
           * @property type
           */
          this.type = type;
        }

        /**
         * Create a new syntax unit based solely on the given token.
         * Convenience method for creating a new syntax unit when
         * it represents a single token instead of multiple.
         * @param {Object} token The token object to represent.
         * @return {parserlib.util.SyntaxUnit} The object representing the token.
         * @static
         * @method fromToken
         */
        SyntaxUnit.fromToken = function (token) {
          return new SyntaxUnit(token.value, token.startLine, token.startCol);
        };
        SyntaxUnit.prototype = {
          //restore constructor
          constructor: SyntaxUnit,
          /**
           * Returns the text representation of the unit.
           * @return {String} The text representation of the unit.
           * @method valueOf
           */
          valueOf: function () {
            return this.toString();
          },
          /**
           * Returns the text representation of the unit.
           * @return {String} The text representation of the unit.
           * @method toString
           */
          toString: function () {
            return this.text;
          }
        };
      }, {}],
      27: [function (require, module, exports) {
        "use strict";

        module.exports = TokenStreamBase;
        var StringReader = require("./StringReader");
        var SyntaxError = require("./SyntaxError");

        /**
         * Generic TokenStream providing base functionality.
         * @class TokenStreamBase
         * @namespace parserlib.util
         * @constructor
         * @param {String|StringReader} input The text to tokenize or a reader from
         *      which to read the input.
         */
        function TokenStreamBase(input, tokenData) {
          /**
           * The string reader for easy access to the text.
           * @type StringReader
           * @property _reader
           * @private
           */
          this._reader = new StringReader(input ? input.toString() : "");

          /**
           * Token object for the last consumed token.
           * @type Token
           * @property _token
           * @private
           */
          this._token = null;

          /**
           * The array of token information.
           * @type Array
           * @property _tokenData
           * @private
           */
          this._tokenData = tokenData;

          /**
           * Lookahead token buffer.
           * @type Array
           * @property _lt
           * @private
           */
          this._lt = [];

          /**
           * Lookahead token buffer index.
           * @type int
           * @property _ltIndex
           * @private
           */
          this._ltIndex = 0;
          this._ltIndexCache = [];
        }

        /**
         * Accepts an array of token information and outputs
         * an array of token data containing key-value mappings
         * and matching functions that the TokenStream needs.
         * @param {Array} tokens An array of token descriptors.
         * @return {Array} An array of processed token data.
         * @method createTokenData
         * @static
         */
        TokenStreamBase.createTokenData = function (tokens) {
          var nameMap = [],
            typeMap = Object.create(null),
            tokenData = tokens.concat([]),
            i = 0,
            len = tokenData.length + 1;
          tokenData.UNKNOWN = -1;
          tokenData.unshift({
            name: "EOF"
          });
          for (; i < len; i++) {
            nameMap.push(tokenData[i].name);
            tokenData[tokenData[i].name] = i;
            if (tokenData[i].text) {
              typeMap[tokenData[i].text] = i;
            }
          }
          tokenData.name = function (tt) {
            return nameMap[tt];
          };
          tokenData.type = function (c) {
            return typeMap[c];
          };
          return tokenData;
        };
        TokenStreamBase.prototype = {
          //restore constructor
          constructor: TokenStreamBase,
          //-------------------------------------------------------------------------
          // Matching methods
          //-------------------------------------------------------------------------

          /**
           * Determines if the next token matches the given token type.
           * If so, that token is consumed; if not, the token is placed
           * back onto the token stream. You can pass in any number of
           * token types and this will return true if any of the token
           * types is found.
           * @param {int|int[]} tokenTypes Either a single token type or an array of
           *      token types that the next token might be. If an array is passed,
           *      it's assumed that the token can be any of these.
           * @param {variant} channel (Optional) The channel to read from. If not
           *      provided, reads from the default (unnamed) channel.
           * @return {Boolean} True if the token type matches, false if not.
           * @method match
           */
          match: function (tokenTypes, channel) {
            //always convert to an array, makes things easier
            if (!(tokenTypes instanceof Array)) {
              tokenTypes = [tokenTypes];
            }
            var tt = this.get(channel),
              i = 0,
              len = tokenTypes.length;
            while (i < len) {
              if (tt === tokenTypes[i++]) {
                return true;
              }
            }

            //no match found, put the token back
            this.unget();
            return false;
          },
          /**
           * Determines if the next token matches the given token type.
           * If so, that token is consumed; if not, an error is thrown.
           * @param {int|int[]} tokenTypes Either a single token type or an array of
           *      token types that the next token should be. If an array is passed,
           *      it's assumed that the token must be one of these.
           * @return {void}
           * @method mustMatch
           */
          mustMatch: function (tokenTypes) {
            var token;

            //always convert to an array, makes things easier
            if (!(tokenTypes instanceof Array)) {
              tokenTypes = [tokenTypes];
            }
            if (!this.match.apply(this, arguments)) {
              token = this.LT(1);
              throw new SyntaxError("Expected " + this._tokenData[tokenTypes[0]].name + " at line " + token.startLine + ", col " + token.startCol + ".", token.startLine, token.startCol);
            }
          },
          //-------------------------------------------------------------------------
          // Consuming methods
          //-------------------------------------------------------------------------

          /**
           * Keeps reading from the token stream until either one of the specified
           * token types is found or until the end of the input is reached.
           * @param {int|int[]} tokenTypes Either a single token type or an array of
           *      token types that the next token should be. If an array is passed,
           *      it's assumed that the token must be one of these.
           * @param {variant} channel (Optional) The channel to read from. If not
           *      provided, reads from the default (unnamed) channel.
           * @return {void}
           * @method advance
           */
          advance: function (tokenTypes, channel) {
            while (this.LA(0) !== 0 && !this.match(tokenTypes, channel)) {
              this.get();
            }
            return this.LA(0);
          },
          /**
           * Consumes the next token from the token stream.
           * @return {int} The token type of the token that was just consumed.
           * @method get
           */
          get: function (channel) {
            var tokenInfo = this._tokenData,
              i = 0,
              token,
              info;

            //check the lookahead buffer first
            if (this._lt.length && this._ltIndex >= 0 && this._ltIndex < this._lt.length) {
              i++;
              this._token = this._lt[this._ltIndex++];
              info = tokenInfo[this._token.type];

              //obey channels logic
              while (info.channel !== undefined && channel !== info.channel && this._ltIndex < this._lt.length) {
                this._token = this._lt[this._ltIndex++];
                info = tokenInfo[this._token.type];
                i++;
              }

              //here be dragons
              if ((info.channel === undefined || channel === info.channel) && this._ltIndex <= this._lt.length) {
                this._ltIndexCache.push(i);
                return this._token.type;
              }
            }

            //call token retriever method
            token = this._getToken();

            //if it should be hidden, don't save a token
            if (token.type > -1 && !tokenInfo[token.type].hide) {
              //apply token channel
              token.channel = tokenInfo[token.type].channel;

              //save for later
              this._token = token;
              this._lt.push(token);

              //save space that will be moved (must be done before array is truncated)
              this._ltIndexCache.push(this._lt.length - this._ltIndex + i);

              //keep the buffer under 5 items
              if (this._lt.length > 5) {
                this._lt.shift();
              }

              //also keep the shift buffer under 5 items
              if (this._ltIndexCache.length > 5) {
                this._ltIndexCache.shift();
              }

              //update lookahead index
              this._ltIndex = this._lt.length;
            }

            /*
             * Skip to the next token if:
             * 1. The token type is marked as hidden.
             * 2. The token type has a channel specified and it isn't the current channel.
             */
            info = tokenInfo[token.type];
            if (info && (info.hide || info.channel !== undefined && channel !== info.channel)) {
              return this.get(channel);
            } else {
              //return just the type
              return token.type;
            }
          },
          /**
           * Looks ahead a certain number of tokens and returns the token type at
           * that position. This will throw an error if you lookahead past the
           * end of input, past the size of the lookahead buffer, or back past
           * the first token in the lookahead buffer.
           * @param {int} The index of the token type to retrieve. 0 for the
           *      current token, 1 for the next, -1 for the previous, etc.
           * @return {int} The token type of the token in the given position.
           * @method LA
           */
          LA: function (index) {
            var total = index,
              tt;
            if (index > 0) {
              //TODO: Store 5 somewhere
              if (index > 5) {
                throw new Error("Too much lookahead.");
              }

              //get all those tokens
              while (total) {
                tt = this.get();
                total--;
              }

              //unget all those tokens
              while (total < index) {
                this.unget();
                total++;
              }
            } else if (index < 0) {
              if (this._lt[this._ltIndex + index]) {
                tt = this._lt[this._ltIndex + index].type;
              } else {
                throw new Error("Too much lookbehind.");
              }
            } else {
              tt = this._token.type;
            }
            return tt;
          },
          /**
           * Looks ahead a certain number of tokens and returns the token at
           * that position. This will throw an error if you lookahead past the
           * end of input, past the size of the lookahead buffer, or back past
           * the first token in the lookahead buffer.
           * @param {int} The index of the token type to retrieve. 0 for the
           *      current token, 1 for the next, -1 for the previous, etc.
           * @return {Object} The token of the token in the given position.
           * @method LA
           */
          LT: function (index) {
            //lookahead first to prime the token buffer
            this.LA(index);

            //now find the token, subtract one because _ltIndex is already at the next index
            return this._lt[this._ltIndex + index - 1];
          },
          /**
           * Returns the token type for the next token in the stream without
           * consuming it.
           * @return {int} The token type of the next token in the stream.
           * @method peek
           */
          peek: function () {
            return this.LA(1);
          },
          /**
           * Returns the actual token object for the last consumed token.
           * @return {Token} The token object for the last consumed token.
           * @method token
           */
          token: function () {
            return this._token;
          },
          /**
           * Returns the name of the token for the given token type.
           * @param {int} tokenType The type of token to get the name of.
           * @return {String} The name of the token or "UNKNOWN_TOKEN" for any
           *      invalid token type.
           * @method tokenName
           */
          tokenName: function (tokenType) {
            if (tokenType < 0 || tokenType > this._tokenData.length) {
              return "UNKNOWN_TOKEN";
            } else {
              return this._tokenData[tokenType].name;
            }
          },
          /**
           * Returns the token type value for the given token name.
           * @param {String} tokenName The name of the token whose value should be returned.
           * @return {int} The token type value for the given token name or -1
           *      for an unknown token.
           * @method tokenName
           */
          tokenType: function (tokenName) {
            return this._tokenData[tokenName] || -1;
          },
          /**
           * Returns the last consumed token to the token stream.
           * @method unget
           */
          unget: function () {
            //if (this._ltIndex > -1) {
            if (this._ltIndexCache.length) {
              this._ltIndex -= this._ltIndexCache.pop(); //--;
              this._token = this._lt[this._ltIndex - 1];
            } else {
              throw new Error("Too much lookahead.");
            }
          }
        };
      }, {
        "./StringReader": 24,
        "./SyntaxError": 25
      }],
      28: [function (require, module, exports) {
        "use strict";

        module.exports = {
          StringReader: require("./StringReader"),
          SyntaxError: require("./SyntaxError"),
          SyntaxUnit: require("./SyntaxUnit"),
          EventTarget: require("./EventTarget"),
          TokenStreamBase: require("./TokenStreamBase")
        };
      }, {
        "./EventTarget": 23,
        "./StringReader": 24,
        "./SyntaxError": 25,
        "./SyntaxUnit": 26,
        "./TokenStreamBase": 27
      }],
      "parserlib": [function (require, module, exports) {
        "use strict";

        module.exports = {
          css: require("./css"),
          util: require("./util")
        };
      }, {
        "./css": 22,
        "./util": 28
      }]
    }, {}, []);
    return require('parserlib');
  }();
  var clone = function () {
    'use strict';

    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_) {
      // maybe a reference error because no `Map`. Give it a dummy value that no
      // value will ever be an instanceof.
      nativeMap = function () {};
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_) {
      nativeSet = function () {};
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_) {
      nativePromise = function () {};
    }

    /**
     * Clones (copies) an Object using deep copying.
     *
     * This function supports circular references by default, but if you are certain
     * there are no circular references in your object, you can save some CPU time
     * by calling clone(obj, false).
     *
     * Caution: if `circular` is false and `parent` contains circular references,
     * your program may enter an infinite loop and crash.
     *
     * @param `parent` - the object to be cloned
     * @param `circular` - set to true if the object to be cloned may contain
     *    circular references. (optional - true by default)
     * @param `depth` - set to a number if the object is only to be cloned to
     *    a particular depth. (optional - defaults to Infinity)
     * @param `prototype` - sets the prototype to be used when cloning an object.
     *    (optional - defaults to parent prototype).
     * @param `includeNonEnumerable` - set to true if the non-enumerable properties
     *    should be cloned as well. Non-enumerable properties on the prototype
     *    chain will be ignored. (optional - false by default)
    */
    function clone(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === 'object') {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      // maintain two arrays for circular references, where corresponding parents
      // and children have the same index
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != 'undefined';
      if (typeof circular == 'undefined') circular = true;
      if (typeof depth == 'undefined') depth = Infinity;

      // recurse this function so we don't reset allParents and allChildren
      function _clone(parent, depth) {
        // cloning null always returns null
        if (parent === null) return null;
        if (depth === 0) return parent;
        var child;
        var proto;
        if (typeof parent != 'object') {
          return parent;
        }
        if (parent instanceof nativeMap) {
          child = new nativeMap();
        } else if (parent instanceof nativeSet) {
          child = new nativeSet();
        } else if (parent instanceof nativePromise) {
          child = new nativePromise(function (resolve, reject) {
            parent.then(function (value) {
              resolve(_clone(value, depth - 1));
            }, function (err) {
              reject(_clone(err, depth - 1));
            });
          });
        } else if (clone.__isArray(parent)) {
          child = [];
        } else if (clone.__isRegExp(parent)) {
          child = new RegExp(parent.source, __getRegExpFlags(parent));
          if (parent.lastIndex) child.lastIndex = parent.lastIndex;
        } else if (clone.__isDate(parent)) {
          child = new Date(parent.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent)) {
          child = new Buffer(parent.length);
          parent.copy(child);
          return child;
        } else if (parent instanceof Error) {
          child = Object.create(parent);
        } else {
          if (typeof prototype == 'undefined') {
            proto = Object.getPrototypeOf(parent);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }
        if (circular) {
          var index = allParents.indexOf(parent);
          if (index != -1) {
            return allChildren[index];
          }
          allParents.push(parent);
          allChildren.push(child);
        }
        if (parent instanceof nativeMap) {
          var keyIterator = parent.keys();
          while (true) {
            var next = keyIterator.next();
            if (next.done) {
              break;
            }
            var keyChild = _clone(next.value, depth - 1);
            var valueChild = _clone(parent.get(next.value), depth - 1);
            child.set(keyChild, valueChild);
          }
        }
        if (parent instanceof nativeSet) {
          var iterator = parent.keys();
          while (true) {
            var next = iterator.next();
            if (next.done) {
              break;
            }
            var entryChild = _clone(next.value, depth - 1);
            child.add(entryChild);
          }
        }
        for (var i in parent) {
          var attrs;
          if (proto) {
            attrs = Object.getOwnPropertyDescriptor(proto, i);
          }
          if (attrs && attrs.set == null) {
            continue;
          }
          child[i] = _clone(parent[i], depth - 1);
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent);
          for (var i = 0; i < symbols.length; i++) {
            // Don't need to worry about cloning a symbol because it is a primitive,
            // like a number or string.
            var symbol = symbols[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent[symbol], depth - 1);
            if (!descriptor.enumerable) {
              Object.defineProperty(child, symbol, {
                enumerable: false
              });
            }
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent);
          for (var i = 0; i < allPropertyNames.length; i++) {
            var propertyName = allPropertyNames[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent[propertyName], depth - 1);
            Object.defineProperty(child, propertyName, {
              enumerable: false
            });
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }

    /**
     * Simple flat clone using prototype, accepts only objects, usefull for property
     * override on FLAT configuration object (no nested props).
     *
     * USE WITH CAUTION! This may not behave as you wish if you do not know how this
     * works.
     */
    clone.clonePrototype = function clonePrototype(parent) {
      if (parent === null) return null;
      var c = function () {};
      c.prototype = parent;
      return new c();
    };

    // private utility functions

    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone.__objToStr = __objToStr;
    function __isDate(o) {
      return typeof o === 'object' && __objToStr(o) === '[object Date]';
    }
    clone.__isDate = __isDate;
    function __isArray(o) {
      return typeof o === 'object' && __objToStr(o) === '[object Array]';
    }
    clone.__isArray = __isArray;
    function __isRegExp(o) {
      return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
    }
    clone.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
      var flags = '';
      if (re.global) flags += 'g';
      if (re.ignoreCase) flags += 'i';
      if (re.multiline) flags += 'm';
      return flags;
    }
    clone.__getRegExpFlags = __getRegExpFlags;
    return clone;
  }();
  if (typeof module === 'object' && module.exports) {
    module.exports = clone;
  }

  /**
   * Main CSSLint object.
   * @class CSSLint
   * @static
   * @extends parserlib.util.EventTarget
   */

  /* global parserlib, clone, Reporter */
  /* exported CSSLint */

  var CSSLint = function () {
    "use strict";

    var rules = [],
      formatters = [],
      embeddedRuleset = /\/\*\s*csslint([^\*]*)\*\//,
      api = new parserlib.util.EventTarget();
    api.version = "1.0.4";

    //-------------------------------------------------------------------------
    // Rule Management
    //-------------------------------------------------------------------------

    /**
     * Adds a new rule to the engine.
     * @param {Object} rule The rule to add.
     * @method addRule
     */
    api.addRule = function (rule) {
      rules.push(rule);
      rules[rule.id] = rule;
    };

    /**
     * Clears all rule from the engine.
     * @method clearRules
     */
    api.clearRules = function () {
      rules = [];
    };

    /**
     * Returns the rule objects.
     * @return An array of rule objects.
     * @method getRules
     */
    api.getRules = function () {
      return [].concat(rules).sort(function (a, b) {
        return a.id > b.id ? 1 : 0;
      });
    };

    /**
     * Returns a ruleset configuration object with all current rules.
     * @return A ruleset object.
     * @method getRuleset
     */
    api.getRuleset = function () {
      var ruleset = {},
        i = 0,
        len = rules.length;
      while (i < len) {
        ruleset[rules[i++].id] = 1; // by default, everything is a warning
      }

      return ruleset;
    };

    /**
     * Returns a ruleset object based on embedded rules.
     * @param {String} text A string of css containing embedded rules.
     * @param {Object} ruleset A ruleset object to modify.
     * @return {Object} A ruleset object.
     * @method getEmbeddedRuleset
     */
    function applyEmbeddedRuleset(text, ruleset) {
      var valueMap,
        embedded = text && text.match(embeddedRuleset),
        rules = embedded && embedded[1];
      if (rules) {
        valueMap = {
          "true": 2,
          // true is error
          "": 1,
          // blank is warning
          "false": 0,
          // false is ignore

          "2": 2,
          // explicit error
          "1": 1,
          // explicit warning
          "0": 0 // explicit ignore
        };

        rules.toLowerCase().split(",").forEach(function (rule) {
          var pair = rule.split(":"),
            property = pair[0] || "",
            value = pair[1] || "";
          ruleset[property.trim()] = valueMap[value.trim()];
        });
      }
      return ruleset;
    }

    //-------------------------------------------------------------------------
    // Formatters
    //-------------------------------------------------------------------------

    /**
     * Adds a new formatter to the engine.
     * @param {Object} formatter The formatter to add.
     * @method addFormatter
     */
    api.addFormatter = function (formatter) {
      // formatters.push(formatter);
      formatters[formatter.id] = formatter;
    };

    /**
     * Retrieves a formatter for use.
     * @param {String} formatId The name of the format to retrieve.
     * @return {Object} The formatter or undefined.
     * @method getFormatter
     */
    api.getFormatter = function (formatId) {
      return formatters[formatId];
    };

    /**
     * Formats the results in a particular format for a single file.
     * @param {Object} result The results returned from CSSLint.verify().
     * @param {String} filename The filename for which the results apply.
     * @param {String} formatId The name of the formatter to use.
     * @param {Object} options (Optional) for special output handling.
     * @return {String} A formatted string for the results.
     * @method format
     */
    api.format = function (results, filename, formatId, options) {
      var formatter = this.getFormatter(formatId),
        result = null;
      if (formatter) {
        result = formatter.startFormat();
        result += formatter.formatResults(results, filename, options || {});
        result += formatter.endFormat();
      }
      return result;
    };

    /**
     * Indicates if the given format is supported.
     * @param {String} formatId The ID of the format to check.
     * @return {Boolean} True if the format exists, false if not.
     * @method hasFormat
     */
    api.hasFormat = function (formatId) {
      return formatters.hasOwnProperty(formatId);
    };

    //-------------------------------------------------------------------------
    // Verification
    //-------------------------------------------------------------------------

    /**
     * Starts the verification process for the given CSS text.
     * @param {String} text The CSS text to verify.
     * @param {Object} ruleset (Optional) List of rules to apply. If null, then
     *      all rules are used. If a rule has a value of 1 then it's a warning,
     *      a value of 2 means it's an error.
     * @return {Object} Results of the verification.
     * @method verify
     */
    api.verify = function (text, ruleset) {
      var i = 0,
        reporter,
        lines,
        allow = {},
        ignore = [],
        report,
        parser = new parserlib.css.Parser({
          starHack: true,
          ieFilters: true,
          underscoreHack: true,
          strict: false
        });

      // normalize line endings
      lines = text.replace(/\n\r?/g, "$split$").split("$split$");

      // find 'allow' comments
      CSSLint.Util.forEach(lines, function (line, lineno) {
        var allowLine = line && line.match(/\/\*[ \t]*csslint[ \t]+allow:[ \t]*([^\*]*)\*\//i),
          allowRules = allowLine && allowLine[1],
          allowRuleset = {};
        if (allowRules) {
          allowRules.toLowerCase().split(",").forEach(function (allowRule) {
            allowRuleset[allowRule.trim()] = true;
          });
          if (Object.keys(allowRuleset).length > 0) {
            allow[lineno + 1] = allowRuleset;
          }
        }
      });
      var ignoreStart = null,
        ignoreEnd = null;
      CSSLint.Util.forEach(lines, function (line, lineno) {
        // Keep oldest, "unclosest" ignore:start
        if (ignoreStart === null && line.match(/\/\*[ \t]*csslint[ \t]+ignore:start[ \t]*\*\//i)) {
          ignoreStart = lineno;
        }
        if (line.match(/\/\*[ \t]*csslint[ \t]+ignore:end[ \t]*\*\//i)) {
          ignoreEnd = lineno;
        }
        if (ignoreStart !== null && ignoreEnd !== null) {
          ignore.push([ignoreStart, ignoreEnd]);
          ignoreStart = ignoreEnd = null;
        }
      });

      // Close remaining ignore block, if any
      if (ignoreStart !== null) {
        ignore.push([ignoreStart, lines.length]);
      }
      if (!ruleset) {
        ruleset = this.getRuleset();
      }
      if (embeddedRuleset.test(text)) {
        // defensively copy so that caller's version does not get modified
        ruleset = clone(ruleset);
        ruleset = applyEmbeddedRuleset(text, ruleset);
      }
      reporter = new Reporter(lines, ruleset, allow, ignore);
      ruleset.errors = 2; // always report parsing errors as errors
      for (i in ruleset) {
        if (ruleset.hasOwnProperty(i) && ruleset[i]) {
          if (rules[i]) {
            rules[i].init(parser, reporter);
          }
        }
      }

      // capture most horrible error type
      try {
        parser.parse(text);
      } catch (ex) {
        reporter.error("Fatal error, cannot continue: " + ex.message, ex.line, ex.col, {});
      }
      report = {
        messages: reporter.messages,
        stats: reporter.stats,
        ruleset: reporter.ruleset,
        allow: reporter.allow,
        ignore: reporter.ignore
      };

      // sort by line numbers, rollups at the bottom
      report.messages.sort(function (a, b) {
        if (a.rollup && !b.rollup) {
          return 1;
        } else if (!a.rollup && b.rollup) {
          return -1;
        } else {
          return a.line - b.line;
        }
      });
      return report;
    };

    //-------------------------------------------------------------------------
    // Publish the API
    //-------------------------------------------------------------------------

    return api;
  }();

  /**
   * An instance of Report is used to report results of the
   * verification back to the main API.
   * @class Reporter
   * @constructor
   * @param {String[]} lines The text lines of the source.
   * @param {Object} ruleset The set of rules to work with, including if
   *      they are errors or warnings.
   * @param {Object} explicitly allowed lines
   * @param {[][]} ingore list of line ranges to be ignored
   */
  function Reporter(lines, ruleset, allow, ignore) {
    "use strict";

    /**
     * List of messages being reported.
     * @property messages
     * @type String[]
     */
    this.messages = [];

    /**
     * List of statistics being reported.
     * @property stats
     * @type String[]
     */
    this.stats = [];

    /**
     * Lines of code being reported on. Used to provide contextual information
     * for messages.
     * @property lines
     * @type String[]
     */
    this.lines = lines;

    /**
     * Information about the rules. Used to determine whether an issue is an
     * error or warning.
     * @property ruleset
     * @type Object
     */
    this.ruleset = ruleset;

    /**
     * Lines with specific rule messages to leave out of the report.
     * @property allow
     * @type Object
     */
    this.allow = allow;
    if (!this.allow) {
      this.allow = {};
    }

    /**
     * Linesets not to include in the report.
     * @property ignore
     * @type [][]
     */
    this.ignore = ignore;
    if (!this.ignore) {
      this.ignore = [];
    }
  }
  Reporter.prototype = {
    // restore constructor
    constructor: Reporter,
    /**
     * Report an error.
     * @param {String} message The message to store.
     * @param {int} line The line number.
     * @param {int} col The column number.
     * @param {Object} rule The rule this message relates to.
     * @method error
     */
    error: function (message, line, col, rule) {
      "use strict";

      this.messages.push({
        type: "error",
        line: line,
        col: col,
        message: message,
        evidence: this.lines[line - 1],
        rule: rule || {}
      });
    },
    /**
     * Report an warning.
     * @param {String} message The message to store.
     * @param {int} line The line number.
     * @param {int} col The column number.
     * @param {Object} rule The rule this message relates to.
     * @method warn
     * @deprecated Use report instead.
     */
    warn: function (message, line, col, rule) {
      "use strict";

      this.report(message, line, col, rule);
    },
    /**
     * Report an issue.
     * @param {String} message The message to store.
     * @param {int} line The line number.
     * @param {int} col The column number.
     * @param {Object} rule The rule this message relates to.
     * @method report
     */
    report: function (message, line, col, rule) {
      "use strict";

      // Check if rule violation should be allowed
      if (this.allow.hasOwnProperty(line) && this.allow[line].hasOwnProperty(rule.id)) {
        return;
      }
      var ignore = false;
      CSSLint.Util.forEach(this.ignore, function (range) {
        if (range[0] <= line && line <= range[1]) {
          ignore = true;
        }
      });
      if (ignore) {
        return;
      }
      this.messages.push({
        type: this.ruleset[rule.id] === 2 ? "error" : "warning",
        line: line,
        col: col,
        message: message,
        evidence: this.lines[line - 1],
        rule: rule
      });
    },
    /**
     * Report some informational text.
     * @param {String} message The message to store.
     * @param {int} line The line number.
     * @param {int} col The column number.
     * @param {Object} rule The rule this message relates to.
     * @method info
     */
    info: function (message, line, col, rule) {
      "use strict";

      this.messages.push({
        type: "info",
        line: line,
        col: col,
        message: message,
        evidence: this.lines[line - 1],
        rule: rule
      });
    },
    /**
     * Report some rollup error information.
     * @param {String} message The message to store.
     * @param {Object} rule The rule this message relates to.
     * @method rollupError
     */
    rollupError: function (message, rule) {
      "use strict";

      this.messages.push({
        type: "error",
        rollup: true,
        message: message,
        rule: rule
      });
    },
    /**
     * Report some rollup warning information.
     * @param {String} message The message to store.
     * @param {Object} rule The rule this message relates to.
     * @method rollupWarn
     */
    rollupWarn: function (message, rule) {
      "use strict";

      this.messages.push({
        type: "warning",
        rollup: true,
        message: message,
        rule: rule
      });
    },
    /**
     * Report a statistic.
     * @param {String} name The name of the stat to store.
     * @param {Variant} value The value of the stat.
     * @method stat
     */
    stat: function (name, value) {
      "use strict";

      this.stats[name] = value;
    }
  };

  // expose for testing purposes
  CSSLint._Reporter = Reporter;

  /*
   * Utility functions that make life easier.
   */
  CSSLint.Util = {
    /*
     * Adds all properties from supplier onto receiver,
     * overwriting if the same name already exists on
     * receiver.
     * @param {Object} The object to receive the properties.
     * @param {Object} The object to provide the properties.
     * @return {Object} The receiver
     */
    mix: function (receiver, supplier) {
      "use strict";

      var prop;
      for (prop in supplier) {
        if (supplier.hasOwnProperty(prop)) {
          receiver[prop] = supplier[prop];
        }
      }
      return prop;
    },
    /*
     * Polyfill for array indexOf() method.
     * @param {Array} values The array to search.
     * @param {Variant} value The value to search for.
     * @return {int} The index of the value if found, -1 if not.
     */
    indexOf: function (values, value) {
      "use strict";

      if (values.indexOf) {
        return values.indexOf(value);
      } else {
        for (var i = 0, len = values.length; i < len; i++) {
          if (values[i] === value) {
            return i;
          }
        }
        return -1;
      }
    },
    /*
     * Polyfill for array forEach() method.
     * @param {Array} values The array to operate on.
     * @param {Function} func The function to call on each item.
     * @return {void}
     */
    forEach: function (values, func) {
      "use strict";

      if (values.forEach) {
        return values.forEach(func);
      } else {
        for (var i = 0, len = values.length; i < len; i++) {
          func(values[i], i, values);
        }
      }
    }
  };

  /*
   * Rule: Don't use adjoining classes (.foo.bar).
   */

  CSSLint.addRule({
    // rule information
    id: "adjoining-classes",
    name: "Disallow adjoining classes",
    desc: "Don't use adjoining classes.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-adjoining-classes",
    browsers: "IE6",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          modifier,
          classCount,
          i,
          j,
          k;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          for (j = 0; j < selector.parts.length; j++) {
            part = selector.parts[j];
            if (part.type === parser.SELECTOR_PART_TYPE) {
              classCount = 0;
              for (k = 0; k < part.modifiers.length; k++) {
                modifier = part.modifiers[k];
                if (modifier.type === "class") {
                  classCount++;
                }
                if (classCount > 1) {
                  reporter.report("Adjoining classes: " + selectors[i].text, part.line, part.col, rule);
                }
              }
            }
          }
        }
      });
    }
  });

  /*
   * Rule: Don't use width or height when using padding or border.
   */
  CSSLint.addRule({
    // rule information
    id: "box-model",
    name: "Beware of broken box size",
    desc: "Don't use width or height when using padding or border.",
    url: "https://github.com/CSSLint/csslint/wiki/Beware-of-box-model-size",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        widthProperties = {
          border: 1,
          "border-left": 1,
          "border-right": 1,
          padding: 1,
          "padding-left": 1,
          "padding-right": 1
        },
        heightProperties = {
          border: 1,
          "border-bottom": 1,
          "border-top": 1,
          padding: 1,
          "padding-bottom": 1,
          "padding-top": 1
        },
        properties,
        boxSizing = false;
      function startRule() {
        properties = {};
        boxSizing = false;
      }
      function endRule() {
        var prop, value;
        if (!boxSizing) {
          if (properties.height) {
            for (prop in heightProperties) {
              if (heightProperties.hasOwnProperty(prop) && properties[prop]) {
                value = properties[prop].value;
                // special case for padding
                if (!(prop === "padding" && value.parts.length === 2 && value.parts[0].value === 0)) {
                  reporter.report("Using height with " + prop + " can sometimes make elements larger than you expect.", properties[prop].line, properties[prop].col, rule);
                }
              }
            }
          }
          if (properties.width) {
            for (prop in widthProperties) {
              if (widthProperties.hasOwnProperty(prop) && properties[prop]) {
                value = properties[prop].value;
                if (!(prop === "padding" && value.parts.length === 2 && value.parts[1].value === 0)) {
                  reporter.report("Using width with " + prop + " can sometimes make elements larger than you expect.", properties[prop].line, properties[prop].col, rule);
                }
              }
            }
          }
        }
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var name = event.property.text.toLowerCase();
        if (heightProperties[name] || widthProperties[name]) {
          if (!/^0\S*$/.test(event.value) && !(name === "border" && event.value.toString() === "none")) {
            properties[name] = {
              line: event.property.line,
              col: event.property.col,
              value: event.value
            };
          }
        } else {
          if (/^(width|height)/i.test(name) && /^(length|percentage)/.test(event.value.parts[0].type)) {
            properties[name] = 1;
          } else if (name === "box-sizing") {
            boxSizing = true;
          }
        }
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
      parser.addListener("endpage", endRule);
      parser.addListener("endpagemargin", endRule);
      parser.addListener("endkeyframerule", endRule);
      parser.addListener("endviewport", endRule);
    }
  });

  /*
   * Rule: box-sizing doesn't work in IE6 and IE7.
   */

  CSSLint.addRule({
    // rule information
    id: "box-sizing",
    name: "Disallow use of box-sizing",
    desc: "The box-sizing properties isn't supported in IE6 and IE7.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-box-sizing",
    browsers: "IE6, IE7",
    tags: ["Compatibility"],
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("property", function (event) {
        var name = event.property.text.toLowerCase();
        if (name === "box-sizing") {
          reporter.report("The box-sizing property isn't supported in IE6 and IE7.", event.line, event.col, rule);
        }
      });
    }
  });

  /*
   * Rule: Use the bulletproof @font-face syntax to avoid 404's in old IE
   * (http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax)
   */

  CSSLint.addRule({
    // rule information
    id: "bulletproof-font-face",
    name: "Use the bulletproof @font-face syntax",
    desc: "Use the bulletproof @font-face syntax to avoid 404's in old IE (http://www.fontspring.com/blog/the-new-bulletproof-font-face-syntax).",
    url: "https://github.com/CSSLint/csslint/wiki/Bulletproof-font-face",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        fontFaceRule = false,
        firstSrc = true,
        ruleFailed = false,
        line,
        col;

      // Mark the start of a @font-face declaration so we only test properties inside it
      parser.addListener("startfontface", function () {
        fontFaceRule = true;
      });
      parser.addListener("property", function (event) {
        // If we aren't inside an @font-face declaration then just return
        if (!fontFaceRule) {
          return;
        }
        var propertyName = event.property.toString().toLowerCase(),
          value = event.value.toString();

        // Set the line and col numbers for use in the endfontface listener
        line = event.line;
        col = event.col;

        // This is the property that we care about, we can ignore the rest
        if (propertyName === "src") {
          var regex = /^\s?url\(['"].+\.eot\?.*['"]\)\s*format\(['"]embedded-opentype['"]\).*$/i;

          // We need to handle the advanced syntax with two src properties
          if (!value.match(regex) && firstSrc) {
            ruleFailed = true;
            firstSrc = false;
          } else if (value.match(regex) && !firstSrc) {
            ruleFailed = false;
          }
        }
      });

      // Back to normal rules that we don't need to test
      parser.addListener("endfontface", function () {
        fontFaceRule = false;
        if (ruleFailed) {
          reporter.report("@font-face declaration doesn't follow the fontspring bulletproof syntax.", line, col, rule);
        }
      });
    }
  });

  /*
   * Rule: Include all compatible vendor prefixes to reach a wider
   * range of users.
   */

  CSSLint.addRule({
    // rule information
    id: "compatible-vendor-prefixes",
    name: "Require compatible vendor prefixes",
    desc: "Include all compatible vendor prefixes to reach a wider range of users.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-compatible-vendor-prefixes",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        compatiblePrefixes,
        properties,
        prop,
        variations,
        prefixed,
        i,
        len,
        inKeyFrame = false,
        arrayPush = Array.prototype.push,
        applyTo = [];

      // See http://peter.sh/experiments/vendor-prefixed-css-property-overview/ for details
      compatiblePrefixes = {
        "animation": "webkit",
        "animation-delay": "webkit",
        "animation-direction": "webkit",
        "animation-duration": "webkit",
        "animation-fill-mode": "webkit",
        "animation-iteration-count": "webkit",
        "animation-name": "webkit",
        "animation-play-state": "webkit",
        "animation-timing-function": "webkit",
        "appearance": "webkit moz",
        "border-end": "webkit moz",
        "border-end-color": "webkit moz",
        "border-end-style": "webkit moz",
        "border-end-width": "webkit moz",
        "border-image": "webkit moz o",
        "border-radius": "webkit",
        "border-start": "webkit moz",
        "border-start-color": "webkit moz",
        "border-start-style": "webkit moz",
        "border-start-width": "webkit moz",
        "box-align": "webkit moz ms",
        "box-direction": "webkit moz ms",
        "box-flex": "webkit moz ms",
        "box-lines": "webkit ms",
        "box-ordinal-group": "webkit moz ms",
        "box-orient": "webkit moz ms",
        "box-pack": "webkit moz ms",
        "box-sizing": "",
        "box-shadow": "",
        "column-count": "webkit moz ms",
        "column-gap": "webkit moz ms",
        "column-rule": "webkit moz ms",
        "column-rule-color": "webkit moz ms",
        "column-rule-style": "webkit moz ms",
        "column-rule-width": "webkit moz ms",
        "column-width": "webkit moz ms",
        "hyphens": "epub moz",
        "line-break": "webkit ms",
        "margin-end": "webkit moz",
        "margin-start": "webkit moz",
        "marquee-speed": "webkit wap",
        "marquee-style": "webkit wap",
        "padding-end": "webkit moz",
        "padding-start": "webkit moz",
        "tab-size": "moz o",
        "text-size-adjust": "webkit ms",
        "transform": "webkit ms",
        "transform-origin": "webkit ms",
        "transition": "",
        "transition-delay": "",
        "transition-duration": "",
        "transition-property": "",
        "transition-timing-function": "",
        "user-modify": "webkit moz",
        "user-select": "webkit moz ms",
        "word-break": "epub ms",
        "writing-mode": "epub ms"
      };
      for (prop in compatiblePrefixes) {
        if (compatiblePrefixes.hasOwnProperty(prop)) {
          variations = [];
          prefixed = compatiblePrefixes[prop].split(" ");
          for (i = 0, len = prefixed.length; i < len; i++) {
            variations.push("-" + prefixed[i] + "-" + prop);
          }
          compatiblePrefixes[prop] = variations;
          arrayPush.apply(applyTo, variations);
        }
      }
      parser.addListener("startrule", function () {
        properties = [];
      });
      parser.addListener("startkeyframes", function (event) {
        inKeyFrame = event.prefix || true;
      });
      parser.addListener("endkeyframes", function () {
        inKeyFrame = false;
      });
      parser.addListener("property", function (event) {
        var name = event.property;
        if (CSSLint.Util.indexOf(applyTo, name.text) > -1) {
          // e.g., -moz-transform is okay to be alone in @-moz-keyframes
          if (!inKeyFrame || typeof inKeyFrame !== "string" || name.text.indexOf("-" + inKeyFrame + "-") !== 0) {
            properties.push(name);
          }
        }
      });
      parser.addListener("endrule", function () {
        if (!properties.length) {
          return;
        }
        var propertyGroups = {},
          i,
          len,
          name,
          prop,
          variations,
          value,
          full,
          actual,
          item,
          propertiesSpecified;
        for (i = 0, len = properties.length; i < len; i++) {
          name = properties[i];
          for (prop in compatiblePrefixes) {
            if (compatiblePrefixes.hasOwnProperty(prop)) {
              variations = compatiblePrefixes[prop];
              if (CSSLint.Util.indexOf(variations, name.text) > -1) {
                if (!propertyGroups[prop]) {
                  propertyGroups[prop] = {
                    full: variations.slice(0),
                    actual: [],
                    actualNodes: []
                  };
                }
                if (CSSLint.Util.indexOf(propertyGroups[prop].actual, name.text) === -1) {
                  propertyGroups[prop].actual.push(name.text);
                  propertyGroups[prop].actualNodes.push(name);
                }
              }
            }
          }
        }
        for (prop in propertyGroups) {
          if (propertyGroups.hasOwnProperty(prop)) {
            value = propertyGroups[prop];
            full = value.full;
            actual = value.actual;
            if (full.length > actual.length) {
              for (i = 0, len = full.length; i < len; i++) {
                item = full[i];
                if (CSSLint.Util.indexOf(actual, item) === -1) {
                  propertiesSpecified = actual.length === 1 ? actual[0] : actual.length === 2 ? actual.join(" and ") : actual.join(", ");
                  reporter.report("The property " + item + " is compatible with " + propertiesSpecified + " and should be included as well.", value.actualNodes[0].line, value.actualNodes[0].col, rule);
                }
              }
            }
          }
        }
      });
    }
  });

  /*
   * Rule: Certain properties don't play well with certain display values.
   * - float should not be used with inline-block
   * - height, width, margin-top, margin-bottom, float should not be used with inline
   * - vertical-align should not be used with block
   * - margin, float should not be used with table-*
   */

  CSSLint.addRule({
    // rule information
    id: "display-property-grouping",
    name: "Require properties appropriate for display",
    desc: "Certain properties shouldn't be used with certain display property values.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-properties-appropriate-for-display",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      var propertiesToCheck = {
          display: 1,
          "float": "none",
          height: 1,
          width: 1,
          margin: 1,
          "margin-left": 1,
          "margin-right": 1,
          "margin-bottom": 1,
          "margin-top": 1,
          padding: 1,
          "padding-left": 1,
          "padding-right": 1,
          "padding-bottom": 1,
          "padding-top": 1,
          "vertical-align": 1
        },
        properties;
      function reportProperty(name, display, msg) {
        if (properties[name]) {
          if (typeof propertiesToCheck[name] !== "string" || properties[name].value.toLowerCase() !== propertiesToCheck[name]) {
            reporter.report(msg || name + " can't be used with display: " + display + ".", properties[name].line, properties[name].col, rule);
          }
        }
      }
      function startRule() {
        properties = {};
      }
      function endRule() {
        var display = properties.display ? properties.display.value : null;
        if (display) {
          switch (display) {
            case "inline":
              // height, width, margin-top, margin-bottom, float should not be used with inline
              reportProperty("height", display);
              reportProperty("width", display);
              reportProperty("margin", display);
              reportProperty("margin-top", display);
              reportProperty("margin-bottom", display);
              reportProperty("float", display, "display:inline has no effect on floated elements (but may be used to fix the IE6 double-margin bug).");
              break;
            case "block":
              // vertical-align should not be used with block
              reportProperty("vertical-align", display);
              break;
            case "inline-block":
              // float should not be used with inline-block
              reportProperty("float", display);
              break;
            default:
              // margin, float should not be used with table
              if (display.indexOf("table-") === 0) {
                reportProperty("margin", display);
                reportProperty("margin-left", display);
                reportProperty("margin-right", display);
                reportProperty("margin-top", display);
                reportProperty("margin-bottom", display);
                reportProperty("float", display);
              }

            // otherwise do nothing
          }
        }
      }

      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var name = event.property.text.toLowerCase();
        if (propertiesToCheck[name]) {
          properties[name] = {
            value: event.value.text,
            line: event.property.line,
            col: event.property.col
          };
        }
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
      parser.addListener("endkeyframerule", endRule);
      parser.addListener("endpagemargin", endRule);
      parser.addListener("endpage", endRule);
      parser.addListener("endviewport", endRule);
    }
  });

  /*
   * Rule: Disallow duplicate background-images (using url).
   */

  CSSLint.addRule({
    // rule information
    id: "duplicate-background-images",
    name: "Disallow duplicate background images",
    desc: "Every background-image should be unique. Use a common class for e.g. sprites.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-duplicate-background-images",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        stack = {};
      parser.addListener("property", function (event) {
        var name = event.property.text,
          value = event.value,
          i,
          len;
        if (name.match(/background/i)) {
          for (i = 0, len = value.parts.length; i < len; i++) {
            if (value.parts[i].type === "uri") {
              if (typeof stack[value.parts[i].uri] === "undefined") {
                stack[value.parts[i].uri] = event;
              } else {
                reporter.report("Background image '" + value.parts[i].uri + "' was used multiple times, first declared at line " + stack[value.parts[i].uri].line + ", col " + stack[value.parts[i].uri].col + ".", event.line, event.col, rule);
              }
            }
          }
        }
      });
    }
  });

  /*
   * Rule: Duplicate properties must appear one after the other. If an already-defined
   * property appears somewhere else in the rule, then it's likely an error.
   */

  CSSLint.addRule({
    // rule information
    id: "duplicate-properties",
    name: "Disallow duplicate properties",
    desc: "Duplicate properties must appear one after the other.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-duplicate-properties",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        properties,
        lastProperty;
      function startRule() {
        properties = {};
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var property = event.property,
          name = property.text.toLowerCase();
        if (properties[name] && (lastProperty !== name || properties[name] === event.value.text)) {
          reporter.report("Duplicate property '" + event.property + "' found.", event.line, event.col, rule);
        }
        properties[name] = event.value.text;
        lastProperty = name;
      });
    }
  });

  /*
   * Rule: Style rules without any properties defined should be removed.
   */

  CSSLint.addRule({
    // rule information
    id: "empty-rules",
    name: "Disallow empty rules",
    desc: "Rules without any properties specified should be removed.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-empty-rules",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        count = 0;
      parser.addListener("startrule", function () {
        count = 0;
      });
      parser.addListener("property", function () {
        count++;
      });
      parser.addListener("endrule", function (event) {
        var selectors = event.selectors;
        if (count === 0) {
          reporter.report("Rule is empty.", selectors[0].line, selectors[0].col, rule);
        }
      });
    }
  });

  /*
   * Rule: There should be no syntax errors. (Duh.)
   */

  CSSLint.addRule({
    // rule information
    id: "errors",
    name: "Parsing Errors",
    desc: "This rule looks for recoverable syntax errors.",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("error", function (event) {
        reporter.error(event.message, event.line, event.col, rule);
      });
    }
  });
  CSSLint.addRule({
    // rule information
    id: "fallback-colors",
    name: "Require fallback colors",
    desc: "For older browsers that don't support RGBA, HSL, or HSLA, provide a fallback color.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-fallback-colors",
    browsers: "IE6,IE7,IE8",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        lastProperty,
        propertiesToCheck = {
          color: 1,
          background: 1,
          "border-color": 1,
          "border-top-color": 1,
          "border-right-color": 1,
          "border-bottom-color": 1,
          "border-left-color": 1,
          border: 1,
          "border-top": 1,
          "border-right": 1,
          "border-bottom": 1,
          "border-left": 1,
          "background-color": 1
        };
      function startRule() {
        lastProperty = null;
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var property = event.property,
          name = property.text.toLowerCase(),
          parts = event.value.parts,
          i = 0,
          colorType = "",
          len = parts.length;
        if (propertiesToCheck[name]) {
          while (i < len) {
            if (parts[i].type === "color") {
              if ("alpha" in parts[i] || "hue" in parts[i]) {
                if (/([^\)]+)\(/.test(parts[i])) {
                  colorType = RegExp.$1.toUpperCase();
                }
                if (!lastProperty || lastProperty.property.text.toLowerCase() !== name || lastProperty.colorType !== "compat") {
                  reporter.report("Fallback " + name + " (hex or RGB) should precede " + colorType + " " + name + ".", event.line, event.col, rule);
                }
              } else {
                event.colorType = "compat";
              }
            }
            i++;
          }
        }
        lastProperty = event;
      });
    }
  });

  /*
   * Rule: You shouldn't use more than 10 floats. If you do, there's probably
   * room for some abstraction.
   */

  CSSLint.addRule({
    // rule information
    id: "floats",
    name: "Disallow too many floats",
    desc: "This rule tests if the float property is used too many times",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-too-many-floats",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      var count = 0;

      // count how many times "float" is used
      parser.addListener("property", function (event) {
        if (event.property.text.toLowerCase() === "float" && event.value.text.toLowerCase() !== "none") {
          count++;
        }
      });

      // report the results
      parser.addListener("endstylesheet", function () {
        reporter.stat("floats", count);
        if (count >= 10) {
          reporter.rollupWarn("Too many floats (" + count + "), you're probably using them for layout. Consider using a grid system instead.", rule);
        }
      });
    }
  });

  /*
   * Rule: Avoid too many @font-face declarations in the same stylesheet.
   */

  CSSLint.addRule({
    // rule information
    id: "font-faces",
    name: "Don't use too many web fonts",
    desc: "Too many different web fonts in the same stylesheet.",
    url: "https://github.com/CSSLint/csslint/wiki/Don%27t-use-too-many-web-fonts",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        count = 0;
      parser.addListener("startfontface", function () {
        count++;
      });
      parser.addListener("endstylesheet", function () {
        if (count > 5) {
          reporter.rollupWarn("Too many @font-face declarations (" + count + ").", rule);
        }
      });
    }
  });

  /*
   * Rule: You shouldn't need more than 9 font-size declarations.
   */

  CSSLint.addRule({
    // rule information
    id: "font-sizes",
    name: "Disallow too many font sizes",
    desc: "Checks the number of font-size declarations.",
    url: "https://github.com/CSSLint/csslint/wiki/Don%27t-use-too-many-font-size-declarations",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        count = 0;

      // check for use of "font-size"
      parser.addListener("property", function (event) {
        if (event.property.toString() === "font-size") {
          count++;
        }
      });

      // report the results
      parser.addListener("endstylesheet", function () {
        reporter.stat("font-sizes", count);
        if (count >= 10) {
          reporter.rollupWarn("Too many font-size declarations (" + count + "), abstraction needed.", rule);
        }
      });
    }
  });

  /*
   * Rule: When using a vendor-prefixed gradient, make sure to use them all.
   */

  CSSLint.addRule({
    // rule information
    id: "gradients",
    name: "Require all gradient definitions",
    desc: "When using a vendor-prefixed gradient, make sure to use them all.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-all-gradient-definitions",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        gradients;
      parser.addListener("startrule", function () {
        gradients = {
          moz: 0,
          webkit: 0,
          oldWebkit: 0,
          o: 0
        };
      });
      parser.addListener("property", function (event) {
        if (/\-(moz|o|webkit)(?:\-(?:linear|radial))\-gradient/i.test(event.value)) {
          gradients[RegExp.$1] = 1;
        } else if (/\-webkit\-gradient/i.test(event.value)) {
          gradients.oldWebkit = 1;
        }
      });
      parser.addListener("endrule", function (event) {
        var missing = [];
        if (!gradients.moz) {
          missing.push("Firefox 3.6+");
        }
        if (!gradients.webkit) {
          missing.push("Webkit (Safari 5+, Chrome)");
        }
        if (!gradients.oldWebkit) {
          missing.push("Old Webkit (Safari 4+, Chrome)");
        }
        if (!gradients.o) {
          missing.push("Opera 11.1+");
        }
        if (missing.length && missing.length < 4) {
          reporter.report("Missing vendor-prefixed CSS gradients for " + missing.join(", ") + ".", event.selectors[0].line, event.selectors[0].col, rule);
        }
      });
    }
  });

  /*
   * Rule: Don't use IDs for selectors.
   */

  CSSLint.addRule({
    // rule information
    id: "ids",
    name: "Disallow IDs in selectors",
    desc: "Selectors should not contain IDs.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-IDs-in-selectors",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          modifier,
          idCount,
          i,
          j,
          k;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          idCount = 0;
          for (j = 0; j < selector.parts.length; j++) {
            part = selector.parts[j];
            if (part.type === parser.SELECTOR_PART_TYPE) {
              for (k = 0; k < part.modifiers.length; k++) {
                modifier = part.modifiers[k];
                if (modifier.type === "id") {
                  idCount++;
                }
              }
            }
          }
          if (idCount === 1) {
            reporter.report("Don't use IDs in selectors.", selector.line, selector.col, rule);
          } else if (idCount > 1) {
            reporter.report(idCount + " IDs in the selector, really?", selector.line, selector.col, rule);
          }
        }
      });
    }
  });

  /*
   * Rule: IE6-9 supports up to 31 stylesheet import.
   * Reference:
   * http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/internet-explorer-stylesheet-rule-selector-import-sheet-limit-maximum.aspx
   */

  CSSLint.addRule({
    // rule information
    id: "import-ie-limit",
    name: "@import limit on IE6-IE9",
    desc: "IE6-9 supports up to 31 @import per stylesheet",
    browsers: "IE6, IE7, IE8, IE9",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        MAX_IMPORT_COUNT = 31,
        count = 0;
      function startPage() {
        count = 0;
      }
      parser.addListener("startpage", startPage);
      parser.addListener("import", function () {
        count++;
      });
      parser.addListener("endstylesheet", function () {
        if (count > MAX_IMPORT_COUNT) {
          reporter.rollupError("Too many @import rules (" + count + "). IE6-9 supports up to 31 import per stylesheet.", rule);
        }
      });
    }
  });

  /*
   * Rule: Don't use @import, use <link> instead.
   */

  CSSLint.addRule({
    // rule information
    id: "import",
    name: "Disallow @import",
    desc: "Don't use @import, use <link> instead.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-%40import",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("import", function (event) {
        reporter.report("@import prevents parallel downloads, use <link> instead.", event.line, event.col, rule);
      });
    }
  });

  /*
   * Rule: Make sure !important is not overused, this could lead to specificity
   * war. Display a warning on !important declarations, an error if it's
   * used more at least 10 times.
   */

  CSSLint.addRule({
    // rule information
    id: "important",
    name: "Disallow !important",
    desc: "Be careful when using !important declaration",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-%21important",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        count = 0;

      // warn that important is used and increment the declaration counter
      parser.addListener("property", function (event) {
        if (event.important === true) {
          count++;
          reporter.report("Use of !important", event.line, event.col, rule);
        }
      });

      // if there are more than 10, show an error
      parser.addListener("endstylesheet", function () {
        reporter.stat("important", count);
        if (count >= 10) {
          reporter.rollupWarn("Too many !important declarations (" + count + "), try to use less than 10 to avoid specificity issues.", rule);
        }
      });
    }
  });

  /*
   * Rule: Properties should be known (listed in CSS3 specification) or
   * be a vendor-prefixed property.
   */

  CSSLint.addRule({
    // rule information
    id: "known-properties",
    name: "Require use of known properties",
    desc: "Properties should be known (listed in CSS3 specification) or be a vendor-prefixed property.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-use-of-known-properties",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("property", function (event) {
        // the check is handled entirely by the parser-lib (https://github.com/nzakas/parser-lib)
        if (event.invalid) {
          reporter.report(event.invalid.message, event.line, event.col, rule);
        }
      });
    }
  });

  /*
   * Rule: All properties should be in alphabetical order.
   */

  CSSLint.addRule({
    // rule information
    id: "order-alphabetical",
    name: "Alphabetical order",
    desc: "Assure properties are in alphabetical order",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        properties;
      var startRule = function () {
        properties = [];
      };
      var endRule = function (event) {
        var currentProperties = properties.join(","),
          expectedProperties = properties.sort().join(",");
        if (currentProperties !== expectedProperties) {
          reporter.report("Rule doesn't have all its properties in alphabetical order.", event.line, event.col, rule);
        }
      };
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var name = event.property.text,
          lowerCasePrefixLessName = name.toLowerCase().replace(/^-.*?-/, "");
        properties.push(lowerCasePrefixLessName);
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
      parser.addListener("endpage", endRule);
      parser.addListener("endpagemargin", endRule);
      parser.addListener("endkeyframerule", endRule);
      parser.addListener("endviewport", endRule);
    }
  });

  /*
   * Rule: outline: none or outline: 0 should only be used in a :focus rule
   *       and only if there are other properties in the same rule.
   */

  CSSLint.addRule({
    // rule information
    id: "outline-none",
    name: "Disallow outline: none",
    desc: "Use of outline: none or outline: 0 should be limited to :focus rules.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-outline%3Anone",
    browsers: "All",
    tags: ["Accessibility"],
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        lastRule;
      function startRule(event) {
        if (event.selectors) {
          lastRule = {
            line: event.line,
            col: event.col,
            selectors: event.selectors,
            propCount: 0,
            outline: false
          };
        } else {
          lastRule = null;
        }
      }
      function endRule() {
        if (lastRule) {
          if (lastRule.outline) {
            if (lastRule.selectors.toString().toLowerCase().indexOf(":focus") === -1) {
              reporter.report("Outlines should only be modified using :focus.", lastRule.line, lastRule.col, rule);
            } else if (lastRule.propCount === 1) {
              reporter.report("Outlines shouldn't be hidden unless other visual changes are made.", lastRule.line, lastRule.col, rule);
            }
          }
        }
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var name = event.property.text.toLowerCase(),
          value = event.value;
        if (lastRule) {
          lastRule.propCount++;
          if (name === "outline" && (value.toString() === "none" || value.toString() === "0")) {
            lastRule.outline = true;
          }
        }
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
      parser.addListener("endpage", endRule);
      parser.addListener("endpagemargin", endRule);
      parser.addListener("endkeyframerule", endRule);
      parser.addListener("endviewport", endRule);
    }
  });

  /*
   * Rule: Don't use classes or IDs with elements (a.foo or a#foo).
   */

  CSSLint.addRule({
    // rule information
    id: "overqualified-elements",
    name: "Disallow overqualified elements",
    desc: "Don't use classes or IDs with elements (a.foo or a#foo).",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-overqualified-elements",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        classes = {};
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          modifier,
          i,
          j,
          k;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          for (j = 0; j < selector.parts.length; j++) {
            part = selector.parts[j];
            if (part.type === parser.SELECTOR_PART_TYPE) {
              for (k = 0; k < part.modifiers.length; k++) {
                modifier = part.modifiers[k];
                if (part.elementName && modifier.type === "id") {
                  reporter.report("Element (" + part + ") is overqualified, just use " + modifier + " without element name.", part.line, part.col, rule);
                } else if (modifier.type === "class") {
                  if (!classes[modifier]) {
                    classes[modifier] = [];
                  }
                  classes[modifier].push({
                    modifier: modifier,
                    part: part
                  });
                }
              }
            }
          }
        }
      });
      parser.addListener("endstylesheet", function () {
        var prop;
        for (prop in classes) {
          if (classes.hasOwnProperty(prop)) {
            // one use means that this is overqualified
            if (classes[prop].length === 1 && classes[prop][0].part.elementName) {
              reporter.report("Element (" + classes[prop][0].part + ") is overqualified, just use " + classes[prop][0].modifier + " without element name.", classes[prop][0].part.line, classes[prop][0].part.col, rule);
            }
          }
        }
      });
    }
  });

  /*
   * Rule: Headings (h1-h6) should not be qualified (namespaced).
   */

  CSSLint.addRule({
    // rule information
    id: "qualified-headings",
    name: "Disallow qualified headings",
    desc: "Headings should not be qualified (namespaced).",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-qualified-headings",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          i,
          j;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          for (j = 0; j < selector.parts.length; j++) {
            part = selector.parts[j];
            if (part.type === parser.SELECTOR_PART_TYPE) {
              if (part.elementName && /h[1-6]/.test(part.elementName.toString()) && j > 0) {
                reporter.report("Heading (" + part.elementName + ") should not be qualified.", part.line, part.col, rule);
              }
            }
          }
        }
      });
    }
  });

  /*
   * Rule: Selectors that look like regular expressions are slow and should be avoided.
   */

  CSSLint.addRule({
    // rule information
    id: "regex-selectors",
    name: "Disallow selectors that look like regexs",
    desc: "Selectors that look like regular expressions are slow and should be avoided.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-selectors-that-look-like-regular-expressions",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          modifier,
          i,
          j,
          k;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          for (j = 0; j < selector.parts.length; j++) {
            part = selector.parts[j];
            if (part.type === parser.SELECTOR_PART_TYPE) {
              for (k = 0; k < part.modifiers.length; k++) {
                modifier = part.modifiers[k];
                if (modifier.type === "attribute") {
                  if (/([~\|\^\$\*]=)/.test(modifier)) {
                    reporter.report("Attribute selectors with " + RegExp.$1 + " are slow!", modifier.line, modifier.col, rule);
                  }
                }
              }
            }
          }
        }
      });
    }
  });

  /*
   * Rule: Total number of rules should not exceed x.
   */

  CSSLint.addRule({
    // rule information
    id: "rules-count",
    name: "Rules Count",
    desc: "Track how many rules there are.",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var count = 0;

      // count each rule
      parser.addListener("startrule", function () {
        count++;
      });
      parser.addListener("endstylesheet", function () {
        reporter.stat("rule-count", count);
      });
    }
  });

  /*
   * Rule: Warn people with approaching the IE 4095 limit
   */

  CSSLint.addRule({
    // rule information
    id: "selector-max-approaching",
    name: "Warn when approaching the 4095 selector limit for IE",
    desc: "Will warn when selector count is >= 3800 selectors.",
    browsers: "IE",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        count = 0;
      parser.addListener("startrule", function (event) {
        count += event.selectors.length;
      });
      parser.addListener("endstylesheet", function () {
        if (count >= 3800) {
          reporter.report("You have " + count + " selectors. Internet Explorer supports a maximum of 4095 selectors per stylesheet. Consider refactoring.", 0, 0, rule);
        }
      });
    }
  });

  /*
   * Rule: Warn people past the IE 4095 limit
   */

  CSSLint.addRule({
    // rule information
    id: "selector-max",
    name: "Error when past the 4095 selector limit for IE",
    desc: "Will error when selector count is > 4095.",
    browsers: "IE",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        count = 0;
      parser.addListener("startrule", function (event) {
        count += event.selectors.length;
      });
      parser.addListener("endstylesheet", function () {
        if (count > 4095) {
          reporter.report("You have " + count + " selectors. Internet Explorer supports a maximum of 4095 selectors per stylesheet. Consider refactoring.", 0, 0, rule);
        }
      });
    }
  });

  /*
   * Rule: Avoid new-line characters in selectors.
   */

  CSSLint.addRule({
    // rule information
    id: "selector-newline",
    name: "Disallow new-line characters in selectors",
    desc: "New-line characters in selectors are usually a forgotten comma and not a descendant combinator.",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      function startRule(event) {
        var i,
          len,
          selector,
          p,
          n,
          pLen,
          part,
          part2,
          type,
          currentLine,
          nextLine,
          selectors = event.selectors;
        for (i = 0, len = selectors.length; i < len; i++) {
          selector = selectors[i];
          for (p = 0, pLen = selector.parts.length; p < pLen; p++) {
            for (n = p + 1; n < pLen; n++) {
              part = selector.parts[p];
              part2 = selector.parts[n];
              type = part.type;
              currentLine = part.line;
              nextLine = part2.line;
              if (type === "descendant" && nextLine > currentLine) {
                reporter.report("newline character found in selector (forgot a comma?)", currentLine, selectors[i].parts[0].col, rule);
              }
            }
          }
        }
      }
      parser.addListener("startrule", startRule);
    }
  });

  /*
   * Rule: Use shorthand properties where possible.
   *
   */

  CSSLint.addRule({
    // rule information
    id: "shorthand",
    name: "Require shorthand properties",
    desc: "Use shorthand properties where possible.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-shorthand-properties",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        prop,
        i,
        len,
        propertiesToCheck = {},
        properties,
        mapping = {
          "margin": ["margin-top", "margin-bottom", "margin-left", "margin-right"],
          "padding": ["padding-top", "padding-bottom", "padding-left", "padding-right"]
        };

      // initialize propertiesToCheck
      for (prop in mapping) {
        if (mapping.hasOwnProperty(prop)) {
          for (i = 0, len = mapping[prop].length; i < len; i++) {
            propertiesToCheck[mapping[prop][i]] = prop;
          }
        }
      }
      function startRule() {
        properties = {};
      }

      // event handler for end of rules
      function endRule(event) {
        var prop, i, len, total;

        // check which properties this rule has
        for (prop in mapping) {
          if (mapping.hasOwnProperty(prop)) {
            total = 0;
            for (i = 0, len = mapping[prop].length; i < len; i++) {
              total += properties[mapping[prop][i]] ? 1 : 0;
            }
            if (total === mapping[prop].length) {
              reporter.report("The properties " + mapping[prop].join(", ") + " can be replaced by " + prop + ".", event.line, event.col, rule);
            }
          }
        }
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);

      // check for use of "font-size"
      parser.addListener("property", function (event) {
        var name = event.property.toString().toLowerCase();
        if (propertiesToCheck[name]) {
          properties[name] = 1;
        }
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
    }
  });

  /*
   * Rule: Don't use properties with a star prefix.
   *
   */

  CSSLint.addRule({
    // rule information
    id: "star-property-hack",
    name: "Disallow properties with a star prefix",
    desc: "Checks for the star property hack (targets IE6/7)",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-star-hack",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;

      // check if property name starts with "*"
      parser.addListener("property", function (event) {
        var property = event.property;
        if (property.hack === "*") {
          reporter.report("Property with star prefix found.", event.property.line, event.property.col, rule);
        }
      });
    }
  });

  /*
   * Rule: Don't use text-indent for image replacement if you need to support rtl.
   *
   */

  CSSLint.addRule({
    // rule information
    id: "text-indent",
    name: "Disallow negative text-indent",
    desc: "Checks for text indent less than -99px",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-negative-text-indent",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        textIndent,
        direction;
      function startRule() {
        textIndent = false;
        direction = "inherit";
      }

      // event handler for end of rules
      function endRule() {
        if (textIndent && direction !== "ltr") {
          reporter.report("Negative text-indent doesn't work well with RTL. If you use text-indent for image replacement explicitly set direction for that item to ltr.", textIndent.line, textIndent.col, rule);
        }
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);

      // check for use of "font-size"
      parser.addListener("property", function (event) {
        var name = event.property.toString().toLowerCase(),
          value = event.value;
        if (name === "text-indent" && value.parts[0].value < -99) {
          textIndent = event.property;
        } else if (name === "direction" && value.toString() === "ltr") {
          direction = "ltr";
        }
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
    }
  });

  /*
   * Rule: Don't use properties with a underscore prefix.
   *
   */

  CSSLint.addRule({
    // rule information
    id: "underscore-property-hack",
    name: "Disallow properties with an underscore prefix",
    desc: "Checks for the underscore property hack (targets IE6)",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-underscore-hack",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;

      // check if property name starts with "_"
      parser.addListener("property", function (event) {
        var property = event.property;
        if (property.hack === "_") {
          reporter.report("Property with underscore prefix found.", event.property.line, event.property.col, rule);
        }
      });
    }
  });

  /*
   * Rule: Headings (h1-h6) should be defined only once.
   */

  CSSLint.addRule({
    // rule information
    id: "unique-headings",
    name: "Headings should only be defined once",
    desc: "Headings should be defined only once.",
    url: "https://github.com/CSSLint/csslint/wiki/Headings-should-only-be-defined-once",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      var headings = {
        h1: 0,
        h2: 0,
        h3: 0,
        h4: 0,
        h5: 0,
        h6: 0
      };
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          pseudo,
          i,
          j;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          part = selector.parts[selector.parts.length - 1];
          if (part.elementName && /(h[1-6])/i.test(part.elementName.toString())) {
            for (j = 0; j < part.modifiers.length; j++) {
              if (part.modifiers[j].type === "pseudo") {
                pseudo = true;
                break;
              }
            }
            if (!pseudo) {
              headings[RegExp.$1]++;
              if (headings[RegExp.$1] > 1) {
                reporter.report("Heading (" + part.elementName + ") has already been defined.", part.line, part.col, rule);
              }
            }
          }
        }
      });
      parser.addListener("endstylesheet", function () {
        var prop,
          messages = [];
        for (prop in headings) {
          if (headings.hasOwnProperty(prop)) {
            if (headings[prop] > 1) {
              messages.push(headings[prop] + " " + prop + "s");
            }
          }
        }
        if (messages.length) {
          reporter.rollupWarn("You have " + messages.join(", ") + " defined in this stylesheet.", rule);
        }
      });
    }
  });

  /*
   * Rule: Don't use universal selector because it's slow.
   */

  CSSLint.addRule({
    // rule information
    id: "universal-selector",
    name: "Disallow universal selector",
    desc: "The universal selector (*) is known to be slow.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-universal-selector",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selector,
          part,
          i;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          part = selector.parts[selector.parts.length - 1];
          if (part.elementName === "*") {
            reporter.report(rule.desc, part.line, part.col, rule);
          }
        }
      });
    }
  });

  /*
   * Rule: Don't use unqualified attribute selectors because they're just like universal selectors.
   */

  CSSLint.addRule({
    // rule information
    id: "unqualified-attributes",
    name: "Disallow unqualified attribute selectors",
    desc: "Unqualified attribute selectors are known to be slow.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-unqualified-attribute-selectors",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;
      parser.addListener("startrule", function (event) {
        var selectors = event.selectors,
          selectorContainsClassOrId = false,
          selector,
          part,
          modifier,
          i,
          k;
        for (i = 0; i < selectors.length; i++) {
          selector = selectors[i];
          part = selector.parts[selector.parts.length - 1];
          if (part.type === parser.SELECTOR_PART_TYPE) {
            for (k = 0; k < part.modifiers.length; k++) {
              modifier = part.modifiers[k];
              if (modifier.type === "class" || modifier.type === "id") {
                selectorContainsClassOrId = true;
                break;
              }
            }
            if (!selectorContainsClassOrId) {
              for (k = 0; k < part.modifiers.length; k++) {
                modifier = part.modifiers[k];
                if (modifier.type === "attribute" && (!part.elementName || part.elementName === "*")) {
                  reporter.report(rule.desc, part.line, part.col, rule);
                }
              }
            }
          }
        }
      });
    }
  });

  /*
   * Rule: When using a vendor-prefixed property, make sure to
   * include the standard one.
   */

  CSSLint.addRule({
    // rule information
    id: "vendor-prefix",
    name: "Require standard property with vendor prefix",
    desc: "When using a vendor-prefixed property, make sure to include the standard one.",
    url: "https://github.com/CSSLint/csslint/wiki/Require-standard-property-with-vendor-prefix",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this,
        properties,
        num,
        propertiesToCheck = {
          "-webkit-border-radius": "border-radius",
          "-webkit-border-top-left-radius": "border-top-left-radius",
          "-webkit-border-top-right-radius": "border-top-right-radius",
          "-webkit-border-bottom-left-radius": "border-bottom-left-radius",
          "-webkit-border-bottom-right-radius": "border-bottom-right-radius",
          "-o-border-radius": "border-radius",
          "-o-border-top-left-radius": "border-top-left-radius",
          "-o-border-top-right-radius": "border-top-right-radius",
          "-o-border-bottom-left-radius": "border-bottom-left-radius",
          "-o-border-bottom-right-radius": "border-bottom-right-radius",
          "-moz-border-radius": "border-radius",
          "-moz-border-radius-topleft": "border-top-left-radius",
          "-moz-border-radius-topright": "border-top-right-radius",
          "-moz-border-radius-bottomleft": "border-bottom-left-radius",
          "-moz-border-radius-bottomright": "border-bottom-right-radius",
          "-moz-column-count": "column-count",
          "-webkit-column-count": "column-count",
          "-moz-column-gap": "column-gap",
          "-webkit-column-gap": "column-gap",
          "-moz-column-rule": "column-rule",
          "-webkit-column-rule": "column-rule",
          "-moz-column-rule-style": "column-rule-style",
          "-webkit-column-rule-style": "column-rule-style",
          "-moz-column-rule-color": "column-rule-color",
          "-webkit-column-rule-color": "column-rule-color",
          "-moz-column-rule-width": "column-rule-width",
          "-webkit-column-rule-width": "column-rule-width",
          "-moz-column-width": "column-width",
          "-webkit-column-width": "column-width",
          "-webkit-column-span": "column-span",
          "-webkit-columns": "columns",
          "-moz-box-shadow": "box-shadow",
          "-webkit-box-shadow": "box-shadow",
          "-moz-transform": "transform",
          "-webkit-transform": "transform",
          "-o-transform": "transform",
          "-ms-transform": "transform",
          "-moz-transform-origin": "transform-origin",
          "-webkit-transform-origin": "transform-origin",
          "-o-transform-origin": "transform-origin",
          "-ms-transform-origin": "transform-origin",
          "-moz-box-sizing": "box-sizing",
          "-webkit-box-sizing": "box-sizing"
        };

      // event handler for beginning of rules
      function startRule() {
        properties = {};
        num = 1;
      }

      // event handler for end of rules
      function endRule() {
        var prop,
          i,
          len,
          needed,
          actual,
          needsStandard = [];
        for (prop in properties) {
          if (propertiesToCheck[prop]) {
            needsStandard.push({
              actual: prop,
              needed: propertiesToCheck[prop]
            });
          }
        }
        for (i = 0, len = needsStandard.length; i < len; i++) {
          needed = needsStandard[i].needed;
          actual = needsStandard[i].actual;
          if (!properties[needed]) {
            reporter.report("Missing standard property '" + needed + "' to go along with '" + actual + "'.", properties[actual][0].name.line, properties[actual][0].name.col, rule);
          } else {
            // make sure standard property is last
            if (properties[needed][0].pos < properties[actual][0].pos) {
              reporter.report("Standard property '" + needed + "' should come after vendor-prefixed property '" + actual + "'.", properties[actual][0].name.line, properties[actual][0].name.col, rule);
            }
          }
        }
      }
      parser.addListener("startrule", startRule);
      parser.addListener("startfontface", startRule);
      parser.addListener("startpage", startRule);
      parser.addListener("startpagemargin", startRule);
      parser.addListener("startkeyframerule", startRule);
      parser.addListener("startviewport", startRule);
      parser.addListener("property", function (event) {
        var name = event.property.text.toLowerCase();
        if (!properties[name]) {
          properties[name] = [];
        }
        properties[name].push({
          name: event.property,
          value: event.value,
          pos: num++
        });
      });
      parser.addListener("endrule", endRule);
      parser.addListener("endfontface", endRule);
      parser.addListener("endpage", endRule);
      parser.addListener("endpagemargin", endRule);
      parser.addListener("endkeyframerule", endRule);
      parser.addListener("endviewport", endRule);
    }
  });

  /*
   * Rule: You don't need to specify units when a value is 0.
   */

  CSSLint.addRule({
    // rule information
    id: "zero-units",
    name: "Disallow units for 0 values",
    desc: "You don't need to specify units when a value is 0.",
    url: "https://github.com/CSSLint/csslint/wiki/Disallow-units-for-zero-values",
    browsers: "All",
    // initialization
    init: function (parser, reporter) {
      "use strict";

      var rule = this;

      // count how many times "float" is used
      parser.addListener("property", function (event) {
        var parts = event.value.parts,
          i = 0,
          len = parts.length;
        while (i < len) {
          if ((parts[i].units || parts[i].type === "percentage") && parts[i].value === 0 && parts[i].type !== "time") {
            reporter.report("Values of 0 shouldn't have units specified.", parts[i].line, parts[i].col, rule);
          }
          i++;
        }
      });
    }
  });
  (function () {
    "use strict";

    /**
     * Replace special characters before write to output.
     *
     * Rules:
     *  - single quotes is the escape sequence for double-quotes
     *  - &amp; is the escape sequence for &
     *  - &lt; is the escape sequence for <
     *  - &gt; is the escape sequence for >
     *
     * @param {String} message to escape
     * @return escaped message as {String}
     */
    var xmlEscape = function (str) {
      if (!str || str.constructor !== String) {
        return "";
      }
      return str.replace(/["&><]/g, function (match) {
        switch (match) {
          case "\"":
            return "&quot;";
          case "&":
            return "&amp;";
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
        }
      });
    };
    CSSLint.addFormatter({
      // format information
      id: "checkstyle-xml",
      name: "Checkstyle XML format",
      /**
       * Return opening root XML tag.
       * @return {String} to prepend before all results
       */
      startFormat: function () {
        return "<?xml version=\"1.0\" encoding=\"utf-8\"?><checkstyle>";
      },
      /**
       * Return closing root XML tag.
       * @return {String} to append after all results
       */
      endFormat: function () {
        return "</checkstyle>";
      },
      /**
       * Returns message when there is a file read error.
       * @param {String} filename The name of the file that caused the error.
       * @param {String} message The error message
       * @return {String} The error message.
       */
      readError: function (filename, message) {
        return "<file name=\"" + xmlEscape(filename) + "\"><error line=\"0\" column=\"0\" severty=\"error\" message=\"" + xmlEscape(message) + "\"></error></file>";
      },
      /**
       * Given CSS Lint results for a file, return output for this format.
       * @param results {Object} with error and warning messages
       * @param filename {String} relative file path
       * @param options {Object} (UNUSED for now) specifies special handling of output
       * @return {String} output for results
       */
      formatResults: function (results, filename /*, options*/) {
        var messages = results.messages,
          output = [];

        /**
         * Generate a source string for a rule.
         * Checkstyle source strings usually resemble Java class names e.g
         * net.csslint.SomeRuleName
         * @param {Object} rule
         * @return rule source as {String}
         */
        var generateSource = function (rule) {
          if (!rule || !("name" in rule)) {
            return "";
          }
          return "net.csslint." + rule.name.replace(/\s/g, "");
        };
        if (messages.length > 0) {
          output.push("<file name=\"" + filename + "\">");
          CSSLint.Util.forEach(messages, function (message) {
            // ignore rollups for now
            if (!message.rollup) {
              output.push("<error line=\"" + message.line + "\" column=\"" + message.col + "\" severity=\"" + message.type + "\"" + " message=\"" + xmlEscape(message.message) + "\" source=\"" + generateSource(message.rule) + "\"/>");
            }
          });
          output.push("</file>");
        }
        return output.join("");
      }
    });
  })();
  CSSLint.addFormatter({
    // format information
    id: "compact",
    name: "Compact, 'porcelain' format",
    /**
     * Return content to be printed before all file results.
     * @return {String} to prepend before all results
     */
    startFormat: function () {
      "use strict";

      return "";
    },
    /**
     * Return content to be printed after all file results.
     * @return {String} to append after all results
     */
    endFormat: function () {
      "use strict";

      return "";
    },
    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (Optional) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function (results, filename, options) {
      "use strict";

      var messages = results.messages,
        output = "";
      options = options || {};

      /**
       * Capitalize and return given string.
       * @param str {String} to capitalize
       * @return {String} capitalized
       */
      var capitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      if (messages.length === 0) {
        return options.quiet ? "" : filename + ": Lint Free!";
      }
      CSSLint.Util.forEach(messages, function (message) {
        if (message.rollup) {
          output += filename + ": " + capitalize(message.type) + " - " + message.message + " (" + message.rule.id + ")\n";
        } else {
          output += filename + ": line " + message.line + ", col " + message.col + ", " + capitalize(message.type) + " - " + message.message + " (" + message.rule.id + ")\n";
        }
      });
      return output;
    }
  });
  CSSLint.addFormatter({
    // format information
    id: "csslint-xml",
    name: "CSSLint XML format",
    /**
     * Return opening root XML tag.
     * @return {String} to prepend before all results
     */
    startFormat: function () {
      "use strict";

      return "<?xml version=\"1.0\" encoding=\"utf-8\"?><csslint>";
    },
    /**
     * Return closing root XML tag.
     * @return {String} to append after all results
     */
    endFormat: function () {
      "use strict";

      return "</csslint>";
    },
    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (UNUSED for now) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function (results, filename /*, options*/) {
      "use strict";

      var messages = results.messages,
        output = [];

      /**
       * Replace special characters before write to output.
       *
       * Rules:
       *  - single quotes is the escape sequence for double-quotes
       *  - &amp; is the escape sequence for &
       *  - &lt; is the escape sequence for <
       *  - &gt; is the escape sequence for >
       *
       * @param {String} message to escape
       * @return escaped message as {String}
       */
      var escapeSpecialCharacters = function (str) {
        if (!str || str.constructor !== String) {
          return "";
        }
        return str.replace(/"/g, "'").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      };
      if (messages.length > 0) {
        output.push("<file name=\"" + filename + "\">");
        CSSLint.Util.forEach(messages, function (message) {
          if (message.rollup) {
            output.push("<issue severity=\"" + message.type + "\" reason=\"" + escapeSpecialCharacters(message.message) + "\" evidence=\"" + escapeSpecialCharacters(message.evidence) + "\"/>");
          } else {
            output.push("<issue line=\"" + message.line + "\" char=\"" + message.col + "\" severity=\"" + message.type + "\"" + " reason=\"" + escapeSpecialCharacters(message.message) + "\" evidence=\"" + escapeSpecialCharacters(message.evidence) + "\"/>");
          }
        });
        output.push("</file>");
      }
      return output.join("");
    }
  });

  /* globals JSON: true */

  CSSLint.addFormatter({
    // format information
    id: "json",
    name: "JSON",
    /**
     * Return content to be printed before all file results.
     * @return {String} to prepend before all results
     */
    startFormat: function () {
      "use strict";

      this.json = [];
      return "";
    },
    /**
     * Return content to be printed after all file results.
     * @return {String} to append after all results
     */
    endFormat: function () {
      "use strict";

      var ret = "";
      if (this.json.length > 0) {
        if (this.json.length === 1) {
          ret = JSON.stringify(this.json[0]);
        } else {
          ret = JSON.stringify(this.json);
        }
      }
      return ret;
    },
    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path (Unused)
     * @return {String} output for results
     */
    formatResults: function (results, filename, options) {
      "use strict";

      if (results.messages.length > 0 || !options.quiet) {
        this.json.push({
          filename: filename,
          messages: results.messages,
          stats: results.stats
        });
      }
      return "";
    }
  });
  CSSLint.addFormatter({
    // format information
    id: "junit-xml",
    name: "JUNIT XML format",
    /**
     * Return opening root XML tag.
     * @return {String} to prepend before all results
     */
    startFormat: function () {
      "use strict";

      return "<?xml version=\"1.0\" encoding=\"utf-8\"?><testsuites>";
    },
    /**
     * Return closing root XML tag.
     * @return {String} to append after all results
     */
    endFormat: function () {
      "use strict";

      return "</testsuites>";
    },
    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (UNUSED for now) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function (results, filename /*, options*/) {
      "use strict";

      var messages = results.messages,
        output = [],
        tests = {
          "error": 0,
          "failure": 0
        };

      /**
       * Generate a source string for a rule.
       * JUNIT source strings usually resemble Java class names e.g
       * net.csslint.SomeRuleName
       * @param {Object} rule
       * @return rule source as {String}
       */
      var generateSource = function (rule) {
        if (!rule || !("name" in rule)) {
          return "";
        }
        return "net.csslint." + rule.name.replace(/\s/g, "");
      };

      /**
       * Replace special characters before write to output.
       *
       * Rules:
       *  - single quotes is the escape sequence for double-quotes
       *  - &lt; is the escape sequence for <
       *  - &gt; is the escape sequence for >
       *
       * @param {String} message to escape
       * @return escaped message as {String}
       */
      var escapeSpecialCharacters = function (str) {
        if (!str || str.constructor !== String) {
          return "";
        }
        return str.replace(/"/g, "'").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      };
      if (messages.length > 0) {
        messages.forEach(function (message) {
          // since junit has no warning class
          // all issues as errors
          var type = message.type === "warning" ? "error" : message.type;

          // ignore rollups for now
          if (!message.rollup) {
            // build the test case separately, once joined
            // we'll add it to a custom array filtered by type
            output.push("<testcase time=\"0\" name=\"" + generateSource(message.rule) + "\">");
            output.push("<" + type + " message=\"" + escapeSpecialCharacters(message.message) + "\"><![CDATA[" + message.line + ":" + message.col + ":" + escapeSpecialCharacters(message.evidence) + "]]></" + type + ">");
            output.push("</testcase>");
            tests[type] += 1;
          }
        });
        output.unshift("<testsuite time=\"0\" tests=\"" + messages.length + "\" skipped=\"0\" errors=\"" + tests.error + "\" failures=\"" + tests.failure + "\" package=\"net.csslint\" name=\"" + filename + "\">");
        output.push("</testsuite>");
      }
      return output.join("");
    }
  });
  CSSLint.addFormatter({
    // format information
    id: "lint-xml",
    name: "Lint XML format",
    /**
     * Return opening root XML tag.
     * @return {String} to prepend before all results
     */
    startFormat: function () {
      "use strict";

      return "<?xml version=\"1.0\" encoding=\"utf-8\"?><lint>";
    },
    /**
     * Return closing root XML tag.
     * @return {String} to append after all results
     */
    endFormat: function () {
      "use strict";

      return "</lint>";
    },
    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (UNUSED for now) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function (results, filename /*, options*/) {
      "use strict";

      var messages = results.messages,
        output = [];

      /**
       * Replace special characters before write to output.
       *
       * Rules:
       *  - single quotes is the escape sequence for double-quotes
       *  - &amp; is the escape sequence for &
       *  - &lt; is the escape sequence for <
       *  - &gt; is the escape sequence for >
       *
       * @param {String} message to escape
       * @return escaped message as {String}
       */
      var escapeSpecialCharacters = function (str) {
        if (!str || str.constructor !== String) {
          return "";
        }
        return str.replace(/"/g, "'").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      };
      if (messages.length > 0) {
        output.push("<file name=\"" + filename + "\">");
        CSSLint.Util.forEach(messages, function (message) {
          if (message.rollup) {
            output.push("<issue severity=\"" + message.type + "\" reason=\"" + escapeSpecialCharacters(message.message) + "\" evidence=\"" + escapeSpecialCharacters(message.evidence) + "\"/>");
          } else {
            var rule = "";
            if (message.rule && message.rule.id) {
              rule = "rule=\"" + escapeSpecialCharacters(message.rule.id) + "\" ";
            }
            output.push("<issue " + rule + "line=\"" + message.line + "\" char=\"" + message.col + "\" severity=\"" + message.type + "\"" + " reason=\"" + escapeSpecialCharacters(message.message) + "\" evidence=\"" + escapeSpecialCharacters(message.evidence) + "\"/>");
          }
        });
        output.push("</file>");
      }
      return output.join("");
    }
  });
  CSSLint.addFormatter({
    // format information
    id: "text",
    name: "Plain Text",
    /**
     * Return content to be printed before all file results.
     * @return {String} to prepend before all results
     */
    startFormat: function () {
      "use strict";

      return "";
    },
    /**
     * Return content to be printed after all file results.
     * @return {String} to append after all results
     */
    endFormat: function () {
      "use strict";

      return "";
    },
    /**
     * Given CSS Lint results for a file, return output for this format.
     * @param results {Object} with error and warning messages
     * @param filename {String} relative file path
     * @param options {Object} (Optional) specifies special handling of output
     * @return {String} output for results
     */
    formatResults: function (results, filename, options) {
      "use strict";

      var messages = results.messages,
        output = "";
      options = options || {};
      if (messages.length === 0) {
        return options.quiet ? "" : "\n\ncsslint: No errors in " + filename + ".";
      }
      output = "\n\ncsslint: There ";
      if (messages.length === 1) {
        output += "is 1 problem";
      } else {
        output += "are " + messages.length + " problems";
      }
      output += " in " + filename + ".";
      var pos = filename.lastIndexOf("/"),
        shortFilename = filename;
      if (pos === -1) {
        pos = filename.lastIndexOf("\\");
      }
      if (pos > -1) {
        shortFilename = filename.substring(pos + 1);
      }
      CSSLint.Util.forEach(messages, function (message, i) {
        output = output + "\n\n" + shortFilename;
        if (message.rollup) {
          output += "\n" + (i + 1) + ": " + message.type;
          output += "\n" + message.message;
        } else {
          output += "\n" + (i + 1) + ": " + message.type + " at line " + message.line + ", col " + message.col;
          output += "\n" + message.message;
          output += "\n" + message.evidence;
        }
      });
      return output;
    }
  });
  return CSSLint;
}();

/***/ }),

/***/ "./src/blocks/home--1/main.css":
/*!*************************************!*\
  !*** ./src/blocks/home--1/main.css ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/home--1/block.json":
/*!***************************************!*\
  !*** ./src/blocks/home--1/block.json ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ms-block-demo/home--1","title":"AA Home Page","category":"text","icon":"star-filled","description":"Adds a header with a hover effect","keywords":["header","underline","hover"],"version":"1","textdomain":"ms-block-demo","editorScript":"file:./index.js","attributes":{"content":{"type":"string"},"underline_color":{"type":"string","default":"#f87171"}},"style":"file:./index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************************!*\
  !*** ./src/blocks/home--1/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/home--1/block.json");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons */ "./src/icons.js");
/* harmony import */ var _home_1_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home--1.jsx */ "./src/blocks/home--1/home--1.jsx");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main.css */ "./src/blocks/home--1/main.css");








 // This only works because WebPack is running. ( NPM RUN START )

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: _icons__WEBPACK_IMPORTED_MODULE_6__["default"].primary,
  edit({
    attributes,
    setAttributes
  }) {
    const {
      content,
      underline_color
    } = attributes;
    const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
    //  console.log(blockProps)

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_home_1_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("script", null, "LoadLatestNews();"));
  },
  save({
    attributes
  }) {
    const {
      content,
      underline_color
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: 'home--1',
      style: {
        'background-image': `
                    linear-gradient(transparent, transparent), linear-gradient(${underline_color}, ${underline_color});
                    `
      }
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_home_1_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  }
});
function soop2() {
  console.log("You're in the Sup");
}
/* harmony default export */ __webpack_exports__["default"] = (soop2);
}();
/******/ })()
;
//# sourceMappingURL=index.js.map
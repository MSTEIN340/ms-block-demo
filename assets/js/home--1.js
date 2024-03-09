// import { multidimensionalArray } from './fat-nav-data.js'

let mdA = {
    "WORDPRESS": ["1198","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "THEMES": ["1185","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "PLUGINS": ["1183","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "ARCHANGEL 2023": ["1808","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "DATASET-V2": ["1036","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "TONTO-SMS": ["1187","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "EYE-P": ["1811","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "MS-BLOCK-DEMO": ["1813","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "WIDGETS": ["1181","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "CUSTOM BLOCKS": ["1179","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "WOOCOMMERCE": ["1815","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "MULTI-SITE": ["1787","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "BUDDYPRESS": ["1778","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "WEB DEVELOPMENT": ["1817","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "WEB SITES": ["1819","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "WEB APPLICATIONS": ["1782","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "MOBILE": ["1822","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "E-COMMERCE": ["1774","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "API": ["1780","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "BACK END AUTOMATION": ["1789","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "ERPENTERPRISE": ["1785","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "ACCOUNTING": ["1824","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "CUSTOMER MANAGEMENT": ["1826","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "SALES": ["1828","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "PURCHASING": ["1830","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "INVENTORY": ["1832","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "BOM": ["1834","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "SALES TAX": ["1836","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "BUSINESS INTEL": ["1795","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "POWER BI": ["1838","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "EXCEL": ["1841","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "SQL/MONGO": ["1843","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "INCOME/EXPENSES": ["1845","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "KPI ANALYSIS": ["1847","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "HOSTING": ["1849","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "WEB HOSTING": ["1851","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "MINECRAFT": ["1853","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ]
};


//console.log("load")
let scrollpos = window.scrollY

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;
 //   console.log("scrollY= " + scrollpos)
    if (scrollpos > 0) {
        if((document.getElementById("stack1xy").classList.contains("fade-in"))) {
            document.getElementById("stack1xy").classList.remove("fade-in");           //alert("what the heck2");
        }
        if(!(document.getElementById("stack1xy").classList.contains("boom2"))) {
            document.getElementById("stack1xy").classList.add("boom2"); }

    }else {
        if(!(document.getElementById("stack1xy").classList.contains("fade-in")))
            document.getElementById("stack1xy").classList.add("fade-in");

       if((document.getElementById("stack1xy").classList.contains("boom2")))
            document.getElementById("stack1xy").classList.remove("boom2");
    }
})

function soop2()
{
   // console.log("You're in the Sup");
}


function ms_handleScroll(event)
{
 //   console.log('Scrolled!', event)
    const { scrollTop, scrollLeft } = event.target;
 //   console.log('Scroll position:', { scrollTop, scrollLeft });


    if (scrollTop > 20) {
        if((document.getElementById("stack1xy").classList.contains("fade-in"))) {
            document.getElementById("stack1xy").classList.remove("fade-in");           //alert("what the heck2");
        }
        if(!(document.getElementById("stack1xy").classList.contains("boom"))) {
            document.getElementById("stack1xy").classList.add("boom"); }
    }else {
        if(!(document.getElementById("stack1xy").classList.contains("fade-in")))
            document.getElementById("stack1xy").classList.add("fade-in");

        if((document.getElementById("stack1xy").classList.contains("boom")))
            document.getElementById("stack1xy").classList.remove("boom");
    }
}

function aa_handleScroll(event)
{
 //   console.log('Scrolled!', event)
    const { scrollTop, scrollLeft } = event.target;
    // console.log('Scroll position:', { scrollTop, scrollLeft });
    const scrollMeDiv = document.getElementById("scrollMe");
    var footer = document.getElementById('footer1');
    var rect = footer.getBoundingClientRect();
    // console.log("rBottom:" + rect.bottom , "iHeight:" + (document.body.scrollHeight) );
    if (rect.bottom <= document.body.scrollHeight) {
        // Bottom of footer is in view, prevent further scrolling
        scrollMeDiv.scrollTo(0, scrollTop - (document.body.scrollHeight - rect.bottom));

    }

    if (scrollTop > 20) {
        if((document.getElementById("stack1xy").classList.contains("fade-in"))) {
            document.getElementById("stack1xy").classList.remove("fade-in");           //alert("what the heck2");
        }
        if(!(document.getElementById("stack1xy").classList.contains("boom2"))) {
            document.getElementById("stack1xy").classList.add("boom2"); }
    }else {
        if(!(document.getElementById("stack1xy").classList.contains("fade-in")))
            document.getElementById("stack1xy").classList.add("fade-in");

        if((document.getElementById("stack1xy").classList.contains("boom2")))
            document.getElementById("stack1xy").classList.remove("boom2");
    }
}

function stopscroll() {
    var block = document.querySelector(".scrollMe");
    if (block) {
      //  document.body.style.overflowY = 'hidden';
    }
}

function ms_mouseMove(event)
{
    let sxr = (1700/1950) * window.innerWidth;
    let syr = (500/970) * window.innerHeight;

//    console.log('Mouse Moved!', event)
    let mouse = new Array();
    let arm = document.getElementById("arm");
 //   console.log(arm);
    let clientx = event.clientX;
    let clienty = event.clientY;
    mouse.x = event.pageX - clientx;
    mouse.y = event.pageY - clienty;


    let angie = calculate360DegreeAngle( sxr, syr, clientx, clienty);
    arm.style.transform = 'rotate(' + angie + 'deg)';
   // console.log("angie=",angie);

    return mouse;



/*
    if (scrollTop > 20) {
        if((document.getElementById("stack1xy").classList.contains("fade-in"))) {
            document.getElementById("stack1xy").classList.remove("fade-in");           //alert("what the heck2");
        }
        if(!(document.getElementById("stack1xy").classList.contains("boom"))) {
            document.getElementById("stack1xy").classList.add("boom"); }
    }else {
        if(!(document.getElementById("stack1xy").classList.contains("fade-in")))
            document.getElementById("stack1xy").classList.add("fade-in");

        if((document.getElementById("stack1xy").classList.contains("boom")))
            document.getElementById("stack1xy").classList.remove("boom");
    }

 */
}

function calculateAngleFromHorizon(x1, y1, x2, y2) {
    // Calculate the differences in x and y coordinates
    var deltaX = x2 - x1;
    var deltaY = y2 - y1;

    // Calculate the angle in radians
    var angleRadians = Math.atan2(deltaY, deltaX);

    // Convert the angle to degrees
    var angleDegrees = angleRadians * (180 / Math.PI);

    // Adjust the angle to be measured from the horizon
    var angleFromHorizon = angleDegrees - 90;

    return angleDegrees;
}

function calculate360DegreeAngle(x1, y1, x2, y2) {
    // Calculate the differences in x and y coordinates
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;

    // Calculate the angle in radians
    let angleRadians = Math.atan2(deltaY, deltaX);

    // Convert the angle to degrees
    let angleDegrees = angleRadians * (180 / Math.PI);

    // Adjust the angle to a 0-360 range with 0 degrees at the top
    let angleFromTop = (angleDegrees + 144) % 360;
    if (angleFromTop < 0) {
        angleFromTop += 360;
    }
    return angleFromTop;
}

function toggleMenu() {
 //   console.log("Toggle Menu");
    if (document.getElementById("msmenu").classList.contains("active")) {
        document.getElementById("msmenu").classList.remove("active");
    }else if((!document.getElementById("msmenu").classList.contains("active"))){
        document.getElementById("msmenu").classList.add("active");
    }
    if (document.getElementById("vMenu").classList.contains("vMenu")) {
        document.getElementById("vMenu").classList.remove("vMenu");
    }else if((!document.getElementById("vMenu").classList.contains("vMenu"))){
        document.getElementById("vMenu").classList.add("vMenu");
    }
}
function ShowTitle(f)
{
  //  console.log(window.innerHeight)
    let five = ["cv", "wd", "db", "bi", "erp"];
    // swap out visible / invisible classes.
    for (let i = 0; i < 5; i++) {
        if (document.getElementById(five[i]).classList.contains("visible")) {
         //   console.log("contains Visible")
            document.getElementById(five[i]).classList.remove("visible");
        }
        if((!document.getElementById(five[i]).classList.contains("invisible"))){
            document.getElementById(five[i]).classList.add("invisible");
        }
    }

    if (document.getElementById(f).classList.contains("invisible")) {
       // console.log(f + " contains Invisible")
        document.getElementById(f).classList.remove("invisible");
    }
    document.getElementById(f).classList.add("visible");

    if( f==='wd' ) {
      setMyPostBox(1730);
    }
    if( f==='db' ) {
        setMyPostBox(1733);
    }
    if( f==='bi' ) {
        setMyPostBox(1737);
    }
    if( f==='erp' ) {
        setMyPostBox(1763);
    }
}

function setMyPostBox(post) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', myBlockData.ajax_url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    xhr.onload = function() {
        if (this.status >= 200 && this.status < 400) {

            let response = JSON.parse(this.response);
            let htmlContent = response.data;

            let myPostBox = document.getElementById('my-post-box');
         //   console.log("setMyPostBox");
            if (myPostBox) {
                myPostBox.innerHTML = htmlContent; // Assuming response is the HTML content you want to insert
              //  console.log("content",htmlContent);
            }
        } else {
            console.error("Server reached, but it returned an error");
        }
    };

    // Handling errors
    xhr.onerror = function() {
        // There was a connection error of some sort
        console.error("Failed to send request");
    };
    // Sending the request
    xhr.send('action=get_post_details2_ajax&nonce=' + myBlockData.nonce + '&post=' + post );
}

function invisAllTitles(f) {
    let five = ["cv", "wd", "db", "bi", "erp"];
    for (let i = 0; i < 5; i++) {
        if (document.getElementById(five[0]).classList.contains("visible") ) {
            console.log("contains Visible")
            document.getElementById(f).classList.remove("visible");
        }
    }
    if (document.getElementById(f).classList.contains("invisible")) {
        console.log(f + " contains Invisible")
        document.getElementById(f).classList.remove("invisible");
    }
    document.getElementById(f).classList.add("visible");
}

window.onload = function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {



            console.log(data.ip);
        })
        .catch(error => {
            console.error('Error fetching IP:', error);
            document.getElementById('ip-address').textContent = 'Unavailable';
        });
};

function initMap() {
    var geocoder = new google.maps.Geocoder();
    var address = "Smithtown NY 11787";

    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status == 'OK') {
            var mapOptions = {
                zoom: 8,
                center: results[0].geometry.location
            };
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function setOgImage(imageUrl){
    let ogImageMetaTag = document.getElementById('ogImage');
    ogImageMetaTag.setAttribute('content', imageUrl);
}


/*
function setMe2(event, x){
    x.trim()
    const sliceMe = contents(x);
    console.log("x=",x);
    let z = document.getElementById("mRight");
    z.innerHTML = "<span class='mImg' ><img src=\"https://www.archangel-media.com/wp-content/uploads/2023/12/Eye-P-small.png\"  alt=\"test image\"/><span id=\'Content\' >Some text about this picture</span></span>";
}
*/

function setMe2(event, x) {
    x = x.trim();

    if (mdA[x].length === 5) {
        let z = document.getElementById("mRight");
     z.innerHTML = `
  <div class="content-wrapper">
    <div class="image-container">
      <img src="${mdA[x][1]}" alt="${mdA[x][2]}"/>
      <div class="overlayFM">
        <h1 class='setMeH'>${mdA[x][2]}</h1>
      </div>
    </div>
    <div class="text-block">${unescapeHTML(mdA[x][4])}</div>
  </div>`;

    }
}

function unescapeHTML(escapedHTML) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = escapedHTML;
    return tempDiv.textContent || tempDiv.innerText || "";
}
function removeEnclosingQuotes(text) {
    if (text.startsWith("\"") && text.endsWith("\"")) {
        return text.substring(1, text.length - 1);
    }
    return text;
}


function contents(x) {
    /*
    //Test Code to check speed of a post load vs. Array
        fetchPostById(1798) // Replace 123 with the actual post ID
        .then(data => {
            console.log('Post:', data.post);
            console.log('Featured Image URL:', data.featuredImageUrl);
        })
        .catch(error => console.error(error));
        NOTE RESULTS OF THIS TEST PROMPTED PRELOADING AND SAVING MENU CONTENTS WITH THE TEMPLATE.
*/



    const foundItem = multidimensionalArray.find(item => item[0] === x);

    return foundItem ? foundItem.slice(1) : [];
}

function loadMouseOver() {
    loadFatNavArray();
    let i = 0;
    let navItems = document.querySelectorAll('#navMenu li');
    navItems.forEach(function(item) {
            i = i +1;
            item.addEventListener('mouseover', function() {
                });
        }

    )
}
function loadFatNavArray() {
    const dataArrayElements = document.querySelectorAll('.saved-array-data');
    dataArrayElements.forEach(element => {
       // const dataArray = JSON.parse(element.textContent);
        multidimensionalArray = mdA = JSON.parse(element.textContent);

        // dataArray now holds the original multidimensional array
        // Implement your logic using dataArray
    });
}









/*
1) Menu Item
2) Post ID
2) Image Name and path
3) Title
4) link to page.
5) Content.
*/
let multidimensionalArray = {
    "WORDPRESS": ["1798","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "THEMES": ["1185","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ], // there are 3 of these
    "PLUGINS": ["1772","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ], // Needs Refresh
    "ARCHANGEL 2023": ["1808","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "DATASET-V2": ["1036","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
    "TONTO-SMS": ["1201","IMAGE_PATH", "TITLE", "POST_URL","CONTENT" ],
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

function updateArray() {
    console.log("I am updating the array contents from posts.");
    console.log("mda",multidimensionalArray);
    const arr = Array.from(multidimensionalArray);
    let firstSubElements = [];
    for (let key in multidimensionalArray ) {
        if (multidimensionalArray .hasOwnProperty(key)) {
            firstSubElements.push(multidimensionalArray [key][0]);
            setContentValue(multidimensionalArray, key, multidimensionalArray [key][0])
        }
    }
    console.log(firstSubElements);
}

function elementUpdatex(item, index, arr){
    console.log("Item = ", item);
}

function setContentValue(array, referenceValue, POST_ID) {
    fetchPostById(POST_ID).then((UID)=> {
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
    if (1) {
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

        if (post.featured_media) { // Check if there's a featured image
            const mediaUrl = `${domain}/wp-json/wp/v2/media/${post.featured_media}`;
            const mediaResponse = await fetch(mediaUrl);
            if (!mediaResponse.ok) {
                throw new Error(`HTTP error! Status: ${mediaResponse.status}`);
            }
            const media = await mediaResponse.json();
            return { post, featuredImageUrl: media.source_url };
        }

        return { post, featuredImageUrl: null };
    } catch (error) {
        console.error('Error fetching post:', error);
    }
}


export { multidimensionalArray };
export { updateArray };

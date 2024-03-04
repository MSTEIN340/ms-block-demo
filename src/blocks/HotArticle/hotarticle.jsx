import { Component } from 'react';
import {RawHTML} from "@wordpress/element";



// this class operates as the main class that operates the application.

class HotArticle extends Component {
    /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */


    scrollMeDiv= null;

    constructor(props) {
        super(props);
        this.state = {
            title: props.attributes.title,
            postID: props.postID,
            author: props.attributes.author,
            date: this.formatDateToLongForm(props.attributes.date),
            borderColor: props.attributes.borderColor,
            textColor: props.attributes.textColor,
            backgroundColor: props.attributes.backgroundColor,
            link: props.attributes.link,
            opacity: props.attributes.opacity,
        }
    }
    convertHexToRGBA(hex, opacity) {
        let r = 0, g = 0, b = 0;
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    componentDidMount() {

        console.log("Did Mount");
    }
    componentWillUnmount() {
        // Get the div element from the ref
    }

     formatDateToLongForm(originalDate) {
        const dateObject = new Date(originalDate);

        // Formatting to 'February 13, 2024' format
        const formattedDate = dateObject.toLocaleDateString('en-US', {
            year: 'numeric', // numeric, 2-digit
            month: 'long', // numeric, 2-digit, long, short, narrow
            day: 'numeric', // numeric, 2-digit
        });
        return formattedDate;
    }
    render() {
        const style = {
            color: this.state.textColor,
            backgroundColor: this.convertHexToRGBA(this.state.backgroundColor, this.state.opacity),
            position: 'relative',
            border: `1px solid ${this.state.borderColor}`, // apply border color
            textAlign: 'center',

        };
        console.log("Render barticle");
        return (
            <div className="single-post">
                {
                    featuredImage &&
                    <a className="single-post-image" href={post.link}>
                        <img src={
                            featuredImage.media_details.sizes.thumbnail.source_url
                        } alt={featuredImage.alt_text}/>
                    </a>
                }

                <div className="single-post-detail">
                    <a href={post.link}><RawHTML>{post.title.rendered}</RawHTML></a>
                    <span>
                                by <a href={post.link}>{post._embedded.author[0].name}</a>
                            </span>
                </div>
            </div>
        )
    }
}

export default HotArticle;





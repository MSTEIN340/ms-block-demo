import { Component } from 'react';



// this class operates as the main class that operates the application.

class BArticle extends Component {
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
            <div className="barticle-link-div" data-link={this.state.link}>
                <div style={style} className={"clearfix barticle-div"}>
                    <div style={{width: "100%"}}>
                        {this.state.title}
                    </div>
                    <div className="author w50">
                        {"by "+this.state.author}
                    </div>
                    <div className="author w50">
                        {this.state.date}
                    </div>
                </div>
            </div>
        )
    }
}

export default BArticle;





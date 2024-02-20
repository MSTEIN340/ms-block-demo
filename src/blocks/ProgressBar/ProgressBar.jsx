import { Component } from 'react';
// this class operates as the main class that operates the application.

class ProgressBar extends Component {
    /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */

    scrollMeDiv= null;

    constructor(props) {
        super(props);
        this.state = {
            range: props.attributes.range,
            id: props.id,
            borderColor: props.attributes.borderColor,
            progressColor: props.attributes.progressColor,
            collapsed: props.attributes.collapsed,
        }
    }

    componentDidMount() {
        console.log("Did Mount");
    }
    componentWillUnmount() {
        // Get the div element from the ref
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

    render() {
        console.log("Render ProgressBar");
        return (
            <>
                <div className="progress-container">
                    <div className="progress-bar" id="progress-bar"
                         style={{width: `${this.state.range}%`, backgroundColor: this.state.progressColor}}>
                        <div className="progress-label" id="progress-label">{this.state.range}%</div>
                    </div>

                </div>

            </>

        )
    }
}

export default ProgressBar;





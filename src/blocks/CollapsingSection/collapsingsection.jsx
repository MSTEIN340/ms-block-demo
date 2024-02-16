import { Component } from 'react';
// this class operates as the main class that operates the application.

class CollapsingSection extends Component {
    /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */

    scrollMeDiv= null;

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            id: props.id,
            borderColor: props.attributes.borderColor,
            textColor: props.attributes.textColor,
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
        console.log("Render CollapsingSection");
        return (
            <div className="CS-section">
                <div className={"CS-title"} style={{backgroundColor: this.state.borderColor, color: this.state.textColor, border: `1px solid ${this.state.borderColor}`,
                }}>
                    {this.state.title}
                    <span id={"CS-button"+this.state.id} className={"CS-button"}>
                            <img id={"CS-btnimg"+this.state.id}
                                 className={"CS-btnimg"}
                                 src={"https://www.MichaelAStein.com/wp-content/plugins/ms-block-demo/src/blocks/CollapsingSection/images/down.png"}
                                 alt={"down"}/>
                        </span>
                </div>
                <div id={"CS-contents"+this.state.id} className={"CS-contents"} style={{backgroundColor: this.convertHexToRGBA(this.state.borderColor, .3), color: this.state.textColor, border: `1px solid ${this.state.borderColor}`}}>
                    {this.props.children}
                </div>

            </div>
        )
    }
}

export default CollapsingSection;





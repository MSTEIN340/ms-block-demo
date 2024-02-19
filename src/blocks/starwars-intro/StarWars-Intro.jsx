import { Component } from 'react';



// this class operates as the main class that operates the application.

class StarWars_Intro extends Component {
    /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
    state = {

    };

    scrollMeDiv= null;

    constructor(props) {
        super(props);
        this.state.itemno = this.props.itemno;
        this.state.partno = this.props.partno;
        this.state.box = 0;
        // Initialize scrollMeDiv as a class property
        this.scrollMeRef = React.createRef();
    }

    componentDidMount() {
        // Add the animation end event listener
        const contentDiv = document.getElementById('content');
        if (contentDiv) {
            console.log("Event Listener Added")
            contentDiv.addEventListener('animationend', this.handleAnimationEnd);
        }
        console.log("StarWars-Intro Did Mount");
    }
    handleAnimationEnd = () => {
        console.log('Animation ended!');

        // Call the function you want to fire after the animation ends
        this.afterAnimation();
    }

    afterAnimation() {
        console.log('This function is called after the animation ends.');
        // You can execute any logic here or call another function
    }

    componentWillUnmount() {
        // Get the div element from the ref

        // Remove the animation end event listener
        const contentDiv = document.getElementById('content');
        if (contentDiv) {
            contentDiv.removeEventListener('animationend', this.handleAnimationEnd);
        }
    }



    inc(){
        let i = this.state.box;
        i++;
        this.setState({box: i})
    }
    render() {
        console.log("Render Star Wars Intro");
        return (
            <>
                <script>
                    document.addEventListener("DOMContentLoaded", animationend_listener);
                </script>
                <div id={"IntroBackground"}>
                    <div className={"intro-start"}>
                        Start
                    </div>
                    <div className={"intro-stop"}>
                        Stop
                    </div>
                    <section className="intro"><br/><br/>
                        A long time ago, in a Parallax far,<br/> far away....
                    </section>
                    <div id="board">
                        <div id="content">
                            <p id="title">Episode I</p>
                            <p id="subtitle">A NEW HOME</p>

                            <p>Highly skilled full stack software developer with extensive backend and data management
                                experience. Over 35 years of experience in developing scalable, high-performance web
                                applications. Proficient in a wide range of technologies, with a proven track record of
                                delivering projects on time and within budget. Strong background in designing,
                                developing, and maintaining complex systems and applications, with expertise in
                                front-end and back-end development. Highly skilled in problem-solving and critical
                                thinking, with a passion for creating user-friendly and efficient software. Excellent
                                communication and collaboration skills, with experience working in cross-functional
                                teams and managing stakeholders.</p>


                        </div>
                    </div>
                    <div id={"droids"} className={"div_droids D-container"}>

                        <div className="D-image">
                            <img className={"droids"}
                                 src="https://www.MichaelAStein.com/wp-content/plugins/ms-block-demo/src/blocks/ms-hongkong/img/droids2.jpg"
                                 alt="Obi Wan"/>
                        </div>
                        <div className="D-text">
                            <p> This IS the developer you're looking for.</p>
                        </div>
                    </div>

                </div>

            </>
        )
    }
}


export default StarWars_Intro;





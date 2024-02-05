import { Component } from 'react';

// this class operates as the main class that operates the application.

class Home1a extends Component {
    /* add constructor, add componentdidmount, add state, call AjaxMe from component did mount, and set state to re-render */
    state = {
        name: "Item Not Found",
        display: "0",
        um: "EA",
        itemno: "PART",
        partno: "ITEM",
        VENDOR: "",
        BIN: "",
        ONHANDONORDER: 0,
        AVAILTOUSE: 0,
        PART: "",
        NUMBER: 0,
        DESCRIPTION: "",
        input: "",
        lastInput: "",
        confirm: 0,
        user: "Michael"
    }

    constructor(props) {
        super(props);
        this.state.itemno = this.props.itemno;
        this.state.partno = this.props.partno;
    }

    componentDidMount() {

    }

    render() {
        console.log("Render Home1");
        const dinput = (input) => {
            if (input === '=') {
                this.setState({confirm: this.state.confirm + 1});
            }else{
                if (this.state.confirm > 0) this.setState({confirm: 0});
            }
            console.log("Confirm = " + this.state.confirm);
            this.state.lastInput = input;
            this.setState({input: input})
        }
        const cancel = ()=>{ this.setState({confirm: 0})}
        const confirm = ()=>{ this.setState({confirm: (-99)})}
        var d = new Date();
        var NoTimeDate = (d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear();

        return (
            <>
                <header className="aa_header-outer">
                    <div className="aa_header-inner">
                        <div className="fade-in aa_font1"  id="stack1xy" >
                            <div className={"center"}>ARCHANGEL MEDIA DEVELOPMENT</div><axe ref={"#"}><div className={"center aa_font2"}> HOME</div> </axe>
                        </div>
                    </div>
                </header>
                <div className="image-stack">

                    <div className="image-background">
                        <img className={"bki"} src={"http://localhost/TestTheme/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/usa-land-of-the-free-susan-candelario.jpg"} alt={"bk1"} />
                    </div>


                    <wid className="freedom">
                        <span className={"aa_font3"}>FREEDOM LIMITED <span className={"aa_yellow"}>ONLY</span></span><br/>
                        <span className={"aa_font4"}>By your <span className={"aa_yellow"}> Imagination!</span></span><br/>
                    </wid>
                    <span className="btn2 freedom-btn1">GET STARTED TODAY</span>
                    <span className="btn2 freedom-btn2">LEARN MORE</span>
                    <span className="btn2 freedom-btn3">Democratize Publishing <span
                        className="dashicons dashicons-wordpress"></span> Wordpress.Org</span>
                    <div className={"forward"}>
                        <span className={"span-c"}>
                            <span className={"span-d container-fluid"}>
                            <span className={"col-a"}>
                                <table className={"c1"}>
                                    <tr>
                                        <td>
                                            <span className="icon-h  icon-hc1">
                                                 <svg className={"icon-h1"} fill="#fff" version="1.1" xmlns="http://www.w3.org/2000/svg"  id="imagex" viewBox="0 0 1920 1896.0833"><path d="M640 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448H256v-192l320-320 160 160 512-512zm96-704H160q-13 0-22.5 9.5T128 288v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5V288q0-13-9.5-22.5T1760 256zm160 32v1216q0 66-47 113t-113 47H160q-66 0-113-47T0 1504V288q0-66 47-113t113-47h1600q66 0 113 47t47 113z"></path></svg>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={"aa_font5"}>Themes</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="aa_font6">A Custom WordPress theme or a custom WooCommerce theme (if you have an online store), will be distinct from those of your competitors, since it has its own unique design that showcases your business, and that contributes to better brand recognition, customer engagement, and, consequently, better sales.</p>
                                        </td>
                                    </tr>
                                </table>
                            </span>
                            <span className={"col-a"}>
                                <table className={"c1"}>
                                    <tr>
                                        <td>
                                            <span  className="icon-h icon-hc2">
                                                <svg className={"icon-h1"} fill="#fff"  version="1.1" xmlns="http://www.w3.org/2000/svg" id="cogs" viewBox="0 0 1920 1896.0833"><path d="M896 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5T1536 512t90.5-37.5T1664 384zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5T999 1423q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24H547q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5T0 987V802q0-10 7-19.5T23 772l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31V314q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z"></path></svg>
                                            </span>
                                       </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={"aa_font5"}>Widgets</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="aa_font6">WordPress Widgets are blocks of code — static, dynamic, or a combination of both — which can be added to any specific area of your WordPress site. There are many built-in widgets in WordPress — such as tag cloud and categories — but Archangel Media produces a host of specialize widgets designed to deliver dynamic user experiences.</p>
                                        </td>
                                    </tr>
                                </table>
                            </span>

                            <span className="col-a">
                                <table className="c1">
                                    <tr>
                                        <td>
                                            <span className="icon-h  icon-hc3" >
                                                <svg className={"icon-h1"} fill="#fff"  version="1.1" xmlns="http://www.w3.org/2000/svg"  id="plug" viewBox="0 0 1792 1896.0833"><path d="M1755 453q37 38 37 90.5t-37 90.5l-401 400 150 150-160 160q-163 163-389.5 186.5T543 1430l-362 362H0v-181l362-362q-124-185-100.5-411.5T448 448l160-160 150 150 400-401q38-37 91-37t90 37 37 90.5-37 90.5L939 619l234 234 401-400q38-37 91-37t90 37z"></path></svg>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={"aa_font5"}>Plugins</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="aa_font6">A plugin is a software add-on that is installed on a program, enhancing its capabilities. Archangel is in the business of making powerful utilities in simple plugin packages. The real power behind our whole suite of products is the PDO-DataSet plugin, which forms the basis for all of our products to communicate seemlessly with one another.</p>
                                        </td>
                                    </tr>
                                </table>
                            </span>
                            <span className={"col-a"}>
                                <table className={"c1"}>
                                    <tr>
                                        <td>
                                            <span className="icon-h  icon-hc4">
                                                <svg className={"icon-h1"} fill="#fff"  version="1.1" xmlns="http://www.w3.org/2000/svg"  id="users" viewBox="0 0 1920 1896.0833"><path d="M593 896q-162 5-265 128H194q-82 0-138-40.5T0 865q0-353 124-353 6 0 43.5 21t97.5 42.5T384 597q67 0 133-23-5 37-5 66 0 139 81 256zm1071 637q0 120-73 189.5t-194 69.5H523q-121 0-194-69.5T256 1533q0-53 3.5-103.5t14-109T300 1212t43-97.5 62-81 85.5-53.5T602 960q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zM640 256q0 106-75 181t-181 75-181-75-75-181 75-181T384 0t181 75 75 181zm704 384q0 159-112.5 271.5T960 1024 688.5 911.5 576 640t112.5-271.5T960 256t271.5 112.5T1344 640zm576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zm-128-609q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z"></path></svg>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className={"aa_font5"}>More !</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="aa_font6">The cutting edge does not leave the road with WordPress. Our team are experts at applications for desktops and apps for Android and Apple. We have a collection of secure communications tools that keep your conversations private. That’s hard to say these days, when everyone is listeining in on all your favorite chat apps.  Just say no to invasion of privacy.</p>
                                        </td>
                                    </tr>
                                </table>
                            </span>
                                </span>
                        </span>
                    </div>

                    <div className="image-stack__item image-stack__item--top2">
                        <img src={"http://localhost/TestTheme/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/top-float3.png"} alt={"bk1"} />
                    </div>
                    <bee className={"coverall"}>
                    </bee>
                        <div className="image-stack__item image-stack__item--top">
                            <img src="http://localhost/testtheme/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/programmin.jpg" alt="some text" />
                        </div>
                        <div className="image-stack__item image-stack__item--bottom">
                            <img src="http://localhost/testtheme/wp-content/plugins/ms-block-demo/src/blocks/home--1/img/Custom-Software-Development.png" alt="some tex2t" />
                        </div>

                </div>
            </>
        )
    }
}

function storage() {
    <div className="container-ms">
        <div className="padButton padButton--7" onClick={()=>{ dinput("7")}}>7</div>
        <div className="padButton padButton--8" onClick={()=>{ dinput("8")}}>8</div>
        <div className="padButton padButton--9" onClick={()=>{ dinput("9")}}>9</div>
        <div className="padButton padButton--4" onClick={()=>{ dinput("4")}}>4</div>
        <div className="padButton padButton--5" onClick={()=>{ dinput("5")}}>5</div>
        <div className="padButton padButton--6" onClick={()=>{ dinput("6")}}>6</div>
        <div className="padButton padButton--1" onClick={()=>{ dinput("1")}}>1</div>
        <div className="padButton padButton--2" onClick={()=>{ dinput("2")}}>2</div>
        <div className="padButton padButton--3" onClick={()=>{ dinput("3")}}>3</div>
        <div className="padButton padButton--0" onClick={()=>{ dinput("0")}}>0</div>
        <div className="padButton padButton--per" onClick={()=>{ dinput(".")}}>.</div>
        <div className="padButton padButton--bksp" onClick={()=>{ dinput("<")}}>{"<<"}</div>
        <div className="padButton padButton--clear" onClick={()=>{ dinput("C")}}>{"C"}</div>
        <div className="padButton padButton--plus" onClick={()=>{ dinput("+")}}>{"+"}</div>
        <div className="padButton padButton--minus" onClick={()=>{ dinput("-")}}>{"-"}</div>
    </div>
}
export default Home1a;






import {registerBlockType} from '@wordpress/blocks'
import block from './block.json'
import icons from '../../icons'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )
import {InnerBlocks} from "@wordpress/block-editor";

registerBlockType(block.name, {
    icon: icons.Wings,
    edit({attributes, setAttributes}) {
// Fragment
        return (
            <>
                <header className="topper-outer">
                    <div className="topper-inner fade-in" id="stack1xy">
                        <img
                            className={"hMichaelb"}
                            src={"https://www.MichaelAStein.com/wp-content/uploads/2023/10/cropped-favicon2-150x150.png"}
                            alt={"Favicon"}/>

                        <a className={"hMichael2b"} href={"https://www.MichaelAStein.com/"}>
                            <div className={"ce2 aa_font1ms"}>Michael A. Stein </div>
                        </a>
                        <span className={"aa_font2 w50b"}><InnerBlocks/></span>
                    </div>
                </header>
            </>
        )
    },
    save({attributes}) {
        return (
            <>
                <header className="topper-outer">
                    <div className="topper-inner fade-in" id="stack1xy">
                        <img
                            className={"hMichaelb"}
                            src={"https://www.MichaelAStein.com/wp-content/uploads/2023/10/cropped-favicon2-150x150.png"}
                            alt={"Favicon"}/>
                        <a className={"hMichael2b"} href={"https://www.MichaelAStein.com/"}>
                            <div className={"ce2 aa_font1ms"}>Michael A. Stein </div>
                        </a>
                        <span className={"aa_font2 w50b"}><InnerBlocks.Content/></span>
                    </div>
                </header>
            </>
        )

    }
})
/*
< header className = "ms_header-outer" >
    < div className = "ms_header-inner fade-in"
id = "stack1xy" >
    < span className = "aa_font1" >
    < span className = {"ms_center"} > Michael A.Stein < /span><axe ref={"#"}><div className={"ms_center ms_font2"}> HOME</div > < /axe>
</span>
</div>

</header>

 */
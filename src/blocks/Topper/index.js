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
                <header className="ms_header-outer">
                    <div className="ms_header-inner fade-in" id="stack1xy">

                            <span className={"center aa_font1ms"}>
                                <img
                                    className={"hMichael"}
                                    src={"https://www.MichaelAStein.com/wp-content/uploads/2023/10/cropped-favicon2-150x150.png"}
                                    alt={"Favicon"} />
                                <span className={"hMichael2"}> Michael A. Stein < /span>
                            </span>

                        <span className={"aa_font2 w50"}><InnerBlocks /></span>
                    </div>
                </header>
            </>
        )
    },
    save({attributes}) {
        return (
            <>
                <header className="ms_header-outer">
                    <div className="ms_header-inner fade-in" id="stack1xy">
                        <a href={"https://www.MichaelAStein.com/"}> <span className={"center aa_font1ms"}>
                            <img
                                className={"hMichael"}
                                src={"https://www.MichaelAStein.com/wp-content/uploads/2023/10/cropped-favicon2-150x150.png"}
                                alt={"Favicon"}/>
                             < span className={"hMichael2"}> Michael A. Stein < /span></span>
                        </a>
                        <span className={"aa_font2 w50"}><InnerBlocks.Content/></span>
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
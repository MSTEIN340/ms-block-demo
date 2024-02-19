import { registerBlockType } from '@wordpress/blocks'
import block from './block.json'
import icons from '../../icons'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )
import {InnerBlocks} from "@wordpress/block-editor";

registerBlockType(block.name, {
    icon: icons.Wings,
    edit({ attributes, setAttributes }) {
// Fragment
        return (
            <>
                    <header className="aa_header-outer">
                        <div className="aa_header-inner boom2"  id="stack1xyH" >
                            <a href={"https://www.archangel-media.com/"}> <span className={"center aa_font1"}><img className={"hAngel"} src={"https://www.archangel-media.com/wp-content/uploads/2023/11/Archangel-Favicon-small.png"} alt={"Favicon"}/>
                            <span className={"hUp"}>RCHANGEL MEDIA DEVELOPMENT</span></span></a>
                            <span className={"center aa_font2"}><InnerBlocks /></span>
                        </div>
                    </header>
            </>
        )
    },
    save({attributes}){
        return (
            <>
                    <header className="aa_header-outer">
                        <div className="aa_header-inner boom2"  id="stack1xyH" >
                            <a href={"https://www.archangel-media.com/"}> <span className={"center aa_font1"}><img className={"hAngel"} src={"https://www.archangel-media.com/wp-content/uploads/2023/11/Archangel-Favicon-small.png"} alt={"Favicon"} />
                            <span className={"hUp"}>RCHANGEL MEDIA DEVELOPMENT</span></span></a>
                            <span className={"center aa_font2"}><InnerBlocks.Content /></span>
                        </div>
                    </header>
            </>
        )

    }
})


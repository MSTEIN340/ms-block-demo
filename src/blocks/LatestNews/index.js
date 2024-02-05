import { registerBlockType } from '@wordpress/blocks'
import block from './block.json'
import icons from '../../icons'
import LatestNews from './latestnews.jsx'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )
//import { multidimensionalArray } from '../../../assets/js/fat-nav-data.js'
import { updateArray } from "../../../assets/js/fat-nav-data.js";
//import { loadMouseOver } from '../../../assets/js/home--1.js'
//updateArray();

registerBlockType(block.name, {
     icon: icons.secondary,
    edit({ attributes, setAttributes }) {
        return (
            <>

                <LatestNews/>

            </>
        )
    }

})








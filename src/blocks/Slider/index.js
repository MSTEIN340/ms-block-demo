import { registerBlockType } from '@wordpress/blocks'
import block from './block.json'
import icons from '../../icons'
import FatNav from './fatnav.jsx'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )
import { multidimensionalArray } from '../../../assets/js/fat-nav-data.js'
import { updateArray } from "../../../assets/js/fat-nav-data.js";
import { loadMouseOver } from '../../../assets/js/home--1.js'
//updateArray();

registerBlockType(block.name, {
     icon: icons.secondary,
    attributes: {
        dataArray: {
            type: 'string',
            default: JSON.stringify(multidimensionalArray),
        },
    },
    edit({ attributes, setAttributes }) {
        return (
            <>
            <FatNav />
                <script>
                    document.addEventListener('DOMContentLoaded', loadMouseOver );
                </script>
            </>
        )
    },
    save({attributes}){
        return (
            <>
                <FatNav />
                <script type="application/json" className="saved-array-data">
                    {attributes.dataArray = JSON.stringify(multidimensionalArray)}
                </script>
                <script>
                    document.addEventListener('DOMContentLoaded', loadMouseOver );
                </script>
            </>
        )
    }

})








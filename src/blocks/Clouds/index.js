import { registerBlockType } from '@wordpress/blocks'
import block from './block.json'
import icons from '../../icons'
import Clouds from './clouds.jsx'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )

registerBlockType(block.name, {
    icon: icons.Wings,
    edit({ attributes, setAttributes }) {
// Fragment
        return ( <Clouds />   )
    },
    save({attributes}){
        return ( <Clouds /> )
    }
})


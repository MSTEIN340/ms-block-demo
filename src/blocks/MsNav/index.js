import { registerBlockType } from '@wordpress/blocks'
import block from './block.json'
import icons from '../../icons'
import Msnav from './msnav.jsx'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )

registerBlockType(block.name, {
    icon: icons.secondary,
    edit({ attributes, setAttributes }) {
// Fragment
        return ( <Msnav />   )
    },
    save({attributes}){
        return ( <Msnav /> )
    }
})


import { registerBlockType } from '@wordpress/blocks'
import block from './block.json'
import icons from '../../icons'
import MenWin from './MenWin.jsx'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )

registerBlockType(block.name, {
    icon: icons.secondary,
    edit({ attributes, setAttributes }) {
// Fragment
        return ( <MenWin />   )
    },
    save({attributes}){
        return ( <MenWin /> )
    }
})


import { registerBlockType } from '@wordpress/blocks'
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import block from './block.json'
import { PanelBody, ColorPalette } from '@wordpress/components'
import icons from '../../icons'
import Home1a from './home--1a.jsx'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )

registerBlockType(block.name, {
    icon: icons.primary,
    edit({ attributes, setAttributes }) {
        const { content, underline_color } = attributes
        const blockProps = useBlockProps()
        //  console.log(blockProps)

        return (
            <div>
                <Home1a  />
            </div>
        )
    },
    save({attributes}){
        const { content, underline_color } = attributes
        const blockProps = useBlockProps.save({
            className: 'home--1',
            style: {
                'background-image': `
                    linear-gradient(transparent, transparent), linear-gradient(${underline_color}, ${underline_color});
                    `
            }
        })

        return (
            <div>
                <Home1a  />
            </div>
        )

    }
})








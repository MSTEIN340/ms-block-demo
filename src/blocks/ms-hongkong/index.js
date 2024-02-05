import { registerBlockType } from '@wordpress/blocks'
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import block from './block.json'
import { PanelBody, ColorPalette } from '@wordpress/components'
import icons from '../../icons'
import MsHk from './ms-hk.jsx'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )


registerBlockType(block.name, {
    icon: icons.primary,
    edit({ attributes, setAttributes }) {
        const { content, underline_color } = attributes
        const blockProps = useBlockProps()
        //  console.log(blockProps)

        return (
                <MsHk  />
        )
    },
    save({attributes}){
        const { content, underline_color } = attributes
        const blockProps = useBlockProps.save({
            className: 'ms-hongkong',
            style: {
                'background-image': `
                    linear-gradient(transparent, transparent), linear-gradient(${underline_color}, ${underline_color});
                    `
            }
        })

        return (
                <MsHk  />
        )

    }
})


function soop2()
{
    console.log("You're in the Sup");
}

export default soop2;





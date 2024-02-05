import { registerBlockType } from '@wordpress/blocks'
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import block from './block.json'
import { PanelBody, ColorPalette } from '@wordpress/components'
import icons from '../../icons'
import GridBlock from './GridBlock.jsx'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )


registerBlockType(block.name, {
    icon: icons.primary,
    edit({ attributes, setAttributes }) {
        const { content, underline_color } = attributes
        const blockProps = useBlockProps()
        //  console.log(blockProps)

        return (
                <GridBlock  />
        )
    },
    save({attributes}){
        const { content, underline_color } = attributes
        const blockProps = useBlockProps.save({
            className: 'grid-block',
            style: {
                'background-image': `
                    linear-gradient(transparent, transparent), linear-gradient(${underline_color}, ${underline_color});
                    `
            }
        })

        return (
                <GridBlock  />
        )

    }
})


function soop2()
{
    console.log("You're in the Sup");
}

export default soop2;





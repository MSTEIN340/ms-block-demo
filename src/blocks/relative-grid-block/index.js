import { registerBlockType } from '@wordpress/blocks'
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import block from './block.json'
import { PanelBody, ColorPalette } from '@wordpress/components'
import icons from '../../icons'
import RelativeGridBlock from './RelativeGridBlock.jsx'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )


registerBlockType(block.name, {
    icon: icons.Wings,
    edit({ attributes, setAttributes }) {
        const { content, underline_color } = attributes
        const blockProps = useBlockProps()
        //  console.log(blockProps)

        return (
                <RelativeGridBlock  />
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
                <RelativeGridBlock  />
        )

    }
})


function soop2()
{
    console.log("You're in the Sup");
}

export default soop2;





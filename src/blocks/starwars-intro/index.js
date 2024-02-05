import { registerBlockType } from '@wordpress/blocks'
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'
import block from './block.json'
import icons from '../../icons'
import StarWars_Intro from './StarWars-Intro.jsx'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )


registerBlockType(block.name, {
    icon: icons.primary,
    edit({ attributes, setAttributes }) {
        const { content, underline_color } = attributes
        const blockProps = useBlockProps()
        //  console.log(blockProps)

        return (
            <StarWars_Intro  />
        )
    },
    save({attributes}){
        const { content, underline_color } = attributes
        const blockProps = useBlockProps.save({
            className: 'starwars-intro',
            style: {
                'background-image': `
                    linear-gradient(transparent, transparent), linear-gradient(${underline_color}, ${underline_color});
                    `
            }
        })

        return (
            <StarWars_Intro  />
        )

    }
})


function soop2()
{
    console.log("You're in the Sup");
}

export default soop2;





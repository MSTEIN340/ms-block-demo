import { registerBlockType } from '@wordpress/blocks'
import block from './block.json'
import icons from '../../icons'
import ContactForm from './contactform.jsx'
import './main.css'
import {InspectorControls, PanelColorSettings} from "@wordpress/block-editor";
import {PanelBody, RangeControl, TextControl} from "@wordpress/components";
import {__} from "@wordpress/i18n";
import {useState} from "@wordpress/element"; // This only works because WebPack is running. ( NPM RUN START )

registerBlockType(block.name, {
    icon: icons.Wings,
    attributes: {
        postID: {
            type: 'string',
            default: ''
        },
        link: {
            type: 'string',
            default: ''
        },
        title: {
            type: 'string',
            default: ''
        },
        date: {
            type: 'string',
            default: ''
        },
        author: {
            type: 'string',
            default: ''
        },
        backgroundColor: {
            type: 'string',
            default: '#000000'
        },
        borderColor: {
            type: 'string',
            default: '#000000'
        },
        textColor: {
            type: 'string',
            default: '#FFFFFF'
        },
        opacity: {
            type: 'number',
            default: 1
        }
    },
    edit({ attributes, setAttributes }) {
        const onTextColorChange = (color) => {
            setAttributes({ textColor: color });
            forceRerender();
        };

        const onBorderColorChange = (color) => {
            setAttributes({ borderColor: color });
            forceRerender();
        };

        const onBackgroundColorChange = (color) => {
            setAttributes({ backgroundColor: color });
            forceRerender();
        };

        const updateOpacity = ( newOpacity ) => {
            setAttributes( { opacity: newOpacity } );
            forceRerender();
        };


        const [forceRerenderKey, setForceRerenderKey] = useState(0);
        const forceRerender = () => {
            setForceRerenderKey(prevKey => prevKey + 1);
        };
        return ( <>
                <InspectorControls>
                    <PanelBody title={__("Collapsing Section Settings", "text-domain")}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            marginBottom: '5px'
                        }}>
                            <div style={{flexGrow: 1, marginRight: '5px'}}>
                                <TextControl
                                    label={__("PostID", "text-domain")}
                                    value={attributes.postID}
                                    onChange={(value) => onPostIdChange(value)}
                                    type="string"
                                />

                            </div>
                        </div>
                        <PanelColorSettings
                            title={__("Text Color", "text-domain")}
                            initialOpen={true}
                            colorSettings={[
                                {
                                    value: attributes.textColor,
                                    onChange: (colorValue) => onTextColorChange(colorValue),
                                    label: __("Text Color", "text-domain"),
                                },
                            ]}
                        />
                        <PanelColorSettings
                            title={__("Background Color", "text-domain")}
                            initialOpen={true}
                            colorSettings={[
                                {
                                    value: attributes.backgroundColor,
                                    onChange: (colorValue) => onBackgroundColorChange(colorValue),
                                    label: __("Background", "text-domain"),
                                },
                            ]}
                        />
                        <RangeControl
                            label="Opacity"
                            value={ attributes.opacity }
                            onChange={ updateOpacity }
                            min={ 0 }
                            max={ 1 }
                            step={ 0.01 }
                        />
                        <PanelColorSettings
                            title={__("Border Color", "text-domain")}
                            initialOpen={true}
                            colorSettings={[
                                {
                                    value: attributes.borderColor,
                                    onChange: (colorValue) => onBorderColorChange(colorValue),
                                    label: __("Border", "text-domain"),
                                },
                            ]}
                        />
                    </PanelBody>
                </InspectorControls>

            <ContactForm
                key={forceRerenderKey}
                attributes={attributes}
                postID={attributes.postID}
            />
        </>
        )
    },
    save({attributes}){
        return ( <ContactForm
            attributes={attributes}
        /> )
    }
})


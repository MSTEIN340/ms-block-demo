import { registerBlockType } from '@wordpress/blocks'
import { useBlockProps, InspectorControls, InnerBlocks, useInnerBlocksProps, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, TextControl, SelectControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import block from './block.json'
import icons from '../../icons'
import CollapsingSection from './collapsingsection.jsx'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )
import { __ } from '@wordpress/i18n';

registerBlockType(block.name, {
    icon: icons.Wings,
    attributes: {
        collapsed: {
            "type": "boolean",
            "default": false
        },
        uniqueId: {
            type: 'string',
            default: '',
        },
        title: {
            type: 'string',
            default: '',
        },
        timeLine: {
            type: 'string',
            default: '',
        },
        borderColor: {
            type: 'string',
            default: "#000"
        },
        textColor: {
            type: 'string',
            default: "#000"
        }
    },
    edit({ attributes, setAttributes }) {
        const [Title, setTitle] = useState(attributes.title);
        const [borderColor, setBorderColor] = useState(attributes.borderColor);
        const [textColor, setTextColor] = useState(attributes.textColor);

        // Generate unique ID if it doesn't exist
        if (!attributes.uniqueId) {
            const uniqueId = `block-${Math.floor(Math.random() * 999999)}`;
            setAttributes({ uniqueId });
        }

        const [forceRerenderKey, setForceRerenderKey] = useState(0);
        const forceRerender = () => {
            setForceRerenderKey(prevKey => prevKey + 1);
        };
        const onBorderColorChange = (color) => {
            setBorderColor(color);
            setAttributes({ borderColor: color });
            forceRerender();
        };
        const onTextColorChange = (color) => {
            setTextColor(color);
            setAttributes({ textColor: color });
            forceRerender();
        };
        const handleTitleChange = (title, value) => {
            const newTitle = { ...title, [title]: value };
            setTitle(value);
            setAttributes({ title: value });
            forceRerender();
        };
        const handleTimeLineChange = (timeLine, value) => {
            const newTitle = { ...timeLine, [timeLine]: value };
            setTitle(value);
            setAttributes({ timeLine: value });
            forceRerender();
        };
        return (
            <>
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
                                    label={__("Title", "text-domain")}
                                    value={attributes.title}
                                    onChange={(value) => handleTitleChange('title', value)}
                                    type="string"
                                />
                            </div>

                        </div>
                        <TextControl
                            label={__("Time Line", "text-domain")}
                            value={attributes.timeLine}
                            onChange={(value) => handleTimeLineChange('timeLine', value)}
                            type="string"
                        />
                        <PanelColorSettings
                            title={__("Header/Border Color", "text-domain")}
                            initialOpen={true}
                            colorSettings={[
                                {
                                    value: borderColor,
                                    onChange: (colorValue) => onBorderColorChange(colorValue),
                                    label: __("Header/Border", "text-domain"),
                                },
                            ]}
                        />
                        <PanelColorSettings
                            title={__("Text Color", "text-domain")}
                            initialOpen={true}
                            colorSettings={[
                                {
                                    value: textColor,
                                    onChange: (colorValue) => onTextColorChange(colorValue),
                                    label: __("Text Color", "text-domain"),
                                },
                            ]}
                        />
                    </PanelBody>
                </InspectorControls>
                <CollapsingSection
                    key={forceRerenderKey}
                    title={attributes.title}
                    id={attributes.uniqueId}
                    setAttributes={{setAttributes}}
                    attributes={attributes}
                >
                    <InnerBlocks />
                    </CollapsingSection>
            </>
                );
    },
    save({attributes}){
        const { uniqueId } = attributes;
        return (
            <>
                <CollapsingSection
                    title={attributes.title}
                    id={uniqueId}
                    attributes={attributes}
                >
                    <InnerBlocks.Content />
                </CollapsingSection>
            </>
        );
    }
})



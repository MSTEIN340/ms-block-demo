import { registerBlockType } from '@wordpress/blocks'
import { useBlockProps, InspectorControls, InnerBlocks, useInnerBlocksProps, PanelColorSettings } from '@wordpress/block-editor';
import {PanelBody, TextControl, SelectControl, RangeControl} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import block from './block.json'
import icons from '../../icons'
import ProgressBar from './ProgressBar.jsx'
import './main.css' // This only works because WebPack is running. ( NPM RUN START )
import { __ } from '@wordpress/i18n';

registerBlockType(block.name, {
    icon: icons.Wings,
    attributes: {

        uniqueId: {
            type: 'string',
            default: '',
        },
        range: {
            type: 'number',
            default: '100',
        },
        progressColor: {
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
        const updateProgress = ( newProgress ) => {
            let pColor = gradientColorAtPercent(newProgress);
            setAttributes( { range: newProgress } );
            setAttributes( { progressColor: pColor });
            forceRerender();
        };
        const onTextColorChange = (color) => {
            setTextColor(color);
            setAttributes({ textColor: color });
            forceRerender();
        };

        const interpolateColor = (color1, color2, factor) => {
            var result = color1.slice();
            for (var i = 0; i < 3; i++) {
                result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
            }
            return result;
        }
        const gradientColorAtPercent = (percentage) => {
            // Colors in RGB
            const red = [255, 0, 0];
            const yellow = [255, 255, 0];
            const green = [0, 128, 0];

            let color;
            if (percentage <= 50) {
                // Interpolate between red and yellow
                color = interpolateColor(red, yellow, percentage / 50);
            } else {
                // Interpolate between yellow and green
                color = interpolateColor(yellow, green, (percentage - 50) / 50);
            }

            // Convert RGB to Hex
            const hex = '#' + color.map((c) => c.toString(16).padStart(2, '0')).join('');
            return hex;
        }

        const handleTitleChange = (title, value) => {
            const newTitle = { ...title, [title]: value };
            setTitle(value);
            setAttributes({ title: value });
            forceRerender();
        };
        return (
            <>
                <InspectorControls>

                    <PanelBody title={__("Progress Bar", "text-domain")}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            marginBottom: '5px'
                        }}>
                            <div style={{flexGrow: 1, marginRight: '5px'}}>
                                <RangeControl
                                    label="Percentage Complete"
                                    value={ attributes.range }
                                    onChange={ updateProgress }
                                    min={ 0 }
                                    max={ 100 }
                                    step={ 1 }
                                />
                            </div>

                        </div>

                    </PanelBody>
                </InspectorControls>
                <ProgressBar
                attributes={attributes}
                key={forceRerenderKey}
                />


            </>
                );
    },
    save({attributes}){
        const { uniqueId } = attributes;
        return (
            <>
                <ProgressBar
                    attributes={attributes}
                />
            </>
        );
    }
})



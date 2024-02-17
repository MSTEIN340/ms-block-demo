import { registerBlockType } from '@wordpress/blocks'
import block from './block.json'
import icons from '../../icons'
import BArticle from './barticle.jsx'
import './main.css'
import {useState} from "@wordpress/element";
import {InspectorControls, PanelColorSettings} from "@wordpress/block-editor";
import {PanelBody, TextControl, RangeControl } from "@wordpress/components";
//import { apiFetch } from '@wordpress/api-fetch';

import {__} from "@wordpress/i18n"; // This only works because WebPack is running. ( NPM RUN START )

registerBlockType(block.name, {
    icon: icons.secondary,
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
            default: ''
        },
        borderColor: {
            type: 'string',
            default: ''
        },
        textColor: {
            type: 'string',
            default: ''
        },
        opacity: {
            type: 'number',
            default: 1
        }
    },

    edit({ attributes, setAttributes }) {
        const { apiFetch } = wp;


        const onPostIdChange = (postID) => {
            setAttributes({postID: postID});
            if (!postID) return; // Exit if no post ID

            const fetchData = (contentType) => {
                // Fetch data from the WordPress REST API
                apiFetch({ path: `/wp/v2/${contentType}/${postID}` }).then((data) => {
                    // Assuming both posts and pages have title, link, and date fields
                    const updatedAttributes = {
                        postID: data.id, // Use the correct property for ID
                        title: data.title.rendered,
                        link: data.link,
                        date: data.date,
                    };

                    if (contentType === 'posts') {
                        // Fetch author name using the author ID for posts
                        apiFetch({ path: `/wp/v2/users/${data.author}` }).then((user) => {
                            setAttributes({
                                ...updatedAttributes,
                                author: user.name // Assuming you want the author's display name
                            });
                            forceRerender();
                        }).catch(error => {
                            console.error('Error fetching author:', error);
                        });
                    } else {
                        // Pages typically don't have an author in the same way posts do, handle accordingly
                        setAttributes(updatedAttributes);
                        forceRerender();
                    }

                }).catch(error => {
                    if (contentType === 'posts') {
                        // If fetching post failed, try fetching as a page
                        fetchData('pages');
                    } else {
                        console.error(`Error fetching ${contentType}:`, error);
                    }
                });
            };

            // Initially try to fetch as a post
            fetchData('posts');
        };



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
// Fragment
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
            <BArticle
                key={forceRerenderKey}
                attributes={attributes}
                postID={attributes.postID}
        />
            </> );
    },
    save({attributes}){
        return ( <BArticle
            postID={attributes.postID}
            attributes={attributes}
        /> )
    }
})


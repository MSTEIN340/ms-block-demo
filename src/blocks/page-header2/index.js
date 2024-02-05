import { registerBlockType } from '@wordpress/blocks';
import {
    useBlockProps, RichText, InspectorControls
} from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import icons from '../../icons.js'
import './main.css'

registerBlockType('ms-block-demo/page-header2', {
    icon: icons.primary,
    edit({ attributes, setAttributes }) {
        const { content, showCategory } = attributes
        const blockProps = useBlockProps();

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('General', 'ms-block-demo')}>
                        <ToggleControl
                            label={__('Show Category', 'ms-block-demo')}
                            checked={showCategory}
                            onChange={showCategory => setAttributes({ showCategory })}
                            help={
                                showCategory ?
                                    __('Category Shown', 'ms-block-demo') :
                                    __('Custom Content Shown', 'ms-block-demo')
                            }
                        />
                    </PanelBody>
                </InspectorControls>
                <div {...blockProps}>
                    <div className="inner-page-header2">
                        {
                            showCategory ?
                                <h1>{__('Category: Some Category', 'ms-block-demo')}</h1> :
                                <RichText
                                    tagName="h1"
                                    placeholder={__("Heading", "ms-block-demo")}
                                    value={content}
                                    onChange={content => setAttributes({ content })}
                                />
                        }
                    </div>
                </div>
            </>
        );
    }
});
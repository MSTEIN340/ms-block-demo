import { registerBlockType } from '@wordpress/blocks'
import './main.css'
import {
    useBlockProps, PanelColorSettings, InspectorControls, RichText
} from '@wordpress/block-editor'
import { __ } from "@wordpress/i18n"
import block from './block.json'
import icons from '../../icons'
import { useSelect } from "@wordpress/data";
import { core as coreDataStore } from '@wordpress/core-data';
import { PanelBody, QueryControls } from "@wordpress/components";
import { RawHTML } from '@wordpress/element'


registerBlockType(block.name, {
    icon: icons.Wings,
    attributes: {
        title: {
                type: 'string',
                default: "",
        },
        count: {
            type: 'number',
            default: "3",
        },
        categories: {
            type: "array",
            default: []
        }
    },
    edit({ attributes, setAttributes }) {
        const { title, count, categories } = attributes;
        const blockProps = useBlockProps({
            style: {}
        });
        const categoryIDs = categories.map((term) => term.id);
        const posts = useSelect((select) => {
            return select("core").getEntityRecords('postType','post', {
                per_page: count,
                _embed: true,
                categories: categoryIDs,
                order: 'desc',
                orderByRating: 1,

            })
        }, [ count, categoryIDs ]);
        console.log(posts);
        const terms = useSelect((select) => {
            return select("core").getEntityRecords(
                'taxonomy',
                'category',
                {
                    per_page: -1
                }
                );
        },[]);
    const suggestions = {};

        terms?.forEach((term) => {
            suggestions[term.name] = term;
        })

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__("Settings", "ms-block-demo")}>
                        <QueryControls
                            numberOfItems={count}
                            minItems={1}
                            maxItems={10}
                            onNumberOfItemsChange={count => setAttributes({count: count})}
                            categorySuggestions={suggestions}
                            onCategoryChange={(newTerms) => {
                            const newCategory = [];

                            newTerms.forEach(category => {
                                if(typeof category === 'object') {
                                    return newCategory.push(category);
                                }
                                const categoryTerm = terms?.find(
                                    (term) => term.name === category );
                                if(categoryTerm) newCategory.push(categoryTerm)
                            });
                        setAttributes({ categories: newCategory });
                        }}
                            selectedCategories = { categories }
                        />
                    </PanelBody>
                </InspectorControls>
                <div {...blockProps}>
                    <RichText
                        tagName="h6"
                        value={title}
                        withoutInteractiveFormatting
                        onChange={title => setAttributes({title})}
                        placeholder={__('Title', 'udemy-plus')}
                    />
                    {
                        posts?.map((post) => {
                            const featuredImage =
                                post._embedded &&
                                post._embedded['wp:featuredmedia'] &&
                                post._embedded['wp:featuredmedia'].length > 0 &&
                                post._embedded['wp:featuredmedia'][0];
                            return (
                                <>
                                <HotArticle
                                    attributes={attributes}
                                />

                                <div className="single-post">
                                    {
                                        featuredImage &&
                                        <a className="single-post-image" href={post.link}>
                                            <img src={
                                                featuredImage.media_details.sizes.thumbnail.source_url
                                            } alt={featuredImage.alt_text}/>
                                        </a>
                                    }

                                    <div className="single-post-detail">
                                        <a href={post.link}><RawHTML>{post.title.rendered}</RawHTML></a>
                                        <span>
                                by <a href={post.link}>{post._embedded.author[0].name}</a>
                            </span>
                                    </div>
                                </div>
                            </>
                            )
                        })
                    }

                </div>
            </>
        )
    }
})
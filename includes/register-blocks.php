<?php

function up_register_blocks() {
    $namespace = 'ms-block-demo';
    $blocks = [
        [ 'name' => 'fancy-header' ],
        [ 'name' => 'search-form', 'options' => [
            'render_callback' => 'up_search_form_render_cb'
        ]],
        [ 'name' => 'page-header', 'options' => [
            'render_callback' => 'up_page_header_render_cb'
        ]],
        [ 'name' => 'page-header2', 'options' => [
            'render_callback' => 'up_page_header2_render_cb'
        ]],
	    [ 'name' => 'home--1' ],
	    [ 'name' => 'home--1a' ],
        [ 'name' => 'ms-hongkong' ],
        [ 'name' => 'starwars-intro' ],
        [ 'name' => 'OurTeam' ],
        [ 'name' => 'CollapsingSection' ],
        [ 'name' => 'Halo' ],
        [ 'name' => 'Boots' ],
        [ 'name' => 'MyNav' ],
        [ 'name' => 'FatNav' ],
        [ 'name' => 'LatestNews', 'options' => [
            'render_callback' => 'get_post_details_cb'
        ]],
        [ 'name' => 'ContactForm' ],
        [ 'name' => 'Topper' ],
        [ 'name' => 'Clouds' ],
        [ 'name' => 'BArticle' ],
        [ 'name' => 'MsNav' ],
        [ 'name' => 'ProgressBar' ],
        [ 'name' => 'TopArticles', 'options' => [
            'render_callback' => 'get_top_articles_cb'
        ]],
    ];

    foreach($blocks as $block) {

        $str = ((UP_PLUGIN_DIR  . 'build/blocks/' . $block['name']));
        //echo $str;
        register_block_type(
            $str, // Add the namespace to the block name
            isset($block['options']) ? $block['options'] : []
        ); // Only registers Options if they are present.
    }
}
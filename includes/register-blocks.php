<?php

function up_register_blocks() {
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
        [ 'name' => 'ourteam' ],
        [ 'name' => 'collapsingsection' ],
        [ 'name' => 'halo' ],
        [ 'name' => 'boots' ],
        [ 'name' => 'mynav' ],
        [ 'name' => 'fatnav' ],
        [ 'name' => 'latestnews', 'options' => [
            'render_callback' => 'get_post_details_cb'
        ]],
        [ 'name' => 'contactform' ],
        [ 'name' => 'topper' ],
        [ 'name' => 'clouds' ],
        [ 'name' => 'barticle' ]
    ];

    foreach($blocks as $block) {
        register_block_type(
            UP_PLUGIN_DIR . 'build/blocks/' . $block['name'],
            isset($block['options']) ? $block['options'] : []
        ); // Only registers Options if they are present.
    }
}
<?php
/**
 * Created by PhpStorm.
 * User: mstei
 * Date: 10/5/2019
 * Time: 4:50 PM
 */
$plugin_url = plugin_dir_url( __FILE__ );
function aa_enqueue_scripts()
{
//	wp_register_style('r_rateit2',plugins_url('/ms-block-demo/assets/css/style.css') );
//	wp_enqueue_style('r_rateit2');
	wp_register_style('r_rateit',plugins_url('/ms-block-demo/assets/css/style2.css') );
	wp_enqueue_style('r_rateit');
    wp_register_style('ms_style',plugins_url('/ms-block-demo/assets/css/style.css') );
    wp_enqueue_style('ms_style');
    wp_enqueue_style('dashicons');

    wp_register_script('fat-nav-data', plugins_url('/ms-block-demo/assets/js/fat-nav-data.js'));
    wp_enqueue_script('fat-nav-data');

    wp_register_script('starwars-intro', plugins_url('/ms-block-demo/assets/js/starwars-intro.js'));
    wp_enqueue_script('starwars-intro');

    wp_register_script('latest-news', plugins_url('/ms-block-demo/assets/js/latest-news.js'));
    wp_enqueue_script('latest-news');


    wp_register_script('contact-form', plugins_url('/ms-block-demo/assets/js/contact-form.js'));
    wp_enqueue_script('contact-form');


	wp_register_script('home--1', plugins_url('/ms-block-demo/assets/js/home--1.js'),array('fat-nav-data') );
	wp_enqueue_script('home--1');

    wp_register_script('grid-block', plugins_url('/ms-block-demo/assets/js/grid-block.js'));
    wp_enqueue_script('grid-block');

    wp_localize_script('fat-nav-data', 'msFatNavData', array(
        'pluginsUrl' => plugins_url(),
    ));
    wp_enqueue_script(
        'msln-block-js',
        plugins_url('/ms-block-demo/assets/js/e-latest-news.js'), // Path to your JS file
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
        true
    );
    wp_localize_script( 'msln-block-js', 'myBlockData', array(
        'ajax_url' => admin_url( 'admin-ajax.php' ),
        'nonce'    => wp_create_nonce( 'my_nonce' ),
    ) );
}

function msaa_enqueue_block_editor_assets()
{
    wp_enqueue_script(
        'msln-block-js',
        plugins_url('/ms-block-demo/assets/js/e-latest-news.js'), // Path to your JS file
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
        true
    );
    wp_localize_script( 'msln-block-js', 'myBlockData', array(
        'ajax_url' => admin_url( 'admin-ajax.php' ),
        'nonce'    => wp_create_nonce( 'my_nonce' ),
    ) );

}

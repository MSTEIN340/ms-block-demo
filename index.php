<?php

/**
* Plugin Name:       MS Block Demo
* Plugin URI:        https://www.archangel-media.com/
* Description:       Revised Block Plugin
* Version:           1.0.0
* Requires at least: 5.9
* Requires PHP:      7.2
* Author:            Archangel Media Development
* Author URI:        https://www.archangel-media.com
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
* Update URI:        https://example.com/my-plugin/
* Text Domain:       ms-block-demo
* Domain Path:       /languages
*/

if(!function_exists('add_action')){
    echo "Bad execution of plugin file";
    exit;
}

// Setup
define ('UP_PLUGIN_DIR', plugin_dir_path(__FILE__));


// Includes
$rootFiles = glob( UP_PLUGIN_DIR . 'includes/*.php');
$subdirectoryFiles = glob( UP_PLUGIN_DIR . 'includes/**/*.php');
$allFiles =  array_merge($rootFiles, $subdirectoryFiles);

foreach($allFiles as $filename) {
    include_once($filename);
}

// Hooks
add_action('init', 'up_register_blocks');
add_action( 'wp_enqueue_scripts', 'aa_enqueue_scripts',1 );
add_action( 'enqueue_block_editor_assets', 'msaa_enqueue_block_editor_assets' );

add_action('wp_ajax_get_post_details_ajax', 'get_post_details_ajax');
add_action('wp_ajax_nopriv_get_post_details_ajax', 'get_post_details_ajax');

add_action('wp_ajax_get_post_details2_ajax', 'get_post_details2_ajax');
add_action('wp_ajax_nopriv_get_post_details2_ajax', 'get_post_details2_ajax');

add_action('wp_ajax_contact_form_submission', 'handle_contact_form_submission');
add_action('wp_ajax_nopriv_contact_form_submission', 'handle_contact_form_submission');

add_action('wp_ajax_contact_form_submission', 'handle_contact_form_submission');
add_action('wp_ajax_nopriv_contact_form_submission', 'handle_contact_form_submission');

add_filter('rest_post_query','ms_rest_post_query', 10, 2);

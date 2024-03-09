<?php

function get_post_details_ajax() {
    //check_ajax_referer('my_nonce', 'nonce');
    ?>

    <?php
    ob_start();
    ?>

    <html lang="en">
    <h2>Latest News</h2>
    <div class="ms_latest_news">
    <p>Something new is always going on at Archangel Media. Keep up with our latest releases here, and</p>
    <p>sign up for our newsletter below. Stay part of our family, and spread the Wings of Freedom! </p>
    </div>
    <div id="WebCards" class="forward">
        <div class="ln-span-d">
            <?php
            get_post_details_and_save_to_html("2001");
            get_post_details_and_save_to_html("1201");
            get_post_details_and_save_to_html("1811");
            ?>
        </div>
    </div>
    </html>
    <?php
    $html_output = ob_get_clean();
    wp_send_json_success($html_output);
    wp_die();
}

function get_post_details_cb() {

    ob_start();
    ?>
    <html lang="en">
    <h2>Latest News</h2>
    <p>Something new is always going on at Archangel Media. Keep up with our latest releases here, and
        sign up for our newsletter below. Stay part of our family, and spread the Wings of Freedom! </p>
        <div id="WebCards" class="forward">
        <div class="ln-span-d">
        <?php
        get_post_details_and_save_to_html("2001");
        get_post_details_and_save_to_html("1201");
        get_post_details_and_save_to_html("1811");
        ?>
        </div>
        </div>
    </html>
    <?php
    $html_output = ob_get_clean();
    return $html_output;
}



function get_post_details_and_save_to_html($post_id) {
    // Get the post object
    $post = get_post($post_id);

    // Check if the post exists
    if (!$post) {
        return 'Post not found';
    }

    // Start output buffering


    // HTML tructure
    // -------------------------------------------------------------------------------------------------------------

    ?>

                <div class="aa-col-a ln_card">
                    <div class="ln_card__side ln_card__side--front">

                        <table class="c1c top-line">
                            <tr>
                                <td>
                                    <span class="news-h">
                                        <?php if (has_post_thumbnail($post_id)): ?>
                                        <div class="ln_image-container">
                                            <img class="img-h" src="<?php echo get_the_post_thumbnail_url($post_id); ?>" alt="<?php echo esc_attr($post->post_title); ?>">
                                            <div class="category-banner"><?php echo get_primary_category($post_id); ?></div>
</div>
                                        <?php endif; ?>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                        <div class="news_title"><?php echo esc_html($post->post_title); ?></div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="content-line">
                                    <?php echo apply_filters('the_content', $post->post_content); ?>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="aa_font6">

                                            <div  class="post-details" style="width: 100%;  content: ''; margin-top: 8px;">
                                            <span style="float: left; color: white;">On: <?php echo get_the_date('', $post_id); ?></span>
                                            <span style="float: right; color: white;">By: <?php echo get_the_author_meta('display_name', $post->post_author); ?></span>
                                            </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                 <td>
                                    <div  class="post-details" style="width: 100%;  content: ''; margin-bottom: 30px;">
                                        <span style=" float: left; color: white !important;">Categories: <?php echo get_the_category_list(', ', '', $post_id); ?></span>
                                        <span style=" float: right; color: white;">Tags: <?php echo get_the_tag_list('', ', ', '', $post_id); ?></span>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="ln_card__side ln_card__side--back ">
                        <div class="ln-media "><?php echo esc_html($post->post_title); ?></div>
                        <div class="ln_content-area">
                            <?php echo apply_filters('the_content', $post->post_content); ?>

                        </div>
                        <!-- More Link -->
                        <a href="<?php echo get_permalink($post_id); ?>" class="more-link">...more</a>
                    </div>
                </div>

    <?php
    // -------------------------------------------------------------------------------------------------------------
    // End output buffering and capture the output

}

function get_primary_category($post_id) {
    // Get all categories for the post
    $categories = get_the_category($post_id);

    if (empty($categories)) {
        // Return a default value if there are no categories
        return 'Uncategorized';
    }

    // Assuming the first category is the primary one
    // Alternatively, you can add custom logic to determine the primary category
    $primary_category = $categories[0];

    return $primary_category->name;
}

function get_post_details2_ajax() {
    //check_ajax_referer('my_nonce', 'nonce');
    $post_data = isset($_POST['post']) ? $_POST['post'] : '';
    ?>

    <?php
    ob_start();
    ?>
        <div class="my-post-box" >
            <?php
            get_post_details_and_save_to_html2($post_data);
            ?>
        </div>
    <?php
    $html_output = ob_get_clean();
    wp_send_json_success($html_output);
    wp_die();
}

function get_post_details_and_save_to_html2($post_id) {
    // Get the post object
    $post = get_post($post_id);

    // Check if the post exists
    if (!$post) {
        return 'Post not found';
    }

    // Start output buffering


    // HTML tructure
    // -------------------------------------------------------------------------------------------------------------

    ?>


        <div class="">

            <div class="news_title2"><?php echo esc_html($post->post_title); ?></div>
                <div class="news-h2">
                </div>
            <div class="ms-content2">
                <?php if (has_post_thumbnail($post_id)): ?>
                    <div class="ln_image-container2">
                        <img class="img-h2" src="<?php echo get_the_post_thumbnail_url($post_id); ?>" alt="<?php echo esc_attr($post->post_title); ?>">
                    </div>
                <?php endif; ?>
                <?php echo apply_filters('the_content', $post->post_content); ?>
            </div>

     </div>


    <?php
    // -------------------------------------------------------------------------------------------------------------
    // End output buffering and capture the output

}
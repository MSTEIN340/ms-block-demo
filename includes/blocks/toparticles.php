<?php

function get_top_articles_cb($atts) {
    $title = esc_html($atts['title']);
    $categoryIDs = array_map( function($term) {
        return $term['id'];
    }, $atts['categories']);
    $args = [
        'post_type' => 'post',
        'posts_per_page' => $atts['count'],
       // 'orderby' => 'meta_value_num',
       // 'meta_key' => 'post_rating',
        'order' => 'desc'
        ];
    if(!empty($categoryIDs)) {
        $args['tax_query'] = [
          'taxonomy' => 'categories',
          'field' => 'term_id',
          'terms' => $categoryIDs
        ];
    }
    $query = new WP_Query($args);
    ob_start();
    ?>
<div class="wp-block-ms-block-demo-top-articles">
    <h6><?php echo $title; ?></h6>
<?php
    if($query->have_posts()) {
        while($query->have_posts()) {
            $query->the_post();
            ?>
            <div class="single-post toparticles" data-link="<?php the_permalink(); ?>">
                    <?php the_post_thumbnail('thumbnail'); ?>
                <div class="single-post-detail">
                        <h6><?php the_title(); ?></h6>
                    <span class="ms_excerpt">
                        <?php the_excerpt(); ?>
                    </span>
                    <span>
                        <span  class="ms_excerpt">By</span>
                            <?php the_author(); ?>
                    </span>
                </div>
            </div>
            <?php
        }
    }
    ?>
</div>
<?php
    $output = ob_get_contents();
            wp_reset_postdata();

            ob_end_clean();
          //  return "hey Jude";
            return $output;
}

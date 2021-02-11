<?php
/**
 * Plugin Name:     BlockmaniaLab
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     rs-blockmanialab
 *
 * @package         rs-blockmanialab
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function rs_blockmanialab_rs_blockmanialab_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "rs-blockmanialab/rs-blockmanialab" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'rs-blockmanialab-rs-blockmanialab-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'rs-blockmanialab-rs-blockmanialab-block-editor', 'rs-blockmanialab' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'rs-blockmanialab-rs-blockmanialab-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'rs-blockmanialab-rs-blockmanialab-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'rs-blockmanialab/rs-blockmanialab',
		array(
			'editor_script' => 'rs-blockmanialab-rs-blockmanialab-block-editor',
			'editor_style'  => 'rs-blockmanialab-rs-blockmanialab-block-editor',
			'style'         => 'rs-blockmanialab-rs-blockmanialab-block',
		)
	);
}
add_action( 'init', 'rs_blockmanialab_rs_blockmanialab_block_init' );

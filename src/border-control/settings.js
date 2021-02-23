import { addFilter } from '@wordpress/hooks';



const addBorderAttributes = ( settings, name ) => {
	//settings is the object  to declare the block
	//name is the name of the block ( if you wanted to apply this to only certain blocks
	// if (name == 'sc-block/testimonial') (for certain block)

	//apend the settings
	settings.attributes.borderStyle = {
		type: 'string',
		default: '',
	}

	settings.attributes.borderWidth = {
		type: 'string',
		default: '1',
	}

	settings.attributes.borderRadius = {
		type: 'string',
		default: '1',
	}

	settings.attributes.borderColor = {
		type: 'string',
		default: '',
	}


	// (modify any additional settings)
	return settings;

}

addFilter('blocks.registerBlockType', 'rs-blockmanialab/border-control/settings', addBorderAttributes);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, PlainText,
		InspectorControls} from '@wordpress/block-editor';
import {SelectControl, PanelBody} from '@wordpress/components';

/**
 * Internal dependencies
 */
import {TKColorPanel} from '../common/TKColorPanel';
import {TKRatingSelect} from "../common/TKRatingSelect";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function edit({attributes, setAttributes}) {
//export default function edit(props) {
	//let attributes = props.attributes;
	//let {attributes, setAttributes} = props;

	let divStyles = {
		backgroundColor: attributes.backgroundColor,
		color: attributes.textColor,
	}


	return (
		<div { ...useBlockProps({style: divStyles}) }>
			<InspectorControls>
				<TKColorPanel
					attributes={attributes}
					setAttributes={setAttributes}
					initialOpen={true}
				/>
				<PanelBody title="Test">
					<p>Some more stuff here.</p>
				</PanelBody>

			</InspectorControls>

			<TKRatingSelect
				value={ attributes.stars }
				onChange={ ( stars ) => { setAttributes( { stars: parseInt(stars) } ) } }
			/>

			<RichText
				tagName="h2" // The tag here is the element output and editable in the admin
				value={ attributes.name } // Any existing content, either from the database or an attribute default
				allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
				onChange={ ( quote ) => setAttributes( { quote } ) } // Store updated content as a block attribute
				placeholder="Enter Name"// Display this text before any content has been added by the user
			/>
			<RichText
				tagName="h3" // The tag here is the element output and editable in the admin
				value={ attributes.name } // Any existing content, either from the database or an attribute default
				allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
				onChange={ ( quote ) => setAttributes( { quote } ) } // Store updated content as a block attribute
				placeholder="Subheadding "// Display this text before any content has been added by the user
			/>

			<PlainText
				className="location"
				value={attributes.location}
				onChange={ ( location ) => setAttributes( { location } ) }
				placeholder="Subheading 2"
			/>


			<div className="quote-profile">
				<div className="photo">
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={['image']}
							onSelect={ ( img ) => setAttributes( { imgUrl: img.sizes.thumbnail.url } ) }
							render={ ({open}) => <img src={attributes.imgUrl} onClick={open}/>}
						/>
					</MediaUploadCheck>
				</div>
			</div>
		</div>
	);
}

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
import {SelectControl, PanelBody, ToggleControl} from '@wordpress/components';

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
				<PanelBody title="Edit Layout">

					<SelectControl
						label={ __( 'Show Subheading' ) }
						value={ attributes.showSubheading }
						onChange={ (showSubheading) => { setAttributes( { showSubheading } ) } }
						options={[
								{value: 'show', label: 'Show Subheading'},
								{value: 'hide', label: 'Hide Subheading'}
								]}/>
				</PanelBody>

			</InspectorControls>



			<PlainText
				className="head" // The tag here is the element output and editable in the admin
				value={ attributes.heading1 } // Any existing content, either from the database or an attribute default
				onChange={ ( heading1 ) => setAttributes( { heading1 } ) }
				placeholder="Head"
			/>

			<PlainText
				className={"location " + attributes.showSubheading}
				value={attributes.location}
				onChange={ ( location ) => setAttributes( { location } ) }
				placeholder="Subheading"
			/>


			<div className="quote-profile">
				<div className="photo">
					<MediaUploadCheck>
						<MediaUpload
							allowedTypes={['image']}
							onSelect={ ( img ) => setAttributes( { imgUrl: img.sizes.thumbnail.url } ) }
							render={ ({open}) => <img src={attributes.imgUrl} onClick={open}  />}
						/>
					</MediaUploadCheck>
				</div>
			</div>
		</div>
	);
}

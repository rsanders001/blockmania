import { createHigherOrderComponent} from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { InspectorControls} from "@wordpress/block-editor";
import { PanelBody, PanelRow, SelectControl, RangeControl, ColorPalette } from "@wordpress/components";
import { addFilter } from '@wordpress/hooks';
import { select } from '@wordpress/data';
import { __} from "@wordpress/i18n";

//                                              var name of what want to wrap
const borderInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
	return (props) => {
		let divStyles = {
			borderStyle: props.attributes.borderStyle || 'none',
			borderWidth: props.attributes.borderWidth || 'none',
			borderRadius: props.attributes.borderRadius || 'none',
			borderColor:  props.attributes.borderColor || 'none',
		}
		let settings = select('core/editor').getEditorSettings();
		return (
			<Fragment>
				<div className="wp-block" style={divStyles}>
					<BlockEdit {...props} />
				</div>
				<InspectorControls>
					<PanelBody title="Border Controls">
						<PanelRow>
							<SelectControl
								label="Style"
								value={props.attributes.borderStyle}
								options={[
									{label: 'None', value: 'none'},
									{label: 'Solid', value: 'solid'},
									{label: 'Dashed', value: 'dashed'},
									{label: 'Dotted', value: 'dotted'},
								]}
								onChange={ (value) => {
									props.setAttributes( {
										borderStyle: value
									})
								}}
							/>
							</PanelRow>
							<PanelRow>
							<RangeControl
								label="Border Width"
								value={props.attributes.borderWidth}
								onChange={ (value) => {
									props.setAttributes( {
										borderWidth: value
									})
								}}

								step={ 0.5 }
								min={ 0.5 }
								max={ 5 }
							/>
						</PanelRow>
						<PanelRow>
							<RangeControl
								label="Border Radius"
								value={props.attributes.borderRadius}
								onChange={ (value) => {
									props.setAttributes( {
										borderRadius: value
									})
								}}

								step={ 1 }
								min={ 0 }
								max={ 10 }
							/>
						</PanelRow>
						<PanelRow>
							<ColorPalette
								label={__('Border Color')}
								value={props.attributes.borderColor}
								onChange={(color) => {
									props.setAttributes({
										borderColor: color})}}
								colors={ settings.colors }
							/>
						</PanelRow>

					</PanelBody>
				</InspectorControls>
			</Fragment>
		)
	};
}, 'borderInspectorControls');

addFilter ( 'editor.BlockEdit', 'rs-blockmanialab/border-control/inspector-controls', borderInspectorControls);

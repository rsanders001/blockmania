import {__} from "@wordpress/i18n";
import {PanelColorSettings} from "@wordpress/block-editor";
import {select} from "@wordpress/data";

export class TKColorPanel extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render(){
		let {attributes, setAttributes} = this.props;
		//let {attributes, setAttributes, initialOpen} = this.props;

		let settings = select('core/editor').getEditorSettings();
		//console.log(settings);

		return (
			<PanelColorSettings
				title={__('Color Settings')}
				initialOpen={this.props.initialOpen || false}
				//initialOpen={initialOpen}
				colorSettings={ [
					{
						value: attributes.backgroundColor,
						onChange: (color) => {setAttributes({backgroundColor: color})},
						label: __('Background Color'),
					},
					{
						value: attributes.textColor,
						onChange: (color) => {setAttributes({textColor: color})},
						label: __('Text Color'),
						colors: [
							...settings.colors,
							{name: 'White', slug: 'white', color: '#FFFFFF'},
						]
					},
				]}
			/>
		);
	}
}

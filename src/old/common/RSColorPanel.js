import {} from "@wordpress/i18n";
import {PanelColorSettings} from "@wordpress/block-editor";
import {select} from "@wordpress/data";

export class RSColorPanel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			initialOpen: false,
		};

	}

	render() {
		let {attributes, setAttributes} = this.props;
		//let {attributes, setAttributes, initialOpen} = this.props;
		let settings = select('core/editor').getEditorSettings();
		return (
			<PanelColorSettings
				title={('Color Settings')}
				initialOpen={this.props.initialOpen}
				//initialOpen={initialOpen}
				colorSettings={[
					{
						label: ('Background Color'),
						value: attributes.backgroundColor2,
						onChange: (color) => {setAttributes({backgroundColor2: color})},
					},
					{
						label: ('Text Color'),
						value: attributes.textColor2,
						onChange: (color) => {setAttributes({textColor2: color})},
						colors: [
							...settings.colors,
							{name: 'White', slug: 'white', color: '#000000'}
						],
					},
				]}
			/>
		);
	}
}

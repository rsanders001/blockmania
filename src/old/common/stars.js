import {} from "@wordpress/i18n";
import {select} from "@wordpress/data";
import {SelectControl} from "@wordpress/components";

export class stars extends React.Component {

	render() {
		let {attributes, setAttributes} = this.props;
		let settings = select('core/editor').getEditorSettings();
		return (
			<SelectControl
				label={('Select a rating:')}
				value={attributes.stars} // e.g: value = [ 'a', 'c' ]
				onChange={(stars) => {
					setAttributes({stars: parseInt(stars)})
				}}
				options={[
					{value: '1', label: '*'},
					{value: '2', label: '**'},
					{value: '3', label: '***'},
					{value: '4', label: '****'},
					{value: '5', label: '*****'},
				]}
			/>
		)
	}
}


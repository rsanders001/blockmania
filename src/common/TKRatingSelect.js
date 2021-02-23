import {__} from "@wordpress/i18n";
import {SelectControl} from "@wordpress/components";

// LAB ACTIVITY - Create component for rating select menu.

export class TKRatingSelect extends React.Component {
	render(){
		return (
			<SelectControl
				label={ __( 'Select a rating:' ) }
				value={ this.props.value }
				onChange={ ( rating ) => { this.props.onChange( rating ) } }
				options={ [
					{ value: 1, label: '*' },
					{ value: 2, label: '**' },
					{ value: 3, label: '***' },
					{ value: 4, label: '****' },
					{ value: 5, label: '*****' },
				] }
			/>
		);
	}
}

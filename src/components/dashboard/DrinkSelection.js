import React, {PropTypes} from 'react';
import DrinkItem from './DrinkItem';



class DrinkSelection extends React.Component {

	constructor(props){
		super(props);
		this.state = {
		};
	}

	render(){
		return (
			<div className="container drink-selection-container">
				{this.props.drinkOptions.map(drink =>
				<div>
					<DrinkItem key={drink.id} drink={drink} click={this.props.click} />
				</div>
				)}
			</div>
		);
	}
}

DrinkSelection.propTypes = {
	drinkOptions: PropTypes.array.isRequired,
	click: PropTypes.func
};

export default DrinkSelection;

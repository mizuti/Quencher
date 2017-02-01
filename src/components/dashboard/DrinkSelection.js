import React, {PropTypes} from 'react';
import DrinkItem from './DrinkItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as dashboardActions from '../../actions/dashboardActions';

class DrinkSelection extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			consumedDrinks: []
		};

		this.consumeDrink = this.consumeDrink.bind(this);
	}

  consumeDrink(event) {
    this.props.actions.actionConsumeDrink('drink');
	  console.log(this.props.consumedDrinks);
  }

	render(){
		return (
			<div className="container drink-selection-container">
				{this.props.drinkOptions.map(drink =>
				<div>
					<DrinkItem key={drink.id} drink={drink} click={this.consumeDrink} />
				</div>
				)}
			</div>
		);
	}
}

DrinkSelection.propTypes = {
	drinkOptions: PropTypes.array.isRequired,
	consumedDrinks: PropTypes.array,
	actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
	// state.{object} is set in 
	let consumedDrinks = [...state.consumedDrinks];
	console.log(state);
	return {
		consumedDrinks: consumedDrinks
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(dashboardActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinkSelection);

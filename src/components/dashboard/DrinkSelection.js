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

  consumeDrink(drink, event) {
		console.log(this.props.consumedDrinks);
	  return this.props.actions.actionConsumeDrink(drink.title);
  }

	render(){
		return (
			<div>
				<section className="row">
					<div className="container drink-selection-container">
						{this.props.drinkOptions.map(drink =>
							<div>
								<DrinkItem key={drink.id} drink={drink} click={this.consumeDrink.bind(null, drink)} />
							</div>
						)}
					</div>
				</section>

				<section className="row">
					<div className="container drinks-consumed-container">
					{this.props.consumedDrinks.map(drink =>
						<div className=""><i className={"fa fa-coffee fa-2x " + drink}></i></div>
					)}
					</div>

				</section>
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

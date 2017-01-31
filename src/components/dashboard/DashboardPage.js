import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DrinkSelection from './DrinkSelection';
import DrinkDisplay from './DrinkDisplay';
import * as dashboardActions from '../../actions/dashboardActions';

class DashboardPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      drinks: [
        { id: 1,
          title: 'Light' },
        { id: 2,
          title: 'Medium' },
        { id: 3,
          title: 'Dark' }
      ],
      consumedDrinks: this.props.consumedDrinks
    };

    this.consumeDrink = this.consumeDrink.bind(this);
  }

  consumeDrink(drink) {
    this.props.actions.consumeDrink('drink');
  }

  render() {
    return (
      <div className="text-center">
        <h1>Quench</h1>
        <section className="text-center">
          <DrinkSelection drinkOptions={this.state.drinks} click={this.consumeDrink}/>
          {/*<DrinkDisplay drinksConsumed={this.state.consumedDrinks} />*/}
        </section>
      </div>
      );
  }
}

DashboardPage.propTypes = {
  consumedDrinks: PropTypes.array,
  actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let consumedDrinks = [];
  return {
    consumedDrinks: consumedDrinks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dashboardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);


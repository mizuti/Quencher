import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DrinkSelection from './DrinkSelection';
import DrinkDisplay from './DrinkDisplay';

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
      // consumedDrinks: [...props.consumedDrinks]
    };

    // this.consumeDrink = this.consumeDrink.bind(this);
  }

  // consumeDrink() {
  //   console.log(this.state.consumedDrinks);
  //   this.props.actions.consumeDrink('drink');
  // }

  render() {
    return (
      <div className="text-center">
        <h1>Quench</h1>
        <div className="text-center">
          <DrinkSelection drinkOptions={this.state.drinks}/>
        </div>
      </div>
      );
  }
}

DashboardPage.propTypes = {
  consumedDrinks: PropTypes.array,
  actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
 return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);


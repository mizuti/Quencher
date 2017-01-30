import React, {PropTypes} from 'react';
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
      currentDrinks: []
    };
  }

  render() {
    return (
      <div className="text-center">
        <h1>Quench</h1>
        <section className="text-center">
          <DrinkSelection drinkOptions={this.state.drinks}/>
          <DrinkDisplay drinkList={this.state.currentDrinks} />
        </section>
      </div>
      );
  }
}

DashboardPage.propTypes = {
};

export default DashboardPage;

import React, {PropTypes} from 'react';
import DrinkSelection from './DrinkSelection';

const DrinkDisplay = ({drinkSelection}) => {
  return (
    <div>
      <div className="jumbotron container" id="Drink-Display">
        {drinkSelection.map(drinks => {
          <i className={"fa fa-coffee fa-3x " && drinks.title}></i>
        })
        }
      </div>
    </div>


  );
};

DrinkDisplay.propTypes = {
  drinkList: PropTypes.array.isRequired
};

export default DrinkDisplay;

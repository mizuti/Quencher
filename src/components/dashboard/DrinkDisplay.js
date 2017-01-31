import React, {PropTypes} from 'react';
import DrinkSelection from './DrinkSelection';

const DrinkDisplay = ({drinksConsumed}) => {
  return (
    <div>
      <div className="jumbotron" id="Drink-Display">
        {drinksConsumed.map(drinks => {
          return <i key={drinks.id} className={"fa fa-coffee fa-3x " && drinks.title}></i>;
        })
        }
      </div>
    </div>
  );
};

DrinkDisplay.propTypes = {
  drinksConsumed: PropTypes.array.isRequired
};

export default DrinkDisplay;

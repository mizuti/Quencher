import React, {PropTypes} from 'react';
import DrinkItem from './DrinkItem';

const DrinkSelection = ({drinkOptions}) => {

    return (
      <div className="container drink-selection-container">
        {drinkOptions.map(drink =>
          <DrinkItem key={drink.id} drink={drink} onClick={}/>
        )}
      </div>
    );
};

DrinkSelection.propTypes = {
  drinkOptions: PropTypes.array.isRequired
};

export default DrinkSelection;

import React, {PropTypes} from 'react';

const DrinkItem = ({drink}) => {
  return (
    <div className="thumbnail drinkItem">
      <i className={"fa fa-coffee fa-5x "+drink.title}></i>
      <h3>{drink.title}</h3>
    </div>
  );
};

DrinkItem.propTypes = {
  drink: PropTypes.object.isRequired
};

export default DrinkItem;

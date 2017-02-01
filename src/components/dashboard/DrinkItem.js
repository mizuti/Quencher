import React, {PropTypes} from 'react';


class DrinkItem extends React.Component {
	constructor(props){
		super(props);
	}

  render() {
    return (
			<div className="thumbnail drinkItem" onClick={this.props.click}>
				<i className={"fa fa-coffee fa-5x " + this.props.drink.title}></i>
				<h3>{this.props.drink.title}</h3>
			</div>
		);
  }
}

DrinkItem.propTypes = {
  drink: PropTypes.object.isRequired,
  click: PropTypes.func
};

export default DrinkItem;

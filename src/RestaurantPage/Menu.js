import React, { Component } from "react";
import Item from "./Item";

class Menu extends Component {
	render() {
		const { menu, onDelete, onIncrement, onDecrement } = this.props;
		return (
			<React.Fragment>
				{menu.itemsName.map((itemName, index) => {
					return (
						<Item
							key={index}
							id={index}
							itemName={itemName}
							itemPrice={menu.itemsPrice[index]}
							quantity={menu.quantitys[index]}
							onIncrement={onIncrement}
							onDecrement={onDecrement}
							onDelete={onDelete}
						/>
					);
				})}
			</React.Fragment>
		);
	}
}
export default Menu;

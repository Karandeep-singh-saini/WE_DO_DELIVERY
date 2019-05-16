import React, { Component } from "react";
import Item from "./Item";

class Menu extends Component {
	render() {
		const { menu, onDelete, onIncrement, onDecrement } = this.props;
		if (menu.itemsName.length > 0) {
			return (
				<React.Fragment>
					<h2 className="text-center">Menu</h2>
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
		} else {
			return <div>Create Menu</div>;
		}
	}
}
export default Menu;

import React, { Component } from "react";
import AppUtilities from "../../utility/utility";

import WE_DO_DELIVERY from "../../we_do_delivery";
/*import { Button, Accordion, Card } from "react-bootstrap";*/
import edit from "../../images/edit.svg";
import deleteIcon from "../../images/deleteIcon.svg";

class MenuContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: {
				itemsName: [
					"Item One",
					"Item Two",
					"Item Three",
					"Item Four",
					"Item Five",
					"Item Six",
					"Item Seven",
					"Item Eight"
				] /*this.props.restaurant._itemsNames*/,
				itemsPrice: [
					20,
					25,
					30,
					35,
					40,
					45,
					50,
					55
				] /* this.props.restaurant._itemsPrice*/,
				quantitys: new Uint8Array(8)
			},
			cart: {
				itemsId: [], //Index of items in menu
				itemsName: [],
				itemsPrice: [],
				quantitys: []
			}
		};

		//use this approach or arrow function approach in order to get access to 'this'(current object)
		/*this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);*/
	}
	handleIncrement = id => {
		console.log("handleIncrement", id);
		let itemsName = [...this.state.menu.itemsName];
		let itemsPrice = [...this.state.menu.itemsPrice];
		let quantitys = [...this.state.menu.quantitys];
		quantitys[id] += 1;

		/*Handling Cart logic  */
		const itemName = itemsName[id];
		let cItemsId = [...this.state.cart.itemsId];
		let cItemsName = [...this.state.cart.itemsName];
		let cItemsPrice = [...this.state.cart.itemsPrice];
		let cQuantitys = [...this.state.cart.quantitys];
		let indexInCart = cItemsName.indexOf(itemName);
		if (indexInCart >= 0) {
			console.log("Item Already in cart");
			cQuantitys[indexInCart] += 1;
		} else {
			console.log("Adding item in Cart");
			cItemsId.push(id);
			cItemsName.push(itemName);
			cItemsPrice.push(itemsPrice[id]);
			cQuantitys.push(quantitys[id]);
		}

		this.setState({
			menu: {
				itemsName: this.state.menu.itemsName,
				itemsPrice: this.state.menu.itemsPrice,
				quantitys: quantitys
			},
			cart: {
				itemsId: cItemsId,
				itemsName: cItemsName,
				itemsPrice: cItemsPrice,
				quantitys: cQuantitys
			}
		});
	};
	handleDecrement = id => {
		console.log("handleDecrement", id);
		let itemsName = [...this.state.menu.itemsName];
		let quantitys = [...this.state.menu.quantitys];
		quantitys[id] -= 1;

		/* Handling Cart logic */
		const itemName = itemsName[id];
		let cItemsId = [...this.state.cart.itemsId];
		let cItemsName = [...this.state.cart.itemsName];
		let cItemsPrice = [...this.state.cart.itemsPrice];
		let cQuantitys = [...this.state.cart.quantitys];
		let indexInCart = cItemsName.indexOf(itemName);
		if (indexInCart >= 0) {
			console.log("Item is present in cart");
			if (cQuantitys[indexInCart] > 1) {
				cQuantitys[indexInCart] -= 1;
			} else {
				cItemsId.splice(indexInCart, 1);
				cItemsName.splice(indexInCart, 1);
				cItemsPrice.splice(indexInCart, 1);
				cQuantitys.splice(indexInCart, 1);
			}
		}

		this.setState({
			menu: {
				itemsName: this.state.menu.itemsName,
				itemsPrice: this.state.menu.itemsPrice,
				quantitys: quantitys
			},
			cart: {
				itemsId: cItemsId,
				itemsName: cItemsName,
				itemsPrice: cItemsPrice,
				quantitys: cQuantitys
			}
		});
	};
	handleDelete = id => {
		console.log("Delete Event", id);
		let itemsName = [...this.state.menu.itemsName];
		let itemsPrice = [...this.state.menu.itemsPrice];
		let quantitys = [...this.state.menu.quantitys];
		itemsName.splice(id, 1);
		itemsPrice.splice(id, 1);
		quantitys.splice(id, 1);
		this.setState({
			menu: {
				itemsName: itemsName,
				itemsPrice: itemsPrice,
				quantitys: quantitys
			}
		});
	};
	handleOrder = async () => {
		const account = await AppUtilities.getAccount();
		const userAccountAddress = account;
		const restaurantAddress = this.props.restaurant._restaurantAddress;
		const itemsId = this.state.cart.itemsId;
		const quantitys = this.state.cart.quantitys;
		var date = new Date();
		var orderId = AppUtilities.convertStringToByte32(
			date.toString() +
				restaurantAddress +
				itemsId.toString() +
				quantitys.toString() +
				userAccountAddress
		);
		console.log("order ID", orderId);
		console.log("Order :", AppUtilities.convertHexToAscii(orderId));
		await WE_DO_DELIVERY.methods
			.placeOrder(restaurantAddress, orderId, itemsId, quantitys)
			.send({ from: userAccountAddress })
			.once("receipt", receipt => {
				console.log("Receipt:", receipt);
			});
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-7">
						<h2 className="text-center">Menu</h2>
						<Menu
							menu={this.state.menu}
							onDelete={this.handleDelete}
							onIncrement={this.handleIncrement}
							onDecrement={this.handleDecrement}
						/>
					</div>

					<div className="col-5" style={{ borderLeft: "solid" }}>
						<h2 className="text-center">Cart</h2>

						<table className="table table-sm">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Menu Id</th>
									<th scope="col">Item Name</th>
									<th scope="col">Item Price</th>
									<th scope="col">Quantity</th>
								</tr>
							</thead>
							<tbody>
								{this.state.cart.itemsName.map(
									(itemName, index) => {
										return (
											<tr key={index + 1}>
												<th scope="row">{index + 1}</th>
												<td>
													{
														this.state.cart.itemsId[
															index
														]
													}
												</td>
												<td>{itemName}</td>
												<td>
													{
														this.state.cart
															.itemsPrice[index]
													}
												</td>
												<td>
													{
														this.state.cart
															.quantitys[index]
													}
												</td>
											</tr>
										);
									}
								)}
							</tbody>
						</table>
						{this.state.cart.itemsName.length > 0 ? (
							<button
								onClick={() => this.handleOrder()}
								className="btn btn-outline-secondary"
							>
								Confirm Order
							</button>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		);
	}
}

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
class Item extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-10">
					<div>
						<span>- {this.props.itemName}</span>
					</div>
					<div>
						<span>
							<b> &#x20B9; </b>
							{this.props.itemPrice}{" "}
						</span>
					</div>
				</div>
				<div className="col">
					<QuantityCounter
						id={this.props.id}
						onIncrement={this.props.onIncrement}
						onDecrement={this.props.onDecrement}
						quantity={this.props.quantity}
					/>
					{/*Include one of this depending upon the owner of
					restaurant*/}
					<ItemAlterationMenu
						id={this.props.id}
						onDelete={this.props.onDelete}
					/>
				</div>
			</div>
		);
	}
}

class ItemAlterationMenu extends Component {
	render() {
		return (
			<div className="input-group input-group-sm">
				<div className="input-group-prepend">
					<button type="button" className="btn btn-outline-secondary">
						<img src={edit} />
					</button>
				</div>
				<div className="input-group-append">
					<button
						type="button"
						className="btn btn-outline-secondary"
						onClick={() => this.props.onDelete(this.props.id)}
					>
						<img src={deleteIcon} />
					</button>
				</div>
			</div>
		);
	}
}

class QuantityCounter extends Component {
	render() {
		const { id, quantity, onIncrement, onDecrement } = this.props;
		return (
			<div className="input-group input-group-sm ">
				<div className="input-group-prepend">
					<button
						type="button"
						className="btn btn-outline-secondary"
						onClick={() => onDecrement(id)}
						disabled={quantity <= 0}
					>
						-
					</button>
				</div>
				<input
					type="text"
					value={quantity}
					className="form-control text-center p-0 "
					disabled={true}
				/>

				<div className="input-group-append">
					<button
						type="button"
						className="btn btn-outline-secondary"
						onClick={() => onIncrement(id)}
					>
						+
					</button>
				</div>
			</div>
		);
	}
}
export default MenuContainer;

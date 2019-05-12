import React, { Component } from "react";
import WE_DO_DELIVERY from "../we_do_delivery";
import AppUtilities from "../utility/utility";
import RestaurantInfo from "./RestaurantInfo/RestaurantInfo";
import MenuContainer from "./MenuContainer/MenuContainer";

class RestaurantPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurantIndex: props.match.params.restaurantIndex,
			restaurant: null,
			loading: true
		};
	}

	componentWillMount() {
		this.getBlockchainData();
	}

	async getBlockchainData() {
		const result = await WE_DO_DELIVERY.methods
			.getRestaurant(this.state.restaurantIndex)
			.call();
		this.setState({ restaurant: result, loading: false });
		console.log(result);
	}
	render() {
		if (this.state.restaurant != null) {
			console.log(
				AppUtilities.convertHexToAscii(this.state.restaurant._name)
			);
		}
		console.log("loading =", this.state.loading);
		return (
			<div className="container">
				{!this.state.loading ? (
					<div>
						<RestaurantInfo restaurant={this.state.restaurant} />
						<hr />
						<MenuContainer restaurant={this.state.restaurant} />
					</div>
				) : (
					<h1>Restaurant : {this.state.restaurant} </h1>
				)}
			</div>
		);
	}
}

export default RestaurantPage;

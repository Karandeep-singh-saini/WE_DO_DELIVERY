import React, { Component } from "react";
import WE_DO_DELIVERY from "../we_do_delivery";
import loader from "../images/loader.svg";
import RestaurantCard from "./RestaurantCard";

class Restaurants extends Component {
	constructor(props) {
		super(props);
		this.state = {
			restaurantCount: 0,
			restaurants: [],
			loading: true
		};
		this.handleRestaurantRegistered = this.handleRestaurantRegistered.bind(
			this
		);
		this.changeRestaurantArrayAsGrid = this.changeRestaurantArrayAsGrid.bind(
			this
		);
	}
	componentWillMount() {
		this.getAllRestaurants();
	}

	async getAllRestaurants() {
		const result = await WE_DO_DELIVERY.methods.getRestaurantCount().call();
		this.state.restaurantCount = result._count;
		console.log(result._count);
		for (var i = 0; i < result._count; i++) {
			var restaurant = await WE_DO_DELIVERY.methods
				.getRestaurant(i)
				.call();
			console.log(restaurant);
			this.state.restaurants.push(restaurant);
		}
		this.handleRestaurantRegistered();
		//	This call will trigger the render method so that it gets updated.
		this.setState({
			restaurants: this.state.restaurants,
			restaurantCount: this.state.restaurantCount,
			loading: false
		});
	}
	handleRestaurantRegistered() {
		WE_DO_DELIVERY.events.RestaurantRegistered(
			{
				/* fromBlock: 0,*/
				toBlock: "latest"
			},
			(error, event) => {
				this.state.restaurants.push(event.returnValues);
				this.setState({ restaurants: this.state.restaurants });
			}
		);
	}
	changeRestaurantArrayAsGrid() {
		let grid = [];
		let _restaurants = [...this.state.restaurants];
		while (_restaurants.length) {
			grid.push(_restaurants.splice(0, 4));
		}
		return grid;
	}

	render() {
		return (
			<div className="container">
				{this.state.loading ? (
					<div className="row">
						<img className="col" src={loader} alt="Loading" />
					</div>
				) : (
					this.changeRestaurantArrayAsGrid().map(function(
						currentRow,
						rowIndex
					) {
						return (
							<div key={rowIndex} className="row">
								{currentRow.map(function(currentObj, index) {
									console.log(currentObj);
									return (
										<div key={index} className="col-3">
											<RestaurantCard
												restaurant={currentObj}
											/>
										</div>
									);
								})}
							</div>
						);
					})
				)}
			</div>
		);
	}
}

export default Restaurants;

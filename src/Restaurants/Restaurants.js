import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import WE_DO_DELIVERY from "../we_do_delivery";
import AppUtilities from "../utility/utility";
import loader from "../images/loader.svg";
import tempRestaurantImg from "../images/tempRestaurantImg.jpg";

class RestaurantCard extends Component {
	render() {
		/* remove null from string after converting from hexToAscii*/
		var name = AppUtilities.convertHexToAscii(this.props.restaurant._name);
		var location = AppUtilities.convertHexToAscii(
			this.props.restaurant._location
		);
		return (
			<Link
				to={{
					pathname: `/restaurants/${
						this.props.restaurant._restaurantIndex
					}`,
					state: {
						restaurant: this.props.restaurant
					}
				}}
			>
				<Card style={{ width: "15rem" }}>
					<Card.Img variant="top" src={tempRestaurantImg} />
					<Card.Body>
						<Card.Title>{name}</Card.Title>
						<Card.Text>{location}</Card.Text>
						<Button variant="primary">Order Now</Button>
					</Card.Body>
				</Card>
			</Link>
		);
	}
}

class Restaurants extends Component {
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
		this.listenForEventRestaurantAdded();
		//	This call will trigger the render method so that it gets updated.
		this.setState({
			restaurants: this.state.restaurants,
			restaurantCount: this.state.restaurantCount,
			loading: false
		});
	}
	listenForEventRestaurantAdded() {
		WE_DO_DELIVERY.events.RestaurantRegistered(
			{
				/* fromBlock: 0,*/
				toBlock: "latest"
			},
			(error, event) => {
				//console.log("Before:",this.state.restaurants)
				this.state.restaurants.push(event.returnValues);

				this.setState({ restaurants: this.state.restaurants });
				/*this.setState(function(state, props) {
					  state.restaurants.push(event.returnValues);
					  return {
					    restaurants: state.restaurants
					  };
					});*/
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
	constructor(props) {
		super(props);
		this.state = {
			restaurantCount: 0,
			restaurants: [],
			loading: true
		};
		this.listenForEventRestaurantAdded = this.listenForEventRestaurantAdded.bind(
			this
		);
		this.changeRestaurantArrayAsGrid = this.changeRestaurantArrayAsGrid.bind(
			this
		);
	}

	render() {
		//console.log("restaurantCount : ",this.state.restaurantCount);
		//console.log("restaurants : ",this.state.restaurants.length);
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

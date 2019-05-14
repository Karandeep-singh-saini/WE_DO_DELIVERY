import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import AppUtilities from "../utility/utility";
import tempRestaurantImg from "../images/tempRestaurantImg.jpg";

class RestaurantCard extends Component {
	render() {
		/* remove null from string after converting from hexToAscii*/
		var name = AppUtilities.convertHexToAscii(this.props.restaurant._name);
		var city = AppUtilities.convertHexToAscii(this.props.restaurant._city);
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
						<Card.Text>{city}</Card.Text>
						<Button variant="primary">Order Now</Button>
					</Card.Body>
				</Card>
			</Link>
		);
	}
}

export default RestaurantCard;

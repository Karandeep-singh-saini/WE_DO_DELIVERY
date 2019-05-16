import React, { Component } from "react";
import AppUtilities from "../utility/utility";
import tempRestaurantImg from "../images/tempRestaurantImg.jpg";
import { Button } from "react-bootstrap";

class RestaurantInfo extends Component {
	render() {
		var name = AppUtilities.convertHexToAscii(this.props.restaurant._name);
		var city = AppUtilities.convertHexToAscii(this.props.restaurant._city);
		return (
			<div className="container">
				<div className="row">
					<div className="col-3">
						<img
							src={tempRestaurantImg}
							width="254"
							height="165"
							alt="Restaurant"
						/>
					</div>

					<div className="col-6">
						<div className="container">
							<div className="row">
								<h1>{name} </h1>
							</div>
							<div className="row">
								<h3>{city}</h3>
							</div>
						</div>
					</div>
					<div className="col-3">
						<Button variant="outline-primary">Add Menu</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default RestaurantInfo;

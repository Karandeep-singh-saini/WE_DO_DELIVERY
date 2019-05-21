import React, { Component } from "react";
import "./Profile.css";
import UserProfile from "./UserProfile";
import RiderProfile from "./RiderProfile";
import RestaurantProfile from "./RestaurantProfile";

class Profile extends Component {
	state = {
		disabled: true
	};
	handleEdit = () => {
		console.log("Editing");
		this.setState({ disabled: !this.state.disabled });
	};
	render() {
		let type = this.props.match.params._type;
		if (type === "user")
			return (
				<UserProfile
					onEdit={this.handleEdit}
					disabled={this.state.disabled}
				/>
			);
		else if (type === "restaurant")
			return (
				<RestaurantProfile
					onEdit={this.handleEdit}
					disabled={this.state.disabled}
					restaurantAccount={this.props.match.params._account}
				/>
			);
		else if (type === "rider")
			return (
				<RiderProfile
					onEdit={this.handleEdit}
					disabled={this.state.disabled}
				/>
			);
		else
			return (
				<div className="container">
					<h1>Error</h1>
				</div>
			);
	}
}

export default Profile;

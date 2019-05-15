import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CustomNavItem extends Component {
	render() {
		return (
			<div className="nav-item">
				<NavLink
					exact
					to={this.props.url}
					className="nav-link"
					style={{ color: "#EEE" }}
				>
					{this.props.text}
				</NavLink>
			</div>
		);
	}
}

export default CustomNavItem;

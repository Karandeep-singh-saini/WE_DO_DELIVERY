import React, { Component } from "react";
import edit from "../images/edit.svg";
import removeIcon from "../images/removeIcon.svg";

class ItemAlterationOptions extends Component {
	render() {
		return (
			<div className="input-group input-group-sm">
				<div className="input-group-prepend">
					<button type="button" className="btn btn-outline-secondary">
						<img src={edit} alt="edit" />
					</button>
				</div>
				<div className="input-group-append">
					<button
						type="button"
						className="btn btn-outline-secondary"
						onClick={() => this.props.onDelete(this.props.id)}
					>
						<img src={removeIcon} alt="remove" />
					</button>
				</div>
			</div>
		);
	}
}

export default ItemAlterationOptions;

import React, { Component } from "react";

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
export default QuantityCounter;

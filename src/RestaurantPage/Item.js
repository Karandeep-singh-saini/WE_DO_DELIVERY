import React, { Component } from "react";
/*import ItemAlterationOptions from "./ItemAlterationOptions";*/
import QuantityCounter from "./QuantityCounter";
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
					{/*<ItemAlterationOptions
						id={this.props.id}
						onDelete={this.props.onDelete}
					/>*/}
				</div>
			</div>
		);
	}
}

export default Item;

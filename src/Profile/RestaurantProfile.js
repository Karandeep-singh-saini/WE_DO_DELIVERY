import React, { Component } from "react";
import edit from "../images/edit.svg";

class RestaurantProfile extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-5">
						<div>
							<h1>RestaurantProfile</h1>
						</div>
						<div className="custom-table-container">
							<img
								className="table-edit-Icon rounded-circle border-info border"
								src={edit}
								alt="Edit"
								onClick={this.props.onEdit}
							/>
							<table className="table">
								<tbody>
									<tr>
										<td>Restaurant Name</td>
										<td>
											<input
												className="form-control"
												disabled={this.props.disabled}
												type="text"
												placeholder="Restaurant Name"
											/>
										</td>
									</tr>
									<tr>
										<td>City</td>
										<td>
											<input
												className="form-control"
												disabled={this.props.disabled}
												type="text"
												placeholder="City"
											/>
										</td>
									</tr>
									<tr>
										<td>Contact Number</td>
										<td>
											<input
												className="form-control"
												disabled={this.props.disabled}
												type="text"
												placeholder="Contact Number"
											/>
										</td>
									</tr>
									<tr>
										<td>Owner Name</td>
										<td>
											<input
												className="form-control"
												disabled={this.props.disabled}
												type="text"
												placeholder="Owner Name"
											/>
										</td>
									</tr>
									<tr>
										<td>Address</td>
										<td>
											<textarea
												className="form-control profile-textarea"
												disabled={this.props.disabled}
												type="text"
												placeholder="Address"
											/>
										</td>
									</tr>
									{!this.props.disabled && (
										<tr>
											<td />
											<td>
												<button
													disabled={
														this.props.disabled
													}
													className="btn btn-info"
												>
													Save
												</button>
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>
					</div>
					<div className="col-7">
						<div>Order History</div>
					</div>
				</div>
			</div>
		);
	}
}
export default RestaurantProfile;

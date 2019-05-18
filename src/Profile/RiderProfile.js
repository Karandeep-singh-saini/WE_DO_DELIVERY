import React, { Component } from "react";
import edit from "../images/edit.svg";

class RiderProfile extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-5">
						<div>
							<h1>RiderProfile</h1>
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
										<td>Name</td>
										<td>
											<input
												className="form-control"
												disabled={this.props.disabled}
												type="text"
												placeholder="Default Name"
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
										<td>Contact</td>
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
										<td>Vehicle Type</td>
										<td>
											<input
												className="form-control"
												disabled={this.props.disabled}
												type="text"
												placeholder="Vehicle Type"
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
export default RiderProfile;

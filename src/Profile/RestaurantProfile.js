import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import edit from "../images/edit.svg";
import loader from "../images/loader.svg";
import WE_DO_DELIVERY from "../we_do_delivery";
import AppUtilities from "../utility/utility";

class RestaurantProfile extends Component {
	state = {
		orders: [],
		restaurantAccount: this.props.restaurantAccount,
		restaurant: null
	};
	componentWillMount() {
		this.getRestaurantByAddress();
	}

	async getRestaurantByAddress() {
		const result = await WE_DO_DELIVERY.methods
			.getRestaurantByAddress(this.state.restaurantAccount)
			.call();
		this.setState({ restaurant: result });
		console.log(result);
	}
	getAllOrders = async () => {
		const account = await AppUtilities.getAccount();
		const restaurantAccount = this.state.restaurantAccount;
		await WE_DO_DELIVERY.events.OrderPlaced(
			{
				filter: {
					_restaurantAddress: restaurantAccount
				},
				fromBlock: 0,
				toBlock: "latest"
			},
			(error, event) => {
				this.state.orders.push(event.returnValues);
				console.log(event);
				this.setState({ orders: this.state.orders });
			}
		);
	};
	render() {
		return (
			<div className="container">
				{this.state.restaurant === null ? (
					<div className="row">
						<img className="col" src={loader} alt="Loading" />
					</div>
				) : (
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
													disabled={
														this.props.disabled
													}
													type="text"
													placeholder="Restaurant Name"
													value={AppUtilities.convertHexToAscii(
														this.state.restaurant
															._name
													)}
												/>
											</td>
										</tr>
										<tr>
											<td>City</td>
											<td>
												<input
													className="form-control"
													disabled={
														this.props.disabled
													}
													type="text"
													placeholder="City"
													value={AppUtilities.convertHexToAscii(
														this.state.restaurant
															._city
													)}
												/>
											</td>
										</tr>
										<tr>
											<td>Contact Number</td>
											<td>
												<input
													className="form-control"
													disabled={
														this.props.disabled
													}
													type="text"
													placeholder="Contact Number"
													value={AppUtilities.convertHexToAscii(
														this.state.restaurant
															._contactNumber
													)}
												/>
											</td>
										</tr>
										<tr>
											<td>Owner Name</td>
											<td>
												<input
													className="form-control"
													disabled={
														this.props.disabled
													}
													type="text"
													placeholder="Owner Name"
													value={AppUtilities.convertHexToAscii(
														this.state.restaurant
															._ownerName
													)}
												/>
											</td>
										</tr>
										<tr>
											<td>Address</td>
											<td>
												<textarea
													className="form-control profile-textarea"
													disabled={
														this.props.disabled
													}
													type="text"
													placeholder="Address"
													value={AppUtilities.convertHexToAscii(
														this.state.restaurant
															._restaurantAddress
													)}
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
							<div>
								<h1>Order History</h1>
								{this.state.orders.length > 0 ? (
									<Accordion>
										{this.state.orders.map(
											(order, index) => {
												return (
													<Card key={index}>
														<Accordion.Toggle
															as={Card.Header}
															eventKey={index}
														>
															OrderId :
															{AppUtilities.convertHexToAscii(
																order._orderId
															)}
														</Accordion.Toggle>

														<Accordion.Collapse
															eventKey={index}
														>
															<Card.Body>
																<table className="table table-sm text-center">
																	<thead>
																		<tr>
																			<th scope="col">
																				#
																			</th>

																			<th scope="col">
																				ItemName
																			</th>

																			<th scope="col">
																				Quantity
																			</th>
																		</tr>
																	</thead>
																	<tbody>
																		{order._itemNames.map(
																			(
																				itemName,
																				index
																			) => {
																				return (
																					<tr
																						key={
																							index +
																							1
																						}
																					>
																						<td scope="row">
																							{index +
																								1}
																						</td>
																						<td>
																							{AppUtilities.convertHexToAscii(
																								itemName
																							)}
																						</td>
																						<td>
																							{
																								order
																									._quantities[
																									index
																								]
																							}
																						</td>
																					</tr>
																				);
																			}
																		)}
																	</tbody>
																</table>
																<span>
																	Total :{" "}
																</span>
																<span>
																	{
																		order._total
																	}
																</span>
															</Card.Body>
														</Accordion.Collapse>
													</Card>
												);
											}
										)}
									</Accordion>
								) : (
									<button
										onClick={() => this.getAllOrders()}
										className="btn btn-primary"
									>
										GetAllOrders
									</button>
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}
export default RestaurantProfile;

import React, { Component } from "react";
import { Button, Jumbotron } from "react-bootstrap";
//import web3 from './web3';
//import WE_DO_DELIVERY from './we_do_delivery'

class Home extends Component {
	render() {
		return (
			<Jumbotron>
				<div className="container">
					<h1>WE DO</h1>
					<p>
						WE DO provides a decentralized platform for asset
						tracking, ride sharing and food delivery.
					</p>
					<p>
						<Button variant="primary">Learn more</Button>
					</p>

					<form className="form-inline">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Location"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit"
						>
							Search
						</button>
					</form>
				</div>
			</Jumbotron>
		);
	}
}
export default Home;

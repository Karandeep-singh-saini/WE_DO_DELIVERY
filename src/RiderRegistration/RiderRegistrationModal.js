import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import web3 from "../web3";
import WE_DO_DELIVERY from "../we_do_delivery";

class RiderRegistrationModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerUser = this.registerRider.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    await this.registerRider(form);
  }
  async registerRider(form) {
    console.log("Rider Registration..");
    const data = new FormData(form);
    console.log("Data :", data);
    var _name = web3.utils.asciiToHex(data.get("_name"));
    var _contactNumber = web3.utils.asciiToHex(data.get("_contactNumber"), 16);
    var _city = web3.utils.asciiToHex(data.get("_city"), 8);
    var _vehicleType = web3.utils.asciiToHex(data.get("_vehicleType"), 8);
    console.log(_name, _contactNumber, _city, _vehicleType);

    await WE_DO_DELIVERY.methods
      .registerRider(_name, _contactNumber, _city, _vehicleType)
      .send({ from: this.props.account })
      .once("receipt", receipt => {
        console.log("Receipt:", receipt);
      });
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <form onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Register Rider
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/*<h4>-------</h4>*/}
            <input
              type="text"
              className="form-control custom-form-control"
              name="_name"
              placeholder="Name"
            />
            <input
              type="text"
              className="form-control custom-form-control"
              name="_contactNumber"
              placeholder="Phone"
            />
            <input
              type="text"
              className="form-control custom-form-control"
              name="_city"
              placeholder="City"
            />
            <input
              type="text"
              className="form-control custom-form-control"
              name="_vehicleType"
              placeholder="Vehicle Type"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Submit</Button>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
export default RiderRegistrationModal;

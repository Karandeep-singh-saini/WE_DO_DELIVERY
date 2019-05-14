import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import web3 from "../web3";
import WE_DO_DELIVERY from "../we_do_delivery";

class UserRegistrationModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    await this.registerUser(form);
  }
  async registerUser(form) {
    console.log("User Registration..");
    const data = new FormData(form);
    console.log("Data :", data);
    var _name = web3.utils.asciiToHex(data.get("_name"));
    var _contactNumber = web3.utils.asciiToHex(data.get("_contactNumber"), 16);
    var _city = web3.utils.asciiToHex(data.get("_city"), 8);

    console.log(_name, _contactNumber, _city);

    await WE_DO_DELIVERY.methods
      .registerUser(_name, _contactNumber, _city)
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
              Register User
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/*<h4>--------</h4>*/}
            <input
              type="text"
              className="form-control custom-form-control"
              name="_name"
              placeholder="First Name"
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

export default UserRegistrationModal;

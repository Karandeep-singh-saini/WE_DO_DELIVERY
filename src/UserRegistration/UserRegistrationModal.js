import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import web3 from "../web3";
import WE_DO_DELIVERY from "../we_do_delivery";

class UserRegistrationModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Register User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>--------</h4>
          <input
            type="text"
            class="form-control custom-form-control"
            name="_userFname"
            placeholder="First Name"
          />
          <input
            type="text"
            class="form-control custom-form-control"
            name="_userLname"
            placeholder="Last Name"
          />
          <input
            type="text"
            class="form-control custom-form-control"
            name="_userContactNumber"
            placeholder="Phone"
          />
          <input
            type="text"
            class="form-control custom-form-control"
            name="_userEmail"
            placeholder="Email"
          />
          <textarea
            class="form-control custom-form-control"
            name="_userAddress"
            placeholder="Address"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button /*onClick={this.props.onHide}*/>Submit</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UserRegistrationModal;

import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import web3 from '../web3';
import WE_DO_DELIVERY from '../we_do_delivery';

class RiderRegistrationModal extends Component {
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
            Register Rider
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>-------</h4>
          <input type="text" class="form-control custom-form-control" name="_riderName" placeholder="Name" />
          <input type="text" class="form-control custom-form-control" name="_riderContactNumber" class="form-control custom-form-control" placeholder="Contact Number" />
          <input type="text" class="form-control custom-form-control" name="_riderCity" placeholder="City" />
          <input type="text" class="form-control custom-form-control" name="_riderVehicleType" placeholder="Vehicle Type" />
        </Modal.Body>
        <Modal.Footer>
          <Button /*onClick={this.props.onHide}*/>Submit</Button>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default RiderRegistrationModal;
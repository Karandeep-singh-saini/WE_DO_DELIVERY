import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import web3 from "../web3";
import WE_DO_DELIVERY from "../we_do_delivery";

class RestaurantRegistrationModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerRestaurant = this.registerRestaurant.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    await this.registerRestaurant(form);
  }
  async registerRestaurant(form) {
    console.log("Restaurant Registration..");
    const data = new FormData(form);
    console.log("Data :", data);

    var _name = web3.utils.asciiToHex(data.get("_name"));
    var _contactNumber = web3.utils.asciiToHex(data.get("_contactNumber"), 16);
    var _city = web3.utils.asciiToHex(data.get("_city"), 8);
    var _ownerName = web3.utils.asciiToHex(data.get("_ownerName"));
    var _restaurantAddress = web3.utils.asciiToHex(
      data.get("_restaurantAddress")
    );
    console.log(_name, _contactNumber, _city, _ownerName, _restaurantAddress);
    /*await WE_DO_DELIVERY.methods.registerRestaurant(_restaurantName,_restaurantCity,_restaurantZip,
        _restaurantOwnerName,_restaurantEmail,_restaurantWebLink,_restaurantAddress).send({from:this.props.account}).once('receipt',(receipt)=>{console.log("Receipt",receipt)});*/
    await WE_DO_DELIVERY.methods
      .registerRestaurant(
        _name,
        _contactNumber,
        _city,
        _ownerName,
        _restaurantAddress
      )
      .send({ from: this.props.account })
      .once("receipt", receipt => {
        console.log("Receipt:", receipt);
        this.props.onAccountRegistered(this.props.account);
      });
  }
  render() {
    var { onHide, show } = this.props;
    return (
      <Modal
        onHide={onHide}
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <form onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Register Restaurant
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/*<h4>------</h4>*/}

            <input
              type="text"
              className="form-control custom-form-control"
              name="_name"
              placeholder="Name"
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
              name="_contactNumber"
              placeholder="Contact Number"
            />
            <input
              type="text"
              className="form-control custom-form-control"
              name="_ownerName"
              placeholder="Owner Name"
            />

            <textarea
              type="text"
              className="form-control custom-form-control"
              name="_restaurantAddress"
              placeholder="Address"
            />
            <div className="input-group custom-form-control">
              <div className="input-group-prepend ">
                <span className="input-group-text" id="inputGroupFileAddon01">
                  Upload
                </span>
              </div>
              <div className="custom-file ">
                <input
                  type="file"
                  className="custom-file-input "
                  name="_restaurantLogo"
                  aria-describedby="inputGroupFileAddon01"
                />
                <label className="custom-file-label" htmlFor="_restaurantLogo">
                  Upload Logo
                </label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Submit</Button>
            <Button onClick={onHide}>Close</Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

export default RestaurantRegistrationModal;

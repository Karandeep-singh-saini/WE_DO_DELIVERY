import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
import web3 from '../web3';
import WE_DO_DELIVERY from '../we_do_delivery';

class RestaurantRegistrationModal extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerRestaurant = this.registerRestaurant.bind(this);
  }

  async handleSubmit(event){
    event.preventDefault();
    console.log("Restaurant Registration..")
    const form = event.target;
    const data = new FormData(form);
    console.log("Data :",data);
    var _restaurantName = web3.utils.asciiToHex(data.get("_restaurantName"));
    var _restaurantCity = web3.utils.asciiToHex(data.get("_restaurantCity"));
    var _restaurantZip = web3.utils.asciiToHex(data.get("_restaurantZip"),8);
    var _restaurantOwnerName = data.get("_restaurantOwnerName");
    var _restaurantEmail = data.get("_restaurantEmail");
    var _restaurantWebLink = data.get("_restaurantWebLink");
    var _restaurantAddress = data.get("_restaurantAddress");
    console.log(_restaurantName,_restaurantCity,_restaurantZip,
        _restaurantOwnerName,_restaurantEmail,_restaurantWebLink,_restaurantAddress);
    /*await WE_DO_DELIVERY.methods.registerRestaurant(_restaurantName,_restaurantCity,_restaurantZip,
        _restaurantOwnerName,_restaurantEmail,_restaurantWebLink,_restaurantAddress).send({from:this.props.account}).once('receipt',(receipt)=>{console.log("Receipt",receipt)});*/
        await WE_DO_DELIVERY.methods.registerRestaurant(_restaurantName,_restaurantCity).send({from:this.props.account}).once('receipt',(receipt)=>{console.log("Receipt:",receipt)});
    
  }
  registerRestaurant(){
    
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
            Register Restaurant
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>------</h4>
          
            <input type="text" className="form-control custom-form-control" name="_restaurantName" placeholder="Name" />
            <input type="text" className="form-control custom-form-control" name="_restaurantCity" placeholder="City" />
            <input type="text" className="form-control custom-form-control" name="_restaurantZip" placeholder="Zip" />
            <input type="text" className="form-control custom-form-control" name="_restaurantOwnerName" placeholder="Owner Name" />
            <input type="text" className="form-control custom-form-control" name="_restaurantEmail" placeholder="Email" />
            <input type="text" className="form-control custom-form-control" name="_restaurantWebLink" placeholder="Website Link" />
            <textarea type="text" className="form-control custom-form-control" name="_restaurantAddress" placeholder="Address" />
            <div className="input-group custom-form-control">
              <div className="input-group-prepend ">
                <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
              </div>
              <div className="custom-file ">
                <input type="file" className="custom-file-input " name="_restaurantLogo" aria-describedby="inputGroupFileAddon01"/>
                <label className="custom-file-label" htmlFor="_restaurantLogo">Upload Logo</label>
              </div>
            </div>


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

export default RestaurantRegistrationModal;
import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import NavigationLink from "./NavigationLink";
import RestaurantRegistrationModal from "../RestaurantRegistration/RestaurantRegistrationModal";
import UserRegistrationModal from "../UserRegistration/UserRegistrationModal";
import RiderRegistrationModal from "../RiderRegistration/RiderRegistrationModal";
import person from "./icons-svg/person.svg";
import web3 from "../web3";

class NavigationLinks extends Component {
  componentWillMount() {
    this.getAccount();
  }
  onAccountChangeEvent() {
    window.ethereum.on("accountsChanged", function(_accounts) {
      console.log(this); /*.setState( { 'account' : _accounts[0] } );*/
    });
  }
  async getAccount() {
    const accounts = await web3.eth.getAccounts();
    /* this.onAccountChangeEvent();*/
    this.setState({ account: accounts[0] });
  }

  constructor(props) {
    super(props);
    this.state = {
      restaurantModal: false,
      riderModal: false,
      userModal: false,
      account: ""
    };
    this.onAccountChangeEvent = this.onAccountChangeEvent.bind(this);
  }
  render() {
    let restaurantModalClose = () => this.setState({ restaurantModal: false });
    let riderModalClose = () => this.setState({ riderModal: false });
    let userModalClose = () => this.setState({ userModal: false });
    return (
      <div className="col-6">
        <div className="row">
          <NavigationLink text="Home" url="/" />
          <NavigationLink text="AboutUs" url="/aboutus" />
          <NavigationLink text="Restaurants" url="/restaurants" />

          <Dropdown>
            <Dropdown.Toggle id="register-dropdown">Register</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => this.setState({ restaurantModal: true })}
              >
                {" "}
                Restaurant{" "}
              </Dropdown.Item>
              <RestaurantRegistrationModal
                show={this.state.restaurantModal}
                onHide={restaurantModalClose}
                account={this.state.account}
              />
              <Dropdown.Item
                onClick={() => this.setState({ riderModal: true })}
              >
                Rider
              </Dropdown.Item>
              <RiderRegistrationModal
                show={this.state.riderModal}
                onHide={riderModalClose}
                account={this.state.account}
              />
              <Dropdown.Item onClick={() => this.setState({ userModal: true })}>
                User
              </Dropdown.Item>
              <UserRegistrationModal
                show={this.state.userModal}
                onHide={userModalClose}
                account={this.state.account}
              />
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle id="account-dropdown" variant="success">
              Account <img src={person} alt="Person" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right">
              <Dropdown.Header>Account Address</Dropdown.Header>
              <Dropdown.Item id="accountAddress">
                {this.state.account}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default NavigationLinks;

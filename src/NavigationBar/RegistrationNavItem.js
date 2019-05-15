import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import RestaurantRegistrationModal from "../RestaurantRegistration/RestaurantRegistrationModal";
import UserRegistrationModal from "../UserRegistration/UserRegistrationModal";
import RiderRegistrationModal from "../RiderRegistration/RiderRegistrationModal";

class RegistrationNavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantModal: false,
      riderModal: false,
      userModal: false
    };
  }

  render() {
    let restaurantModalClose = () => this.setState({ restaurantModal: false });
    let riderModalClose = () => this.setState({ riderModal: false });
    let userModalClose = () => this.setState({ userModal: false });

    return (
      <Dropdown>
        <Dropdown.Toggle id="register-dropdown">Register</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => this.setState({ restaurantModal: true })}
          >
            Restaurant
          </Dropdown.Item>
          <RestaurantRegistrationModal
            {...this.props}
            show={this.state.restaurantModal}
            onHide={restaurantModalClose}
          />
          <Dropdown.Item onClick={() => this.setState({ riderModal: true })}>
            Rider
          </Dropdown.Item>
          <RiderRegistrationModal
            {...this.props}
            show={this.state.riderModal}
            onHide={riderModalClose}
          />
          <Dropdown.Item onClick={() => this.setState({ userModal: true })}>
            User
          </Dropdown.Item>
          <UserRegistrationModal
            {...this.props}
            show={this.state.userModal}
            onHide={userModalClose}
          />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default RegistrationNavItem;

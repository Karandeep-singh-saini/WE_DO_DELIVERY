import React, { Component } from "react";
import CustomNavItem from "./CustomNavItem";
import RegistrationNavItem from "./RegistrationNavItem";
import AccountNavItem from "./AccountNavItem";

class NavItems extends Component {
  render() {
    return (
      <div className="col-6">
        <div className="row">
          <CustomNavItem text="Home" url="/" />
          <CustomNavItem text="AboutUs" url="/aboutus" />
          <CustomNavItem text="Restaurants" url="/restaurants" />
          {this.props.accountType === "3" ? (
            <RegistrationNavItem {...this.props} />
          ) : (
            ""
          )}
          <AccountNavItem {...this.props} />
        </div>
      </div>
    );
  }
}

export default NavItems;

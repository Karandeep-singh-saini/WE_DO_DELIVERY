import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import person from "./icons-svg/person.svg";

class AccountNavItem extends Component {
  render() {
    let { account, accountType } = this.props;
    let type = "";
    let variant = "info";
    let url = "";
    if (accountType === "0") {
      type = "Restaurant";
      url = "account/restaurant/" + account;
    } else if (accountType === "1") {
      type = "Rider";
      url = "account/rider/" + account;
    } else if (accountType === "2") {
      type = "User";
      url = "account/user/" + account;
    } else if (accountType === "3") {
      type = "Unregistered";
      variant = "warning";
    }
    return (
      <Dropdown>
        <Dropdown.Toggle variant={variant} id="dropdown-basic">
          {type} <img src={person} alt="Person" />
        </Dropdown.Toggle>
        {accountType !== "3" && (
          <Dropdown.Menu>
            <Dropdown.Header>
              <b>
                {account.substr(0, 6) +
                  "...." +
                  account.substr(account.length - 4, account.length)}
              </b>
            </Dropdown.Header>
            <Dropdown.Divider />
            <NavLink exact to={url} className="dropdown-item">
              View Account
            </NavLink>
          </Dropdown.Menu>
        )}
      </Dropdown>
    );
  }
}

export default AccountNavItem;

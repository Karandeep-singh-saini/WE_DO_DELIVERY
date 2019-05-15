import React, { Component } from "react";
import person from "./icons-svg/person.svg";

class AccountNavItem extends Component {
  render() {
    let { account, accountType } = this.props;
    let type = "";
    let badgeClass = "disabled btn btn-";
    if (accountType === "0") {
      type = "Restaurant";
      badgeClass += "info";
    } else if (accountType === "1") {
      type = "Rider";
      badgeClass += "info";
    } else if (accountType === "2") {
      type = "User";
      badgeClass += "info";
    } else if (accountType === "3") {
      type = "Unregistered";
      badgeClass += "warning";
    }
    return (
      <span
        className={badgeClass}
        data-toggle="tooltip"
        data-placement="bottom"
        title={account}
      >
        {type} <img src={person} alt="Person" />
      </span>
    );
  }
}

export default AccountNavItem;

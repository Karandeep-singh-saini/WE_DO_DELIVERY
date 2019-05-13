import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import "./HeadNavBar.css";

class HeadNavBar extends Component {
  render() {
    return (
      <Navbar className="fixed-top header">
        <div className="container">
          <Logo />
          {/* <SearchForm/>*/}
          <NavigationLinks {...this.props} />
        </div>
      </Navbar>
    );
  }
}

/*class SearchForm extends Component{
  render(){
    return(
         <div className="col-5">
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Location" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
      );
  }
}*/

export default HeadNavBar;

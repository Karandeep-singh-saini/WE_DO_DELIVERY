import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer id="footer" className="footer font-small indigo">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">About Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Links
              </h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2019 Copyright:
          <a href="#"> WE DO</a>
        </div>
      </footer>
    );
  }
}

export default Footer;

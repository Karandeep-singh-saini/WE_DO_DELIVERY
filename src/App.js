import React, { Component } from "react";
import web3 from "./web3";
import WE_DO_DELIVERY from "./we_do_delivery";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import HeadNavBar from "./NavigationBar/HeadNavBar";
import Restaurants from "./Restaurants/Restaurants";
import RestaurantPage from "./RestaurantPage/RestaurantPage";
import Footer from "./Footer/Footer";
import Home from "./HomePage/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      accountType: ""
    };

    this.onAccountChangeEvent = this.onAccountChangeEvent.bind(this);
  }

  componentWillMount() {
    this.onAccountChangeEvent();
    this.getAccount();
  }
  async onAccountChangeEvent() {
    window.ethereum.on("accountsChanged", async accounts => {
      var result = await WE_DO_DELIVERY.methods
        .getAccountType()
        .call({ from: accounts[0] });
      console.log(result);
      this.setState({
        account: result._address,
        accountType: result._accountType
      });
    });
  }
  handleAccountRegistered = async account => {
    var result = await WE_DO_DELIVERY.methods
      .getAccountType()
      .call({ from: account });
    console.log(result);
    this.setState({
      account: result._address,
      accountType: result._accountType
    });
  };
  async getAccount() {
    const accounts = await web3.eth.getAccounts();
    var result = await WE_DO_DELIVERY.methods
      .getAccountType()
      .call({ from: accounts[0] });
    console.log(result);
    this.setState({
      account: result._address,
      accountType: result._accountType
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div id="page-container">
          <HeadNavBar
            account={this.state.account}
            accountType={this.state.accountType}
            onAccountRegistered={this.handleAccountRegistered}
          />
          <div id="content-wrap">
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurants" component={Restaurants} />
            <Route
              exact
              path="/restaurants/:restaurantIndex"
              component={RestaurantPage}
            />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

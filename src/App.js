import React, { Component } from "react";
//import web3 from './web3';
//import WE_DO_DELIVERY from './we_do_delivery'
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import HeadNavBar from "./NavigationBar/HeadNavBar";
import Restaurants from "./Restaurants/Restaurants";
import RestaurantPage from "./RestaurantPage/RestaurantPage";
import Footer from "./Footer/Footer";
import Home from "./HomePage/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="page-container">
          <HeadNavBar />
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

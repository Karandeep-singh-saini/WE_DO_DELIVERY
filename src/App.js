import React, { Component } from 'react';
//import web3 from './web3';
//import WE_DO_DELIVERY from './we_do_delivery'
import {Route ,BrowserRouter} from 'react-router-dom';

import './App.css';
import HeadNavBar from './NavigationBar/HeadNavBar';
import Restaurants from './Restaurants/Restaurants';
import RestaurantPage from './RestaurantPage/RestaurantPage';
import Footer from './Footer/Footer';
import Home from './HomePage/Home';

class App extends Component {

  componentWillMount(){
    this.loadBlockchainData()
  }

  async loadBlockchainData(){
    /*this.setState( { WE_DO_DELIVERY } );
    const restaurantCount = await WE_DO_DELIVERY.methods.getRestaurantCount().call();
    console.log('Restaurant Count :',restaurantCount);
    console.log("WE_DO_DELIVERY :",WE_DO_DELIVERY);
    console.log('Account :',accounts[0]);*/
  }

  constructor(props){
    super(props);
    this.state = {
      

    };
  }

  render() {
    return (
      <BrowserRouter>
        <div id='page-container'>
          <HeadNavBar/>
          <div id='content-wrap'>
            <Route exact path="/" component={Home} />
            <Route exact path="/restaurants" component={Restaurants}/>
            <Route exact path="/restaurants/:restaurantIndex" component={RestaurantPage}/>
          </div>
          <Footer/>

          
        </div>
      </BrowserRouter>
      
    );
  }
}


export default App;

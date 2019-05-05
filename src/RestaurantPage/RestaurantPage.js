import React, { Component } from 'react';
import WE_DO_DELIVERY from '../we_do_delivery';
import AppUtilities from '../utility/utility';
import {Button,InputGroup,FormControl} from 'react-bootstrap';
import tempRestaurantImg from '../images/tempRestaurantImg.jpg';




class RestaurantPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			restaurantIndex :props.match.params.restaurantIndex,
			restaurant : null,
			loading : true
		}
	}

	componentWillMount(){
		this.getBlockchainData();
	}

	async getBlockchainData(){
		const result = await WE_DO_DELIVERY.methods.getRestaurant(this.state.restaurantIndex).call();
    	this.setState({'restaurant': result , 'loading':false})
    	console.log(result);
	}
	render(){
		if(this.state.restaurant!=null){
				console.log(AppUtilities.convertHexToAscii(this.state.restaurant._name));
		}
		console.log('loading =',this.state.loading)
		return(
			<div className="container">
			{
				(!this.state.loading)
				?<div>
					<RestaurantHeadDiv restaurant={this.state.restaurant}  />
					<hr/>
				 	<MenuContent restaurant={this.state.restaurant} />
				 </div>
				:<h1>Restaurant : {this.state.restaurant} </h1>
			}
			
			</div>
						
			);
	}
}
class RestaurantHeadDiv extends Component{
	render(){
			var name = AppUtilities.convertHexToAscii(this.props.restaurant._name);
			var location = AppUtilities.convertHexToAscii(this.props.restaurant._location)
		return(
			<div className='container'>
				<div className='row' >
					<div className='col-3'>
						<img src={tempRestaurantImg} width="254" height="165" alt='Restaurant' />
					</div>
					<div className='col-9'>
						<div className='container'>
							<div className='row' >
								<h1>{name} </h1>
							</div>
							<div className='row' >
								<h3>{location}</h3>
							</div>
						</div>
					</div>
				</div>
				
			</div>

			);
	}
}
class MenuContent extends Component{

	render(){
		var itemsName = this.props.restaurant._itemsNames;
		var itemsPrice = this.props.restaurant._itemsPrice;
		console.log('ItemsName =  ',itemsName);
		itemsName = ['Item One' , 'Item Two'];
		itemsPrice = [20,25]
		return(
				<div className='container'>
					<div className='row'>
						<div className='col-7'>
						{
							itemsName.map(function(value,index){
								return(
									<div key={index} className='row'>
										<div className='col-2'>
											<img alt='ITEM'/>
										</div>
										<div className='col-6'>
											<div><span>{value}</span></div>
											<div>&#x20B9; {itemsPrice[index]}</div>
											
										</div>
										<div className='col-3'>
											<InputGroup className="sm">
											    <InputGroup.Prepend>
											      <Button variant="outline-secondary">-</Button>
											    </InputGroup.Prepend>
											    <FormControl  aria-describedby="basic-addon1" />
											    <InputGroup.Append>
											      <Button variant="outline-secondary">+</Button>
											    </InputGroup.Append>
										 	 </InputGroup>
										</div>

									</div>
									
								)
							})
						}
						</div>
						<div className='col-5'>
							<h2>Cart</h2>
						</div>
					</div>	
				</div>
			);
	}
}


export default RestaurantPage;
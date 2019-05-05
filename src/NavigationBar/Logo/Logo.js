import React, { Component } from 'react';


class Logo extends Component{
  render(){
    return(
        <div className='col-1' >
            <a style={{color:'#EEE'}}className='navbar-brand' href='/'>
              WE DO
            </a>
        </div>
      );
  }
}

export default Logo;
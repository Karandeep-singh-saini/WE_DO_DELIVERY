import Web3 from 'web3';
const web3 = new Web3( window.ethereum || Web3.givenProvider || 'http://localhost:7545');
export default web3;
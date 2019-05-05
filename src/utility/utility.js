import web3 from '../web3.js'

const AppUtilities = {

	removeNull :function(value){
		return value.replace(/\0/g, '');
	} ,

	convertHexToAscii : function(value){
		return AppUtilities.removeNull(web3.utils.hexToAscii(value))
	}
}

export default AppUtilities;
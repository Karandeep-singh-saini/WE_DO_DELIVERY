import web3 from "../web3.js";
var crypto = require("crypto");

const AppUtilities = {
	removeNull: function(value) {
		return value.replace(/\0/g, "");
	},

	convertHexToAscii: function(value) {
		return AppUtilities.removeNull(web3.utils.hexToAscii(value));
	},
	getAccount: async function() {
		const accounts = await web3.eth.getAccounts();
		return accounts[0];
	},
	convertStringToByte32: function(value) {
		let hash = crypto.createHash("md5");
		return web3.utils.fromAscii(hash.update(value).digest("hex"));
	}
};

export default AppUtilities;

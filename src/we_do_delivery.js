import web3 from './web3';

const WE_DO_DELIVERY_ADDRESS = '0xf5C172Cf664703aC65FBfa87A0D5d0b2A9c873A9';
const WE_DO_DELIVERY_ABI = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "usersArray",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x2fae35c0"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "ridersArray",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x93dc7586"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "name": "name",
          "type": "bytes32"
        },
        {
          "name": "registered",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xa87430ba"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "riders",
      "outputs": [
        {
          "name": "name",
          "type": "bytes32"
        },
        {
          "name": "registered",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xad4c9558"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_restaurantIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_name",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_location",
          "type": "bytes32"
        }
      ],
      "name": "RestaurantRegistered",
      "type": "event",
      "signature": "0x4a246548fde62618b0573be9d0d4b4404c26527553d4b9cd0f5067b19092bebd"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "restaurantAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_itemNames",
          "type": "bytes32[]"
        },
        {
          "indexed": false,
          "name": "_itemPriceList",
          "type": "uint32[]"
        }
      ],
      "name": "RestaurantMenuChanged",
      "type": "event",
      "signature": "0xa6f5a73517a8333b460c41e2e97eae47e7670731de23f9215daddf2e69d35a0a"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "restaurantAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "name",
          "type": "bytes32"
        }
      ],
      "name": "RiderRegistered",
      "type": "event",
      "signature": "0x15492c2e3bf282ac310b33e7492f9aa1a5c24986421c0482644e5b21b2381769"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "restaurantAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "name",
          "type": "bytes32"
        }
      ],
      "name": "UserRegistered",
      "type": "event",
      "signature": "0x4c5d15f5779ae1ecd7d55bd3283d898e29c35743d172bd7b83a16e17bc0afe2a"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_restaurantAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_orderId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_itemNames",
          "type": "bytes32[]"
        },
        {
          "indexed": false,
          "name": "_quantities",
          "type": "uint32[]"
        },
        {
          "indexed": false,
          "name": "_total",
          "type": "uint256"
        }
      ],
      "name": "OrderPlaced",
      "type": "event",
      "signature": "0xb6c27a44a8a9dc09ad56c01a324fdc597b62721afac13c5287c8d64ec553aae8"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_orderId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "_confirmation",
          "type": "bool"
        }
      ],
      "name": "OrderConfirmed",
      "type": "event",
      "signature": "0xbb94efa6810f9cbbb0ea2f6f5143e585ab4d09406e9c8ba65c601c1006c88980"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "bytes32"
        },
        {
          "name": "_location",
          "type": "bytes32"
        },
        {
          "name": "_itemNameList",
          "type": "bytes32[]"
        },
        {
          "name": "_itemPriceList",
          "type": "uint32[]"
        }
      ],
      "name": "registerRestaurant",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x46635f61"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "bytes32"
        },
        {
          "name": "_location",
          "type": "bytes32"
        }
      ],
      "name": "registerRestaurant",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xe885739a"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_itemNameList",
          "type": "bytes32[]"
        },
        {
          "name": "_itemPriceList",
          "type": "uint32[]"
        }
      ],
      "name": "addMenu",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x64323374"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getRestaurantCount",
      "outputs": [
        {
          "name": "_count",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x9d93b640"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "getRestaurant",
      "outputs": [
        {
          "name": "_restaurantIndex",
          "type": "uint256"
        },
        {
          "name": "_name",
          "type": "bytes32"
        },
        {
          "name": "_location",
          "type": "bytes32"
        },
        {
          "name": "_itemsNames",
          "type": "bytes32[]"
        },
        {
          "name": "_itemsPrice",
          "type": "uint32[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc298f1e7"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "bytes32"
        }
      ],
      "name": "registerRider",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x6a9c7c2f"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "bytes32"
        }
      ],
      "name": "registerUser",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x2dc03259"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_restaurantAddress",
          "type": "address"
        },
        {
          "name": "_orderId",
          "type": "bytes32"
        },
        {
          "name": "_itemIdList",
          "type": "uint32[]"
        },
        {
          "name": "_quantityList",
          "type": "uint32[]"
        }
      ],
      "name": "placeOrder",
      "outputs": [
        {
          "name": "_total",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x093b89ee"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_orderId",
          "type": "bytes32"
        },
        {
          "name": "_confirmation",
          "type": "bool"
        }
      ],
      "name": "updateOrderStatus",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xc529fa2a"
    }
  ];
  const contract = web3.eth.Contract(WE_DO_DELIVERY_ABI ,WE_DO_DELIVERY_ADDRESS);
  export default contract
import web3 from "./web3";

const WE_DO_DELIVERY_ADDRESS = "0x16da302EBC2dCa377d40f96A0BC2c2c1144d11cb";
const WE_DO_DELIVERY_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: "_restaurantAddress",
        type: "address"
      },
      {
        name: "_orderId",
        type: "bytes32"
      },
      {
        name: "_itemIdList",
        type: "uint32[]"
      },
      {
        name: "_quantityList",
        type: "uint32[]"
      }
    ],
    name: "placeOrder",
    outputs: [
      {
        name: "_total",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "usersArray",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_restaurantAccount",
        type: "address"
      }
    ],
    name: "getMenu",
    outputs: [
      {
        name: "_itemsNames",
        type: "bytes32[]"
      },
      {
        name: "_itemsPrice",
        type: "uint32[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getAccountType",
    outputs: [
      {
        name: "_address",
        type: "address"
      },
      {
        name: "_accountType",
        type: "uint8"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_itemNameList",
        type: "bytes32[]"
      },
      {
        name: "_itemPriceList",
        type: "uint32[]"
      }
    ],
    name: "addMenu",
    outputs: [
      {
        name: "_success",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_restaurantAccount",
        type: "address"
      }
    ],
    name: "getRestaurantByAddress",
    outputs: [
      {
        name: "_name",
        type: "bytes32"
      },
      {
        name: "_contactNumber",
        type: "bytes16"
      },
      {
        name: "_city",
        type: "bytes8"
      },
      {
        name: "_ownerName",
        type: "bytes32"
      },
      {
        name: "_restaurantAddress",
        type: "bytes32"
      },
      {
        name: "_itemsNames",
        type: "bytes32[]"
      },
      {
        name: "_itemsPrice",
        type: "uint32[]"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "bytes32"
      },
      {
        name: "_contactNumber",
        type: "bytes16"
      },
      {
        name: "_city",
        type: "bytes8"
      }
    ],
    name: "registerUser",
    outputs: [
      {
        name: "_success",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "bytes32"
      },
      {
        name: "_contactNumber",
        type: "bytes16"
      },
      {
        name: "_city",
        type: "bytes8"
      },
      {
        name: "_ownerName",
        type: "bytes32"
      },
      {
        name: "_restaurantAddress",
        type: "bytes32"
      }
    ],
    name: "registerRestaurant",
    outputs: [
      {
        name: "_success",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "ridersArray",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getRestaurantCount",
    outputs: [
      {
        name: "_count",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "users",
    outputs: [
      {
        name: "userAccount",
        type: "address"
      },
      {
        name: "name",
        type: "bytes32"
      },
      {
        name: "contactNumber",
        type: "bytes16"
      },
      {
        name: "city",
        type: "bytes8"
      },
      {
        name: "registered",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "riders",
    outputs: [
      {
        name: "riderAccount",
        type: "address"
      },
      {
        name: "name",
        type: "bytes32"
      },
      {
        name: "contactNumber",
        type: "bytes16"
      },
      {
        name: "city",
        type: "bytes8"
      },
      {
        name: "vehicleType",
        type: "bytes8"
      },
      {
        name: "registered",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "_index",
        type: "uint256"
      }
    ],
    name: "getRestaurant",
    outputs: [
      {
        name: "_restaurantAccount",
        type: "address"
      },
      {
        name: "_name",
        type: "bytes32"
      },
      {
        name: "_contactNumber",
        type: "bytes16"
      },
      {
        name: "_city",
        type: "bytes8"
      },
      {
        name: "_ownerName",
        type: "bytes32"
      },
      {
        name: "_restaurantAddress",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_orderId",
        type: "bytes32"
      },
      {
        name: "_confirmation",
        type: "bool"
      }
    ],
    name: "updateOrderStatus",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_name",
        type: "bytes32"
      },
      {
        name: "_contactNumber",
        type: "bytes16"
      },
      {
        name: "_city",
        type: "bytes8"
      },
      {
        name: "_vehicleType",
        type: "bytes8"
      }
    ],
    name: "registerRider",
    outputs: [
      {
        name: "_success",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_restaurantIndex",
        type: "uint256"
      },
      {
        indexed: false,
        name: "_restaurantAddress",
        type: "address"
      },
      {
        indexed: false,
        name: "_name",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "_city",
        type: "bytes32"
      }
    ],
    name: "RestaurantRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "restaurantAddress",
        type: "address"
      },
      {
        indexed: false,
        name: "_itemNames",
        type: "bytes32[]"
      },
      {
        indexed: false,
        name: "_itemPriceList",
        type: "uint32[]"
      }
    ],
    name: "RestaurantMenuChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "restaurantAddress",
        type: "address"
      }
    ],
    name: "RiderRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "restaurantAddress",
        type: "address"
      }
    ],
    name: "UserRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "_restaurantAddress",
        type: "address"
      },
      {
        indexed: false,
        name: "_orderId",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "_itemNames",
        type: "bytes32[]"
      },
      {
        indexed: false,
        name: "_quantities",
        type: "uint32[]"
      },
      {
        indexed: false,
        name: "_total",
        type: "uint256"
      }
    ],
    name: "OrderPlaced",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "_orderId",
        type: "bytes32"
      },
      {
        indexed: false,
        name: "_confirmation",
        type: "bool"
      }
    ],
    name: "OrderConfirmed",
    type: "event"
  }
];
const contract = web3.eth.Contract(WE_DO_DELIVERY_ABI, WE_DO_DELIVERY_ADDRESS);
export default contract;

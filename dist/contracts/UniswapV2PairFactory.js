"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV2PairFactory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class UniswapV2PairFactory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new contracts_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.UniswapV2PairFactory = UniswapV2PairFactory;
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "Burn",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1",
                type: "uint256"
            }
        ],
        name: "Mint",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0In",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1In",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "Swap",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint112",
                name: "reserve0",
                type: "uint112"
            },
            {
                indexed: false,
                internalType: "uint112",
                name: "reserve1",
                type: "uint112"
            }
        ],
        name: "Sync",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "MINIMUM_LIQUIDITY",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "PERMIT_TYPEHASH",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "factory",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "kLast",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "nonces",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            },
            {
                internalType: "uint8",
                name: "v",
                type: "uint8"
            },
            {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
            }
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "price0CumulativeLast",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "price1CumulativeLast",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "token0",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "token1",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getReserves",
        outputs: [
            {
                internalType: "uint112",
                name: "_reserve0",
                type: "uint112"
            },
            {
                internalType: "uint112",
                name: "_reserve1",
                type: "uint112"
            },
            {
                internalType: "uint32",
                name: "_blockTimestampLast",
                type: "uint32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token0",
                type: "address"
            },
            {
                internalType: "address",
                name: "_token1",
                type: "address"
            }
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "mint",
        outputs: [
            {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "burn",
        outputs: [
            {
                internalType: "uint256",
                name: "amount0",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amount1",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amount0Out",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amount1Out",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes"
            }
        ],
        name: "swap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address"
            }
        ],
        name: "skim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "sync",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
const _bytecode = "0x60806040526001600c5534801561001557600080fd5b5060004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6040518060400160405280601281526020017f537573686953776170204c5020546f6b656e0000000000000000000000000000815250805190602001206040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250805190602001208330604051602001808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050604051602081830303815290604052805190602001206003819055505033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550613b20806101676000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610869578063d505accf1461089d578063dd62ed3e14610936578063fff6cae9146109ae576101a9565b8063ba9a7a56146107d3578063bc25cf77146107f1578063c45a015514610835576101a9565b80637ecebe00116100d35780637ecebe001461063557806389afcb441461068d57806395d89b41146106ec578063a9059cbb1461076f576101a9565b80636a6278421461056757806370a08231146105bf5780637464fc3d14610617576101a9565b806323b872dd116101665780633644e515116101405780633644e515146104a9578063485cc955146104c75780635909c0d51461052b5780635a3d549314610549576101a9565b806323b872dd146103e657806330adf81f1461046a578063313ce56714610488576101a9565b8063022c0d9f146101ae57806306fdde031461025b5780630902f1ac146102de578063095ea7b3146103305780630dfe16811461039457806318160ddd146103c8575b600080fd5b610259600480360360808110156101c457600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561021557600080fd5b82018360208201111561022757600080fd5b8035906020019184600183028401116401000000008311171561024957600080fd5b90919293919293905050506109b8565b005b610263611163565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102a3578082015181840152602081019050610288565b50505050905090810190601f1680156102d05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102e661119c565b60405180846dffffffffffffffffffffffffffff168152602001836dffffffffffffffffffffffffffff1681526020018263ffffffff168152602001935050505060405180910390f35b61037c6004803603604081101561034657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506111f9565b60405180821515815260200191505060405180910390f35b61039c611210565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103d0611236565b6040518082815260200191505060405180910390f35b610452600480360360608110156103fc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061123c565b60405180821515815260200191505060405180910390f35b610472611407565b6040518082815260200191505060405180910390f35b61049061142e565b604051808260ff16815260200191505060405180910390f35b6104b1611433565b6040518082815260200191505060405180910390f35b610529600480360360408110156104dd57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611439565b005b610533611582565b6040518082815260200191505060405180910390f35b610551611588565b6040518082815260200191505060405180910390f35b6105a96004803603602081101561057d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061158e565b6040518082815260200191505060405180910390f35b610601600480360360208110156105d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611cbc565b6040518082815260200191505060405180910390f35b61061f611cd4565b6040518082815260200191505060405180910390f35b6106776004803603602081101561064b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611cda565b6040518082815260200191505060405180910390f35b6106cf600480360360208110156106a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611cf2565b604051808381526020018281526020019250505060405180910390f35b6106f4612287565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610734578082015181840152602081019050610719565b50505050905090810190601f1680156107615780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107bb6004803603604081101561078557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506122c0565b60405180821515815260200191505060405180910390f35b6107db6122d7565b6040518082815260200191505060405180910390f35b6108336004803603602081101561080757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506122dd565b005b61083d61258c565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108716125b2565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610934600480360360e08110156108b357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803560ff16906020019092919080359060200190929190803590602001909291905050506125d8565b005b6109986004803603604081101561094c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506128ed565b6040518082815260200191505060405180910390f35b6109b6612912565b005b6001600c5414610a30576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f556e697377617056323a204c4f434b454400000000000000000000000000000081525060200191505060405180910390fd5b6000600c819055506000851180610a475750600084115b610a9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180613a316025913960400191505060405180910390fd5b600080610aa761119c565b5091509150816dffffffffffffffffffffffffffff1687108015610ada5750806dffffffffffffffffffffffffffff1686105b610b2f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180613a7a6021913960400191505060405180910390fd5b6000806000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508173ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1614158015610be857508073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1614155b610c5a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f556e697377617056323a20494e56414c49445f544f000000000000000000000081525060200191505060405180910390fd5b60008b1115610c6f57610c6e828a8d612b66565b5b60008a1115610c8457610c83818a8c612b66565b5b6000888890501115610d56578873ffffffffffffffffffffffffffffffffffffffff166310d1e85c338d8d8c8c6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b158015610d3d57600080fd5b505af1158015610d51573d6000803e3d6000fd5b505050505b8173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610dbd57600080fd5b505afa158015610dd1573d6000803e3d6000fd5b505050506040513d6020811015610de757600080fd5b810190808051906020019092919050505093508073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610e6157600080fd5b505afa158015610e75573d6000803e3d6000fd5b505050506040513d6020811015610e8b57600080fd5b810190808051906020019092919050505092505050600089856dffffffffffffffffffffffffffff16038311610ec2576000610ed8565b89856dffffffffffffffffffffffffffff160383035b9050600089856dffffffffffffffffffffffffffff16038311610efc576000610f12565b89856dffffffffffffffffffffffffffff160383035b90506000821180610f235750600081115b610f78576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180613a566024913960400191505060405180910390fd5b6000610fb4610f91600385612d9d90919063ffffffff16565b610fa66103e888612d9d90919063ffffffff16565b612e3290919063ffffffff16565b90506000610ff2610fcf600385612d9d90919063ffffffff16565b610fe46103e888612d9d90919063ffffffff16565b612e3290919063ffffffff16565b905061103c620f424061102e896dffffffffffffffffffffffffffff168b6dffffffffffffffffffffffffffff16612d9d90919063ffffffff16565b612d9d90919063ffffffff16565b61104f8284612d9d90919063ffffffff16565b10156110c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f556e697377617056323a204b000000000000000000000000000000000000000081525060200191505060405180910390fd5b50506110d184848888612eb5565b8873ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d82284848f8f6040518085815260200184815260200183815260200182815260200194505050505060405180910390a35050505050506001600c819055505050505050565b6040518060400160405280601281526020017f537573686953776170204c5020546f6b656e000000000000000000000000000081525081565b6000806000600860009054906101000a90046dffffffffffffffffffffffffffff1692506008600e9054906101000a90046dffffffffffffffffffffffffffff1691506008601c9054906101000a900463ffffffff169050909192565b6000611206338484613213565b6001905092915050565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60005481565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146113f15761137082600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612e3290919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b6113fc8484846132fe565b600190509392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b601281565b60035481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146114fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f556e697377617056323a20464f5242494444454e00000000000000000000000081525060200191505060405180910390fd5b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60095481565b600a5481565b60006001600c5414611608576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f556e697377617056323a204c4f434b454400000000000000000000000000000081525060200191505060405180910390fd5b6000600c8190555060008061161b61119c565b50915091506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156116ab57600080fd5b505afa1580156116bf573d6000803e3d6000fd5b505050506040513d60208110156116d557600080fd5b810190808051906020019092919050505090506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561177357600080fd5b505afa158015611787573d6000803e3d6000fd5b505050506040513d602081101561179d57600080fd5b8101908080519060200190929190505050905060006117d5856dffffffffffffffffffffffffffff1684612e3290919063ffffffff16565b905060006117fc856dffffffffffffffffffffffffffff1684612e3290919063ffffffff16565b9050600061180a8787613492565b90506000805490506000811415611b07576000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637cd07e476040518163ffffffff1660e01b815260040160206040518083038186803b15801561188557600080fd5b505afa158015611899573d6000803e3d6000fd5b505050506040513d60208110156118af57600080fd5b810190808051906020019092919050505090508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611a20578073ffffffffffffffffffffffffffffffffffffffff166340dc0e376040518163ffffffff1660e01b815260040160206040518083038186803b15801561193c57600080fd5b505afa158015611950573d6000803e3d6000fd5b505050506040513d602081101561196657600080fd5b8101908080519060200190929190505050995060008a1180156119a957507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8a14155b611a1b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4261642064657369726564206c6971756964697479000000000000000000000081525060200191505060405180910390fd5b611b01565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611ac2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f4d757374206e6f742068617665206d69677261746f720000000000000000000081525060200191505060405180910390fd5b611af16103e8611ae3611ade8789612d9d90919063ffffffff16565b613673565b612e3290919063ffffffff16565b9950611b0060006103e86136d5565b5b50611b6a565b611b67886dffffffffffffffffffffffffffff16611b2e8387612d9d90919063ffffffff16565b81611b3557fe5b04886dffffffffffffffffffffffffffff16611b5a8487612d9d90919063ffffffff16565b81611b6157fe5b046137ef565b98505b60008911611bc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180613ac36028913960400191505060405180910390fd5b611bcd8a8a6136d5565b611bd986868a8a612eb5565b8115611c5157611c4a6008600e9054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff16600860009054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff16612d9d90919063ffffffff16565b600b819055505b3373ffffffffffffffffffffffffffffffffffffffff167f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f8585604051808381526020018281526020019250505060405180910390a250505050505050506001600c81905550919050565b60016020528060005260406000206000915090505481565b600b5481565b60046020528060005260406000206000915090505481565b6000806001600c5414611d6d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f556e697377617056323a204c4f434b454400000000000000000000000000000081525060200191505060405180910390fd5b6000600c81905550600080611d8061119c565b50915091506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611e3c57600080fd5b505afa158015611e50573d6000803e3d6000fd5b505050506040513d6020811015611e6657600080fd5b8101908080519060200190929190505050905060008273ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611ee257600080fd5b505afa158015611ef6573d6000803e3d6000fd5b505050506040513d6020811015611f0c57600080fd5b810190808051906020019092919050505090506000600160003073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000611f6f8888613492565b905060008054905080611f8b8685612d9d90919063ffffffff16565b81611f9257fe5b049a5080611fa98585612d9d90919063ffffffff16565b81611fb057fe5b04995060008b118015611fc3575060008a115b612018576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180613a9b6028913960400191505060405180910390fd5b6120223084613808565b61202d878d8d612b66565b612038868d8c612b66565b8673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561209f57600080fd5b505afa1580156120b3573d6000803e3d6000fd5b505050506040513d60208110156120c957600080fd5b810190808051906020019092919050505094508573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561214357600080fd5b505afa158015612157573d6000803e3d6000fd5b505050506040513d602081101561216d57600080fd5b8101908080519060200190929190505050935061218c85858b8b612eb5565b8115612204576121fd6008600e9054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff16600860009054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff16612d9d90919063ffffffff16565b600b819055505b8b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d819364968d8d604051808381526020018281526020019250505060405180910390a35050505050505050506001600c81905550915091565b6040518060400160405280600381526020017f534c50000000000000000000000000000000000000000000000000000000000081525081565b60006122cd3384846132fe565b6001905092915050565b6103e881565b6001600c5414612355576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f556e697377617056323a204c4f434b454400000000000000000000000000000081525060200191505060405180910390fd5b6000600c819055506000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506124958284612490600860009054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561244757600080fd5b505afa15801561245b573d6000803e3d6000fd5b505050506040513d602081101561247157600080fd5b8101908080519060200190929190505050612e3290919063ffffffff16565b612b66565b61257f818461257a6008600e9054906101000a90046dffffffffffffffffffffffffffff166dffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561253157600080fd5b505afa158015612545573d6000803e3d6000fd5b505050506040513d602081101561255b57600080fd5b8101908080519060200190929190505050612e3290919063ffffffff16565b612b66565b50506001600c8190555050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b4284101561264e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f556e697377617056323a2045585049524544000000000000000000000000000081525060200191505060405180910390fd5b60006003547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600460008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050558a604051602001808781526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200196505050505050506040516020818303038152906040528051906020012060405160200180807f190100000000000000000000000000000000000000000000000000000000000081525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050600060018286868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa1580156127f1573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561286557508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b6128d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f556e697377617056323a20494e56414c49445f5349474e41545552450000000081525060200191505060405180910390fd5b6128e2898989613213565b505050505050505050565b6002602052816000526040600020602052806000526040600020600091509150505481565b6001600c541461298a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f556e697377617056323a204c4f434b454400000000000000000000000000000081525060200191505060405180910390fd5b6000600c81905550612b5c600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612a1e57600080fd5b505afa158015612a32573d6000803e3d6000fd5b505050506040513d6020811015612a4857600080fd5b8101908080519060200190929190505050600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612ae257600080fd5b505afa158015612af6573d6000803e3d6000fd5b505050506040513d6020811015612b0c57600080fd5b8101908080519060200190929190505050600860009054906101000a90046dffffffffffffffffffffffffffff166008600e9054906101000a90046dffffffffffffffffffffffffffff16612eb5565b6001600c81905550565b600060608473ffffffffffffffffffffffffffffffffffffffff166040518060400160405280601981526020017f7472616e7366657228616464726573732c75696e743235362900000000000000815250805190602001208585604051602401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310612c7d5780518252602082019150602081019050602083039250612c5a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612cdf576040519150601f19603f3d011682016040523d82523d6000602084013e612ce4565b606091505b5091509150818015612d245750600081511480612d235750808060200190516020811015612d1157600080fd5b81019080805190602001909291905050505b5b612d96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f556e697377617056323a205452414e534645525f4641494c454400000000000081525060200191505060405180910390fd5b5050505050565b600080821480612dba5750828283850292508281612db757fe5b04145b612e2c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6d756c2d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b92915050565b6000828284039150811115612eaf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f64732d6d6174682d7375622d756e646572666c6f77000000000000000000000081525060200191505060405180910390fd5b92915050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6dffffffffffffffffffffffffffff168411158015612f2557507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6dffffffffffffffffffffffffffff168311155b612f97576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f556e697377617056323a204f564552464c4f570000000000000000000000000081525060200191505060405180910390fd5b60006401000000004281612fa757fe5b06905060006008601c9054906101000a900463ffffffff168203905060008163ffffffff16118015612fea57506000846dffffffffffffffffffffffffffff1614155b801561300757506000836dffffffffffffffffffffffffffff1614155b156130e9578063ffffffff1661304c8561302086613922565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661394d90919063ffffffff16565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16026009600082825401925050819055508063ffffffff166130ba8461308e87613922565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661394d90919063ffffffff16565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1602600a600082825401925050819055505b85600860006101000a8154816dffffffffffffffffffffffffffff02191690836dffffffffffffffffffffffffffff160217905550846008600e6101000a8154816dffffffffffffffffffffffffffff02191690836dffffffffffffffffffffffffffff160217905550816008601c6101000a81548163ffffffff021916908363ffffffff1602179055507f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1600860009054906101000a90046dffffffffffffffffffffffffffff166008600e9054906101000a90046dffffffffffffffffffffffffffff1660405180836dffffffffffffffffffffffffffff168152602001826dffffffffffffffffffffffffffff1681526020019250505060405180910390a1505050505050565b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b61335081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612e3290919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506133e581600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546139ad90919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600080600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b1580156134fd57600080fd5b505afa158015613511573d6000803e3d6000fd5b505050506040513d602081101561352757600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141591506000600b549050821561365957600081146136545760006135bf6135ba866dffffffffffffffffffffffffffff16886dffffffffffffffffffffffffffff16612d9d90919063ffffffff16565b613673565b905060006135cc83613673565b9050808211156136515760006135ff6135ee8385612e3290919063ffffffff16565b600054612d9d90919063ffffffff16565b905060006136298361361b600587612d9d90919063ffffffff16565b6139ad90919063ffffffff16565b9050600081838161363657fe5b049050600081111561364d5761364c87826136d5565b5b5050505b50505b61366b565b6000811461366a576000600b819055505b5b505092915050565b600060038211156136c257819050600060016002848161368f57fe5b040190505b818110156136bc578091506002818285816136ab57fe5b0401816136b457fe5b049050613694565b506136d0565b600082146136cf57600190505b5b919050565b6136ea816000546139ad90919063ffffffff16565b60008190555061374281600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546139ad90919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008183106137fe5781613800565b825b905092915050565b61385a81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612e3290919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506138b281600054612e3290919063ffffffff16565b600081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60006e010000000000000000000000000000826dffffffffffffffffffffffffffff16029050919050565b6000816dffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16816139a457fe5b04905092915050565b6000828284019150811015613a2a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6164642d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b9291505056fe556e697377617056323a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f494e5055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f4c4951554944495459556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4255524e4544556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4d494e544544a2646970667358221220f0287d693e5b8d1a4189a6673f59c301ff95367d348cd1f5f975a6b5c33ed35964736f6c634300060c0033";
//# sourceMappingURL=UniswapV2PairFactory.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBookFactory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class OrderBookFactory extends contracts_1.ContractFactory {
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
exports.OrderBookFactory = OrderBookFactory;
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
                internalType: "bytes32",
                name: "hash",
                type: "bytes32"
            }
        ],
        name: "OrderCreated",
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
        inputs: [
            {
                internalType: "uint256",
                name: "page",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "limit",
                type: "uint256"
            }
        ],
        name: "allHashes",
        outputs: [
            {
                internalType: "bytes32[]",
                name: "",
                type: "bytes32[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "maker",
                        type: "address"
                    },
                    {
                        internalType: "address",
                        name: "fromToken",
                        type: "address"
                    },
                    {
                        internalType: "address",
                        name: "toToken",
                        type: "address"
                    },
                    {
                        internalType: "uint256",
                        name: "amountIn",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "amountOutMin",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "recipient",
                        type: "address"
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
                internalType: "struct Orders.Order",
                name: "order",
                type: "tuple"
            }
        ],
        name: "createOrder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "fromToken",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "page",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "limit",
                type: "uint256"
            }
        ],
        name: "hashesOfFromToken",
        outputs: [
            {
                internalType: "bytes32[]",
                name: "",
                type: "bytes32[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "maker",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "page",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "limit",
                type: "uint256"
            }
        ],
        name: "hashesOfMaker",
        outputs: [
            {
                internalType: "bytes32[]",
                name: "",
                type: "bytes32[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "toToken",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "page",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "limit",
                type: "uint256"
            }
        ],
        name: "hashesOfToToken",
        outputs: [
            {
                internalType: "bytes32[]",
                name: "",
                type: "bytes32[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "numberOfAllHashes",
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
                name: "fromToken",
                type: "address"
            }
        ],
        name: "numberOfHashesOfFromToken",
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
                name: "maker",
                type: "address"
            }
        ],
        name: "numberOfHashesOfMaker",
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
                name: "toToken",
                type: "address"
            }
        ],
        name: "numberOfHashesOfToToken",
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
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        name: "orderOfHash",
        outputs: [
            {
                internalType: "address",
                name: "maker",
                type: "address"
            },
            {
                internalType: "address",
                name: "fromToken",
                type: "address"
            },
            {
                internalType: "address",
                name: "toToken",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address"
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
        stateMutability: "view",
        type: "function"
    }
];
const _bytecode = "0x60a060405234801561001057600080fd5b50604051469061008c907f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f907f84ec3e40ac87b7e93d40b42ac60cbcf224a757106614dac5eb0cc5fc9be1f03c907fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc690859030906020016100ad565b60408051601f198184030181529190528051602090910120608052506100d9565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b608051610e9f6100f86000398061026e528061058e5250610e9f6000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80635fd45d24116100715780635fd45d241461012557806365f7a5511461013857806375af1c361461014b578063bceb45db14610153578063d08b34bb1461017c578063df4c1b4114610191576100a9565b806303e0992f146100ae5780630777aa32146100d757806314eaa868146100ea5780633644e5151461010a5780633d91efcf14610112575b600080fd5b6100c16100bc366004610a0e565b6101a4565b6040516100ce9190610c02565b60405180910390f35b6100c16100e5366004610a0e565b6101bf565b6100fd6100f8366004610a29565b6101da565b6040516100ce9190610bbe565b6100c161026c565b6100c1610120366004610a0e565b610290565b6100fd610133366004610a29565b6102ab565b6100fd610146366004610a29565b610333565b6100c16103bb565b610166610161366004610a5c565b6103c1565b6040516100ce9a99989796959493929190610b5f565b61018f61018a366004610a74565b610427565b005b6100fd61019f366004610b23565b6107b8565b6001600160a01b031660009081526002602052604090205490565b6001600160a01b031660009081526001602052604090205490565b6060610264838360026000886001600160a01b03166001600160a01b0316815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561025057602002820191906000526020600020905b81548152602001906001019080831161023c575b50505050506108269092919063ffffffff16565b949350505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b031660009081526003602052604090205490565b6060610264838360016000886001600160a01b03166001600160a01b03168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610250576020028201919060005260206000209081548152602001906001019080831161023c5750505050506108269092919063ffffffff16565b6060610264838360036000886001600160a01b03166001600160a01b03168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610250576020028201919060005260206000209081548152602001906001019080831161023c5750505050506108269092919063ffffffff16565b60005490565b600460208190526000918252604090912080546001820154600283015460038401549484015460058501546006860154600787015460088801546009909801546001600160a01b0397881699968816989588169794959390941693919260ff909116918a565b80516001600160a01b03166104575760405162461bcd60e51b815260040161044e90610ce9565b60405180910390fd5b60208101516001600160a01b03166104815760405162461bcd60e51b815260040161044e90610da9565b60408101516001600160a01b03166104ab5760405162461bcd60e51b815260040161044e90610e0b565b80604001516001600160a01b031681602001516001600160a01b031614156104e55760405162461bcd60e51b815260040161044e90610d48565b60008160600151116105095760405162461bcd60e51b815260040161044e90610de0565b600081608001511161052d5760405162461bcd60e51b815260040161044e90610d18565b60a08101516001600160a01b03166105575760405162461bcd60e51b815260040161044e90610c93565b428160c001511161057a5760405162461bcd60e51b815260040161044e90610d7f565b6000610585826108e5565b905060006105c47f0000000000000000000000000000000000000000000000000000000000000000838560e0015186610100015187610120015161095d565b90506001600160a01b038116158015906105ea575082516001600160a01b038281169116145b6106065760405162461bcd60e51b815260040161044e90610cbe565b6000828152600460205260409020546001600160a01b03161561063b5760405162461bcd60e51b815260040161044e90610c6d565b6000828152600460208181526040808420875181546001600160a01b03199081166001600160a01b039283161783558985018051600180860180548516928616929092179091558b860180516002808801805487169288169290921790915560608e015160038089019190915560808f01519a88019a909a5560a08e01516005880180549096169087161790945560c08d0151600687015560e08d015160078701805460ff191660ff9092169190911790556101008d015160088701556101208d015160099096019590955588548082018a558980527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563018b90558b518416895280875285892080548083018255908a52878a20018b9055905183168852908552838720805480830182559088528588200189905591511685529282528084208054938401815584529083209091018490555183917f918554b6bd6e2895ce6553de5de0e1a69db5289aa0e4fe193a0dcd1f1434747791a2505050565b606061081d83836000805480602002602001604051908101604052809291908181526020018280548015610250576020028201919060005260206000209081548152602001906001019080831161023c5750505050506108269092919063ffffffff16565b90505b92915050565b60608167ffffffffffffffff8111801561083f57600080fd5b50604051908082528060200260200182016040528015610869578160200160208202803683370190505b50905060005b828110156108dd5784518184860201106108a4576000801b82828151811061089357fe5b6020026020010181815250506108d5565b848184860201815181106108b457fe5b60200260200101518282815181106108c857fe5b6020026020010181815250505b60010161086f565b509392505050565b80516020808301516040808501516060860151608087015160a088015160c08901519451600098610940987f7c228c78bd055996a44b5046fb56fa7c28c66bce92d9dc584f742b2cd76a140f98919791969594939201610c0b565b604051602081830303815290604052805190602001209050919050565b6000808686604051602001610973929190610b44565b604051602081830303815290604052805190602001209050600181868686604051600081526020016040526040516109ae9493929190610c4f565b6020604051602081039080840390855afa1580156109d0573d6000803e3d6000fd5b5050604051601f19015198975050505050505050565b80356001600160a01b038116811461082057600080fd5b803560ff8116811461082057600080fd5b600060208284031215610a1f578081fd5b61081d83836109e6565b600080600060608486031215610a3d578182fd5b610a4785856109e6565b95602085013595506040909401359392505050565b600060208284031215610a6d578081fd5b5035919050565b6000610140808385031215610a87578182fd5b610a9081610e42565b9050610a9c84846109e6565b8152610aab84602085016109e6565b6020820152610abd84604085016109e6565b60408201526060830135606082015260808301356080820152610ae38460a085016109e6565b60a082015260c083013560c0820152610aff8460e085016109fd565b60e08201526101008381013590820152610120928301359281019290925250919050565b60008060408385031215610b35578182fd5b50508035926020909101359150565b61190160f01b81526002810192909252602282015260420190565b6001600160a01b039a8b168152988a1660208a0152968916604089015260608801959095526080870193909352951660a085015260c084019490945260ff90931660e08301526101008201929092526101208101919091526101400190565b6020808252825182820181905260009190848201906040850190845b81811015610bf657835183529284019291840191600101610bda565b50909695505050505050565b90815260200190565b9788526001600160a01b03968716602089015294861660408801529285166060870152608086019190915260a085015290911660c083015260e08201526101000190565b93845260ff9290921660208401526040830152606082015260800190565b6020808252600c908201526b6f726465722d65786973747360a01b604082015260600190565b6020808252601190820152701a5b9d985b1a590b5c9958da5c1a595b9d607a1b604082015260600190565b602080825260119082015270696e76616c69642d7369676e617475726560781b604082015260600190565b602080825260159082015274696e76616c69642d6d616b65722d6164647265737360581b604082015260600190565b60208082526016908201527534b73b30b634b216b0b6b7bab73a16b7baba16b6b4b760511b604082015260600190565b60208082526019908201527f6475706c69636174652d746f6b656e2d61646472657373657300000000000000604082015260600190565b60208082526010908201526f696e76616c69642d646561646c696e6560801b604082015260600190565b6020808252601a908201527f696e76616c69642d66726f6d2d746f6b656e2d61646472657373000000000000604082015260600190565b60208082526011908201527034b73b30b634b216b0b6b7bab73a16b4b760791b604082015260600190565b60208082526018908201527f696e76616c69642d746f2d746f6b656e2d616464726573730000000000000000604082015260600190565b60405181810167ffffffffffffffff81118282101715610e6157600080fd5b60405291905056fea2646970667358221220500dd77c869ba7b22d481d0867dc5a24818b3ee97c6fb5ad83fb8a234a622e6964736f6c634300060c0033";
//# sourceMappingURL=OrderBookFactory.js.map
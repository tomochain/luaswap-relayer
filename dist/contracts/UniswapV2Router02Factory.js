"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapV2Router02Factory = void 0;
const contracts_1 = require("@ethersproject/contracts");
class UniswapV2Router02Factory extends contracts_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_factory, _WETH, overrides) {
        return super.deploy(_factory, _WETH, overrides || {});
    }
    getDeployTransaction(_factory, _WETH, overrides) {
        return super.getDeployTransaction(_factory, _WETH, overrides || {});
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
exports.UniswapV2Router02Factory = UniswapV2Router02Factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_factory",
                type: "address"
            },
            {
                internalType: "address",
                name: "_WETH",
                type: "address"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "WETH",
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
        stateMutability: "payable",
        type: "receive"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenA",
                type: "address"
            },
            {
                internalType: "address",
                name: "tokenB",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amountADesired",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountBDesired",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountAMin",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountBMin",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "addLiquidity",
        outputs: [
            {
                internalType: "uint256",
                name: "amountA",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountB",
                type: "uint256"
            },
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
                name: "token",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amountTokenDesired",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "addLiquidityETH",
        outputs: [
            {
                internalType: "uint256",
                name: "amountToken",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountETH",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            }
        ],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "tokenA",
                type: "address"
            },
            {
                internalType: "address",
                name: "tokenB",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountAMin",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountBMin",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "removeLiquidity",
        outputs: [
            {
                internalType: "uint256",
                name: "amountA",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountB",
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
                name: "token",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "removeLiquidityETH",
        outputs: [
            {
                internalType: "uint256",
                name: "amountToken",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountETH",
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
                name: "tokenA",
                type: "address"
            },
            {
                internalType: "address",
                name: "tokenB",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountAMin",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountBMin",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "approveMax",
                type: "bool"
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
        name: "removeLiquidityWithPermit",
        outputs: [
            {
                internalType: "uint256",
                name: "amountA",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountB",
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
                name: "token",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "approveMax",
                type: "bool"
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
        name: "removeLiquidityETHWithPermit",
        outputs: [
            {
                internalType: "uint256",
                name: "amountToken",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountETH",
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
                name: "token",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "removeLiquidityETHSupportingFeeOnTransferTokens",
        outputs: [
            {
                internalType: "uint256",
                name: "amountETH",
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
                name: "token",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "liquidity",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountTokenMin",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountETHMin",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "approveMax",
                type: "bool"
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
        name: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
        outputs: [
            {
                internalType: "uint256",
                name: "amountETH",
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
                name: "amountIn",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256"
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "swapExactTokensForTokens",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountInMax",
                type: "uint256"
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "swapTokensForExactTokens",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256"
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "swapExactETHForTokens",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }
        ],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "amountInMax",
                type: "uint256"
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "swapTokensForExactETH",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
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
                internalType: "address[]",
                name: "path",
                type: "address[]"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "swapExactTokensForETH",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "swapETHForExactTokens",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }
        ],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
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
                internalType: "address[]",
                name: "path",
                type: "address[]"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountOutMin",
                type: "uint256"
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "swapExactETHForTokensSupportingFeeOnTransferTokens",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
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
                internalType: "address[]",
                name: "path",
                type: "address[]"
            },
            {
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
            }
        ],
        name: "swapExactTokensForETHSupportingFeeOnTransferTokens",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountA",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "reserveA",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "reserveB",
                type: "uint256"
            }
        ],
        name: "quote",
        outputs: [
            {
                internalType: "uint256",
                name: "amountB",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "reserveIn",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "reserveOut",
                type: "uint256"
            }
        ],
        name: "getAmountOut",
        outputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "reserveIn",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "reserveOut",
                type: "uint256"
            }
        ],
        name: "getAmountIn",
        outputs: [
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountIn",
                type: "uint256"
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            }
        ],
        name: "getAmountsOut",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "amountOut",
                type: "uint256"
            },
            {
                internalType: "address[]",
                name: "path",
                type: "address[]"
            }
        ],
        name: "getAmountsIn",
        outputs: [
            {
                internalType: "uint256[]",
                name: "amounts",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
const _bytecode = "0x60c06040523480156200001157600080fd5b50604051620067ef380380620067ef833981810160405260408110156200003757600080fd5b8101908080519060200190929190805190602001909291905050508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b81525050505060805160601c60a05160601c6165e662000209600039806101565280611548528061158652806116b652806119945280611ed952806121b452806122aa52806127ef52806129dc5280612af95280612c115280612dd95280612e6e52806132ac528061336352806134405280613557528061364652806136c75280613e3a528061419352806141ec528061422052806142a152806144b5528061467a528061470f5250806117a852806118b45280611a675280611a9f5280611c695280611d755280611fcb52806120d452806122885280612495528061290f5280612cfe5280612ead52806130b852806131c152806137065280613af75280613db75280613de05280613e18528061401b52806141ca52806145a2528061474e52806152b352806152f7528061565652806158a75280615e825280615f7e528061606852506165e66000f3fe60806040526004361061014f5760003560e01c80638803dbee116100b6578063c45a01551161006f578063c45a015514610feb578063d06ca61f1461102c578063ded9382a14611150578063e8e3370014611232578063f305d71914611318578063fb3bdb41146113c6576101ab565b80638803dbee14610c00578063ad5c464814610d19578063ad615dec14610d5a578063af2979eb14610dbd578063b6f9de9514610e6a578063baa2abde14610f17576101ab565b80634a25d94a116101085780634a25d94a1461071f5780635b0d5984146108385780635c11d79514610913578063791ac947146109d75780637ff36ab514610a9b57806385f8c25914610b9d576101ab565b806302751cec146101b0578063054d50d41461026457806318cbafe5146102c75780631f00ca74146103e05780632195995c1461050457806338ed173914610606576101ab565b366101ab577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101a957fe5b005b600080fd5b3480156101bc57600080fd5b50610247600480360360c08110156101d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506114c8565b604051808381526020018281526020019250505060405180910390f35b34801561027057600080fd5b506102b16004803603606081101561028757600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050611625565b6040518082815260200191505060405180910390f35b3480156102d357600080fd5b50610389600480360360a08110156102ea57600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561031b57600080fd5b82018360208201111561032d57600080fd5b8035906020019184602083028401116401000000008311171561034f57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061163b565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156103cc5780820151818401526020810190506103b1565b505050509050019250505060405180910390f35b3480156103ec57600080fd5b506104ad6004803603604081101561040357600080fd5b81019080803590602001909291908035906020019064010000000081111561042a57600080fd5b82018360208201111561043c57600080fd5b8035906020019184602083028401116401000000008311171561045e57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050611a60565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104f05780820151818401526020810190506104d5565b505050509050019250505060405180910390f35b34801561051057600080fd5b506105e9600480360361016081101561052857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803515159060200190929190803560ff1690602001909291908035906020019092919080359060200190929190505050611a95565b604051808381526020018281526020019250505060405180910390f35b34801561061257600080fd5b506106c8600480360360a081101561062957600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561065a57600080fd5b82018360208201111561066c57600080fd5b8035906020019184602083028401116401000000008311171561068e57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611beb565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561070b5780820151818401526020810190506106f0565b505050509050019250505060405180910390f35b34801561072b57600080fd5b506107e1600480360360a081101561074257600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561077357600080fd5b82018360208201111561078557600080fd5b803590602001918460208302840111640100000000831117156107a757600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611e5e565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610824578082015181840152602081019050610809565b505050509050019250505060405180910390f35b34801561084457600080fd5b506108fd600480360361014081101561085c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803515159060200190929190803560ff1690602001909291908035906020019092919080359060200190929190505050612280565b6040518082815260200191505060405180910390f35b34801561091f57600080fd5b506109d5600480360360a081101561093657600080fd5b8101908080359060200190929190803590602001909291908035906020019064010000000081111561096757600080fd5b82018360208201111561097957600080fd5b8035906020019184602083028401116401000000008311171561099b57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506123eb565b005b3480156109e357600080fd5b50610a99600480360360a08110156109fa57600080fd5b81019080803590602001909291908035906020019092919080359060200190640100000000811115610a2b57600080fd5b820183602082011115610a3d57600080fd5b80359060200191846020830284011164010000000083111715610a5f57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050612776565b005b610b4660048036036080811015610ab157600080fd5b810190808035906020019092919080359060200190640100000000811115610ad857600080fd5b820183602082011115610aea57600080fd5b80359060200191846020830284011164010000000083111715610b0c57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050612b96565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610b89578082015181840152602081019050610b6e565b505050509050019250505060405180910390f35b348015610ba957600080fd5b50610bea60048036036060811015610bc057600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050613024565b6040518082815260200191505060405180910390f35b348015610c0c57600080fd5b50610cc2600480360360a0811015610c2357600080fd5b81019080803590602001909291908035906020019092919080359060200190640100000000811115610c5457600080fd5b820183602082011115610c6657600080fd5b80359060200191846020830284011164010000000083111715610c8857600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061303a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610d05578082015181840152602081019050610cea565b505050509050019250505060405180910390f35b348015610d2557600080fd5b50610d2e6132aa565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b348015610d6657600080fd5b50610da760048036036060811015610d7d57600080fd5b810190808035906020019092919080359060200190929190803590602001909291905050506132ce565b6040518082815260200191505060405180910390f35b348015610dc957600080fd5b50610e54600480360360c0811015610de057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506132e4565b6040518082815260200191505060405180910390f35b610f1560048036036080811015610e8057600080fd5b810190808035906020019092919080359060200190640100000000811115610ea757600080fd5b820183602082011115610eb957600080fd5b80359060200191846020830284011164010000000083111715610edb57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506134de565b005b348015610f2357600080fd5b50610fce600480360360e0811015610f3a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050613a76565b604051808381526020018281526020019250505060405180910390f35b348015610ff757600080fd5b50611000613db5565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561103857600080fd5b506110f96004803603604081101561104f57600080fd5b81019080803590602001909291908035906020019064010000000081111561107657600080fd5b82018360208201111561108857600080fd5b803590602001918460208302840111640100000000831117156110aa57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050613dd9565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561113c578082015181840152602081019050611121565b505050509050019250505060405180910390f35b34801561115c57600080fd5b50611215600480360361014081101561117457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803515159060200190929190803560ff1690602001909291908035906020019092919080359060200190929190505050613e0e565b604051808381526020018281526020019250505060405180910390f35b34801561123e57600080fd5b506112f4600480360361010081101561125657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050613f82565b60405180848152602001838152602001828152602001935050505060405180910390f35b6113a2600480360360c081101561132e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050614111565b60405180848152602001838152602001828152602001935050505060405180910390f35b611471600480360360808110156113dc57600080fd5b81019080803590602001909291908035906020019064010000000081111561140357600080fd5b82018360208201111561141557600080fd5b8035906020019184602083028401116401000000008311171561143757600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061443a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156114b4578082015181840152602081019050611499565b505050509050019250505060405180910390f35b6000808242811015611542576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b611571897f00000000000000000000000000000000000000000000000000000000000000008a8a8a308a613a76565b8093508194505050611584898685614902565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156115f757600080fd5b505af115801561160b573d6000803e3d6000fd5b505050506116198583614ae5565b50965096945050505050565b6000611632848484614c44565b90509392505050565b606081428110156116b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168686600189899050038181106116fd57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146117a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f556e69737761705632526f757465723a20494e56414c49445f5041544800000081525060200191505060405180910390fd5b61180f7f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050614d74565b9150868260018451038151811061182257fe5b60200260200101511015611881576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180616537602b913960400191505060405180910390fd5b6119468686600081811061189157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff163361192c7f00000000000000000000000000000000000000000000000000000000000000008a8a60008181106118e057fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168b8b600181811061190a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16614eec565b8560008151811061193957fe5b6020026020010151615005565b61199282878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050306151ea565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836001855103815181106119de57fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015611a1c57600080fd5b505af1158015611a30573d6000803e3d6000fd5b50505050611a558483600185510381518110611a4857fe5b6020026020010151614ae5565b509695505050505050565b6060611a8d7f0000000000000000000000000000000000000000000000000000000000000000848461547f565b905092915050565b6000806000611ac57f00000000000000000000000000000000000000000000000000000000000000008f8f614eec565b9050600087611ad4578c611af6565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b90508173ffffffffffffffffffffffffffffffffffffffff1663d505accf3330848d8c8c8c6040518863ffffffff1660e01b8152600401808873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018460ff168152602001838152602001828152602001975050505050505050600060405180830381600087803b158015611baa57600080fd5b505af1158015611bbe573d6000803e3d6000fd5b50505050611bd18f8f8f8f8f8f8f613a76565b809450819550505050509b509b9950505050505050505050565b60608142811015611c64576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b611cd07f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050614d74565b91508682600184510381518110611ce357fe5b60200260200101511015611d42576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180616537602b913960400191505060405180910390fd5b611e0786866000818110611d5257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1633611ded7f00000000000000000000000000000000000000000000000000000000000000008a8a6000818110611da157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168b8b6001818110611dcb57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16614eec565b85600081518110611dfa57fe5b6020026020010151615005565b611e5382878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050866151ea565b509695505050505050565b60608142811015611ed7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16868660018989905003818110611f2057fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614611fc6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f556e69737761705632526f757465723a20494e56414c49445f5041544800000081525060200191505060405180910390fd5b6120327f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061547f565b9150868260008151811061204257fe5b602002602001015111156120a1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806164c76027913960400191505060405180910390fd5b612166868660008181106120b157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff163361214c7f00000000000000000000000000000000000000000000000000000000000000008a8a600081811061210057fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168b8b600181811061212a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16614eec565b8560008151811061215957fe5b6020026020010151615005565b6121b282878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050306151ea565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836001855103815181106121fe57fe5b60200260200101516040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b15801561223c57600080fd5b505af1158015612250573d6000803e3d6000fd5b50505050612275848360018551038151811061226857fe5b6020026020010151614ae5565b509695505050505050565b6000806122ce7f00000000000000000000000000000000000000000000000000000000000000008d7f0000000000000000000000000000000000000000000000000000000000000000614eec565b90506000866122dd578b6122ff565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b90508173ffffffffffffffffffffffffffffffffffffffff1663d505accf3330848c8b8b8b6040518863ffffffff1660e01b8152600401808873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018460ff168152602001838152602001828152602001975050505050505050600060405180830381600087803b1580156123b357600080fd5b505af11580156123c7573d6000803e3d6000fd5b505050506123d98d8d8d8d8d8d6132e4565b925050509a9950505050505050505050565b8042811015612462576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b6125138585600081811061247257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff163361250d7f0000000000000000000000000000000000000000000000000000000000000000898960008181106124c157fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a60018181106124eb57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16614eec565b8a615005565b600085856001888890500381811061252757fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231856040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156125aa57600080fd5b505afa1580156125be573d6000803e3d6000fd5b505050506040513d60208110156125d457600080fd5b81019080805190602001909291905050509050612632868680806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050856155ff565b8661271582888860018b8b90500381811061264957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156126cc57600080fd5b505afa1580156126e0573d6000803e3d6000fd5b505050506040513d60208110156126f657600080fd5b8101908080519060200190929190505050615a4a90919063ffffffff16565b101561276c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180616537602b913960400191505060405180910390fd5b5050505050505050565b80428110156127ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1685856001888890500381811061283657fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146128dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f556e69737761705632526f757465723a20494e56414c49445f5041544800000081525060200191505060405180910390fd5b61298d858560008181106128ec57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16336129877f00000000000000000000000000000000000000000000000000000000000000008989600081811061293b57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a600181811061296557fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16614eec565b8a615005565b6129d8858580806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050306155ff565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015612a6157600080fd5b505afa158015612a75573d6000803e3d6000fd5b505050506040513d6020811015612a8b57600080fd5b8101908080519060200190929190505050905086811015612af7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180616537602b913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015612b6a57600080fd5b505af1158015612b7e573d6000803e3d6000fd5b50505050612b8c8482614ae5565b5050505050505050565b60608142811015612c0f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1686866000818110612c5357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614612cf9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f556e69737761705632526f757465723a20494e56414c49445f5041544800000081525060200191505060405180910390fd5b612d657f000000000000000000000000000000000000000000000000000000000000000034888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050614d74565b91508682600184510381518110612d7857fe5b60200260200101511015612dd7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180616537602b913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db083600081518110612e2057fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b158015612e5357600080fd5b505af1158015612e67573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb612f257f000000000000000000000000000000000000000000000000000000000000000089896000818110612ed957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a6001818110612f0357fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16614eec565b84600081518110612f3257fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015612f8d57600080fd5b505af1158015612fa1573d6000803e3d6000fd5b505050506040513d6020811015612fb757600080fd5b8101908080519060200190929190505050612fce57fe5b61301a82878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050866151ea565b5095945050505050565b6000613031848484615acd565b90509392505050565b606081428110156130b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b61311f7f000000000000000000000000000000000000000000000000000000000000000089888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061547f565b9150868260008151811061312f57fe5b6020026020010151111561318e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806164c76027913960400191505060405180910390fd5b6132538686600081811061319e57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16336132397f00000000000000000000000000000000000000000000000000000000000000008a8a60008181106131ed57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168b8b600181811061321757fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16614eec565b8560008151811061324657fe5b6020026020010151615005565b61329f82878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050866151ea565b509695505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006132db848484615c0a565b90509392505050565b6000814281101561335d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b61338c887f00000000000000000000000000000000000000000000000000000000000000008989893089613a76565b90508092505061343e88858a73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156133fe57600080fd5b505afa158015613412573d6000803e3d6000fd5b505050506040513d602081101561342857600080fd5b8101908080519060200190929190505050614902565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632e1a7d4d836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156134b157600080fd5b505af11580156134c5573d6000803e3d6000fd5b505050506134d38483614ae5565b509695505050505050565b8042811015613555576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168585600081811061359957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461363f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f556e69737761705632526f757465723a20494e56414c49445f5041544800000081525060200191505060405180910390fd5b60003490507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b1580156136ac57600080fd5b505af11580156136c0573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb61377e7f00000000000000000000000000000000000000000000000000000000000000008989600081811061373257fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a600181811061375c57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16614eec565b836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b1580156137d257600080fd5b505af11580156137e6573d6000803e3d6000fd5b505050506040513d60208110156137fc57600080fd5b810190808051906020019092919050505061381357fe5b600086866001898990500381811061382757fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231866040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156138aa57600080fd5b505afa1580156138be573d6000803e3d6000fd5b505050506040513d60208110156138d457600080fd5b81019080805190602001909291905050509050613932878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050866155ff565b87613a1582898960018c8c90500381811061394957fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231896040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156139cc57600080fd5b505afa1580156139e0573d6000803e3d6000fd5b505050506040513d60208110156139f657600080fd5b8101908080519060200190929190505050615a4a90919063ffffffff16565b1015613a6c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180616537602b913960400191505060405180910390fd5b5050505050505050565b6000808242811015613af0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b6000613b1d7f00000000000000000000000000000000000000000000000000000000000000008c8c614eec565b90508073ffffffffffffffffffffffffffffffffffffffff166323b872dd33838c6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b158015613bae57600080fd5b505af1158015613bc2573d6000803e3d6000fd5b505050506040513d6020811015613bd857600080fd5b8101908080519060200190929190505050506000808273ffffffffffffffffffffffffffffffffffffffff166389afcb44896040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040805180830381600087803b158015613c5557600080fd5b505af1158015613c69573d6000803e3d6000fd5b505050506040513d6040811015613c7f57600080fd5b810190808051906020019092919080519060200190929190505050915091506000613caa8e8e615cee565b5090508073ffffffffffffffffffffffffffffffffffffffff168e73ffffffffffffffffffffffffffffffffffffffff1614613ce7578183613cea565b82825b80975081985050508a871015613d4b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806164ee6026913960400191505060405180910390fd5b89861015613da4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806164546026913960400191505060405180910390fd5b505050505097509795505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6060613e067f00000000000000000000000000000000000000000000000000000000000000008484614d74565b905092915050565b6000806000613e5e7f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000614eec565b9050600087613e6d578c613e8f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5b90508173ffffffffffffffffffffffffffffffffffffffff1663d505accf3330848d8c8c8c6040518863ffffffff1660e01b8152600401808873ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1681526020018681526020018581526020018460ff168152602001838152602001828152602001975050505050505050600060405180830381600087803b158015613f4357600080fd5b505af1158015613f57573d6000803e3d6000fd5b50505050613f698e8e8e8e8e8e6114c8565b809450819550505050509a509a98505050505050505050565b60008060008342811015613ffe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b61400c8c8c8c8c8c8c615e65565b809450819550505060006140417f00000000000000000000000000000000000000000000000000000000000000008e8e614eec565b905061404f8d338388615005565b61405b8c338387615005565b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156140c457600080fd5b505af11580156140d8573d6000803e3d6000fd5b505050506040513d60208110156140ee57600080fd5b810190808051906020019092919050505092505050985098509895505050505050565b6000806000834281101561418d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b6141bb8a7f00000000000000000000000000000000000000000000000000000000000000008b348c8c615e65565b809450819550505060006142107f00000000000000000000000000000000000000000000000000000000000000008c7f0000000000000000000000000000000000000000000000000000000000000000614eec565b905061421e8b338388615005565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0856040518263ffffffff1660e01b81526004016000604051808303818588803b15801561428657600080fd5b505af115801561429a573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb82866040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561433057600080fd5b505af1158015614344573d6000803e3d6000fd5b505050506040513d602081101561435a57600080fd5b810190808051906020019092919050505061437157fe5b8073ffffffffffffffffffffffffffffffffffffffff16636a627842886040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b1580156143da57600080fd5b505af11580156143ee573d6000803e3d6000fd5b505050506040513d602081101561440457600080fd5b810190808051906020019092919050505092508334111561442c5761442b33853403614ae5565b5b505096509650969350505050565b606081428110156144b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f556e69737761705632526f757465723a2045585049524544000000000000000081525060200191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16868660008181106144f757fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461459d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f556e69737761705632526f757465723a20494e56414c49445f5041544800000081525060200191505060405180910390fd5b6146097f000000000000000000000000000000000000000000000000000000000000000088888880806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505061547f565b9150348260008151811061461957fe5b60200260200101511115614678576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806164c76027913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0836000815181106146c157fe5b60200260200101516040518263ffffffff1660e01b81526004016000604051808303818588803b1580156146f457600080fd5b505af1158015614708573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb6147c67f00000000000000000000000000000000000000000000000000000000000000008989600081811061477a57fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff168a8a60018181106147a457fe5b9050602002013573ffffffffffffffffffffffffffffffffffffffff16614eec565b846000815181106147d357fe5b60200260200101516040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561482e57600080fd5b505af1158015614842573d6000803e3d6000fd5b505050506040513d602081101561485857600080fd5b810190808051906020019092919050505061486f57fe5b6148bb82878780806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f82011690508083019250505050505050866151ea565b816000815181106148c857fe5b60200260200101513411156148f8576148f733836000815181106148e857fe5b60200260200101513403614ae5565b5b5095945050505050565b600060608473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb8585604051602401808373ffffffffffffffffffffffffffffffffffffffff168152602001828152602001925050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106149c557805182526020820191506020810190506020830392506149a2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114614a27576040519150601f19603f3d011682016040523d82523d6000602084013e614a2c565b606091505b5091509150818015614a6c5750600081511480614a6b5750808060200190516020811015614a5957600080fd5b81019080805190602001909291905050505b5b614ade576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5472616e7366657248656c7065723a205452414e534645525f4641494c45440081525060200191505060405180910390fd5b5050505050565b60008273ffffffffffffffffffffffffffffffffffffffff1682600067ffffffffffffffff81118015614b1757600080fd5b506040519080825280601f01601f191660200182016040528015614b4a5781602001600182028036833780820191505090505b506040518082805190602001908083835b60208310614b7e5780518252602082019150602081019050602083039250614b5b565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114614be0576040519150601f19603f3d011682016040523d82523d6000602084013e614be5565b606091505b5050905080614c3f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806165146023913960400191505060405180910390fd5b505050565b6000808411614c9e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180616586602b913960400191505060405180910390fd5b600083118015614cae5750600082115b614d03576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061647a6028913960400191505060405180910390fd5b6000614d1a6103e5866161c190919063ffffffff16565b90506000614d3184836161c190919063ffffffff16565b90506000614d5c83614d4e6103e8896161c190919063ffffffff16565b61625690919063ffffffff16565b9050808281614d6757fe5b0493505050509392505050565b6060600282511015614dee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f556e697377617056324c6962726172793a20494e56414c49445f50415448000081525060200191505060405180910390fd5b815167ffffffffffffffff81118015614e0657600080fd5b50604051908082528060200260200182016040528015614e355781602001602082028036833780820191505090505b5090508281600081518110614e4657fe5b60200260200101818152505060005b6001835103811015614ee457600080614e9887868581518110614e7457fe5b6020026020010151876001870181518110614e8b57fe5b60200260200101516162d9565b91509150614eba848481518110614eab57fe5b60200260200101518383614c44565b846001850181518110614ec957fe5b60200260200101818152505050508080600101915050614e55565b509392505050565b6000806000614efb8585615cee565b91509150858282604051602001808373ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1660601b8152601401925050506040516020818303038152906040528051906020012060405160200180807fff000000000000000000000000000000000000000000000000000000000000008152506001018373ffffffffffffffffffffffffffffffffffffffff1660601b8152601401828152602001807fe18a34eb0e04b04f7a0ac29a6e80748dca96319b42c54d679cb821dca90c6303815250602001925050506040516020818303038152906040528051906020012060001c925050509392505050565b600060608573ffffffffffffffffffffffffffffffffffffffff166323b872dd868686604051602401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200193505050506040516020818303038152906040529060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106150e657805182526020820191506020810190506020830392506150c3565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114615148576040519150601f19603f3d011682016040523d82523d6000602084013e61514d565b606091505b509150915081801561518d575060008151148061518c575080806020019051602081101561517a57600080fd5b81019080805190602001909291905050505b5b6151e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806165626024913960400191505060405180910390fd5b505050505050565b60005b60018351038110156154795760008084838151811061520857fe5b602002602001015185600185018151811061521f57fe5b60200260200101519150915060006152378383615cee565b509050600087600186018151811061524b57fe5b602002602001015190506000808373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461529357826000615297565b6000835b91509150600060028a510388106152ae57886152f0565b6152ef7f0000000000000000000000000000000000000000000000000000000000000000878c60028c01815181106152e257fe5b6020026020010151614eec565b5b905061531d7f00000000000000000000000000000000000000000000000000000000000000008888614eec565b73ffffffffffffffffffffffffffffffffffffffff1663022c0d9f848484600067ffffffffffffffff8111801561535357600080fd5b506040519080825280601f01601f1916602001820160405280156153865781602001600182028036833780820191505090505b506040518563ffffffff1660e01b8152600401808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156153fe5780820151818401526020810190506153e3565b50505050905090810190601f16801561542b5780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b15801561544d57600080fd5b505af1158015615461573d6000803e3d6000fd5b505050505050505050505080806001019150506151ed565b50505050565b60606002825110156154f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f556e697377617056324c6962726172793a20494e56414c49445f50415448000081525060200191505060405180910390fd5b815167ffffffffffffffff8111801561551157600080fd5b506040519080825280602002602001820160405280156155405781602001602082028036833780820191505090505b509050828160018351038151811061555457fe5b6020026020010181815250506000600183510390505b60008111156155f7576000806155aa8786600186038151811061558957fe5b602002602001015187868151811061559d57fe5b60200260200101516162d9565b915091506155cc8484815181106155bd57fe5b60200260200101518383615acd565b8460018503815181106155db57fe5b602002602001018181525050505080806001900391505061556a565b509392505050565b60005b6001835103811015615a455760008084838151811061561d57fe5b602002602001015185600185018151811061563457fe5b602002602001015191509150600061564c8383615cee565b509050600061567c7f00000000000000000000000000000000000000000000000000000000000000008585614eec565b90506000806000808473ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b1580156156ca57600080fd5b505afa1580156156de573d6000803e3d6000fd5b505050506040513d60608110156156f457600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691506000808773ffffffffffffffffffffffffffffffffffffffff168a73ffffffffffffffffffffffffffffffffffffffff161461577b57828461577e565b83835b91509150615836828b73ffffffffffffffffffffffffffffffffffffffff166370a082318a6040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156157ed57600080fd5b505afa158015615801573d6000803e3d6000fd5b505050506040513d602081101561581757600080fd5b8101908080519060200190929190505050615a4a90919063ffffffff16565b9550615843868383614c44565b9450505050506000808573ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16146158875782600061588b565b6000835b91509150600060028c51038a106158a2578a6158e4565b6158e37f0000000000000000000000000000000000000000000000000000000000000000898e60028e01815181106158d657fe5b6020026020010151614eec565b5b90508573ffffffffffffffffffffffffffffffffffffffff1663022c0d9f848484600067ffffffffffffffff8111801561591d57600080fd5b506040519080825280601f01601f1916602001820160405280156159505781602001600182028036833780820191505090505b506040518563ffffffff1660e01b8152600401808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b838110156159c85780820151818401526020810190506159ad565b50505050905090810190601f1680156159f55780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015615a1757600080fd5b505af1158015615a2b573d6000803e3d6000fd5b505050505050505050505050508080600101915050615602565b505050565b6000828284039150811115615ac7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f64732d6d6174682d7375622d756e646572666c6f77000000000000000000000081525060200191505060405180910390fd5b92915050565b6000808411615b27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180616403602c913960400191505060405180910390fd5b600083118015615b375750600082115b615b8c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061647a6028913960400191505060405180910390fd5b6000615bb56103e8615ba787876161c190919063ffffffff16565b6161c190919063ffffffff16565b90506000615be06103e5615bd28887615a4a90919063ffffffff16565b6161c190919063ffffffff16565b9050615bff6001828481615bf057fe5b0461625690919063ffffffff16565b925050509392505050565b6000808411615c64576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806164a26025913960400191505060405180910390fd5b600083118015615c745750600082115b615cc9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061647a6028913960400191505060405180910390fd5b82615cdd83866161c190919063ffffffff16565b81615ce457fe5b0490509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415615d76576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061642f6025913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1610615db0578284615db3565b83835b8092508193505050600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415615e5e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f556e697377617056324c6962726172793a205a45524f5f41444452455353000081525060200191505060405180910390fd5b9250929050565b600080600073ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e6a439058a8a6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b158015615f2557600080fd5b505afa158015615f39573d6000803e3d6000fd5b505050506040513d6020811015615f4f57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff161415616060577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c9c6539689896040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b15801561602357600080fd5b505af1158015616037573d6000803e3d6000fd5b505050506040513d602081101561604d57600080fd5b8101908080519060200190929190505050505b60008061608e7f00000000000000000000000000000000000000000000000000000000000000008b8b6162d9565b915091506000821480156160a25750600081145b156160b657878780945081955050506161b4565b60006160c3898484615c0a565b90508781116161345785811015616125576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806164546026913960400191505060405180910390fd5b888180955081965050506161b2565b6000616141898486615c0a565b90508981111561614d57fe5b878110156161a6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806164ee6026913960400191505060405180910390fd5b80898096508197505050505b505b5050965096945050505050565b6000808214806161de57508282838502925082816161db57fe5b04145b616250576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6d756c2d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b92915050565b60008282840191508110156162d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6164642d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b92915050565b60008060006162e88585615cee565b5090506000806162f9888888614eec565b73ffffffffffffffffffffffffffffffffffffffff16630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561633e57600080fd5b505afa158015616352573d6000803e3d6000fd5b505050506040513d606081101561636857600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050506dffffffffffffffffffffffffffff1691506dffffffffffffffffffffffffffff1691508273ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16146163ec5780826163ef565b81815b809550819650505050505093509391505056fe556e697377617056324c6962726172793a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056324c6962726172793a204944454e544943414c5f414444524553534553556e69737761705632526f757465723a20494e53554646494349454e545f425f414d4f554e54556e697377617056324c6962726172793a20494e53554646494349454e545f4c4951554944495459556e697377617056324c6962726172793a20494e53554646494349454e545f414d4f554e54556e69737761705632526f757465723a204558434553534956455f494e5055545f414d4f554e54556e69737761705632526f757465723a20494e53554646494349454e545f415f414d4f554e545472616e7366657248656c7065723a204554485f5452414e534645525f4641494c4544556e69737761705632526f757465723a20494e53554646494349454e545f4f55545055545f414d4f554e545472616e7366657248656c7065723a205452414e534645525f46524f4d5f4641494c4544556e697377617056324c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e54a2646970667358221220cc88e6b25d979a5f1f0492d43a44b03623d96c7c3f4e6a5f9f83788a3cfa76d264736f6c634300060c0033";
//# sourceMappingURL=UniswapV2Router02Factory.js.map
export const IncompatibleTermsContract = 
{
  "contractName": "IncompatibleTermsContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getValueRepaidToDate",
      "outputs": [
        {
          "name": "_valueRepaid",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "payer",
          "type": "address"
        },
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "unitsOfRepayment",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "registerRepayment",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "debtor",
          "type": "address"
        }
      ],
      "name": "registerTermStart",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "getExpectedRepaymentValue",
      "outputs": [
        {
          "name": "_expectedRepaymentValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6102438061001e6000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100675780635f0280ba146100a2578063977a5e641461014757806399114d84146101a5575b600080fd5b341561007257600080fd5b61008c6004808035600019169060200190919050506101e9565b6040518082815260200191505060405180910390f35b34156100ad57600080fd5b61012d60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506101f3565b604051808215151515815260200191505060405180910390f35b341561015257600080fd5b61018b60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610201565b604051808215151515815260200191505060405180910390f35b34156101b057600080fd5b6101d360048080356000191690602001909190803590602001909190505061020c565b6040518082815260200191505060405180910390f35b6000809050919050565b600080905095945050505050565b600080905092915050565b6000809050929150505600a165627a7a72305820c8e0787c1b05f00f0b19e03f457c3e99457deda53b2a560e4b868f34e5bd32a90029",
  "deployedBytecode": "0x606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100675780635f0280ba146100a2578063977a5e641461014757806399114d84146101a5575b600080fd5b341561007257600080fd5b61008c6004808035600019169060200190919050506101e9565b6040518082815260200191505060405180910390f35b34156100ad57600080fd5b61012d60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506101f3565b604051808215151515815260200191505060405180910390f35b341561015257600080fd5b61018b60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610201565b604051808215151515815260200191505060405180910390f35b34156101b057600080fd5b6101d360048080356000191690602001909190803590602001909190505061020c565b6040518082815260200191505060405180910390f35b6000809050919050565b600080905095945050505050565b600080905092915050565b6000809050929150505600a165627a7a72305820c8e0787c1b05f00f0b19e03f457c3e99457deda53b2a560e4b868f34e5bd32a90029",
  "sourceMap": "867:3005:15:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "867:3005:15:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2377:258;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1500:166;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3244:201;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;3822:17;3862:1;3855:8;;3726:144;;;:::o;2377:258::-;2587:13;2623:5;2616:12;;2377:258;;;;;;;:::o;1500:166::-;1618:13;1654:5;1647:12;;1500:166;;;;:::o;3244:201::-;3386:28;3437:1;3430:8;;3244:201;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"../../TermsContract.sol\";\n\n\n/**\n * Contract created for testing purposes that will consistently reject\n * debt order fills that are mapped to it by returning `false` for\n * `registerTermStart`\n *\n * Author: Nadav Hollander Github: nadavhollander\n */\ncontract IncompatibleTermsContract is TermsContract {\n    /// When called, the registerTermStart function registers the fact that\n    ///    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    ///    doesn't rely on taking any sorts of actions when the loan term begins,\n    ///    we simply validate DebtKernel is the transaction sender, and return\n    ///    `true` if the debt agreement is associated with this terms contract.\n    /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n    /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId,\n        address debtor\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    )\n        public\n        view\n        returns (uint _expectedRepaymentValue)\n    {\n        return 0;\n    }\n\n     /// Returns the cumulative units-of-value repaid to date.\n     /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.\n    function getValueRepaidToDate(bytes32 agreementId)\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return 0;\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
      "exportedSymbols": {
        "IncompatibleTermsContract": [
          4457
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 4401,
        "name": "PragmaDirective",
        "src": "584:23:15"
      },
      {
        "attributes": {
          "SourceUnit": 2107,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
          "file": "../../TermsContract.sol",
          "scope": 4458,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 4402,
        "name": "ImportDirective",
        "src": "609:33:15"
      },
      {
        "attributes": {
          "contractDependencies": [
            2106
          ],
          "contractKind": "contract",
          "documentation": "Contract created for testing purposes that will consistently reject\ndebt order fills that are mapped to it by returning `false` for\n`registerTermStart`\n * Author: Nadav Hollander Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            4457,
            2106
          ],
          "name": "IncompatibleTermsContract",
          "scope": 4458
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "TermsContract",
                  "referencedDeclaration": 2106,
                  "type": "contract TermsContract"
                },
                "id": 4403,
                "name": "UserDefinedTypeName",
                "src": "905:13:15"
              }
            ],
            "id": 4404,
            "name": "InheritanceSpecifier",
            "src": "905:13:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "registerTermStart",
              "payable": false,
              "scope": 4457,
              "stateMutability": "nonpayable",
              "superFunction": 2074,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 4416,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4405,
                        "name": "ElementaryTypeName",
                        "src": "1536:7:15"
                      }
                    ],
                    "id": 4406,
                    "name": "VariableDeclaration",
                    "src": "1536:19:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "debtor",
                      "scope": 4416,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4407,
                        "name": "ElementaryTypeName",
                        "src": "1565:7:15"
                      }
                    ],
                    "id": 4408,
                    "name": "VariableDeclaration",
                    "src": "1565:14:15"
                  }
                ],
                "id": 4409,
                "name": "ParameterList",
                "src": "1526:59:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 4416,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4410,
                        "name": "ElementaryTypeName",
                        "src": "1618:4:15"
                      }
                    ],
                    "id": 4411,
                    "name": "VariableDeclaration",
                    "src": "1618:13:15"
                  }
                ],
                "id": 4412,
                "name": "ParameterList",
                "src": "1617:15:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4412
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "66616c7365",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "false"
                        },
                        "id": 4413,
                        "name": "Literal",
                        "src": "1654:5:15"
                      }
                    ],
                    "id": 4414,
                    "name": "Return",
                    "src": "1647:12:15"
                  }
                ],
                "id": 4415,
                "name": "Block",
                "src": "1637:29:15"
              }
            ],
            "id": 4416,
            "name": "FunctionDefinition",
            "src": "1500:166:15"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "registerRepayment",
              "payable": false,
              "scope": 4457,
              "stateMutability": "nonpayable",
              "superFunction": 2089,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 4434,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4417,
                        "name": "ElementaryTypeName",
                        "src": "2413:7:15"
                      }
                    ],
                    "id": 4418,
                    "name": "VariableDeclaration",
                    "src": "2413:19:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "payer",
                      "scope": 4434,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4419,
                        "name": "ElementaryTypeName",
                        "src": "2442:7:15"
                      }
                    ],
                    "id": 4420,
                    "name": "VariableDeclaration",
                    "src": "2442:13:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 4434,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4421,
                        "name": "ElementaryTypeName",
                        "src": "2465:7:15"
                      }
                    ],
                    "id": 4422,
                    "name": "VariableDeclaration",
                    "src": "2465:19:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "unitsOfRepayment",
                      "scope": 4434,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4423,
                        "name": "ElementaryTypeName",
                        "src": "2494:7:15"
                      }
                    ],
                    "id": 4424,
                    "name": "VariableDeclaration",
                    "src": "2494:24:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 4434,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4425,
                        "name": "ElementaryTypeName",
                        "src": "2528:7:15"
                      }
                    ],
                    "id": 4426,
                    "name": "VariableDeclaration",
                    "src": "2528:20:15"
                  }
                ],
                "id": 4427,
                "name": "ParameterList",
                "src": "2403:151:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 4434,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4428,
                        "name": "ElementaryTypeName",
                        "src": "2587:4:15"
                      }
                    ],
                    "id": 4429,
                    "name": "VariableDeclaration",
                    "src": "2587:13:15"
                  }
                ],
                "id": 4430,
                "name": "ParameterList",
                "src": "2586:15:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4430
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "66616c7365",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "false"
                        },
                        "id": 4431,
                        "name": "Literal",
                        "src": "2623:5:15"
                      }
                    ],
                    "id": 4432,
                    "name": "Return",
                    "src": "2616:12:15"
                  }
                ],
                "id": 4433,
                "name": "Block",
                "src": "2606:29:15"
              }
            ],
            "id": 4434,
            "name": "FunctionDefinition",
            "src": "2377:258:15"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getExpectedRepaymentValue",
              "payable": false,
              "scope": 4457,
              "stateMutability": "view",
              "superFunction": 2098,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 4446,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4435,
                        "name": "ElementaryTypeName",
                        "src": "3288:7:15"
                      }
                    ],
                    "id": 4436,
                    "name": "VariableDeclaration",
                    "src": "3288:19:15"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 4446,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4437,
                        "name": "ElementaryTypeName",
                        "src": "3317:7:15"
                      }
                    ],
                    "id": 4438,
                    "name": "VariableDeclaration",
                    "src": "3317:17:15"
                  }
                ],
                "id": 4439,
                "name": "ParameterList",
                "src": "3278:62:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_expectedRepaymentValue",
                      "scope": 4446,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4440,
                        "name": "ElementaryTypeName",
                        "src": "3386:4:15"
                      }
                    ],
                    "id": 4441,
                    "name": "VariableDeclaration",
                    "src": "3386:28:15"
                  }
                ],
                "id": 4442,
                "name": "ParameterList",
                "src": "3385:30:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4442
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "30",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "number",
                          "type": "int_const 0",
                          "value": "0"
                        },
                        "id": 4443,
                        "name": "Literal",
                        "src": "3437:1:15"
                      }
                    ],
                    "id": 4444,
                    "name": "Return",
                    "src": "3430:8:15"
                  }
                ],
                "id": 4445,
                "name": "Block",
                "src": "3420:25:15"
              }
            ],
            "id": 4446,
            "name": "FunctionDefinition",
            "src": "3244:201:15"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getValueRepaidToDate",
              "payable": false,
              "scope": 4457,
              "stateMutability": "view",
              "superFunction": 2105,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 4456,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 4447,
                        "name": "ElementaryTypeName",
                        "src": "3756:7:15"
                      }
                    ],
                    "id": 4448,
                    "name": "VariableDeclaration",
                    "src": "3756:19:15"
                  }
                ],
                "id": 4449,
                "name": "ParameterList",
                "src": "3755:21:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_valueRepaid",
                      "scope": 4456,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4450,
                        "name": "ElementaryTypeName",
                        "src": "3822:4:15"
                      }
                    ],
                    "id": 4451,
                    "name": "VariableDeclaration",
                    "src": "3822:17:15"
                  }
                ],
                "id": 4452,
                "name": "ParameterList",
                "src": "3821:19:15"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 4452
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "30",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "number",
                          "type": "int_const 0",
                          "value": "0"
                        },
                        "id": 4453,
                        "name": "Literal",
                        "src": "3862:1:15"
                      }
                    ],
                    "id": 4454,
                    "name": "Return",
                    "src": "3855:8:15"
                  }
                ],
                "id": 4455,
                "name": "Block",
                "src": "3845:25:15"
              }
            ],
            "id": 4456,
            "name": "FunctionDefinition",
            "src": "3726:144:15"
          }
        ],
        "id": 4457,
        "name": "ContractDefinition",
        "src": "867:3005:15"
      }
    ],
    "id": 4458,
    "name": "SourceUnit",
    "src": "584:3289:15"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x050faf813db584518ce6608b6161efdea8234838"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xb35f2124203a1560e5e0a4d6dcfc1f4f4d4d6b07"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-23T04:47:01.146Z"
}
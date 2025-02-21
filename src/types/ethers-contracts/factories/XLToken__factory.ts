/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { XLToken, XLTokenInterface } from "../XLToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200116f3803806200116f83398101604081905262000034916200036f565b806040518060400160405280600881526020017f584c20546f6b656e0000000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f584c0000000000000000000000000000000000000000000000000000000000008152508160039081620000b2919062000478565b506004620000c1828262000478565b505050600160a060020a0381166200010d576040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b62000121816401000000006200016c810204565b5062000165816200013a640100000000620001be810204565b6200014790600a6200067c565b6200015690620f42406200068d565b640100000000620001c3810204565b50620006bd565b60058054600160a060020a03838116600160a060020a0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b601290565b600160a060020a03821662000208576040517fec442f050000000000000000000000000000000000000000000000000000000081526000600482015260240162000104565b6200021f6000838364010000000062000223810204565b5050565b600160a060020a03831662000252578060026000828254620002469190620006a7565b90915550620002df9050565b600160a060020a03831660009081526020819052604090205481811015620002c0576040517fe450d38c000000000000000000000000000000000000000000000000000000008152600160a060020a0385166004820152602481018290526044810183905260640162000104565b600160a060020a03841660009081526020819052604090209082900390555b600160a060020a038216620002fd576002805482900390556200031c565b600160a060020a03821660009081526020819052604090208054820190555b81600160a060020a031683600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200036291815260200190565b60405180910390a3505050565b6000602082840312156200038257600080fd5b8151600160a060020a03811681146200039a57600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600281046001821680620003e557607f821691505b6020821081036200041f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111562000473576000818152602081206020601f860104810160208610156200044e5750805b6020601f860104820191505b818110156200046f578281556001016200045a565b5050505b505050565b815167ffffffffffffffff811115620004955762000495620003a1565b620004ad81620004a68454620003d0565b8462000425565b602080601f831160018114620004e95760008415620004cc5750858301515b60028086026008870290910a60001904198216178655506200046f565b600085815260208120601f198616915b828110156200051a57888601518255948401946001909101908401620004f9565b50858210156200053b57878501516008601f88160260020a60001904191681555b5050505050600202600101905550565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b80851115620005bd5781600019048211156200059f576200059f6200054b565b80851615620005ad57918102915b600290940493908002906200057f565b509250929050565b600082620005d65750600162000676565b81620005e55750600062000676565b8160018114620005fe576002811462000609576200062a565b600191505062000676565b60ff8411156200061d576200061d6200054b565b8360020a91505062000676565b5060208310610133831016604e8410600b84101617156200064f575081810a62000676565b6200065b83836200057a565b80600019048211156200067257620006726200054b565b0290505b92915050565b60006200039a60ff841683620005c5565b80820281158282048414176200067657620006766200054b565b808201808211156200067657620006766200054b565b610aa280620006cd6000396000f3fe608060405234801561001057600080fd5b5060043610610107576000357c01000000000000000000000000000000000000000000000000000000009004806370a08231116100a957806395d89b411161008357806395d89b41146101f5578063a9059cbb146101fd578063dd62ed3e14610210578063f2fde38b1461024957600080fd5b806370a08231146101a9578063715018a6146101d25780638da5cb5b146101da57600080fd5b806323b872dd116100e557806323b872dd1461015f578063313ce5671461017257806340c10f191461018157806342966c681461019657600080fd5b806306fdde031461010c578063095ea7b31461012a57806318160ddd1461014d575b600080fd5b61011461025c565b60405161012191906108a1565b60405180910390f35b61013d61013836600461090b565b6102ee565b6040519015158152602001610121565b6002545b604051908152602001610121565b61013d61016d366004610935565b610308565b60405160128152602001610121565b61019461018f36600461090b565b61032c565b005b6101946101a4366004610971565b610342565b6101516101b736600461098a565b600160a060020a031660009081526020819052604090205490565b61019461034f565b600554604051600160a060020a039091168152602001610121565b610114610363565b61013d61020b36600461090b565b610372565b61015161021e3660046109ac565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b61019461025736600461098a565b610380565b60606003805461026b906109df565b80601f0160208091040260200160405190810160405280929190818152602001828054610297906109df565b80156102e45780601f106102b9576101008083540402835291602001916102e4565b820191906000526020600020905b8154815290600101906020018083116102c757829003601f168201915b5050505050905090565b6000336102fc8185856103d9565b60019150505b92915050565b6000336103168582856103eb565b610321858585610483565b506001949350505050565b610334610514565b61033e828261055a565b5050565b61034c33826105a9565b50565b610357610514565b61036160006105f8565b565b60606004805461026b906109df565b6000336102fc818585610483565b610388610514565b600160a060020a0381166103d0576040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b61034c816105f8565b6103e68383836001610657565b505050565b600160a060020a0383811660009081526001602090815260408083209386168352929052205460001981101561047d578181101561046e576040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600160a060020a038416600482015260248101829052604481018390526064016103c7565b61047d84848484036000610657565b50505050565b600160a060020a0383166104c6576040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600060048201526024016103c7565b600160a060020a038216610509576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103c7565b6103e683838361075e565b600554600160a060020a03163314610361576040517f118cdaa70000000000000000000000000000000000000000000000000000000081523360048201526024016103c7565b600160a060020a03821661059d576040517fec442f05000000000000000000000000000000000000000000000000000000008152600060048201526024016103c7565b61033e6000838361075e565b600160a060020a0382166105ec576040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600060048201526024016103c7565b61033e8260008361075e565b60058054600160a060020a0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600160a060020a03841661069a576040517fe602df05000000000000000000000000000000000000000000000000000000008152600060048201526024016103c7565b600160a060020a0383166106dd576040517f94280d62000000000000000000000000000000000000000000000000000000008152600060048201526024016103c7565b600160a060020a038085166000908152600160209081526040808320938716835292905220829055801561047d5782600160a060020a031684600160a060020a03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161075091815260200190565b60405180910390a350505050565b600160a060020a03831661078957806002600082825461077e9190610a32565b909155506108149050565b600160a060020a038316600090815260208190526040902054818110156107f5576040517fe450d38c000000000000000000000000000000000000000000000000000000008152600160a060020a038516600482015260248101829052604481018390526064016103c7565b600160a060020a03841660009081526020819052604090209082900390555b600160a060020a0382166108305760028054829003905561084f565b600160a060020a03821660009081526020819052604090208054820190555b81600160a060020a031683600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161089491815260200190565b60405180910390a3505050565b600060208083528351808285015260005b818110156108ce578581018301518582016040015282016108b2565b506000604082860101526040601f19601f8301168501019250505092915050565b8035600160a060020a038116811461090657600080fd5b919050565b6000806040838503121561091e57600080fd5b610927836108ef565b946020939093013593505050565b60008060006060848603121561094a57600080fd5b610953846108ef565b9250610961602085016108ef565b9150604084013590509250925092565b60006020828403121561098357600080fd5b5035919050565b60006020828403121561099c57600080fd5b6109a5826108ef565b9392505050565b600080604083850312156109bf57600080fd5b6109c8836108ef565b91506109d6602084016108ef565b90509250929050565b6002810460018216806109f357607f821691505b602082108103610a2c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b80820180821115610302577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220fb1ddd28d0a8e8e4c8dc356124d46478059a6fc6177865d23aa955543779a55e64736f6c63430008140033";

type XLTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: XLTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class XLToken__factory extends ContractFactory {
  constructor(...args: XLTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<XLToken> {
    return super.deploy(initialOwner, overrides || {}) as Promise<XLToken>;
  }
  override getDeployTransaction(
    initialOwner: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override attach(address: string): XLToken {
    return super.attach(address) as XLToken;
  }
  override connect(signer: Signer): XLToken__factory {
    return super.connect(signer) as XLToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XLTokenInterface {
    return new utils.Interface(_abi) as XLTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XLToken {
    return new Contract(address, _abi, signerOrProvider) as XLToken;
  }
}

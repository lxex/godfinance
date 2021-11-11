/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ISwapCollateral } from "../ISwapCollateral";

export class ISwapCollateral__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISwapCollateral {
    return new Contract(address, _abi, signerOrProvider) as ISwapCollateral;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assetToSwapFromList",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "assetToSwapToList",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amountToSwapList",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "minAmountsToReceive",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct ISwapCollateral.PermitSignature[]",
        name: "permitParams",
        type: "tuple[]",
      },
      {
        internalType: "bool[]",
        name: "useEthPath",
        type: "bool[]",
      },
    ],
    name: "swapAndDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

/*
 * @Author: xianglei
 * @Date: 2025-02-20 14:44:47
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-20 15:01:30
 * @Description: 
 */
import { initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';

export const [metaMask, hooks] = initializeConnector<MetaMask>(
  (actions) => new MetaMask({ actions })
);
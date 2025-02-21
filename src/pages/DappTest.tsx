/*
 * @Author: xianglei
 * @Date: 2025-02-20 08:45:45
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-20 15:22:32
 * @Description:
 */
// import SelfBankInteraction from "@/components/SelfBankInteraction";
// import { useEffect } from "react";
// import { useAccount } from "wagmi";

import MetaMaskCard from "@/components/connectorCards/MetaMaskCard";
import SelfBankInterface from "@/components/SelfBankInterface";

// // Make sure that this component is wrapped with ConnectKitProvider
// const DappTest = () => {
//   const { address, isConnecting, isDisconnected } = useAccount();
//   useEffect(() => {
//     console.log("🏠 ->", address);
//   }, [address]);

//   if (isConnecting) return <div>Connecting...</div>;
//   if (isDisconnected) return <div>Disconnected</div>;

//   return <SelfBankInteraction />;
// };

const DappTest = () => {
  return (
    <>
      <MetaMaskCard />
      <hr />
      <SelfBankInterface />
    </>
  );
};

export default DappTest;

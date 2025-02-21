import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Loader2 } from "lucide-react";
import { SelfBank, SelfBank__factory } from "@/types/ethers-contracts";

const SelfBankInterface = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState<SelfBank | null>(null);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [balance, setBalance] = useState("0");
  const [totalBalance, setTotalBalance] = useState("0");
  const [interest, setInterest] = useState("0");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const contractAddress = "0x0C9f974216A327a38438598E9B45545d3c17616c";

  useEffect(() => {
    const init = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const accounts = await provider.send("eth_requestAccounts", []);
          setAccount(accounts[0]);

          const signer = provider.getSigner();
          const selfBankContract = SelfBank__factory.connect(
            contractAddress,
            signer
          );
          setContract(selfBankContract);

          await updateBalances(selfBankContract, accounts[0]);
        } else {
          setError("请安装 MetaMask 钱包");
        }
      } catch (err) {
        setError(
          err instanceof Error
            ? `连接钱包失败: ${err.message}`
            : "连接钱包失败: Unknown error occurred"
        );
      }
    };

    init();
  }, []);

  const updateBalances = async (
    bankContract: SelfBank = contract!,
    userAccount: string = account
  ) => {
    if (!bankContract || !userAccount) return;

    try {
      const [totalBal, contractBal, interestAmount] = await Promise.all([
        bankContract.getTotalBalance(userAccount),
        bankContract.getContractBalance(),
        bankContract.calculateInterest(userAccount),
      ]);

      setTotalBalance(ethers.utils.formatEther(totalBal));
      setBalance(ethers.utils.formatEther(contractBal));
      setInterest(ethers.utils.formatEther(interestAmount));
    } catch (err) {
      setError(
        err instanceof Error
          ? `获取余额失败: ${err.message}`
          : "获取余额失败: Unknown error occurred"
      );
    }
  };

  const handleDeposit = async () => {
    if (!contract || !depositAmount) return;
    if (parseFloat(depositAmount) <= 0) {
      setError("存款金额必须大于0");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 检查钱包余额
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(account);
      const deposit = ethers.utils.parseEther(depositAmount);
      
      if (balance.lt(deposit)) {
        setError("钱包余额不足");
        setLoading(false);
        return;
      }

      const tx = await contract.deposit({
        value: deposit,
      });
      
      setError("交易已提交，等待确认...");
      await tx.wait();
      await updateBalances();
      setDepositAmount("");
      setError("");
    } catch (err: any) {
      handleTransactionError(err);
    } finally {
      setLoading(false);
    }
  };

  // 优化错误处理函数
  const handleTransactionError = (err: any) => {
    console.error("Transaction Error:", err);
    
    if (err.code === "ACTION_REJECTED") {
      setError("用户取消了交易");
      return;
    }

    // 处理 MetaMask RPC 错误
    if (err.code === -32603) {
      setError("交易失败：请检查您的余额是否足够（包括gas费）");
      return;
    }

    // 解析合约错误
    if (err.reason) {
      setError(`交易失败：${err.reason}`);
      return;
    }

    // 处理其他错误
    setError(
      err.message?.includes("user rejected") 
        ? "用户取消了交易" 
        : `交易失败：${err.message || "未知错误"}`
    );
  };

  const handleWithdraw = async () => {
    if (!contract || !withdrawAmount) return;
    if (parseFloat(withdrawAmount) <= 0) {
      setError("提款金额必须大于0");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 检查可提取余额
      const totalBal = await contract.getTotalBalance(account);
      const withdrawAmount_BN = ethers.utils.parseEther(withdrawAmount);
      
      if (withdrawAmount_BN.gt(totalBal)) {
        setError("提款金额超过可用余额");
        setLoading(false);
        return;
      }

      const tx = await contract.withdraw(withdrawAmount_BN);
      
      setError("交易已提交，等待确认...");
      await tx.wait();
      await updateBalances();
      setWithdrawAmount("");
      setError("");
    } catch (err: any) {
      handleTransactionError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* 标题 */}
        <h1 className="text-[#96C93D] text-3xl font-semibold mb-6 pb-4 border-b">
          SelfBank DApp
        </h1>

        <div className="space-y-6">
          {/* 地址信息 */}
          <div>
            <p className="text-gray-600 text-sm mb-1">合约地址</p>
            <p className="font-mono text-gray-800 break-all">
              {contractAddress}
            </p>
          </div>
          <div>
            <p className="text-gray-600 text-sm mb-1">当前账户</p>
            <p className="font-mono text-gray-800 break-all">
              {account || "未连接钱包"}
            </p>
          </div>

          {/* 余额信息 */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="min-h-[80px]">
              <p className="text-gray-600 text-sm mb-2">总存款(含利息)</p>
              <p className="text-2xl font-bold text-gray-900 break-words">
                {totalBalance} ETH
              </p>
            </div>
            <div className="min-h-[80px]">
              <p className="text-gray-600 text-sm mb-2">当前利息</p>
              <p className="text-2xl font-bold text-gray-900 break-words">
                {interest} ETH
              </p>
            </div>
            <div className="min-h-[80px]">
              <p className="text-gray-600 text-sm mb-2">合约余额</p>
              <p className="text-2xl font-bold text-gray-900 break-words">
                {balance} ETH
              </p>
            </div>
          </div>

          {/* 操作表单 */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <input
                type="number"
                step="0.01"
                min="0"
                placeholder="存款金额 (ETH)"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                disabled={loading || !account}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
              />
              <button
                onClick={handleDeposit}
                disabled={loading || !depositAmount || !account}
                className="px-6 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "存款"
                )}
              </button>
            </div>

            <div className="flex gap-4">
              <input
                type="number"
                step="0.01"
                min="0"
                placeholder="提款金额 (ETH)"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
                disabled={loading || !account}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
              />
              <button
                onClick={handleWithdraw}
                disabled={loading || !withdrawAmount || !account}
                className="px-6 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "提款"
                )}
              </button>
            </div>
          </div>

          {/* 错误提示 */}
          {error && (
            <div className="mt-4 bg-red-50 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelfBankInterface;
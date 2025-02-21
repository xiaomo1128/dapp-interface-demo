import { ChangeEvent, useState } from "react";
import { useAccount } from "wagmi";
import { formatEther } from "viem";
import { useSelfBank } from "@hooks/useSelfBank";

const SelfBankInteraction = () => {
  const { address, isConnected } = useAccount();
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");

  const {
    contractBalance,
    refetchBalance,
    useGetTotalBalance,
    useCalculateInterest,
    useDeposit,
    useWithdraw,
  } = useSelfBank();

  // 获取用户余额和利息
  const { data: totalBalance, refetch: refetchTotalBalance } =
    useGetTotalBalance(address);
  const { data: interest } = useCalculateInterest(address);

  // 存款功能
  const { deposit, isLoading: isDepositing } = useDeposit({
    amount: depositAmount ? depositAmount : "0", // 保持为字符串
    onSuccess: () => {
      refetchBalance();
      refetchTotalBalance();
      setDepositAmount("");
    },
    onError: (error: Error) => {
      console.error("Deposit error:", error.message);
    },
  });

  // 取款功能
  const { withdraw, isLoading: isWithdrawing } = useWithdraw({
    amount: withdrawAmount ? withdrawAmount : "0", // 保持为字符串
    onSuccess: () => {
      refetchBalance();
      refetchTotalBalance();
      setWithdrawAmount("");
    },
    onError: (error: Error) => {
      console.error("Withdraw error:", error.message);
    },
  });

  const handleDeposit = () => {
    if (!isConnected || !depositAmount) return;
    deposit();
  };

  const handleWithdraw = () => {
    if (!isConnected || !withdrawAmount) return;
    withdraw();
  };

  const handleDepositAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDepositAmount(e.target.value);
  };

  const handleWithdrawAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWithdrawAmount(e.target.value);
  };

  return (
    <div className="max-w-lg mx-auto p-4 space-y-6">
      {/* 余额信息 */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold color">余额信息</h2>
        {!isConnected ? (
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            连接钱包
          </button>
        ) : (
          <div className="space-y-2">
            <p>
              合约余额:{" "}
              {contractBalance ? formatEther(contractBalance) : "0"} ETH
            </p>
            <p>
              您的余额: {totalBalance ? formatEther(totalBalance) : "0"} ETH
            </p>
            <p>当前利息: {interest ? formatEther(interest) : "0"} ETH</p>
          </div>
        )}
      </div>

      {/* 存款表单 */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">存款</h2>
        <div className="flex gap-4">
          <input
            type="number"
            step="0.01"
            min="0"
            value={depositAmount}
            onChange={handleDepositAmountChange}
            placeholder="输入存款金额 (ETH)"
            className="flex-1 p-2 border rounded dark:bg-gray-700"
          />
          <button
            onClick={handleDeposit}
            disabled={isDepositing || !depositAmount}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isDepositing ? "处理中..." : "存款"}
          </button>
        </div>
      </div>

      {/* 取款表单 */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">取款</h2>
        <div className="flex gap-4">
          <input
            type="number"
            step="0.01"
            min="0"
            value={withdrawAmount}
            onChange={handleWithdrawAmountChange}
            placeholder="输入取款金额 (ETH)"
            className="flex-1 p-2 border rounded dark:bg-gray-700"
          />
          <button
            onClick={handleWithdraw}
            disabled={isWithdrawing || !withdrawAmount}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isWithdrawing ? "处理中..." : "取款"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelfBankInteraction;
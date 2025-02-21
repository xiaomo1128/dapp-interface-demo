import { useReadContract, useWriteContract, useWaitForTransactionReceipt, useSimulateContract } from 'wagmi';
import { formatEther, parseEther } from 'viem';
import SelfBankABI from '@abis/SelfBank.json';

export const CONTRACT_ADDRESS = '0x0C9f974216A327a38438598E9B45545d3c17616c' as `0x${string}`;
export const CONTRACT_ABI = SelfBankABI.abi;

export const useSelfBank = () => {
  // 获取合约余额
  const { data: contractBalance, refetch: refetchBalance } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getContractBalance',
  });

  // 获取用户总余额
  const useGetTotalBalance = (address: `0x${string}` | undefined) => {
    return useReadContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'getTotalBalance',
      args: address ? [address] : undefined,
    });
  };

  // 计算利息
  const useCalculateInterest = (address: `0x${string}` | undefined) => {
    return useReadContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'calculateInterest',
      args: address ? [address] : undefined,
    });
  };

  // 存款
  const useDeposit = ({
    amount,
    onSuccess,
    onError,
  }: {
    amount: string;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
  }) => {
    const { data: simulateData } = useSimulateContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'deposit',
      value: parseEther(amount || '0'),
    });

    const { writeContract, data: hash, isPending } = useWriteContract();

    const { isLoading: isTransactionPending } = useWaitForTransactionReceipt({
      hash,
    });

    const deposit = () => {
      if (simulateData?.request) {
        writeContract(simulateData.request);
      }
    };

    return {
      deposit,
      isLoading: isPending || isTransactionPending,
    };
  };

  // 取款
  const useWithdraw = ({
    amount,
    onSuccess,
    onError,
  }: {
    amount: string;
    onSuccess?: () => void;
    onError?: (error: Error) => void;
  }) => {
    const { data: simulateData } = useSimulateContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'withdraw',
      args: [parseEther(amount || '0')],
    });

    const { writeContract, data: hash, isPending } = useWriteContract();

    const { isLoading: isTransactionPending } = useWaitForTransactionReceipt({
      hash,
    });

    const withdraw = () => {
      if (simulateData?.request) {
        writeContract(simulateData.request);
      }
    };

    return {
      withdraw,
      isLoading: isPending || isTransactionPending,
    };
  };

  return {
    contractBalance,
    refetchBalance,
    useGetTotalBalance,
    useCalculateInterest,
    useDeposit,
    useWithdraw,
  };
};
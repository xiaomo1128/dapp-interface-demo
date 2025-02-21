/*
 * @Author: xianglei
 * @Date: 2025-02-20 14:43:42
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-20 15:02:16
 * @Description: 
 */
import type { Web3ReactHooks } from '@web3-react/core';

export function Status({
  isActivating,
  isActive,
  error,
}: {
  isActivating: ReturnType<Web3ReactHooks['useIsActivating']>;
  isActive: ReturnType<Web3ReactHooks['useIsActive']>;
  error?: Error;
}) {
  return (
    <div>
      {error ? (
        <>
          🔴 {error.name ?? 'Error'}
          {error.message ? `: ${error.message}` : null}
        </>
      ) : isActivating ? (
        <>🟡 Connecting</>
      ) : isActive ? ( 
        <>🟢 Connected</>
      ) : (
        <>⚪️ Disconnected</>
      )}
    </div>
  );
}

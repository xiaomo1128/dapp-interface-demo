import { useCallback, useState } from "react";
import { type Draft, freeze, produce } from "immer";

/**
 * 具体DraftFunction实现的内容是
 * 1. 通过**produce函数**生成一个新的draft对象
 * 2. 通过draft对象修改数据
 * 3. 返回新的draft对象
 * updateValue(produce(draft => {
 *   draft.name = "new name";
 * }));
 */
export type DraftFunction<T> = (draft: Draft<T>) => void;
export type Updater<S> = (arg: S | DraftFunction<S>) => void;
export type ImmerHook<S> = [S, Updater<S>];

//函数签名
export function useImmer<S = unknown>(
  initialValue: S | (() => S)
): ImmerHook<S>;
export function useImmer<T>(initialValue: T) {
  // updateValue可能是一个函数，也可能是一个值
  const [val, updateValue] = useState(() =>
    //冻结初始化对象，防止被修改
    freeze(
      typeof initialValue === "function" ? initialValue() : initialValue,
      true
    )
  );

  return [
    val,
    useCallback((updater: T | DraftFunction<T>) => {
      if (typeof updater === "function") {
        updateValue(produce(updater as DraftFunction<T>));
      } else {
        updateValue(freeze(updater));
      }
    }, []),
  ];
}




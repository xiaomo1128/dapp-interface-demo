import { atom } from "jotai";
import { atomWithImmer } from "jotai-immer";

type User = {
  name: string;
  age: number;
  scores: {
    math: number;
    english: number;
  };
};

const initialUser: User = {
  name: "John",
  age: 25,
  scores: {
    math: 90,
    english: 85,
  },
};

export const todoCountAtom = atom(0);
export const userImmerAtom = atomWithImmer<User>(initialUser);

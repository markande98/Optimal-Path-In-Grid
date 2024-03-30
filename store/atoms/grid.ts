import { atom } from "recoil";

export const grid = atom({
  key: "gridCordinates",
  default: new Map<number, number>(),
});

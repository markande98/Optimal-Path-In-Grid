import { atom } from "recoil";

export const grid = atom({
  key: "gridCoordinates",
  default: new Map<number, number>(),
});

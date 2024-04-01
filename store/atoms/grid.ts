import { atom, selector } from "recoil";

export const grid = atom({
  key: "gridCoordinates",
  default: new Map<number, number>(),
});

export const gridSelector = selector({
  key: "gridSelector",
  get: ({ get }) => {
    const cord = get(grid);

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        cord.set(i * 6 + j, 1);
      }
    }
    return cord;
  },
});

"use server";

const findShortestPath = async (cord: Map<number, number>) => {
  let dp: number[][] = [];

  Array(6)
    .fill(null)
    .forEach(() => dp.push(Array(6).fill(Number.MAX_VALUE)));

  dp[0][0] = dp[5][5] = 0;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (i === 0 && j === 0) continue;
      if (i == 0 && cord.get(i * 6 + j) !== -1) {
        dp[i][j] =
          dp[i][j - 1] !== Number.MAX_VALUE
            ? dp[i][j - 1] + cord.get(i * 6 + j)!
            : dp[i][j];
      }
      if (j == 0 && cord.get(i * 6 + j) !== -1) {
        dp[i][j] =
          dp[i - 1][j] !== Number.MAX_VALUE
            ? dp[i - 1][j] + cord.get(i * 6 + j)!
            : dp[i - 1][j];
      }
      if (i > 0 && j > 0 && cord.get(i * 6 + j) !== -1) {
        const minValue = Math.min(dp[i - 1][j], dp[i][j - 1]);
        dp[i][j] =
          minValue !== Number.MAX_VALUE
            ? minValue + cord.get(i * 6 + j)!
            : dp[i][j];
      }
    }
  }

  //   console.log(dp);
};

export const shortestPath = async (cord: Map<number, number>) => {
  await findShortestPath(cord);
  return {
    path: cord,
  };
};

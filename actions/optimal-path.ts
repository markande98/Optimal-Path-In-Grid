"use server";

const findOptimalPath = async (cord: Map<number, number>) => {
  let dp: number[][] = [];

  Array(6)
    .fill(null)
    .forEach(() => dp.push(Array(6).fill(Number.MAX_VALUE)));

  dp[0][0] = 0;

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
  let ans: number[][] = [];
  let x = 5,
    y = 5;

  while (x > 0 || y > 0) {
    if (dp[x][y] === Number.MAX_VALUE) break;
    ans.push([x, y]);
    let val = Number.MAX_VALUE;
    if (x - 1 >= 0) val = Math.min(val, dp[x - 1][y]);
    if (y - 1 >= 0) val = Math.min(val, dp[x][y - 1]);

    if (x - 1 >= 0 && val === dp[x - 1][y]) x--;
    else if (y - 1 >= 0 && val === dp[x][y - 1]) y--;

    if (x === 0 && y === 0) {
      ans.push([0, 0]);
      break;
    }
  }
  return ans;
};

export const optimalPath = async (cord: Map<number, number>) => {
  const ans: number[][] = await findOptimalPath(cord);
  return {
    shortestPath: ans,
  };
};

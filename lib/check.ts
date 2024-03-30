export const isValidCordinates = (x: string, y: string): boolean => {
  const xVal = parseInt(x);
  const yVal = parseInt(y);

  if (isNaN(xVal) || isNaN(yVal)) return false;

  if (xVal < 0 || xVal > 5 || yVal < 0 || yVal > 5) return false;

  const val = xVal * 6 + yVal;

  if (val < 0 || val > 35) return false;

  return true;
};

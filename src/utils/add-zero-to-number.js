/**
 * add zero to number if number < 10 (0 - 9)
 * @example
 * addZeroToNumber(5) return 05
 * addZeroToNumber(10) return 10
 *
 * @param {number} num
 * @return {string}
 */
export const addZeroToNumber = (num) => {
  const strNum = num.toString()
  if (strNum.length === 1) {
    return `${0}${strNum}`;
  }
  return strNum;
};

import { addZeroToNumber } from "@/utils/add-zero-to-number";

/**
 * transform seconds to format hh:mm:ss
 * @example
 * secondsTransformToHh_mm_ss(5) return "5"
 * secondsTransformToHh_mm_ss(125) return "02:05"
 * secondsTransformToHh_mm_ss(3725) return "01:02:05"
 *
 * @param {number} seconds
 * @return {string}
 */
export const secondsTransformToHh_mm_ss = (seconds) => {
  const secs = seconds % 60;
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(seconds / 60 / 60);

  const hoursStr = addZeroToNumber(hours) !== "00"
    ? addZeroToNumber(hours) + ':'
    : ""
  const minutesStr = addZeroToNumber(minutes) !== "00"
    ? addZeroToNumber(minutes % 60) + ':'
    : ""
  const secsStr = addZeroToNumber(secs)

  return hoursStr + minutesStr + secsStr;
};

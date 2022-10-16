/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

const reverseInteger = (int) => {
  const reverseInt = int.toString().split("").reverse().join("");
  return parseInt(reverseInt) * Math.sign(int);
};

module.exports = reverseInteger;

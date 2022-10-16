/** Print out steps based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate
 * a step and make sure to use spaces to fill in the line.
 *
 * @example
 * steps(2)
 *  '# '
 *  '##'
 * steps(3)
 *  '#  '
 *  '## '
 *  '###'
 * steps(4)
 *  '#   '
 *  '##  '
 *  '### '
 *  '####'
 */

const steps = (n) => {
  for (let r = 0; r < n; ++r) {
    let step = "";
    for (let c = 0; c < n; ++c) {
      if (c <= r) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
};

module.exports = steps;

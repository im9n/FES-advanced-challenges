/** Print out steps for a pyramid based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate a step
 * and make sure to use spaces to fill in the line.
 *
 * @example
 * pyramid(2) -> 3
 *  ' # '
 *  '###'
 * pyramid(3) -> 5
 *  '  #  '
 *  ' ### '
 *  '#####'
 * pyramid(4) -> 7
 *  '   #   '
 *  '  ###  '
 *  ' ##### '
 *  '#######'
 */

const pyramid = (n) => {
const columnWidth = n * 2 - 1
const middle = Math.floor(columnWidth / 2)

for(let r = 0; r < n; ++r){
    let step = ''
    for(let c = 0; c < columnWidth; ++c){
        if(c >= middle - r && c <= middle + r){
            step += '#'
        }
        else{
            step += ' '
        }
    }
    console.log(step)
}
};

module.exports = pyramid;

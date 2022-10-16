/** Given a string, find the character that is used the
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

const maxCharacter = (str) => {
  const charMap = new Map();
  let maxCharacter = "";
  let maxValue = 0;

  for (const char of str) {
  const count = charMap.get(char)
  charMap.set(char, count + 1 || 1)
  }

  for (const [char, count] of charMap) {
   if(count > maxValue){
    maxValue = count
    maxCharacter = char
   }
  }

  return maxCharacter
};

module.exports = maxCharacter;

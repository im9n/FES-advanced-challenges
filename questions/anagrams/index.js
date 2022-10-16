/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

const anagrams = (strA, strB) => {
// OBJECT CM METHOD

//   const charMapA = buildCharMap(strA);
//   const charMapB = buildCharMap(strB);

//  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (const char in charMapA) {
//     const countB = charMapB[char]
//     if (charMapA[char] !== countB) {
//       return false;
//     }
//   }

//   return true;

// MAP CM METHOD 

  const charMapA = buildCharMap(strA);
  const charMapB = buildCharMap(strB);

  if (charMapA.size !== charMapB.size) {
    return false;
  }

  for (const [char, countA] in charMapA) {
    const countB = charMapB.get(char)
    if (countA !== countB) {
      return false;
    }
  }

  return true;
};

const buildCharMap = (str) => {
// OBJECT CM METHOD

//   const charMap = {}

//   for (const char of removeSpacesAndLowerCase(str)) {
//   charMap[char] = charMap[char] + 1 || 1
//   } 

//   return charMap;

// MAP CM METHOD

  const charMap = new Map()

  for (const char of removeSpacesAndLowerCase(str)) {
  const count = charMap.get(char)
  charMap.set(char, count + 1 || 1)
  } 

  return charMap;
};

const removeSpacesAndLowerCase = (str) => {
  return str.toLowerCase().replaceAll(" ", "");
};

module.exports = anagrams;

/**
 * Converts a CamelCase string to an underscore_case string.
 *
 * This function takes a string in CamelCase format and converts it to 
 * an underscore_case format by inserting underscores before uppercase 
 * letters and converting all characters to lowercase.
 *
 * @param {string} input - The CamelCase string to be converted.
 * @returns {string} - The converted string in underscore_case format.
 *
 * @example
 * 
 * const camelCaseString = "thisIsCamelCase";
 * const underscoreString = convertCamelToUnderscore(camelCaseString);
 * console.log(underscoreString); // Outputs: this_is_camel_case
 */
export default function convertCamelToUnderscore(input) {
  // Use a regular expression to find uppercase letters preceded by lowercase letters
  const regExp = /([a-z])([A-Z])/g;

  // Replace the matches with an underscore followed by the lowercase version of the uppercase letter
  let underscored = input.replace(regExp, (match, p1, p2) => {
    return p1 + '_' + p2.toLowerCase();
  });

  // Return the entire string in lowercase to ensure consistency
  return underscored.toLowerCase();
}

/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    const results = new Map();
    words.forEach(word => {
        word.toLowerCase();
        const uniqueChars = new Set(word.split(""));
        const arrayUniqueChars = [...uniqueChars].sort();
        const stringUniqueChars = arrayUniqueChars.join("");
        if (results.has(stringUniqueChars)) {
            results.get(stringUniqueChars).push(word)
        } else {
            results.set(stringUniqueChars, [word])
        }
    })

    return results;
}
const a = sameLetters(["pair", "per", "pole", "pear", "peer", "reap", "lope"]);
console.log(a)
module.exports = sameLetters;

let array = "abcdcaf";

function firstNonRepeatingCharacter(array) {
    for (let i = 0; i < array.length; i++) {
        let j = array.charAt(i);
        if (array.indexOf(j) === i && array.indexOf(j, i + 1) === -1) {
            return i;
        }
    }
    return -1;
}
firstNonRepeatingCharacter(array);

// Do not edit the line below.

exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;

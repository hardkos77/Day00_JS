function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length; i++) {
        const diffIndex = array.indexOf(targetSum - array[i]);
        if (diffIndex >= 0 && diffIndex !== i) {
            return [i, diffIndex];
        }
    }
    return [];
}

twoNumberSum(array, targetSum);

// Merci de ne pas effacer la ligne en dessous.

exports.twoNumberSum =  twoNumberSum;



function twoNumberSum(array, targetSum){
    let sum;
    let result = [];
    for (let i=0; i < array.length; i++) {
        for (let j=0; j < array.length - i; j++ ) {
            if (i !== i+j) {
                sum=array[i]+array[i+j];
                if (sum === targetSum) {
                    result.push([array[i],array[i+j]]);
                }
            }
        }
    }
    return result;
}

twoNumberSum(array, targetSum);

// Merci de ne pas effacer la ligne en dessous.

exports.twoNumberSum = twoNumberSum;



let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];

function threeLargestNumbers(array){
    array.sort(function (a, b){
        return a - b;
    });
    return array.slice(-3);
}

// Merci de ne pas effacer la ligne en dessous.

exports.threeLargestNumbers =  threeLargestNumbers;

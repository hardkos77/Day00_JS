function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

// Merci de ne pas effacer la ligne en dessous.

exports.isPalindrome =  isPalindrome;

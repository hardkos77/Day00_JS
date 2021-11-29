let str1 = "abc";
let str2 = 'yabd';

function levDist(str1, str2){
    if (!str1.length) return str2.length;
    if (!str2.length) return str1.length;
    const arr = [];
    for (let i = 0; i <= str2.length; i++) {
        arr[i] = [i];
        for (let j = 1; j <= str1.length; j++) {
            arr[i][j] =
                i === 0
                    ? j
                    : Math.min(
                        arr[i - 1][j] + 1,
                        arr[i][j - 1] + 1,
                        arr[i - 1][j - 1] + (str1[j - 1] === str2[i - 1] ? 0 : 1)
                    );
        }
    }
    return arr[str2.length][str1.length];
}

levDist(str1, str2);

// Merci de ne pas effacer la ligne en dessous.

exports.levDist =  levDist;

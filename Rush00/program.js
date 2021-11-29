function sun(buildings, direction){
    let result = [];
    let indexStart = 0;
    let indexEnd = 0 ;
    let maxValue = 0;
    if(direction === "Est") {
        indexStart = buildings.length - 1;
        for (let i = indexStart ; i >= indexEnd; i--) {
            if(maxValue < buildings[i]){
                maxValue = buildings[i];
                result.unshift(i);
            }
        }
    }else {
        indexEnd = buildings.length -1;
        for (let i = indexStart ; i <= indexEnd; i++) {
            if(maxValue < buildings[i]){
                maxValue = buildings[i];
                result.push(i);
            }
        }
    }
    return result;
}

/*==================================
Programme de test de la fonction sun
====================================
let buildings = [3, 5, 4, 4, 3, 1, 3, 2];
let direction = 'Ouest';
let directions = ['Ouest','Est'];

for(let tableIndex = 0; tableIndex < 5 ;tableIndex++ ){
    const randomTable = Array.from({length: 10}, () => Math.floor(Math.random() * 5 + 1));
    const randomDirection = directions[Math.floor(Math.random()*directions.length)];
    console.log('--------- TEST '+ tableIndex +' ---------')
    console.log('Direction : ' + randomDirection)
    console.log('Immeubles : ' + randomTable);
    console.log('Resultats : ' + sun(randomTable, randomDirection))
}

console.log('--------- TEST EXERCICE ---------')
console.log('Direction : ' + buildings)
console.log('Immeubles : ' + direction);
console.log('Resultats : ' + sun(buildings, directionString))
*/
// Merci de ne pas effacer la ligne en dessous.
exports.sun = sun ;


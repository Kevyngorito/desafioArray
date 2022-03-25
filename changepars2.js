let vet = [1,2,6,22,11,35,55];

function parNumber (array) {
    if (!array) return -1;
    if (!array.length) return -2;
    
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i] === 0) {
            console.log ('Este número já é 0.');
        }else if(array[i] % 2 === 0) {
        console.log(`Número ${array[i]}, virou 0 agora.`);
        array[i] = 0;
        }
    }
    return array;
}

console.log (parNumber(vet));
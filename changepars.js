//Cria uma função que receberá o parâmetro ARRAY

let arr = [1, 3, 4, 6, 80, 33, 23, 90]; //declaração do array

function checkItems (array) {
   
    if(!array) return -1; //Verificação para existência do array
    if(!array.length) return -1;

     for (let i = 0; i < array.length; i++){
         if(array[i] === 0){
             console.log("Você já é um ZERO!!!");
         }else if(array[i] % 2 === 0){

            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0; //reatribuição do valor, caso a posição atenda a condição % 2
         }
     }
    
 return array; //retorna o array
}



console.log(checkItems(arr)); //imprime a chamada da funcção tendo como atributo o array ARR
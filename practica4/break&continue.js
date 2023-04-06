// casos especificos de break, continue

let lista = [1,2,3,4,5,6,7,8,9,10]

for (let a = 0; a < lista.length;a++){
    
    
    if (lista[a] == 3){
        continue;
    }
    console.log(lista[a]);

    if (lista[a] > 5){
        break;
    }

}
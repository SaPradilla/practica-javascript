// calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let numero = 0
let total = 1
while(true){
    
    numero++
    
    console.log(numero);
    
    total = total * numero;
    
    console.log(total);
    
    if (total == 3628800){
        break
    }
}


let unidades = 0;
let decenas = 0;

while(true){
    while(true){
        console.log(`El numero actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades == 10){
            unidades = 0
            break
        }
    }
    decenas++
    if (decenas == 2){
        console.log(`El numero actual es: ${decenas}${unidades}`)
        break
    }

}

//bucle utilizando etiquetas

bucleDecenas: while(true){
    bucleUnidades: while(true){
        console.log(`El numero actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades == 10){
            unidades = 0
            break bucleUnidades
        }
        if (decenas == 2){
            console.log(`El numero actual es: ${decenas}${unidades}`)
            break bucleDecenas
        }
    }
    decenas++
}
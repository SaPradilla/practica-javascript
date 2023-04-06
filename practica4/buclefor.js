
// a = a + 1
// a += 1
// a++

//contador del 0 al 10
for (let i = 0 ; i < 10 ; i+=1){
    
    console.log(i);
}



let lista = [1,2,3,4,5,6,7,8,9,10];

//Estructura for 
for (let b = 0; b < lista.length; b++){
    console.log(lista[b]);
}

//Estructura for of 
for(let valor of lista){
    console.log(valor);
}

//Estructura for each
lista.forEach(valor => {
    console.log(valor);

});


//Estructura for in

let persona = {
    nombre : "santiago",
    edad : 18,
    colorPelo : "castaño"
}

console.log(persona.nombre);

for (let propiedad in persona) {
    
    console.log(propiedad);
    console.log(persona[propiedad])
    
    
}

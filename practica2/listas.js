
// Listas

const lista = [1, "hola", true, false, null];

const lista1 = new Array[1, "hola", true, false, null];

const lista3 = new Array(3);

lista[0] = "posicion 1";

const lista4 = [lista,lista1,lista3];

console.log(lista);
console.log(lista1);
console.log(lista3);

// objetos
const carro = {
    motor : "V8",
    color : "negro",
    precio : 20000,
    pordentro: {
        radio : "nose",
        asientos : "si",
    }

};
//agregar atributos
carro.llantas = "de las mejores";
//editar atributos
carro.color = "azul";
//acceder a los atributos de un objeto
console.log(carro.pordentro.radio);

//flechas

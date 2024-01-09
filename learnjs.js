// Variables

let nombre = 'GeannyJS';
let edad = 28;
const direccion = {calle:'C/Oquidea #5', 
sector:'Villa Mella',
hobbies: {
    hobby: 'programar',
    hobby2: 'diseñar'
}


};

//destructuracion objeto
const  {calle, sector} = direccion;

console.log(calle);

//destructuracion arreglo
const ArreglodeFrutas = ['mango', 'piña', 'manzana', 'banana', 'lechosa'];

const [fruta1, fruta2, fruta3, fruta4 , ,] =ArreglodeFrutas;

console.log(fruta1);




const persona = {
    nombre: 'Matt',
    apellido: 'Dominguez',
    lenguajes: ['Js', 'C#', 'Python'],
    object: {}
}

// Sacar valores de un objeto

const valores = Object.values(persona);
console.log(valores)

//Sacar entidades del objeto

const entidades = Object.entries(persona);
console.log(entidades)


//Sacar keys de  un objecto

const key = Object.keys(persona)
console.log(key)

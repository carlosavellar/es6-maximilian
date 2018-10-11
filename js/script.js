/* 
const mod = require('./modules.js');
// import { myname } from './modules.js';
console.log(mod);

class Person{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name.toUpperCase();
    }
    set name(value){
        if(value.length > 2){
            this._name = value;
        } 
        console.log(Rejected);
    }
}
let person1 = new Person('Carl');
console.log(person1); */


/* class Convertable extends Array{
    convert(){
        let arrayToconvert = [];
        this.forEach(value => arrayToconvert.push('Converted ' + value));
        return arrayToconvert;
    }
}
let convArray = new Convertable();
convArray.push(1);
convArray.push(2);
convArray.push(3);
console.log(convArray.convert());

 */

 let newSymbol = Symbol('Love');
 console.log(typeof newSymbol);
 
 let symbolCar = {
     name: 'Ferrai',
     pais: 'Italy',
     [Symbol]: 22,
     "Love me": "Total love",
     "roma 1"(){
         return this.pais;
     }
    }
console.log(symbolCar["Love me"]);
console.log(symbolCar["roma 1"]());



const theArray = [ 23, 45, 56];
const addArray = (...tddArray) =>{
    let resultado = 0;
     for(var i=0; i < tddArray.length; i++){
        resultado += tddArray[i];
     }
     return resultado;
};

console.log(addArray(12,345,66));

import { car } from 'modules.js';
console.log(car);




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

//  let newSymbol = Symbol('Love');
//  console.log(typeof newSymbol);
 
//  let symbolCar = {
//      name: 'Ferrai',
//      pais: 'Italy',
//      [Symbol]: 22,
//      "Love me": "Total love",
//      "roma 1"(){
//          return this.pais;
//      }
//     }
// console.log(symbolCar["Love me"]);
// console.log(symbolCar["roma 1"]());



// const theArray = [ 23, 45, 56];
// const addArray = (...tddArray) =>{
//     let resultado = 0;
//      for(var i=0; i < tddArray.length; i++){
//         resultado += tddArray[i];
//      }
//      return resultado;
// };

// console.log(addArray(12,345,66));




// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     sayName(){
//         console.log(this.name);
//     }
// }

// const carlos = new Person('José Carlos');
// carlos.sayName();

//  console.log(carlos.__proto__);
//  console.log(carlos.__proto__ === Person.prototype);

// let array = [ 1,2,3];

// let alwaysValue = 11;
// array[Symbol.iterator] = () =>{
//     return {
//         next: ()=>{
//             alwaysValue++;
//             return{
//                 done: alwaysValue > 15 ? true : false,
//                 value: alwaysValue
//             };
//         }
//     };
// }
// const it  = array[Symbol.iterator]();

// for(const element of array){
//     console.log(element);
// }


const person ={
    name: 'JOsé Carlos',
    hobbies: ['Bicicleta','Video Game', 'Meditação'],
    [Symbol.iterator]: function(){
        let i = 0;
        let hobbies = this.hobbies;
        return{
            next: function(){
                let value = hobbies[i];
                i++;
                return{
                    done: i > hobbies.length ? true : false,
                    value: value
                };
            }
        };
    }
};
// const person = new Person();
for(let hobby of person){
    console.log(hobby);
}
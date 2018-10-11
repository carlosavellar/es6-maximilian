
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

console.log(person1);
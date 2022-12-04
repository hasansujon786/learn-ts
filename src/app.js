"use strict";
// data-imgperflogname="profileCoverPhoto"
function generate(symbol, what = 23, amount) {
    console.log(what);
    amount = amount || 20;
    return symbol + amount;
}
function add(opts) {
    return opts.num1 + opts.num2;
}
add({ num1: 10, num2: 23, what: '+' });
// Generics
function identity(arg) {
    return arg;
}
identity('hello');
identity(1);
class App {
    constructor() {
        // super()
        this.userName = 'sokina';
    }
    onInit() {
        // super.onInit()
        console.log('========= I am from App');
    }
}
App.id = 'app';
console.log(App.id);
// console.log(App.userName)
let app = new App();
class Koo {
    greet() {
        throw new Error('Method not implemented.');
    }
}
// MFoo.greet()

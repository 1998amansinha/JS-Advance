console.log(a);
var a = 10; // undefined

// code interpret as
var a
console.log(a) // memory space for a is created with a value undefined
a = 10
console.log(a);

// ----------------------------------------- //
// console.log(b);
console.log(b); // cannot access b before initialization
let b = 10

// ----------------------------------------- //

sayHello()

function sayHello() {
    console.log('hello')
}

// what happens here is we have accessed sayhello before declaration. what happens here is js engine interprete it as a function sayHello() { console.log('hello') } sayHello() 

// ----------------------------------------- //

function sayHello() {
    console.log("hello");
}
sayHello() // fn declaration

var z = function sayHello() {
    console.log("hello");
}
z() // fn expression
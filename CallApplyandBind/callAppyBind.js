let printName = function(hometown,state) {
    console.log(this.firstName + ' ' + this.lastName + " " + "from " + hometown + " " + state );
}

const person1 =  {
    firstName: "Aman",
    lastName: "Sinha",
}

const person2 =  {
    firstName: "Rishu",
    lastName: "Sinha",
}

// Call Method :- function borrowing
printName.call(person1, "Muzaffarpur");
printName.call(person2); // function is invoked 

// apply Method

printName.apply(person2,["Sitamarhi", "Bihar"]) // array is passed as an argument in 2nd parameter

// bind method

let myFullName = printName.bind(person1, "Aurai", "Bihar") 
myFullName() // a method is returned which can be used later in the program.
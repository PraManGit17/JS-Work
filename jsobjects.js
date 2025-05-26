// object literals - object declarations
// object constructor method - Objec.create 


// using symbol as key

const mySym = Symbol("key1");


const Jsuser = {
  name : "John",  //key - value processed "name":"John" as strings
  [mySym] : "myKey1",
  age : 18,
  location : "Mumbai",
  email: "mail123@gmail.com"
}

// accessing

// console.log(Jsuser);
// // console.log()
// // console.log(Jsuser.email);
// // console.log()
// // console.log(Jsuser["email"]);
// // console.log()
// // console.log(Jsuser[mySym]);


// modifying values

// Jsuser.name = "Vignesh"

// console.log(Jsuser.name);
// console.log()

// Object.freeze(Jsuser)

// Jsuser.name = "Amit"

// console.log(Jsuser.name);
// console.log()


// Jsuser.greeting = function(){
//   console.log("From Object Jsuer");
// }
// console.log(Jsuser);
// console.log()


// console.log(Jsuser.greeting); // undefined
// console.log()


// console.log(Jsuser.greeting()); 
// console.log()


Jsuser.greetingMe = function(){
  console.log(`From Object Jsuer ${this.name}`);
}

console.log(Jsuser.greetingMe()); 
console.log()



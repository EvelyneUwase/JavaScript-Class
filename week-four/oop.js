// object literal

// const person = {
//     name: "Uwase",
//     age: 25,
//     greet:function(){
//         console.log(`my name is ${this.name}`)
//     }
// }

// // Constructor function to create an object.
// function Person(name,age){
//     this.name=name
//     this.age=age
// }
// // this is a prototype


// Person.protoType.greet = function (){
//     console.log(`Hello my name is ${this.name}`)
// }
// // its like a printer from the mother cpy
// const person2 = Person("Evelyne", 25)
// console.log(person2)
// person2.greet()
// const person3 = Person("Uwase", 24)
// console.log(person3)
// const person4 = Person("Bido", 22)
// console.log(person4)
// const person5 = Person("Posh", 14)
// console.log(person5)

// same as the constructor but it's for luxury
// class Person{
//     constructor(name, age, powers)
//     {
//         this.name=name;
//         this.age=name;
//         this.powers=powers
//     }
//     powers(){
//         console.log(`I have ${this.powers}`)
//     }

// }
// const xperson2 = new Person("Storm", 25)
// console.log(xperson2)

// const xperson3 = Person("Uwase", 24, "inellegent")
// console.log(xperson3)
// const xperson4 =new Person("Uwase", 24, "inellegent")
// console.log(xperson3)


class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    }
  }
  
  //Inheritance
  const person2 = new Person(“Felicity, 20);
  person2.greet();

  class Employee extends Person {
    constructor(name, age, job) {
      super(name, age); // Calls the parent constructor
      this.job = job;
    }
  
    work() {
      console.log(`${this.name} is working as a ${this.job}`);
    }
  }
  
  const emp1 = new Employee("David", 28, "Software Engineer");
  emp1.greet();
  emp1.work();




  class MyClass {
    // class properties and methods
  }
  
  
  //Class Properties
  
  class Person {
    name;
    age;
  }
  
  
  //Class Methods
  
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}!`);
    }
  }



  class Person {
    constructor(name, age) {
      // initialization code
    }
  }
  
  
  //Constructor Parameters
  
  class Person {
    constructor(name, age, occupation) {
      this.name = name;
      this.age = age;
      this.occupation = occupation;
    }
  }
  
  
  //Constructor Default Values
  
  class Person {
    constructor(name = 'John Doe', age = 30) {
      this.name = name;
      this.age = age;
    }
  }
  
  
  //Creating Objects from Classes
  
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}!`);
    }
  }
  
  const person = new Person('Jane Doe', 25);
  person.sayHello(); // Hello, my name is Jane Doe!
  
  
  //Inheritance in JavaScript Classes
  
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sound() {
      console.log('The animal makes a sound.');
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    sound() {
      console.log('The dog barks.');
    }
  }
  
  const dog = new Dog('Max', 'Golden Retriever');
  dog.sound(); // The dog barks.
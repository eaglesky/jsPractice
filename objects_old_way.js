// Ref:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance

function Person(first, last, age, gender, interest) {
  this.name = {
    first: first,
    last: last
  };
  this.age = age;
  this.gender = gender;
  this.interest = interest;
}

// Usually properties are defined inside the constructor, and methods that can be inherited
// are defined on the prototype of the constructor.
Person.prototype.bio = function() {
  console.log(
    this.name.first +
      " " +
      this.name.last +
      " is " +
      this.age +
      " years old. He likes " +
      this.interest
  );
};

Person.prototype.greeting = function() {
  console.log("Hi! I'm " + this.name.first + ".");
};

Person.prototype.farewell = function() {
  console.log("Good bye " + this.name.first);
};

// When creating a new object using "new", it first creates an empty object and assign it to "this",
// then inside the constructor function it adds new properties to "this" object, then lastly it
// assigns the constructor's prototype object to __proto__ field of "this" object and return it.
// The constructor's "prototype" property is a default property of all functions, which has the
// "constructor" property that is the same as the constructor function itself.
const person1 = new Person("Allen", "Chin", 29, "male", "Tennis");
const person2 = new Person("Lisa", "Lee", 29, "female", "Yoga");

// The object created in this way uses person1 as the prototype (person1Based.__proto__ == person1).
// It doesn't have it's own properties.
const person1Based = Object.create(person1);

// JS runtime first looks for "greeting" in person1's properties. If found, call it; otherwise
// look at person1.__proto__. If still not found, continue searching through the prototype chain (
// check person1.__proto__.__proto__ ...).
person1.greeting();
console.log("person1.toString() == " + person1.toString());

// Person.call is same as new Person except that the new object returned is assigned to "this".
// The prototype of the object created at the end is Teacher's prototype, which doesn't have
// Person's inherited methods. So we need to inherite it by override Teacher.prototype with
// Object.create(Person.prototype), and then change Teacher.prototype.constructor back to Teacher.
function Teacher(first, last, age, gender, interest, subject) {
  Person.call(this, first, last, age, gender, interest);

  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
  console.log(
    "Hi! I'm teacher " + this.name.first + ", I teach " + this.subject
  );
};

const teacher1 = new Teacher("Jack", "Poll", 44, "male", "running", "Math");

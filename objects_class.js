class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);

// Hi! I'm Han
han.greeting();


let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);

// Leia has left the building. Bye for now
leia.farewell();


class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}

let teacher1 = new Teacher('Allen', 'Chin', 29, 'male', ['Tennis', 'Board games'], 'Computer Science', 5);

console.log(`Teacher1's subject is ${teacher1.subject}`);
teacher1.subject = 'Math';
console.log(`Then teacher1's subject become ${teacher1.subject}`);

// The getter and setter are always defined on the class prototype as the
// other functions.
console.log('Property descriptor of Teacher.prototype.subject: ', Object.getOwnPropertyDescriptor(Teacher.prototype, 'subject'));

// ["name", "age", "gender", "interests", "_subject", "grade"]
// No getter/setter 'subject' eventhough it is visible in the console!
console.log('Properties of teacher1: ' + Object.getOwnPropertyNames(teacher1));

// ["constructor", "subject"]. See, "subject" is really defined on the class
// prototype.
console.log('Properties of Teacher.prototype: ' + Object.getOwnPropertyNames(Teacher.prototype));

console.log('Property descriptor of __proto__: ', Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
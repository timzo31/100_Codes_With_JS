///////////////////////////////////
// INHERITANCE BETWEEN CLASSES ////
///////////////////////////////////

const Person = function (firstname, birthYear) {
  this.firstname = firstname;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2050 - this.birthYear);
};

const Student = function (firstname, birthYear, course) {
  // this.firstname = firstname;
  // this.birthYear = birthYear;
  Person.call(this, firstname, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstname} and I study ${this.course}`);
};

const mike = new Student("Mike", 1993, "Telecoms");

mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(Student.prototype);

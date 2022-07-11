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
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(Student.prototype);

////////////////////////////////////
/////////// CHALLENGE #3 ///////////
////////////////////////////////////

const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function () {
  ths.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}km/h with a charge of ${this.charge}%`
  );
};

const tesla = new EV("Tesla", 120, 23);

const curInfo = function () {
  console.log(
    `${this.make} is going at ${this.speed}/h, with a charge of ${this.charge}%`
  );
};

console.log(tesla);
tesla.accelerate();
tesla.brake();
tesla.accelerate();

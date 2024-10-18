// Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Methods
  sayHello() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  haveBirthday() {
    this.age += 1;
    return `Happy birthday to me! I am now ${this.age} years old.`;
  }

  introduceYourself() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Create a new Person object
const person = new Person('John Doe', 30);

// Export the person object
export { person };
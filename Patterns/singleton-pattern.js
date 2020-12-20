// Singleton with proxy
// OOP Design Pattern
// Ensures a given class is only ever instantiated once

const singletonify = (className) => {
  return new Proxy(className.prototype.constructor, {
    instance: null,
    construct: (target, argumentsList) => {
      if (!this.instance) {
        this.instance = new target(...argumentsList);
      }
      return this.instance;
    },
  });
};

// Usage
class MyClass {
  constructor(msg) {
    this.message = msg;
  }

  printMessage() {
    console.log(this.message);
  }
}

const MySingletonClass = singletonify(MyClass);

const firstObj = new MySingletonClass("First");
firstObj.printMessage();  // First

const secondObj = new MySingletonClass("Second");
secondObj.printMessage(); // First

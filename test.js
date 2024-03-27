class MyClass {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('Hello', this.name);
  }

  // Regular function declaration
  anotherGreet() {
    setTimeout(function() {
      console.log('Hello', this.name); // 'this' is not bound to MyClass instance
    }, 1000);
  }
}

const myObj = new MyClass('John');
myObj.anotherGreet(); // Output: Hello undefined
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding: When in the global scope, the value of "this" will be the window/console Object.
        Ex: This is placed inside console.log   ----> console.log(this)


* 2. Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is this.
        Ex: So if a const = obj , obj.function would be the same as this.function.

* 3. New Binding: Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
        Ex: New is used instead of this. We use new to call a constructor function.

* 4. Explicit Binding: Whenever JavaScript's call or apply method is used, this is explicitly defined.
        Ex: With this approach you can even override what a constructor object gets set to by calling them "explicitly" with a new context using .call and .apply.
*
* write out a code example of each explanation above
*/

// Principle 1

    function sayCity(city) {
        console.log(this);
        return city;
    }
    sayCity("Philadelphia");

// code example for Window Binding

// Principle 2

const Obj = {
    greeting: 'Salutations',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
    }
  };
  Obj.sayHello('Jake');

// code example for Implicit Binding

// Principle 3

function Person(worker) {
    this.greeting = 'Time for work ';
    this.worker = worker;
    this.speak = function() {
      console.log(this.greeting + this.worker);
    };
  }
  
  const John = new Person('John');
  const Tony = new Person('Tony');
  
  John.speak();
  Tony.speak();

// code example for New Binding

// Principle 4

John.speak.call(Tony); Tony.speak.apply(John);

// code example for Explicit Binding
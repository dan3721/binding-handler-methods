# binding-handler-methods

There are a few approaches to binding handler methods in React. Some result in rebinding with each render cycle, others
result in a block of binds in the constructor. This approach using ES6 arrow functions and the ECMAScript class-fields 
feature is the best.

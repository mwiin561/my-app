// well what this basically does is render the text "hello world"
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
};

export default MyComponent;

//this is another snippet that will use the useState() hook
import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;

//

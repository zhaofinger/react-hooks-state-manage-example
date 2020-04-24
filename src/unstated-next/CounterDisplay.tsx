import React from 'react';
import Counter from './counter';

const CounterDisplay: React.FC = () => {
  let counter = Counter.useContainer();
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  )
}

export default CounterDisplay;
import { useState } from 'react';
import constate from 'constate';


function useCounter({ initState = 0 }) {
  const [count, setCount] = useState(initState);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const increment = () => setCount(prevCount => prevCount + 1);
  return { count, increment, decrement };
}

const Counter = constate(useCounter);

export default Counter;

import { useState } from 'react';

function useCounter(initialState = 0) {
  const [count, setCount] = useState(initialState);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return { count, decrement, increment };
}

export default useCounter;
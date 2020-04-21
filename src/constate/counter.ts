import { useState } from 'react';


function useCounter({ initState = 0 }) {
  const [count, setCount] = useState(initState);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const increment = () => setCount(prevCount => prevCount + 1);
  return { count, increment, decrement };
}

export default useCounter;

const { useState } = require("react");

// with the help of custom hooks we can reuse the state logic across the different components.
const useCounter = (initialValue = 0, value) => {
  const [count, setCount] = useState(initialValue, value);
  const increment = () => {
    setCount(count + value);
  };
  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - value);
  };

  return [count, increment, decrement];
};
export default useCounter;

import { useState, useCallback } from "react"

export const useCounter = (initialValue: number) => {
  const [count, setCount] = useState(initialValue);

  const countUp = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const countDown = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return [count, { countUp, countDown }] as const;
};

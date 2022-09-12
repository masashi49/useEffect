import { useCounter } from "../../../../../hooks/useCount"

export const CustomHook = () => {

  const [count, { countUp, countDown }] = useCounter(0);

  return (
    <div>
      {count} <br />
      <button onClick={() => { countUp() }}>カウント+1</button>
      <button onClick={() => { countDown() }}>カウント-1</button>
    </div>
  )
}

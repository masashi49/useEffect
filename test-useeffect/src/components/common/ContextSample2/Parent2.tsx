import React, { FC, createContext, ReactNode, useState, useCallback, Dispatch, SetStateAction, useContext } from "react"

type CounterProviderType = {
    children: ReactNode
    initialCount?: number
}

// ここはProviderの設定だけの意味
const Context = createContext({} as number)
const Increment = createContext({} as Dispatch<SetStateAction<number>>)
const ConterProvider: FC<CounterProviderType> = ({ children, initialCount }) => {
    const { count, increment } = useCounter({ initialCount })
    return (
        <Context.Provider value={count}>
            <Increment.Provider value={increment}>{children}
            </Increment.Provider>
        </Context.Provider>)
}

const Counter = () => {
    const count = useContext(Context)
    console.log(`Counter`)
    return (
        <div>
            {count}
        </div>
    )
}

// 計算、計算結果を返すカスタムフック
const useCounter = ({ initialCount = 0 }) => {
    const [count, setCount] = useState<number>(initialCount)
    const increment = useCallback(() => setCount((c) => c + 1),[])
    return { count, increment }
}

const useIncrement = (): any => {
    const increment = useContext(Increment);
    return increment;
};

const IncrementButton = () => {
    const increment = useIncrement()
    console.log(`IncrementButton`)
    return (
        <div>
            <button onClick={increment}>+</button>
        </div>
    )
}

export const Parent2 = () => {
    return (
        <ConterProvider initialCount={10}>
            <Counter />
            <IncrementButton />
        </ConterProvider>
    )
}

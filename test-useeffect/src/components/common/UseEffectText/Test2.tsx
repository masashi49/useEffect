import { useEffect, useState } from "react"

export const UseEffectTest2 = () => {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    useEffect(() => {
        const id = setInterval(() => {
            setCount((c) => {
                return c + 1
            })
            console.log(count)
        }, 1000)
        console.log(`---${count}---`)
        return () => clearInterval(id)
    }, []) 

    return (
        <div>
            <h1>{count}</h1>
            <input value={step} onChange={e => setStep(Number(e.target.value))} />
        </div>
    )
}

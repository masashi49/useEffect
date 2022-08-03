import { Input } from "../Input";
import React, { useState, useRef } from 'react';

export const Seach = () => {
    const [text, setText] = useState("")
    const ref = useRef<HTMLInputElement>(null) // nullは読み取り専用

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(() => e.target.value)
        console.log(e)
    }

    return (
        <div>
            検索する : <Input value={text} onChange={handleChange} ref={ref} />
        </div>
    )
}

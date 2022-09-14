import { useContext } from "react"
import { setStateContext } from "./Parent"
import { GrGrandChildren } from "./GrGrandCh"

export const GrandChildren = () => {
    const { setGrandChild } = useContext(setStateContext) // 型定義なので、setChildが入っていることが保証されている
    return (
        <div>
            孫です
            <input type="number"
                defaultValue={0}
                onChange={(e) => setGrandChild(Number(e.target.value))} /> {/*e.target.valueはstringなので、Numberで型変更*/}
            <GrGrandChildren />
        </div>
    )
}

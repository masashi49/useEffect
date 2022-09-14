import { useContext } from "react"
import { setStateContext } from "./Parent"


export const GrGrandChildren = () => {
    const { setGreatGrandChild } = useContext(setStateContext) // 型定義なので、setChildが入っていることが保証されている
    return (
        <div>
            孫です
            <input type="number"
                defaultValue={0}
                onChange={(e) => setGreatGrandChild(Number(e.target.value))} /> {/*e.target.valueはstringなので、Numberで型変更*/}
        </div>
    )
}

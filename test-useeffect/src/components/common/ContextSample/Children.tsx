import { useContext } from "react"
import { setStateContext } from "./Parent"
import { GrandChildren } from "./GrandCh"

export const Children = () => {
    const { setChild } = useContext(setStateContext) // 型定義なので、setChildが入っていることが保証されている
    return (
        <div>
            子です
            <input type="number"
                defaultValue={0}
                onChange={(e) => setChild(Number(e.target.value))} /> {/*e.target.valueはstringなので、Numberで型変更*/}

            <GrandChildren />
        </div>
    )
}

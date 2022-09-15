import { useContext, memo } from "react"
import { setStateChildContext } from "./Parent"
import { GrandChildren } from "./GrandCh"

export const Children = memo(() => {
    const { setChild } = useContext(setStateChildContext) // 型定義なので、setChildが入っていることが保証されている
    console.log("child")
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
)

import { useContext ,memo} from "react"
import { setGrStateChildContext } from "./Parent"
import { GrGrandChildren } from "./GrGrandCh"

export const GrandChildren = memo(() => {
    const { setGrandChild } = useContext(setGrStateChildContext) // 型定義なので、setChildが入っていることが保証されている
    console.log("Gr")
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
)
